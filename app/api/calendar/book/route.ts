import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, psychologist, topicName } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Authenticate the Robot (Notice the scope is now full "calendar" access so it can write)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // 2. Format the exact Start and End times (Assuming 1-hour sessions)
    const startDateTime = `${date}T${time}:00+02:00`; // Europe/Athens time
    const startDateObj = new Date(startDateTime);
    const endDateObj = new Date(startDateObj.getTime() + 60 * 60 * 1000); // Add 1 hour
    const endDateTime = endDateObj.toISOString();

    // 3. Construct the Event Details
    const event = {
      summary: `Ραντεβού: ${name}`,
      description: `Τηλέφωνο: ${phone}\nΘέμα: ${topicName}\nΕπαγγελματίας: ${psychologist}`,
      start: {
        dateTime: startDateTime,
        timeZone: "Europe/Athens",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Europe/Athens",
      },
      colorId: "1", // Gives the event a nice blue color in Google Calendar
    };

    // 4. Push to Google Calendar
    const response = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: event,
    });

    return NextResponse.json({
      success: true,
      eventLink: response.data.htmlLink,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 },
    );
  }
}
