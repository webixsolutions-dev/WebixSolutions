import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import {
  getServicesByCategory,
  type ServiceCategory,
} from "@/content/services";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { ServicesHubView } from "@/components/services/services-hub-view";

const SERVICES_HUB_TITLE = "Digital Marketing, Web & AI Services | Webix Solutions";
const SERVICES_HUB_DESCRIPTION =
  "Every service in one place: websites, Shopify, apps, SEO, AI search, Google Maps, paid ads, social media, AI chatbots, automation and AI video.";

export const metadata: Metadata = buildMetadata({
  title: SERVICES_HUB_TITLE,
  description: SERVICES_HUB_DESCRIPTION,
  path: "/services/",
});

const CATEGORY_DATA: {
  category: ServiceCategory;
  title: string;
  description: string;
}[] = [
  {
    category: "Build",
    title: "Websites, e-commerce stores & applications",
    description:
      "Custom-coded Next.js builds, conversion-engineered Shopify stores, and cross-platform mobile apps.",
  },
  {
    category: "Grow",
    title: "Search rankings, paid traffic & conversion lift",
    description:
      "Multi-market SEO, Google Business Profile local dominance, Meta/Google ad campaigns, and CRO.",
  },
  {
    category: "AI",
    title: "Autonomous agents, chatbots & business automations",
    description:
      "Custom LLM chatbots, e-commerce support bots, CRM syncs, and Zapier/Make workflow automations.",
  },
  {
    category: "Create",
    title: "AI video production, creative design & content engines",
    description:
      "High-volume social content, avatar/voice AI video production, and multi-channel creative assets.",
  },
];

const FAQS = [
  {
    question: "Which service should I start with?",
    answer:
      "If you need more immediate enquiries, start with Paid Advertising or Google Business Profile. If your current website is outdated, slow or doesn't convert, start with Custom Web Design or Shopify Store Development. If your team is bogged down by manual follow-ups, start with AI Automation or an AI Chatbot. On our free 30-minute strategy call, we examine your current bottlenecks and recommend the highest-ROI starting point.",
  },
  {
    question: "Can I combine services across different categories?",
    answer:
      "Yes. Most of our clients combine Build and Grow services (e.g. a Next.js or Shopify redesign paired with ongoing SEO and paid ads). Because our 20+ person team works under one roof in Pakistan, developers, ad specialists, and AI engineers collaborate directly on your project without external subcontractor delays.",
  },
  {
    question: "Do you offer monthly growth packages?",
    answer:
      "Yes. We offer integrated monthly growth packages starting from $399/month on our /offers/ page. These combine website maintenance, SEO fixes, social media content, and paid advertising management under a single predictable monthly investment.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs)?",
    answer:
      "Yes. We routinely sign mutual NDAs before reviewing proprietary client roadmaps, database architectures, or internal CRM data. Your business data, codebases, and customer records remain strictly confidential.",
  },
];

export default async function ServicesHubPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const categories = CATEGORY_DATA.map((cat) => ({
    ...cat,
    services: getServicesByCategory(cat.category),
  }));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(FAQS);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/services/#webpage`,
    url: `${SITE_URL}/services/`,
    name: SERVICES_HUB_TITLE,
    description: SERVICES_HUB_DESCRIPTION,
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
      <ServicesHubView categories={categories} nextSlot={nextSlot} />
    </>
  );
}
