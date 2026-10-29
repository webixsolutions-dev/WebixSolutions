/**
 * Phase 7 Unit Test Suite: Booking System & Time Zone Slot Engine
 * Runs via: node scripts/test-booking.js
 */

const assert = require("assert");

const BOOKING_CONFIG = {
  hostTimeZone: "Asia/Karachi",
  weeklyHours: {
    mon: [["10:00", "13:00"], ["21:00", "23:59"]],
    tue: [["00:00", "02:00"], ["10:00", "13:00"], ["21:00", "23:59"]],
    wed: [["00:00", "02:00"], ["10:00", "13:00"], ["21:00", "23:59"]],
    thu: [["00:00", "02:00"], ["10:00", "13:00"], ["21:00", "23:59"]],
    fri: [["00:00", "02:00"], ["10:00", "12:00"], ["21:00", "23:59"]],
    sat: [["00:00", "02:00"]],
    sun: [],
  },
  slotStepMinutes: 30,
  bufferMinutes: 15,
  minNoticeHours: 12,
  maxDaysAhead: 30,
  maxPerDay: 6,
  meetingTypes: [
    { slug: "strategy", minutes: 30 },
    { slug: "intro", minutes: 15 },
    { slug: "partner", minutes: 45 },
  ],
};

function pktToUtcDate(year, month1, day, hours, minutes) {
  return new Date(Date.UTC(year, month1 - 1, day, hours - 5, minutes, 0, 0));
}

function parseTimeToMinutes(timeStr) {
  if (timeStr === "23:59" || timeStr === "24:00") return 1440;
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function getFriendlyTzAbbr(timeZone, standardAbbr) {
  if (timeZone === "Asia/Karachi") return "PKT";
  if (timeZone === "Asia/Dubai") return "GST";
  if (timeZone === "Asia/Riyadh") return "AST";
  if (timeZone === "Pacific/Auckland") {
    if (standardAbbr === "GMT+13") return "NZDT";
    if (standardAbbr === "GMT+12") return "NZST";
  }
  return standardAbbr;
}

function formatInTimeZone(date, timeZone) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
  const parts = dtf.formatToParts(date);
  let year = "", month = "", day = "", hour = "", minute = "", dayPeriod = "", timeZoneName = "";
  for (const p of parts) {
    if (p.type === "year") year = p.value;
    else if (p.type === "month") month = p.value;
    else if (p.type === "day") day = p.value;
    else if (p.type === "hour") hour = p.value;
    else if (p.type === "minute") minute = p.value;
    else if (p.type === "dayPeriod") dayPeriod = p.value;
    else if (p.type === "timeZoneName") timeZoneName = p.value;
  }
  return {
    dateKey: `${year}-${month}-${day}`,
    timeFormatted: `${hour}:${minute} ${dayPeriod}`,
    tzAbbr: getFriendlyTzAbbr(timeZone, timeZoneName || timeZone),
  };
}

function isSlotConflicting(slotStartMs, slotEndMs, busyStartMs, busyEndMs, bufferMinutes = 15) {
  const bufferMs = bufferMinutes * 60 * 1000;
  return slotStartMs < busyEndMs + bufferMs && slotEndMs > busyStartMs - bufferMs;
}

