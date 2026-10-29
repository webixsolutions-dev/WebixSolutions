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
  "Clear prices for care plans, website builds, SEO, ads and AI automation. Packages from $399/month. Ad spend is paid directly to the platforms.";

export const metadata: Metadata = buildMetadata({
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  path: "/pricing/",
});

const FAQS = [
  {
    question: "Why are your prices lower than US and Canadian digital agencies?",
    answer:
      "Our central engineering and creative campus is located in Dunyapur, Pakistan, where operational overhead is significantly lower than New York, Toronto, or London. Because our 20+ person team works directly under senior technical leadership—using the exact same enterprise tools (Next.js, Tailwind, Meta CAPI, Google Ads, Zapier)—we pass those structural savings directly to our clients without compromising code quality.",
  },
  {
    question: "Is there a long-term contract required for one-time builds or care plans?",
    answer:
      "No long-term contracts for one-time builds or care plans. Website builds are delivered on fixed-price written milestone scopes with an initial 40% deposit. Monthly website care plans can be cancelled anytime with 30 days written notice. Only our deeply discounted growth packages on /offers/ have a 6-month minimum commitment to cover upfront build and setup costs.",
  },
  {
    question: "How do international payments work for clients outside Pakistan?",
    answer:
      "We invoice securely in US Dollars (USD) or approximate CAD/AED/NZD equivalents. Clients can pay via corporate credit card, ACH transfer, Wise Business, or international wire. Domestic Pakistani clients can pay in PKR via 1Link, Raast, or corporate cross-cheque with official tax invoices.",
  },
  {
    question: "Do your service prices include advertising spend?",
    answer:
      "No. Advertising spend is paid directly by you to the advertising platforms (Meta, Google, TikTok) using your own company credit card. This guarantees 100% financial transparency, ensures you earn your own card reward points, and eliminates agency markups on media spend.",
  },
  {
    question: "What happens if I need revisions after a website or software build is launched?",
    answer:
      "Every project build includes 14 to 30 days of complimentary post-launch support and bug fixes. For ongoing design iterations, landing page testing, and monthly updates, we recommend transitioning to one of our monthly care plans or an integrated growth package.",
  },
];

export default async function PricingPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(FAQS);

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
