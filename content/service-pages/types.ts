/**
 * Per-service page content (docs/03 shared template).
 * Rule 04: every number/price/timeline must come from content/site-facts.ts or
 * content/pricing.ts and respect their `confirmed` flags. Copy here must not
 * contain invented statistics.
 */
import type { ServiceFaq } from "@/content/services";

export type StatKey =
  | "customCodedBuilds"
  | "githubContributionsLastYear"
  | "cmsWebsitesBuilt"
  | "socialAccountsManaged"
  | "teamSize"
  | "totalClientsServed";

export interface ServicePageContent {
  slug: string;
  heroKicker: string;
  /** Exactly 2 answer-first sentences: what it is + who it's for (price/timeline only if confirmed). */
  intro: [string, string];
  /** One proof chip — must be a confirmed fact. */
  proofChip: string;

  outcomes: {
    h2: string;
    lead: string;
    items: { title: string; detail: string }[];
  };

  /** Optional brief-specific section (decision table, monthly breakdown, etc.). */
  unique?: {
    h2: string;
    lead: string;
    table?: { columns: string[]; rows: string[][] };
    cards?: { title: string; detail: string }[];
    /** Render the hours × hourly-cost calculator (default result is server-rendered text). */
    roiCalculator?: boolean;
    note?: string;
  };

  included: {
    h2: string;
    lead: string;
    groups: { groupTitle: string; items: string[] }[];
  };

  process: {
    h2: string;
    lead: string;
    steps: { title: string; description: string }[];
  };

  proof: {
    h2: string;
    lead: string;
    statKeys: StatKey[];
    showOwnBrands?: boolean;
    showZelvomartAd?: boolean;
    /** Shipped systems shown as mini case studies (descriptions only — no unconfirmed metrics). */
    systems?: { title: string; summary: string; nodes: string[] }[];
  };

  pricing: {
    /** Id in BUILD_PRICES / ONE_TIME / FLAGSHIP_OFFERS — price shows only if that row is confirmed. */
    priceRef?: { table: "build" | "flagship" | "oneTime" | "carePlan"; id: string };
    baseIncludes: string[];
    adSpendNote?: boolean;
  };

  tools: {
    h2: string;
    lead: string;
    items: { name: string; role: string }[];
  };

  faqHeading: string;
  faqs: ServiceFaq[];

  /** Up to 3 related service slugs (must be published). */
  related: string[];
  /** [CONFIRM] items this page is waiting on (mirrored in docs/OPEN-QUESTIONS.md). */
  openItems: string[];
}
