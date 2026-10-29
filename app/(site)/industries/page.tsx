import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import { getAllHubIndustries } from "@/content/industries";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { IndustriesHubView } from "@/components/industries/industries-hub-view";

const INDUSTRIES_HUB_TITLE = "Industries We Serve | Webix Solutions";
const INDUSTRIES_HUB_DESCRIPTION =
  "Marketing, websites and AI automation for e-commerce, contractors, real estate, clinics, professional services, restaurants and more.";

export const metadata: Metadata = buildMetadata({
  title: INDUSTRIES_HUB_TITLE,
  description: INDUSTRIES_HUB_DESCRIPTION,
  path: "/industries/",
});

const FAQS = [
  {
    question: "Do you specialise in one single industry?",
    answer:
      "No. While we have deep specialised playbooks for e-commerce, home-service contractors and real estate, our engineering and paid acquisition systems are built on universal unit economics: fast websites, strict lead qualification, frictionless tracking, and automated follow-up. We pair our technical framework with your domain expertise.",
  },
  {
    question: "Have you worked with businesses in my exact niche?",
    answer:
      "Across 91 repositories and 60+ clients, our in-house team has delivered projects for online retailers, roofers, electrical contractors, equipment leasing companies, real estate developers, healthcare clinics, and B2B consultancies across North America, the UAE, and Pakistan. On our strategy call, we share relevant live examples and case studies.",
  },
  {
    question: "Do you work with early-stage startups and new businesses?",
    answer:
      "Yes. For new ventures, we recommend focused 14-day launch sprints — such as a 5-page custom Next.js or Shopify store paired with local Google Maps setup or paid search tests — so you can validate demand before committing to heavy monthly retainers.",
  },
  {
    question: "How do you tailor your marketing strategies to local market regulations?",
    answer:
      "Our team complies strictly with regional data protection and advertising rules: CASL and PIPEDA in Canada, CAN-SPAM and A2P 10DLC in the US, WhatsApp Business policies and PDPL in the UAE, and regional consumer guidelines across Pakistan.",
  },
];

export default async function IndustriesHubPage() {
  const industries = getAllHubIndustries();
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(FAQS);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/industries/#webpage`,
    url: `${SITE_URL}/industries/`,
    name: INDUSTRIES_HUB_TITLE,
    description: INDUSTRIES_HUB_DESCRIPTION,
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
      <IndustriesHubView industries={industries} nextSlot={nextSlot} />
    </>
  );
}
