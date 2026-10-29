import type { ServiceFaq, ServiceDeliverableGroup, ServiceStep } from "@/content/services";

export interface IndustryPitfall {
  title: string;
  detail: string;
}

export interface IndustryCaseStudy {
  brandName: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  context: string;
  bulletPoints: string[];
  confirmed: boolean;
}

export interface IndustryPageContent {
  slug: string;
  industryName: string;
  shortLabel: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroIntro: [string, string];
  heroProofChip: string;
  pitfalls: IndustryPitfall[];
  deliverables: ServiceDeliverableGroup[];
  steps: ServiceStep[];
  proof: IndustryCaseStudy;
  pricingNote: {
    headline: string;
    subline: string;
    ctaLabel: string;
    ctaHref: string;
  };
  tools: string[];
  faqs: ServiceFaq[];
  relatedServices: {
    name: string;
    slug: string;
    shortOutcome: string;
  }[];
}
