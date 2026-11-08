import { NextResponse } from "next/server";
import { z } from "zod";
import { BOOKING_CONFIG } from "@/config/booking";
import { formatInTimeZone, generateAvailableSlots, isValidTimeZone } from "@/lib/booking/slot-engine";
import { bookingAvailability } from "@/lib/booking/store";

const querySchema = z.object({
  type: z.enum(["strategy", "intro", "partner"]),
  tz: z.string().max(80).refine(isValidTimeZone),
});

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams;
  const parsed = querySchema.safeParse({
    type: query.get("type") || "strategy",
    tz: query.get("tz") || BOOKING_CONFIG.hostTimeZone,
  });
  if (!parsed.success) return NextResponse.json({ error: "Choose a valid call type and time zone." }, { status: 400 });

  if (!process.env.BOOKING_DATABASE_URL) return NextResponse.json({ fallback: true, slots: [] }, { status: 503 });
  const { type, tz } = parsed.data;
  const now = new Date();
  const end = new Date(now.getTime() + (BOOKING_CONFIG.maxDaysAhead + 2) * 86400000);
  const start = new Date(now.getTime() - 2 * 86400000);

  try {
    const { busyIntervals, fullDays } = await bookingAvailability(start, end);
    const slots = generateAvailableSlots({
      meetingTypeSlug: type,
      fromIsoDate: formatInTimeZone(now, tz).dateKey,
      toIsoDate: formatInTimeZone(end, tz).dateKey,
      visitorTz: tz, now, busyIntervals,
    }).filter((slot) => !fullDays.has(slot.hostDateKey));
    return NextResponse.json({ slots, configured: true, meetingType: type, visitorTz: tz }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    console.error("Unable to load booking availability");
    return NextResponse.json({ fallback: true, slots: [] }, { status: 503 });
  }
}
