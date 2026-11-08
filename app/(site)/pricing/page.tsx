import { PRICING_FAQS } from "@/content/pricing";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { PricingView } from "@/components/pricing/pricing-view";

const PRICING_TITLE = "Pricing — Website, SEO, Ads & AI Plans | Webix Solutions";
const PRICING_DESCRIPTION =
  "Compare website care plans, custom builds and one-time services. Book a call for a written quote and scope.";

export const metadata: Metadata = buildMetadata({
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  path: "/pricing/",
});



export default async function PricingPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(PRICING_FAQS);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/pricing/#webpage`,
    url: `${SITE_URL}/pricing/`,
    name: PRICING_TITLE,
    description: PRICING_DESCRIPTION,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORG_ID,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PricingView nextSlot={nextSlot} />
    </>
  );
}
