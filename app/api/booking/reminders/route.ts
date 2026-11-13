import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { runReminders } from "@/lib/booking/lifecycle";

export const dynamic = "force-dynamic";

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || secret.length < 24) return false;
  const given = Buffer.from(request.headers.get("authorization") ?? "");
  const wanted = Buffer.from(`Bearer ${secret}`);
  return given.length === wanted.length && timingSafeEqual(given, wanted);
}

async function handle(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.BOOKING_DATABASE_URL) return NextResponse.json({ error: "Booking storage is unconfigured" }, { status: 503 });
  try {
    return NextResponse.json({ ok: true, ...(await runReminders()) }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("Booking reminder run failed");
    return NextResponse.json({ error: "Reminder run failed" }, { status: 500 });
  }
}

export { handle as GET, handle as POST };
