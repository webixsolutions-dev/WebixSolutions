import { OFFER_FAQS } from "@/content/pricing";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { OffersLandingView } from "@/components/offers/offers-landing-view";

const OFFERS_TITLE = "Growth Packages | Webix Solutions";
const OFFERS_DESCRIPTION =
  "Compare website launch, monthly marketing and AI automation packages. Book a call for a written quote.";

export const metadata: Metadata = buildMetadata({
  title: OFFERS_TITLE,
  description: OFFERS_DESCRIPTION,
  path: "/offers/",
});



export default async function OffersPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(OFFER_FAQS);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/offers/#webpage`,
    url: `${SITE_URL}/offers/`,
    name: OFFERS_TITLE,
    description: OFFERS_DESCRIPTION,
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
      <OffersLandingView nextSlot={nextSlot} />
    </>
  );
}
