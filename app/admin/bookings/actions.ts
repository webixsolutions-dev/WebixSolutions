"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { hasAdminSession, sessionCookie, sessionSeconds, signAdminSession, validAdminPassword } from "@/lib/booking/admin-session";
import { MOVE_TARGETS } from "@/lib/booking/pipeline";
import { moveStage, saveFollowUp, saveNotes, sendConfirmation, setMeetingLink } from "@/lib/booking/lifecycle";

const route = "/admin/bookings/";

export async function signIn(form: FormData) {
  const password = form.get("password");
  if (typeof password !== "string" || password.length > 256 || !validAdminPassword(password)) {
    redirect(`${route}?error=1`);
  }
  (await cookies()).set(sessionCookie, signAdminSession(Date.now() + sessionSeconds * 1000), {
    httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
    maxAge: sessionSeconds, path: route,
  });
  redirect(route);
}

export async function signOut() {
  (await cookies()).set(sessionCookie, "", { path: route, maxAge: 0 });
  redirect(route);
}

async function requireAdmin() {
  if (!(await hasAdminSession())) redirect(route);
}

const id = z.uuid();

export async function moveBookingStage(form: FormData) {
  await requireAdmin();
  const data = z.object({ id, stage: z.enum(MOVE_TARGETS as [string, ...string[]]) }).safeParse({ id: form.get("id"), stage: form.get("stage") });
  if (!data.success) return;
  await moveStage(data.data.id, data.data.stage as (typeof MOVE_TARGETS)[number]);
  revalidatePath(route);
}

export async function saveBookingLink(form: FormData) {
  await requireAdmin();
  const data = z.object({ id, url: z.url({ protocol: /^https$/ }).max(500) }).safeParse({ id: form.get("id"), url: String(form.get("url") ?? "").trim() });
  if (!data.success) return;
  await setMeetingLink(data.data.id, data.data.url);
  revalidatePath(route);
}

export async function resendBookingConfirmation(form: FormData) {
  await requireAdmin();
  const data = id.safeParse(form.get("id"));
  if (!data.success) return;
  await sendConfirmation(data.data, true);
  revalidatePath(route);
}

export async function saveBookingFollowUp(form: FormData) {
  await requireAdmin();
  const data = z.object({ id, date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).or(z.literal("")) }).safeParse({ id: form.get("id"), date: String(form.get("date") ?? "") });
  if (!data.success) return;
  // Follow-ups are due at 9:00 AM Pakistan time on the chosen day.
  await saveFollowUp(data.data.id, data.data.date ? new Date(`${data.data.date}T09:00:00+05:00`) : null);
  revalidatePath(route);
}

export async function saveBookingNotes(form: FormData) {
  await requireAdmin();
  const data = z.object({ id, notes: z.string().max(4000) }).safeParse({ id: form.get("id"), notes: String(form.get("notes") ?? "").trim() });
  if (!data.success) return;
  await saveNotes(data.data.id, data.data.notes);
  revalidatePath(route);
}