function generateSlots({ meetingTypeSlug = "strategy", fromDate, toDate, visitorTz, busyIntervals = [], now }) {
  const meetingConfig = BOOKING_CONFIG.meetingTypes.find((m) => m.slug === meetingTypeSlug) || BOOKING_CONFIG.meetingTypes[0];
  const durationMs = meetingConfig.minutes * 60 * 1000;
  const minNoticeMs = now.getTime() + BOOKING_CONFIG.minNoticeHours * 3600 * 1000;
  const maxNoticeMs = now.getTime() + BOOKING_CONFIG.maxDaysAhead * 24 * 3600 * 1000;

  const fromParts = fromDate.split("-").map(Number);
  const toParts = toDate.split("-").map(Number);

  const startPkt = new Date(Date.UTC(fromParts[0], fromParts[1] - 1, fromParts[2]));
  startPkt.setUTCDate(startPkt.getUTCDate() - 1);
  const endPkt = new Date(Date.UTC(toParts[0], toParts[1] - 1, toParts[2]));
  endPkt.setUTCDate(endPkt.getUTCDate() + 1);

  const DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const parsedBusy = busyIntervals.map((b) => ({
    startMs: new Date(b.start).getTime(),
    endMs: new Date(b.end).getTime(),
  }));

  const meetingsPerHostDay = new Map();
  for (const b of parsedBusy) {
    const d = new Date(b.startMs);
    const hostInfo = formatInTimeZone(d, BOOKING_CONFIG.hostTimeZone);
    meetingsPerHostDay.set(hostInfo.dateKey, (meetingsPerHostDay.get(hostInfo.dateKey) || 0) + 1);
  }

  const results = [];
  const cursor = new Date(startPkt);

  while (cursor <= endPkt) {
    const y = cursor.getUTCFullYear();
    const m = cursor.getUTCMonth() + 1;
    const d = cursor.getUTCDate();
    const hostDateKey = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    const count = meetingsPerHostDay.get(hostDateKey) || 0;
    if (count >= BOOKING_CONFIG.maxPerDay) {
      cursor.setUTCDate(cursor.getUTCDate() + 1);
      continue;
    }

    const dayKey = DAY_NAMES[cursor.getUTCDay()];
    const windows = BOOKING_CONFIG.weeklyHours[dayKey] || [];

    for (const [wStart, wEnd] of windows) {
      const startMin = parseTimeToMinutes(wStart);
      const endMin = parseTimeToMinutes(wEnd);

      for (let cur = startMin; cur + meetingConfig.minutes <= endMin; cur += BOOKING_CONFIG.slotStepMinutes) {
        const slotDate = pktToUtcDate(y, m, d, Math.floor(cur / 60), cur % 60);
        const slotStartMs = slotDate.getTime();
        const slotEndMs = slotStartMs + durationMs;

        if (slotStartMs < minNoticeMs || slotStartMs > maxNoticeMs) continue;

        let blocked = false;
        for (const busy of parsedBusy) {
          if (isSlotConflicting(slotStartMs, slotEndMs, busy.startMs, busy.endMs)) {
            blocked = true;
            break;
          }
        }
        if (blocked) continue;

        const visitorFmt = formatInTimeZone(slotDate, visitorTz);
        const hostFmt = formatInTimeZone(slotDate, BOOKING_CONFIG.hostTimeZone);

        if (visitorFmt.dateKey < fromDate || visitorFmt.dateKey > toDate) {
          continue;
        }

        results.push({
          iso: slotDate.toISOString(),
          visitorDateKey: visitorFmt.dateKey,
          visitorTimeFormatted: visitorFmt.timeFormatted,
          visitorTzAbbr: visitorFmt.tzAbbr,
          hostDateKey: hostFmt.dateKey,
          hostTimeFormatted: hostFmt.timeFormatted,
        });
      }
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return results.sort((a, b) => new Date(a.iso) - new Date(b.iso));
}

let passedCount = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
  }
}

console.log("=== PHASE 7 BOOKING SYSTEM UNIT TESTS ===");

// 1. Timezone conversion: Toronto Winter (EST, UTC-5)
runTest("America/Toronto (Winter / EST): 21:00 PKT displays as 11:00 AM EST", () => {
  const slotDate = pktToUtcDate(2026, 11, 16, 21, 0); // 16:00 UTC
  const fmt = formatInTimeZone(slotDate, "America/Toronto");
  assert.strictEqual(fmt.timeFormatted, "11:00 AM");
  assert.strictEqual(fmt.tzAbbr, "EST");
});

