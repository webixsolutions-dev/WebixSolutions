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
  slug: "canada" | "united-states" | "uae" | "pakistan";
  countryName: string;
  shortCode: "CA" | "US" | "AE" | "PK";
  title: string;
  metaDescription: string;
  h1: string;
  heroIntro: [string, string];
  heroChip: string;
  currencyCode: "CAD" | "USD" | "AED" | "PKR";
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
