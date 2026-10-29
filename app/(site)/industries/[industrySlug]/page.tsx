import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
} from "@/lib/schema";
import {
  getDedicatedIndustryPageContent,
  getDedicatedIndustryPageSlugs,
} from "@/content/industry-pages";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { IndustryPageTemplate } from "@/components/industries/industry-page-template";

interface IndustryPageProps {
  params: Promise<{ industrySlug: string }>;
}

export async function generateStaticParams() {
  const slugs = getDedicatedIndustryPageSlugs();
  return slugs.map((slug) => ({
    industrySlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industrySlug } = await params;
  const content = getDedicatedIndustryPageContent(industrySlug);

  if (!content) {
    return {
      title: "Industry Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: content.title,
    description: content.metaDescription,
    path: `/industries/${content.slug}/`,
  });
}

export default async function DedicatedIndustryPage({
  params,
}: IndustryPageProps) {
  const { industrySlug } = await params;
  const content = getDedicatedIndustryPageContent(industrySlug);

  if (!content) {
    notFound();
  }

  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries/" },
    { name: content.shortLabel, path: `/industries/${content.slug}/` },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(content.faqs);

  const url = `${SITE_URL}/industries/${content.slug}/`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: content.title,
    description: content.metaDescription,
    url,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "New Zealand" },
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
      <IndustryPageTemplate content={content} nextSlot={nextSlot} />
    </>
  );
}
