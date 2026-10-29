import { CANADA_LOCATION_PAGE } from "./canada";
import { UNITED_STATES_LOCATION_PAGE } from "./united-states";
import { UAE_LOCATION_PAGE } from "./uae";
import { PAKISTAN_LOCATION_PAGE } from "./pakistan";
import type { LocationPageContent } from "./types";

export * from "./types";

const LOCATION_PAGES: Record<string, LocationPageContent> = {
  canada: CANADA_LOCATION_PAGE,
  "united-states": UNITED_STATES_LOCATION_PAGE,
  uae: UAE_LOCATION_PAGE,
  pakistan: PAKISTAN_LOCATION_PAGE,
};

export function getLocationPageContent(
  slug: string
): LocationPageContent | undefined {
  return LOCATION_PAGES[slug];
}

export function getLocationPageSlugs(): string[] {
  return Object.keys(LOCATION_PAGES);
}
