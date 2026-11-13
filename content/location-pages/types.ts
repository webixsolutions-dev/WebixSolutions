import type { ServiceFaq, ServiceStep } from "@/content/services";
import type { TimeOverlapRow } from "@/content/locations";

export interface LocationMarketCard {
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface LocationProof {
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  narrative: string;
  takeaways: string[];
}

export interface LocationPageContent {
  slug: "canada" | "united-states" | "uae" | "pakistan" | "new-zealand";
  countryName: string;
  shortCode: "CA" | "US" | "AE" | "PK" | "NZ";
  title: string;
  metaDescription: string;
  h1: string;
  heroIntro: [string, string];
  heroChip: string;
  /** Local phone line for this market, shown in the hero and in structured data */
  localPhone?: { label: string; display: string; e164: string };
  /** One-line note about a local partner, shown in the hero */
  partnerNote?: string;
  currencyCode: "CAD" | "USD" | "AED" | "PKR" | "NZD";
  currencyHeadline: string;
  currencyExplanation: string;
  pricingCard: {
    startingRate: string;
    description: string;
    terms: string[];
  };
  timezoneSummary: string;
  overlapRows: TimeOverlapRow[];
  marketCards: LocationMarketCard[];
  proof: LocationProof;
  faqs: ServiceFaq[];
  relatedServices: {
    name: string;
    slug: string;
    shortBenefit: string;
  }[];
}
