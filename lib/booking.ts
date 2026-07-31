/**
 * Shared booking rules and time helpers.
 *
 * Everything the booking flow needs to agree on lives here so the availability
 * endpoint and the booking endpoint can never drift apart.
 *
 * Timezone note: the practice runs on Athens wall-clock time, which is UTC+2 in
 * winter and UTC+3 during DST. Hardcoding an offset silently shifts every slot
 * by an hour for ~7 months of the year, so all conversions go through
 * `athensTimeToUtc`, which asks the runtime for the real offset on that date.
 */

export const ATHENS_TZ = "Europe/Athens";

/** Session length, in minutes. Used for both availability and event creation. */
export const SESSION_MINUTES = 60;

/** The slots offered every working day (Athens wall-clock, 24h). */
export const STANDARD_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
] as const;

/** Weekdays the practice is closed. 0 = Sunday. */
export const CLOSED_WEEKDAYS = [0];

/** True when `value` is one of the slots we actually offer. */
export function isStandardSlot(value: string): boolean {
  return (STANDARD_SLOTS as readonly string[]).includes(value);
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^\d{2}:\d{2}$/;

/** True for a real calendar date in `YYYY-MM-DD` form (rejects e.g. 2026-02-31). */
export function isValidDateString(value: unknown): value is string {
  if (typeof value !== "string" || !DATE_RE.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const probe = new Date(Date.UTC(year, month - 1, day));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day
  );
}

export function isValidTimeString(value: unknown): value is string {
  if (typeof value !== "string" || !TIME_RE.test(value)) return false;
  const [hours, minutes] = value.split(":").map(Number);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

/** The calendar date after `dateString`, as `YYYY-MM-DD`. */
export function nextDateString(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + 1));
  return next.toISOString().slice(0, 10);
}

/** Day of week for a plain calendar date, 0 = Sunday. */
export function weekdayOf(dateString: string): number {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function isClosedDay(dateString: string): boolean {
  return CLOSED_WEEKDAYS.includes(weekdayOf(dateString));
}

/** Offset in ms between the given timezone and UTC at a specific instant. */
function zoneOffsetMs(utcMs: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(utcMs));

  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? "0");

  const asIfUtc = Date.UTC(
    read("year"),
    read("month") - 1,
    read("day"),
    read("hour") % 24,
    read("minute"),
    read("second"),
  );

  return asIfUtc - utcMs;
}

/**
 * Convert an Athens wall-clock date + time into the exact UTC instant,
 * accounting for daylight saving on that specific date.
 */
export function athensTimeToUtc(dateString: string, timeString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number);
  const [hours, minutes] = timeString.split(":").map(Number);

  // Start by pretending the wall clock is UTC, then subtract the real offset.
  // A second pass settles the rare DST-boundary case where the first guess
  // lands on the other side of the transition.
  const naive = Date.UTC(year, month - 1, day, hours, minutes, 0);
  const firstGuess = naive - zoneOffsetMs(naive, ATHENS_TZ);
  const settled = naive - zoneOffsetMs(firstGuess, ATHENS_TZ);

  return new Date(settled);
}

/** UTC start/end instants for a session starting at `time` on `date`. */
export function slotRangeUtc(dateString: string, timeString: string) {
  const start = athensTimeToUtc(dateString, timeString);
  const end = new Date(start.getTime() + SESSION_MINUTES * 60 * 1000);
  return { start, end };
}

/** The Athens end time (`HH:mm`) for a session starting at `timeString`. */
export function sessionEndTime(timeString: string): string {
  const [hours, minutes] = timeString.split(":").map(Number);
  const total = hours * 60 + minutes + SESSION_MINUTES;
  const endHours = Math.floor(total / 60) % 24;
  const endMinutes = total % 60;
  return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
}

/** Today's date in Athens as `YYYY-MM-DD`, regardless of server timezone. */
export function athensTodayString(now: Date = new Date()): string {
  // en-CA gives ISO-shaped output (YYYY-MM-DD).
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: ATHENS_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** True when the whole calendar day is already in the past in Athens. */
export function isPastDate(dateString: string, now: Date = new Date()): boolean {
  return dateString < athensTodayString(now);
}
