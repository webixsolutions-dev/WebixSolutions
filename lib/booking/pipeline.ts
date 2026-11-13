/**
 * Booking pipeline: where each booked call sits, from reservation to won or lost.
 * Stages are stored in webix_bookings.stage (see db/002-pipeline.sql).
 */

export const STAGES = ["booked", "confirmed", "completed", "no_show", "proposal", "won", "lost", "cancelled"] as const;
export type Stage = (typeof STAGES)[number];

export const STAGE_LABEL: Record<Stage, string> = {
  booked: "Booked",
  confirmed: "Confirmed",
  completed: "Call done",
  no_show: "No-show",
  proposal: "Proposal sent",
  won: "Won",
  lost: "Lost",
  cancelled: "Cancelled",
};

/** Days until the next follow-up is due after moving to a stage. Stages not listed have no follow-up. */
export const FOLLOW_UP_DAYS: Partial<Record<Stage, number>> = {
  completed: 2,
  no_show: 1,
  proposal: 3,
};

/** Stages a booking can be moved to by hand from the dashboard. */
export const MOVE_TARGETS: Stage[] = ["confirmed", "completed", "no_show", "proposal", "won", "lost", "cancelled"];

export function isStage(value: unknown): value is Stage {
  return typeof value === "string" && (STAGES as readonly string[]).includes(value);
}

export function followUpFor(stage: Stage, from = new Date()): Date | null {
  const days = FOLLOW_UP_DAYS[stage];
  return days ? new Date(from.getTime() + days * 86_400_000) : null;
}

/** Stages where a call is still ahead, so the visitor should get reminders. */
export function isUpcomingStage(stage: Stage) {
  return stage === "booked" || stage === "confirmed";
}
