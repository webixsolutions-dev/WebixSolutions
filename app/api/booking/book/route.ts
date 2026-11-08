import { createHmac } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { BOOKING_CONFIG } from "@/config/booking";
import { formatInTimeZone, generateAvailableSlots, isValidTimeZone } from "@/lib/booking/slot-engine";
import { bookingDb } from "@/lib/booking/store";

const bookSchema = z.object({
  requestId: z.uuid(),
  meetingType: z.enum(["strategy", "intro", "partner"]),
  slotIso: z.iso.datetime(),
  visitorTz: z.string().max(80).refine(isValidTimeZone),
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254).transform((email) => email.toLowerCase()),
  phone: z.string().trim().max(50).optional(),
  company: z.string().trim().max(180).optional(),
  services: z.array(z.string().max(100)).max(20).optional(),
  budget: z.string().max(60).optional(),
  notes: z.string().trim().max(1500).optional(),
  honeypot: z.string().max(180).optional(),
  turnstileToken: z.string().max(2048).optional(),
  sourcePage: z.string().max(200).optional(),
});

async function verifyTurnstile(token: string | undefined) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token }),
    signal: AbortSignal.timeout(5000),
  });
  const result = await response.json();
  return result.success === true && result.action === "book_call";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && origin !== `https://${host}` && origin !== `http://${host}`) {
    return NextResponse.json({ error: "Open the booking form directly on our site." }, { status: 403 });
  }
  const secret = process.env.BOOKING_DATABASE_URL;
  if (!secret) return NextResponse.json({ error: "Online booking is temporarily unavailable." }, { status: 503 });

  if (Number(request.headers.get("content-length")) > 12000) return NextResponse.json({ error: "Booking details are too long." }, { status: 413 });
  const body = await request.text();
  if (body.length > 12000) return NextResponse.json({ error: "Booking details are too long." }, { status: 413 });
  let payload: unknown;
  try { payload = JSON.parse(body); } catch { payload = null; }
  const parsed = bookSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Check your details and choose a valid time." }, { status: 400 });
  }
  const { requestId, slotIso, turnstileToken, honeypot, ...details } = parsed.data;
  if (honeypot) return NextResponse.json({ error: "Check your booking details." }, { status: 400 });
  const now = new Date();
  const start = new Date(slotIso);
  const day = formatInTimeZone(start, BOOKING_CONFIG.hostTimeZone).dateKey;
  const slot = generateAvailableSlots({
    meetingTypeSlug: details.meetingType, fromIsoDate: day, toIsoDate: day,
    visitorTz: BOOKING_CONFIG.hostTimeZone, now,
  }).find((candidate) => candidate.iso === start.toISOString());
  if (!slot) return NextResponse.json({ error: "Choose a time shown on the booking calendar." }, { status: 400 });

  const ip = request.headers.get("x-vercel-forwarded-for") || request.headers.get("cf-connecting-ip") || "local";
  const ipKey = createHmac("sha256", secret).update(ip).digest("hex");

  try {
    if (!(await verifyTurnstile(turnstileToken))) {
      return NextResponse.json({ error: "Please complete the security check and try again." }, { status: 400 });
    }
    const sql = bookingDb();
    const [row] = await sql`
      SELECT reserve_webix_booking(
        ${requestId}::uuid, ${slot.iso}::timestamptz, ${slot.endIso}::timestamptz, ${day}::date,
        ${JSON.stringify(details)}::jsonb, ${ipKey}, ${BOOKING_CONFIG.maxPerDay}, ${BOOKING_CONFIG.bufferMinutes}
      ) AS outcome
    `;
    if (row.outcome === "limited") return NextResponse.json({ error: "Too many bookings. Please try again in an hour." }, { status: 429 });
    if (row.outcome === "conflict") return NextResponse.json({ error: "That time was just taken. Please pick another." }, { status: 409 });
    return NextResponse.json({ success: true, eventId: requestId, startIso: slot.iso, endIso: slot.endIso }, { status: row.outcome === "created" ? 201 : 200 });
  } catch {
    console.error("Booking reservation failed");
    return NextResponse.json({ error: "We couldn’t save your booking. Please try again or email us." }, { status: 503 });
  }
}
