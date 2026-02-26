import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date"); // Format expected: YYYY-MM-DD

  if (!dateParam) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  // The base slots you want to offer
  const standardSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  try {
    // 1. Authenticate the Robot
    // NEW WAY (Wrapped in curly braces with labels)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 2. Set the time boundaries for the specific day in Greece
    const timeMin = new Date(`${dateParam}T00:00:00+02:00`).toISOString();
    const timeMax = new Date(`${dateParam}T23:59:59+02:00`).toISOString();
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // 3. Query the Free/Busy API
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        timeZone: "Europe/Athens",
        items: [{ id: calendarId }],
      },
    });

    const busySlots = response.data.calendars?.[calendarId || ""]?.busy || [];

    // 4. Filter the standard slots. If a slot overlaps with a busy period, remove it.
    const availableSlots = standardSlots.filter((slot) => {
      // Create exact timestamp for the slot start and end (assuming 1 hour sessions)
      const slotStart = new Date(`${dateParam}T${slot}:00+02:00`).getTime();
      const slotEnd = slotStart + 60 * 60 * 1000;

      const isBusy = busySlots.some((busy) => {
        if (!busy.start || !busy.end) return false;
        const busyStart = new Date(busy.start).getTime();
        const busyEnd = new Date(busy.end).getTime();

        // Overlap math: (Start A < End B) AND (End A > Start B)
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      return !isBusy; // Keep it only if it is NOT busy
    });

    return NextResponse.json({ availableTimes: availableSlots });
  } catch (error) {
    console.error("Calendar API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar data" },
      { status: 500 },
    );
  }
}
