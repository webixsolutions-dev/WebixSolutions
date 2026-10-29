/**
 * Testimonials Registry — Per Rule 04 (content-truth.md), the site ONLY renders
 * testimonials where `verified === true` AND `permission === true`.
 * When fewer than 3 verified testimonials exist, components automatically render
 * the Proof Wall instead. Never invent or paraphrase quotes.
 */

export type TestimonialSource = "google" | "clutch" | "upwork" | "email";

export interface TestimonialEntry {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  source: TestimonialSource;
  sourceUrl?: string;
  permission: boolean;
  verified: boolean;
}

export const TESTIMONIALS_REGISTRY: TestimonialEntry[] = [
  // Seeded empty until Haroon provides real client quotes with written permission.
  // Use the prompt in prompts/PROMPTS.md ("Add a real testimonial") to add entries.
];

export function getVerifiedTestimonials(): TestimonialEntry[] {
  return TESTIMONIALS_REGISTRY.filter((t) => t.verified === true && t.permission === true);
}
