import { neon } from "@neondatabase/serverless";
import { BOOKING_CONFIG } from "@/config/booking";

export function bookingDb() {
  const url = process.env.BOOKING_DATABASE_URL;
  if (!url) throw new Error("Booking storage is unconfigured");
  return neon(url);
}

export async function bookingAvailability(start: Date, end: Date) {
  const sql = bookingDb();
  const rows = await sql`
    SELECT starts_at::text, ends_at::text, host_day::text
    FROM webix_bookings
    WHERE status <> 'cancelled' AND starts_at < ${end.toISOString()} AND ends_at >= ${start.toISOString()}
  `;
  const days = new Map<string, number>();
  const busyIntervals = rows.map((row) => {
    days.set(row.host_day, (days.get(row.host_day) ?? 0) + 1);
    return { start: new Date(row.starts_at).toISOString(), end: new Date(row.ends_at).toISOString() };
  });
  return {
    busyIntervals,
    fullDays: new Set([...days].filter(([, count]) => count >= BOOKING_CONFIG.maxPerDay).map(([day]) => day)),
  };
}
