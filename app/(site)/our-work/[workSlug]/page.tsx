import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { buildBreadcrumbJsonLd, ORG_ID } from "@/lib/schema";
import {
  getWorkEntryBySlug,
  getPublishedWorkSlugs,
} from "@/content/work";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { CaseStudyTemplate } from "@/components/work/case-study-template";

interface CaseStudyPageProps {
  params: Promise<{ workSlug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPublishedWorkSlugs();
  return slugs.map((slug) => ({
    workSlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { workSlug } = await params;
  const study = getWorkEntryBySlug(workSlug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${study.title.slice(0, 42)} | Webix Solutions`;
  return buildMetadata({
    title,
    description: study.summary.slice(0, 155),
    path: `/our-work/${study.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { workSlug } = await params;
  const study = getWorkEntryBySlug(workSlug);

  if (!study) {
    notFound();
  }

  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work/" },
    { name: study.title, path: `/our-work/${study.slug}/` },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);

  const url = `${SITE_URL}/our-work/${study.slug}/`;
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: study.title,
    description: study.summary,
    url,
    creator: {
      "@id": ORG_ID,
    },
    genre: study.category,
    countryOfOrigin: study.country,
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
          __html: JSON.stringify(creativeWorkJsonLd),
        }}
      />
      <CaseStudyTemplate study={study} nextSlot={nextSlot} />
    </>
  );
}
