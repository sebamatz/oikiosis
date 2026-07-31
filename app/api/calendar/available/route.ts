import { NextResponse } from "next/server";
import { google } from "googleapis";
import {
  ATHENS_TZ,
  STANDARD_SLOTS,
  athensTimeToUtc,
  isClosedDay,
  isPastDate,
  isValidDateString,
  nextDateString,
  slotRangeUtc,
} from "@/lib/booking";

// Availability must never be served from a cache.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date"); // Format expected: YYYY-MM-DD

  if (!dateParam) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  if (!isValidDateString(dateParam)) {
    return NextResponse.json(
      { error: "Invalid date format" },
      { status: 400 },
    );
  }

  // Closed days and days already gone have no slots — no need to call Google.
  if (isClosedDay(dateParam) || isPastDate(dateParam)) {
    return NextResponse.json({ availableTimes: [] });
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (
    !calendarId ||
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY
  ) {
    console.error("Calendar API Error: missing Google credentials");
    return NextResponse.json(
      { error: "Calendar is not configured" },
      { status: 500 },
    );
  }

  try {
    // 1. Authenticate the Robot
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 2. Boundaries of that Athens day, expressed as real UTC instants.
    //    Derived from midnight-to-midnight rather than +24h, so DST-transition
    //    days (23h and 25h long) are still covered exactly.
    const timeMin = athensTimeToUtc(dateParam, "00:00").toISOString();
    const timeMax = athensTimeToUtc(
      nextDateString(dateParam),
      "00:00",
    ).toISOString();

    // 3. Query the Free/Busy API
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        timeZone: ATHENS_TZ,
        items: [{ id: calendarId }],
      },
    });

    const busySlots = response.data.calendars?.[calendarId]?.busy || [];
    const now = Date.now();

    // 4. Keep a slot only if it is still in the future and not already booked.
    const availableSlots = STANDARD_SLOTS.filter((slot) => {
      const { start, end } = slotRangeUtc(dateParam, slot);
      const slotStart = start.getTime();
      const slotEnd = end.getTime();

      if (slotStart <= now) return false;

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