// 2. Timezone conversion: Toronto Summer (EDT, UTC-4)
runTest("America/Toronto (Summer / EDT): 21:00 PKT displays as 12:00 PM EDT", () => {
  const slotDate = pktToUtcDate(2026, 6, 15, 21, 0); // 16:00 UTC
  const fmt = formatInTimeZone(slotDate, "America/Toronto");
  assert.strictEqual(fmt.timeFormatted, "12:00 PM");
  assert.strictEqual(fmt.tzAbbr, "EDT");
});

// 3. Timezone conversion: Los Angeles Winter (PST, UTC-8)
runTest("America/Los_Angeles (Winter / PST): 21:00 PKT displays as 8:00 AM PST", () => {
  const slotDate = pktToUtcDate(2026, 11, 16, 21, 0);
  const fmt = formatInTimeZone(slotDate, "America/Los_Angeles");
  assert.strictEqual(fmt.timeFormatted, "8:00 AM");
  assert.strictEqual(fmt.tzAbbr, "PST");
});

// 4. Timezone conversion: Los Angeles Summer (PDT, UTC-7)
runTest("America/Los_Angeles (Summer / PDT): 21:00 PKT displays as 9:00 AM PDT", () => {
  const slotDate = pktToUtcDate(2026, 6, 15, 21, 0);
  const fmt = formatInTimeZone(slotDate, "America/Los_Angeles");
  assert.strictEqual(fmt.timeFormatted, "9:00 AM");
  assert.strictEqual(fmt.tzAbbr, "PDT");
});

// 5. Timezone conversion: Auckland Summer (NZDT, UTC+13)
runTest("Pacific/Auckland (Summer / NZDT): 00:00 PKT Tuesday displays as 8:00 AM NZDT Tuesday", () => {
  const slotDate = pktToUtcDate(2026, 11, 17, 0, 0);
  const fmt = formatInTimeZone(slotDate, "Pacific/Auckland");
  assert.strictEqual(fmt.timeFormatted, "8:00 AM");
  assert.strictEqual(fmt.tzAbbr, "NZDT");
  assert.strictEqual(fmt.dateKey, "2026-11-17");
});

// 6. Timezone conversion: Auckland Winter (NZST, UTC+12)
runTest("Pacific/Auckland (Winter / NZST): 00:00 PKT Tuesday displays as 7:00 AM NZST Tuesday", () => {
  const slotDate = pktToUtcDate(2026, 7, 14, 0, 0);
  const fmt = formatInTimeZone(slotDate, "Pacific/Auckland");
  assert.strictEqual(fmt.timeFormatted, "7:00 AM");
  assert.strictEqual(fmt.tzAbbr, "NZST");
});

// 7. Timezone conversion: Dubai (GST, UTC+4, No DST)
runTest("Asia/Dubai (GST, UTC+4): 10:00 PKT displays as 9:00 AM GST", () => {
  const slotDate = pktToUtcDate(2026, 11, 16, 10, 0);
  const fmt = formatInTimeZone(slotDate, "Asia/Dubai");
  assert.strictEqual(fmt.timeFormatted, "9:00 AM");
  assert.strictEqual(fmt.tzAbbr, "GST");
});

// 8. Timezone conversion: Karachi (PKT, UTC+5, Host)
runTest("Asia/Karachi (PKT, UTC+5): 10:00 PKT displays as 10:00 AM PKT", () => {
  const slotDate = pktToUtcDate(2026, 11, 16, 10, 0);
  const fmt = formatInTimeZone(slotDate, "Asia/Karachi");
  assert.strictEqual(fmt.timeFormatted, "10:00 AM");
  assert.strictEqual(fmt.tzAbbr, "PKT");
});

