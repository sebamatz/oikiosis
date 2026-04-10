import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

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

    // 2. Google Calendar Auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // 3. Bulletproof Start and End Times (Bypasses Vercel UTC issues)
    // We just take "15:00" and make it "16:00" mathematically
    const startDateTime = `${date}T${time}:00`;
    const [hour, minute] = time.split(":");
    const endHour = parseInt(hour, 10) + 1;
    const endTime = `${endHour.toString().padStart(2, "0")}:${minute}`;
    const endDateTime = `${date}T${endTime}:00`;

    // 4. Construct the Calendar Event
    const event = {
      summary: `Ραντεβού: ${name} (${sessionType})`,
      description: `Τηλέφωνο: ${phone}\nEmail: ${email}\nΤρόπος Συνεδρίας: ${sessionType}\nΘέμα: ${topicName || "-"}`,
      start: {
        dateTime: startDateTime,
        timeZone: "Europe/Athens", // Google handles the DST shift perfectly this way
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Europe/Athens",
      },
      colorId: sessionType === "Online" ? "9" : "1", // Blue for in-person, Blueberry/Purple for Online
    };

    // Push to Google Calendar
    const calendarResponse = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: event,
    });

    // ==========================================
    // 5. NODEMAILER: DUAL EMAIL CONFIRMATIONS
    // ==========================================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the Psychologist (Giannis)
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
      from: `"Οικείωσις - Γιάννης Γιαννόπουλος" <${process.env.SMTP_USER}>`, // CHANGED THIS
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

    // Fire off both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(clientMailOptions);

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
