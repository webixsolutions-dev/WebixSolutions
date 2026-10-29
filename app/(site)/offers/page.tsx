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

const OFFERS_TITLE = "Growth Packages from $399/month | Webix Solutions";
const OFFERS_DESCRIPTION =
  "Website, social media, ads and Google Maps managed by one team from $399/month. Or launch in 14 days for $499. Book a free strategy call.";

export const metadata: Metadata = buildMetadata({
  title: OFFERS_TITLE,
  description: OFFERS_DESCRIPTION,
  path: "/offers/",
});

const FAQS = [
  {
    question: "What is the minimum term commitment for the $399/month Growth Engine?",
    answer:
      "The Growth Engine package carries a 6-month minimum agreement. This structure allows us to build or completely redesign your 5-page custom website in month 1 (a deliverable normally valued at $1,500+) with zero upfront development fees, amortizing that technical investment across 6 months of active marketing management.",
  },
  {
    question: "What if I already have an existing website?",
    answer:
      "A complete modern redesign is already included in month 1 at no extra charge! If your current website is already fast, modern, and high-converting, we instead dedicate those engineering hours to conversion rate optimization (CRO), building high-ticket landing pages, or configuring advanced tracking pipelines.",
  },
  {
    question: "Which advertising platforms are included in the monthly management?",
    answer:
      "The $399/mo Growth Engine includes dedicated management for one core paid channel (Meta Ads or Google Search/Maps). Growth Engine Pro ($799/mo) covers multi-channel execution across both Meta and Google Ads, managing up to $4,000/month in client ad spend.",
  },
  {
    question: "Who writes the content, captions, and designs the creative assets?",
    answer:
      "Our in-house team handles 100% of the creative and copywriting work. Designers, video editors, and senior copywriters collaborate directly on your account under senior review. You simply approve the batch before it goes live.",
  },
  {
    question: "What happens after the initial 6-month agreement concludes?",
    answer:
      "After 6 months, full website ownership and source code transfer 100% to your business. You can continue on a flexible month-to-month basis with 30 days notice, upgrade to Growth Engine Pro, or scale back to a standalone website care plan.",
  },
  {
    question: "Can I upgrade or downgrade my package as our business grows?",
    answer:
      "Yes. You can upgrade from the Launch Kit to the Growth Engine at any time, or scale from Growth Engine to Pro as your monthly advertising budget expands.",
  },
];

export default async function OffersPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Offers", path: "/offers/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(FAQS);

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
