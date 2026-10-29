import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { CAREERS_CONTENT } from "@/content/careers";
import { SITE_FACTS } from "@/content/site-facts";
import { ORG_ID } from "@/lib/schema";
import { CareersView } from "@/components/careers/careers-view";

export const metadata: Metadata = buildMetadata({
  title: CAREERS_CONTENT.meta.title,
  description: CAREERS_CONTENT.meta.description,
  path: "/careers/",
});

export default function CareersPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: CAREERS_CONTENT.meta.title,
    description: CAREERS_CONTENT.meta.description,
    url: `${SITE_URL}/careers/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: CAREERS_CONTENT.openRoles.map((role, idx) => ({
        "@type": "JobPosting",
        position: idx + 1,
        title: role.title,
        description: role.overview,
        employmentType: role.type.includes("Full-Time") ? "FULL_TIME" : "CONTRACTOR",
        hiringOrganization: {
          "@type": "Organization",
          "@id": ORG_ID,
          name: SITE_FACTS.brandName,
          sameAs: SITE_URL,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: SITE_FACTS.headquarters.addressLocality,
            addressRegion: SITE_FACTS.headquarters.addressRegion,
            addressCountry: SITE_FACTS.headquarters.addressCountry,
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <CareersView />
    </>
  );
}