// 9. FreeBusy Filtering & Buffer Enforcement
runTest("FreeBusy conflict & 15m buffer: Meeting at 10:00-10:30 blocks 10:00 and 10:30 slots", () => {
  const now = new Date("2026-11-15T00:00:00Z");
  const busyMeeting = {
    start: pktToUtcDate(2026, 11, 16, 10, 0).toISOString(),
    end: pktToUtcDate(2026, 11, 16, 10, 30).toISOString(),
  };

  const slots = generateSlots({
    meetingTypeSlug: "strategy",
    fromDate: "2026-11-16",
    toDate: "2026-11-16",
    visitorTz: "Asia/Karachi",
    busyIntervals: [busyMeeting],
    now,
  });

  const times = slots.map((s) => s.hostTimeFormatted);
  assert(!times.includes("10:00 AM"), "10:00 AM should be blocked by meeting");
  assert(!times.includes("10:30 AM"), "10:30 AM should be blocked due to 15m buffer after meeting");
  assert(times.includes("11:00 AM"), "11:00 AM should be available (satisfies buffer)");
});

// 10. Minimum Notice Enforcement (12 Hours)
runTest("Minimum notice (12h): Slot starting in 10 hours is excluded; 14 hours is included", () => {
  const now = new Date("2026-11-16T00:00:00Z");
  const slots = generateSlots({
    meetingTypeSlug: "strategy",
    fromDate: "2026-11-16",
    toDate: "2026-11-16",
    visitorTz: "Asia/Karachi",
    busyIntervals: [],
    now,
  });

  const times = slots.map((s) => s.hostTimeFormatted);
  assert(!times.includes("10:00 AM"), "10:00 AM must be excluded due to <12h notice");
  assert(times.includes("9:00 PM"), "9:00 PM must be included (>12h notice)");
});

// 11. Max Per Day Enforcement (6 meetings limit)
runTest("Max per day (6 meetings): Day with 6 existing meetings has 0 candidate slots", () => {
  const now = new Date("2026-11-15T00:00:00Z");
  const sixMeetings = [
    { start: pktToUtcDate(2026, 11, 16, 10, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 10, 30).toISOString() },
    { start: pktToUtcDate(2026, 11, 16, 11, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 11, 30).toISOString() },
    { start: pktToUtcDate(2026, 11, 16, 12, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 12, 30).toISOString() },
    { start: pktToUtcDate(2026, 11, 16, 21, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 21, 30).toISOString() },
    { start: pktToUtcDate(2026, 11, 16, 22, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 22, 30).toISOString() },
    { start: pktToUtcDate(2026, 11, 16, 23, 0).toISOString(), end: pktToUtcDate(2026, 11, 16, 23, 30).toISOString() },
  ];

  const slots = generateSlots({
    meetingTypeSlug: "strategy",
    fromDate: "2026-11-16",
    toDate: "2026-11-16",
    visitorTz: "Asia/Karachi",
    busyIntervals: sixMeetings,
    now,
  });

  assert.strictEqual(slots.length, 0, "No slots should be available when maxPerDay (6) is reached");
});

// 12. Double-Booking Race Condition Simulation
runTest("Double-booking race condition: First booking wins, second request collides and is rejected", () => {
  const existingCalendar = [];
  const requestedSlotStart = pktToUtcDate(2026, 11, 16, 21, 0);
  const requestedSlotEnd = pktToUtcDate(2026, 11, 16, 21, 30);

  function tryBook(clientName) {
    const isConflict = existingCalendar.some((b) =>
      isSlotConflicting(requestedSlotStart.getTime(), requestedSlotEnd.getTime(), b.startMs, b.endMs)
    );

    if (isConflict) {
      return { status: 409, error: "That time was just taken — pick another" };
    }

    existingCalendar.push({
      startMs: requestedSlotStart.getTime(),
      endMs: requestedSlotEnd.getTime(),
      clientName,
    });
    return { status: 200, success: true };
  }

  const client1Res = tryBook("Michael");
  const client2Res = tryBook("Sarah");

  assert.strictEqual(client1Res.status, 200, "Client 1 booking succeeds");
  assert.strictEqual(client2Res.status, 409, "Client 2 booking rejected with 409 conflict");
  assert.strictEqual(client2Res.error, "That time was just taken — pick another");
  assert.strictEqual(existingCalendar.length, 1, "Only 1 event created in calendar");
});

console.log(`\nResults: ${passedCount}/${totalTests} tests passed.\n`);

if (passedCount !== totalTests) {
  process.exit(1);
}
