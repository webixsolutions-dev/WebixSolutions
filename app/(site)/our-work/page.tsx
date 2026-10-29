import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import { getPublishedWorkEntries } from "@/content/work";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { OurWorkHubView } from "@/components/work/our-work-hub-view";

const OUR_WORK_TITLE = "Our Work — Projects, Proof & Results | Webix Solutions";
const OUR_WORK_DESCRIPTION =
  "Case studies from 91 custom-coded builds, 50+ CMS websites and 50+ managed social accounts: websites, Shopify, CRM, AI agents and ad campaigns.";

export const metadata: Metadata = buildMetadata({
  title: OUR_WORK_TITLE,
  description: OUR_WORK_DESCRIPTION,
  path: "/our-work/",
});

export default async function OurWorkPage() {
  const entries = getPublishedWorkEntries();
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/our-work/#webpage`,
    url: `${SITE_URL}/our-work/`,
    name: OUR_WORK_TITLE,
    description: OUR_WORK_DESCRIPTION,
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
      <OurWorkHubView entries={entries} nextSlot={nextSlot} />
    </>
  );
}
