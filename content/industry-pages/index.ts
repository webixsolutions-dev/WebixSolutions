import { ECOMMERCE_PAGE } from "./ecommerce";
import { HOME_SERVICES_CONTRACTORS_PAGE } from "./home-services-contractors";
import { REAL_ESTATE_CONSTRUCTION_PAGE } from "./real-estate-construction";
import type { IndustryPageContent } from "./types";

export * from "./types";

const INDUSTRY_PAGES: Record<string, IndustryPageContent> = {
  ecommerce: ECOMMERCE_PAGE,
  "home-services-contractors": HOME_SERVICES_CONTRACTORS_PAGE,
  "real-estate-construction": REAL_ESTATE_CONSTRUCTION_PAGE,
};

export function getDedicatedIndustryPageContent(
  slug: string
): IndustryPageContent | undefined {
  return INDUSTRY_PAGES[slug];
}

export function getDedicatedIndustryPageSlugs(): string[] {
  return Object.keys(INDUSTRY_PAGES);
}
