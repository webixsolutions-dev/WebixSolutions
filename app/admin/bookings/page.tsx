import type { Metadata } from "next";
import Link from "next/link";
import { adminSecret, hasAdminSession } from "@/lib/booking/admin-session";
import { bookingDb } from "@/lib/booking/store";
import { STAGE_LABEL, isStage, type Stage } from "@/lib/booking/pipeline";
import { toBooking } from "@/lib/booking/record";
import { BookingCard } from "@/components/booking/booking-admin-card";
import { signIn, signOut } from "./actions";

export const metadata: Metadata = {
  title: "Booking Dashboard",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

const limit = 25;

type View = "upcoming" | "outcome" | "followups" | "all" | Stage;

function parseView(value: string | undefined): View {
  if (value === "outcome" || value === "followups" || value === "all") return value;
  return isStage(value) ? value : "upcoming";
}

async function loadBookings(view: View, page: number) {
  const sql = bookingDb();
  const offset = (page - 1) * limit;
  let rows: Record<string, unknown>[];
  if (view === "upcoming") {
    rows = await sql`SELECT * FROM webix_bookings WHERE stage IN ('booked', 'confirmed') AND ends_at >= now() - interval '2 hours' ORDER BY starts_at ASC LIMIT ${limit + 1} OFFSET ${offset}`;
  } else if (view === "outcome") {
    rows = await sql`SELECT * FROM webix_bookings WHERE stage IN ('booked', 'confirmed') AND ends_at < now() - interval '2 hours' ORDER BY starts_at DESC LIMIT ${limit + 1} OFFSET ${offset}`;
  } else if (view === "followups") {
    rows = await sql`SELECT * FROM webix_bookings WHERE stage IN ('completed', 'no_show', 'proposal') AND next_follow_up_at IS NOT NULL AND next_follow_up_at <= now() ORDER BY next_follow_up_at ASC LIMIT ${limit + 1} OFFSET ${offset}`;
  } else if (view === "all") {
    rows = await sql`SELECT * FROM webix_bookings ORDER BY created_at DESC LIMIT ${limit + 1} OFFSET ${offset}`;
  } else {
    rows = await sql`SELECT * FROM webix_bookings WHERE stage = ${view} ORDER BY stage_changed_at DESC LIMIT ${limit + 1} OFFSET ${offset}`;
  }
  const bookings = rows.map(toBooking);
  const shown = bookings.slice(0, limit);
  const ids = shown.map((booking) => booking.id);
  const events = ids.length
    ? await sql`SELECT booking_id::text AS booking_id, kind, detail, created_at FROM webix_booking_events WHERE booking_id = ANY(${ids}::uuid[]) ORDER BY created_at DESC`
    : [];
  const byBooking = new Map<string, { kind: string; detail: string | null; at: Date }[]>();
  for (const event of events) {
    const list = byBooking.get(String(event.booking_id)) ?? [];
    list.push({ kind: String(event.kind), detail: event.detail ? String(event.detail) : null, at: new Date(String(event.created_at)) });
    byBooking.set(String(event.booking_id), list);
  }
  return { shown, more: bookings.length > limit, byBooking };
}

async function loadCounts() {
  const sql = bookingDb();
  const [stageRows, special] = await Promise.all([
    sql`SELECT stage, count(*)::int AS n FROM webix_bookings GROUP BY stage`,
    sql`
      SELECT
        count(*) FILTER (WHERE stage IN ('booked', 'confirmed') AND ends_at >= now() - interval '2 hours')::int AS upcoming,
        count(*) FILTER (WHERE stage IN ('booked', 'confirmed') AND ends_at < now() - interval '2 hours')::int AS outcome,
        count(*) FILTER (WHERE stage IN ('completed', 'no_show', 'proposal') AND next_follow_up_at IS NOT NULL AND next_follow_up_at <= now())::int AS followups,
        count(*)::int AS total
      FROM webix_bookings
    `,
  ]);
  const byStage = new Map(stageRows.map((row) => [String(row.stage), Number(row.n)]));
  return { byStage, ...(special[0] as { upcoming: number; outcome: number; followups: number; total: number }) };
}

export default async function BookingsDashboard({
  searchParams,
}: { searchParams: Promise<{ error?: string; page?: string; view?: string }> }) {
  const params = await searchParams;
  const ready = Boolean(adminSecret() && process.env.BOOKING_DATABASE_URL);
  const authenticated = ready && await hasAdminSession();
  const page = Math.min(100000, Math.max(1, Number.parseInt(params.page || "1", 10) || 1));
  const view = parseView(params.view);
  let data: Awaited<ReturnType<typeof loadBookings>> | null = null;
  let counts: Awaited<ReturnType<typeof loadCounts>> | null = null;
  let failed = false;
  if (authenticated) {
    try {
      [data, counts] = await Promise.all([loadBookings(view, page), loadCounts()]);
    } catch {
      failed = true;
      console.error("Booking dashboard query failed");
    }
  }

  const tabs: { id: View; label: string; n?: number }[] = counts ? [
    { id: "upcoming", label: "Upcoming", n: counts.upcoming },
    { id: "outcome", label: "Mark outcome", n: counts.outcome },
    { id: "followups", label: "Follow-ups due", n: counts.followups },
    ...(["completed", "no_show", "proposal", "won", "lost", "cancelled"] as Stage[]).map((stage) => ({ id: stage as View, label: STAGE_LABEL[stage], n: counts.byStage.get(stage) ?? 0 })),
    { id: "all", label: "All", n: counts.total },
  ] : [];

  return (
    <main id="main" className="studio-wrap admin-bookings py-12">
      <div className="studio-section-head">
        <div><p className="studio-label"><span /> Webix Solutions staff</p><h1 className="type-h1">Booking pipeline</h1></div>
        {authenticated && <form action={signOut}><button className="studio-button studio-button-outline">Sign out</button></form>}
      </div>
      {!ready ? <p>The booking dashboard is awaiting configuration.</p> : !authenticated ? (
        <form action={signIn} className="booking-panel max-w-sm space-y-4">
          <label>Admin password<input type="password" name="password" required maxLength={256} autoComplete="current-password" /></label>
          {params.error && <p role="alert" className="booking-error">The password is incorrect.</p>}
          <button className="studio-button">Sign in</button>
        </form>
      ) : failed || !data ? <p role="alert">Bookings are temporarily unavailable. Refresh to try again.</p>
      : (
        <>
          <nav aria-label="Pipeline views" className="admin-tabs">
            {tabs.map((tab) => (
              <Link key={tab.id} href={`?view=${tab.id}`} aria-current={view === tab.id ? "page" : undefined} data-alert={(tab.id === "outcome" || tab.id === "followups") && (tab.n ?? 0) > 0 ? "true" : undefined}>
                {tab.label} <span>{tab.n}</span>
              </Link>
            ))}
          </nav>
          {data.shown.length === 0 ? <p>Nothing here.</p> : (
            <div className="admin-booking-list">
              {data.shown.map((booking) => <BookingCard key={booking.id} booking={booking} events={data.byBooking.get(booking.id) ?? []} />)}
            </div>
          )}
          {(page > 1 || data.more) && <nav aria-label="Bookings pages" className="studio-actions">
            {page > 1 && <Link className="studio-link" href={`?view=${view}&page=${page - 1}`}>Previous</Link>}
            {data.more && <Link className="studio-link" href={`?view=${view}&page=${page + 1}`}>Next</Link>}
          </nav>}
        </>
      )}
    </main>
  );
}
