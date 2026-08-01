import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import {
  ATHENS_TZ,
  isClosedDay,
  isStandardSlot,
  isValidDateString,
  isValidTimeString,
  sessionEndTime,
  slotRangeUtc,
} from "@/lib/booking";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, sessionType, date, time, topicName } = body;

    // 1. Validation including the new fields
    if (!name || !phone || !email || !sessionType || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 2. The slot must be one we actually offer, on a day we are open,
    //    and still in the future.
    if (!isValidDateString(date) || !isValidTimeString(time)) {
      return NextResponse.json(
        { error: "Invalid date or time" },
        { status: 400 },
      );
    }

    if (!isStandardSlot(time) || isClosedDay(date)) {
      return NextResponse.json(
        { error: "Το επιλεγμένο ραντεβού δεν είναι διαθέσιμο." },
        { status: 400 },
      );
    }

    const { start: slotStart, end: slotEnd } = slotRangeUtc(date, time);

    if (slotStart.getTime() <= Date.now()) {
      return NextResponse.json(
        { error: "Η ώρα που επιλέξατε έχει παρέλθει." },
        { status: 400 },
      );
    }

    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (
      !calendarId ||
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY
    ) {
      console.error("Booking Error: missing Google credentials");
      return NextResponse.json(
        { error: "Calendar is not configured" },
        { status: 500 },
      );
    }

    // 3. Google Calendar Auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 4. Re-check the slot right before writing. The availability list the
    //    visitor saw may be minutes old, so this closes the double-booking gap.
    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: slotStart.toISOString(),
        timeMax: slotEnd.toISOString(),
        timeZone: ATHENS_TZ,
        items: [{ id: calendarId }],
      },
    });

    const isTaken = (freeBusy.data.calendars?.[calendarId]?.busy || []).some(
      (busy) => {
        if (!busy.start || !busy.end) return false;
        return (
          slotStart.getTime() < new Date(busy.end).getTime() &&
          slotEnd.getTime() > new Date(busy.start).getTime()
        );
      },
    );

    if (isTaken) {
      return NextResponse.json(
        {
          error:
            "Η ώρα που επιλέξατε μόλις κλείστηκε. Παρακαλώ επιλέξτε άλλη ώρα.",
        },
        { status: 409 },
      );
    }

    // 5. Athens wall-clock times. Google resolves these against the timeZone
    //    field, so DST is handled for us.
    const startDateTime = `${date}T${time}:00`;
    const endDateTime = `${date}T${sessionEndTime(time)}:00`;

    // 6. Construct the Calendar Event
    const event = {
      summary: `Ραντεβού: ${name} (${sessionType})`,
      description: `Τηλέφωνο: ${phone}\nEmail: ${email}\nΤρόπος Συνεδρίας: ${sessionType}\nΘέμα: ${topicName || "-"}`,
      start: {
        dateTime: startDateTime,
        timeZone: ATHENS_TZ, // Google handles the DST shift perfectly this way
      },
      end: {
        dateTime: endDateTime,
        timeZone: ATHENS_TZ,
      },
      colorId: sessionType === "Online" ? "9" : "1", // Blue for in-person, Blueberry/Purple for Online
    };

    // Push to Google Calendar
    const calendarResponse = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: event,
    });

    // ==========================================
    // 7. NODEMAILER: DUAL EMAIL CONFIRMATIONS
    // ==========================================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the Psychologist (Giannis)
    const ownerMailOptions = {
      from: `"Οικείωσις System" <${process.env.SMTP_USER}>`,
      // The +alias trick to trick Gmail's routing
      to: process.env.SMTP_USER?.replace("@", "+booking@"),
      subject: `🚨 Νέο Ραντεβού: ${name} - ${date} στις ${time}`,
      headers: {
        // This random ID forces Gmail to treat this as a unique incoming email,
        // stopping it from ghosting it into the "Sent" folder.
        "X-Entity-Ref-ID": new Date().getTime().toString(),
      },
      html: `
        <h2>Έχετε μια νέα κράτηση συνεδρίας</h2>
        <ul>
          <li><strong>Όνομα:</strong> ${name}</li>
          <li><strong>Τηλέφωνο:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Τρόπος Συνεδρίας:</strong> ${sessionType}</li>
          <li><strong>Θέμα:</strong> ${topicName || "-"}</li>
          <li><strong>Ημερομηνία:</strong> ${date.split("-").reverse().join("/")}</li>
          <li><strong>Ώρα:</strong> ${time}</li>
        </ul>
        <p>Το ραντεβού έχει καταχωρηθεί αυτόματα στο Google Calendar σας.</p>
      `,
    };

    // Email to the Client
    const clientMailOptions = {
      from: `"Οικείωσις - Γιάννης Γιαννόπουλος" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Επιβεβαίωση Αιτήματος Συνεδρίας - Οικείωσις",
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2>Γεια σας ${name.split(" ")[0] || name},</h2>
          <p>Λάβαμε το αίτημά σας για συνεδρία. Παρακάτω βρίσκονται τα στοιχεία της κράτησής σας:</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ημερομηνία:</strong> ${date.split("-").reverse().join("/")}</p>
            <p><strong>Ώρα:</strong> ${time}</p>
            <p><strong>Τρόπος:</strong> ${sessionType}</p>
          </div>
          <p>Θα επικοινωνήσουμε μαζί σας σύντομα για την τελική επιβεβαίωση του ραντεβού.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #777;">
            Οικείωσις | Ιωάννης Γιαννόπουλος<br/>
            Αυτή είναι μια αυτοματοποιημένη ενημέρωση.
          </p>
        </div>
      `,
    };

    // Fire off both emails. The appointment is already in the calendar at this
    // point, so a mail failure must not report the booking as failed, since that
    // would push the visitor into booking a second time.
    try {
      await transporter.sendMail(ownerMailOptions);
      await transporter.sendMail(clientMailOptions);
    } catch (mailError) {
      console.error("Booking saved but emails failed:", mailError);
    }

    return NextResponse.json({
      success: true,
      eventLink: calendarResponse.data.htmlLink,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json(
      { error: "Failed to create booking or send emails" },
      { status: 500 },
    );
  }
}
