"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { hasAdminSession, sessionCookie, sessionSeconds, signAdminSession, validAdminPassword } from "@/lib/booking/admin-session";
import { bookingDb } from "@/lib/booking/store";

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

export async function changeBookingStatus(form: FormData) {
  if (!(await hasAdminSession())) redirect(route);
  const data = z.object({ id: z.uuid(), status: z.enum(["confirmed", "cancelled"]) }).safeParse({
    id: form.get("id"), status: form.get("status"),
  });
  if (!data.success) return;
  const { id, status } = data.data;
  const sql = bookingDb();
  await sql`
    UPDATE webix_bookings SET status = ${status}
    WHERE id = ${id}::uuid AND (status = 'pending' OR (status = 'confirmed' AND ${status} = 'cancelled'))
  `;
  revalidatePath(route);
}
