/**
 * Navigation Registry — Generated dynamically from the content registries.
 * Excludes any item with `published: false`.
 */

import {
  getPublishedServices,
  getServicesByCategory,
  type ServiceCategory,
} from "./services";
import { getPublishedIndustryPages } from "./industries";
import { getPublishedLocations } from "./locations";

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface MegaMenuColumn {
  category: ServiceCategory;
  heading: string;
  subtitle: string;
  items: NavLinkItem[];
}

const CATEGORY_META: Record<
  ServiceCategory,
  { heading: string; subtitle: string }
> = {
  Build: {
    heading: "Build",
    subtitle: "Websites, stores & mobile apps",
  },
  Grow: {
    heading: "Grow",
    subtitle: "SEO, Google Maps, paid ads & CRO",
  },
  AI: {
    heading: "AI",
    subtitle: "Agents, chatbots & workflows",
  },
  Create: {
    heading: "Create",
    subtitle: "Content, AI video & design",
  },
};

export function getMegaMenuColumns(): MegaMenuColumn[] {
  const categories: ServiceCategory[] = ["Build", "Grow", "AI", "Create"];
  return categories.map((cat) => {
    const services = getServicesByCategory(cat);
    return {
      category: cat,
      heading: CATEGORY_META[cat].heading,
      subtitle: CATEGORY_META[cat].subtitle,
      items: services.map((s) => ({
        label: s.shortName,
        href: `/${s.slug}/`,
        description: s.shortOutcome,
      })),
    };
  });
}

export const PRIMARY_NAV_LINKS: NavLinkItem[] = [
  { label: "Services", href: "/services/" },
  { label: "AI & Automation", href: "/ai-automation-services/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Industries", href: "/industries/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about-us/" },
];

export function getFooterColumns() {
  const buildAndAi = [
    ...getServicesByCategory("Build"),
    ...getServicesByCategory("AI"),
  ];
  const growAndCreate = [
    ...getServicesByCategory("Grow"),
    ...getServicesByCategory("Create"),
  ];
  const industries = getPublishedIndustryPages();
  const locations = getPublishedLocations();

  return {
    buildAndAi: buildAndAi.map((s) => ({
      label: s.shortName,
      href: `/${s.slug}/`,
    })),
    growAndCreate: growAndCreate.map((s) => ({
      label: s.shortName,
      href: `/${s.slug}/`,
    })),
    industries: [
      { label: "All Industries (14)", href: "/industries/" },
      ...industries.map((i) => ({
        label: i.shortLabel,
        href: `/industries/${i.slug}/`,
      })),
    ],
    markets: locations.map((l) => ({
      label: l.countryName,
      href: `/locations/${l.slug}/`,
    })),
    company: [
      { label: "About Us", href: "/about-us/" },
      { label: "Our Work", href: "/our-work/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Growth Packages", href: "/offers/" },
      { label: "White-Label Partners", href: "/white-label-partners/" },
      { label: "Blog", href: "/blogs/" },
      { label: "Careers", href: "/careers/" },
      { label: "Book a Strategy Call", href: "/book-a-call/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
      { label: "Cookie Policy", href: "/cookie-policy/" },
      { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy/" },
    ],
  };
}

/**
 * Single canonical list of services for contact & quote forms.
 */
export function getServiceSelectOptions(): { value: string; label: string }[] {
  return [
    ...getPublishedServices().map((s) => ({
      value: s.slug,
      label: s.name,
    })),
    { value: "growth-package", label: "Growth Engine Package ($399/mo)" },
    { value: "white-label", label: "White-Label Agency Partnership" },
    { value: "other", label: "Not sure — help me choose" },
  ];
}
