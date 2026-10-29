import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
} from "@/lib/schema";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { WhiteLabelView } from "@/components/white-label/white-label-view";

const WHITE_LABEL_TITLE =
  "White-Label Digital & AI Partner | Webix Solutions";
const WHITE_LABEL_DESCRIPTION =
  "Outsource websites, social media, SEO and AI automation to an in-house team that works your hours. Unbranded delivery, NDA, partner pricing.";

export const metadata: Metadata = buildMetadata({
  title: WHITE_LABEL_TITLE,
  description: WHITE_LABEL_DESCRIPTION,
  path: "/white-label-partners/",
});

const FAQS = [
  {
    question: "Will my agency's clients ever know that Webix Solutions exists?",
    answer:
      "No. We operate strictly as your behind-the-scenes engineering and creative production campus. All Git commit histories, staging links, Figma files, and code comments are completely unbranded or tagged with your agency credentials. We sign strict non-disclosure and non-solicitation agreements before receiving any project files.",
  },
  {
    question: "How do you guarantee code quality and design standards?",
    answer:
      "Unlike ad-hoc freelancer networks, all 20+ team members work full-time under senior engineering leadership. Every deliverable passes an internal QA checklist covering Core Web Vitals, cross-browser compatibility, responsive mobile layouts, and form tracking before it is delivered to your account managers.",
  },
  {
    question: "What project management tools and communication apps do you support?",
    answer:
      "We routinely integrate directly into our partner agencies' workflows. We join your private Slack or Teams channels, receive task tickets in ClickUp, Asana, Trello, Monday, or Jira, and push code to your company's private GitHub or GitLab organization.",
  },
  {
    question: "Can your team attend client video calls as our internal technical team?",
    answer:
      "Yes. For select enterprise partners, our senior engineers and technical architects can attend video conferences using your agency's email alias and branded background, acting seamlessly as your in-house engineering department to help scope complex requirements.",
  },
  {
    question: "How do partner pricing and invoicing work?",
    answer:
      "We provide wholesale partner rate cards on request. Agency partners typically mark up our rates by 50% to 150% when billing their domestic clients. Invoices are consolidated bi-weekly or monthly and payable in USD via corporate credit card, ACH, or Wise Business.",
  },
];

export default async function WhiteLabelPage() {
  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "White-Label Partners", path: "/white-label-partners/" },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(FAQS);

  const url = `${SITE_URL}/white-label-partners/`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: WHITE_LABEL_TITLE,
    description: WHITE_LABEL_DESCRIPTION,
    url,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Pakistan" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WhiteLabelView nextSlot={nextSlot} />
    </>
  );
}
