import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  ORG_ID,
} from "@/lib/schema";
import {
  getLocationPageContent,
  getLocationPageSlugs,
} from "@/content/location-pages";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { LocationPageTemplate } from "@/components/locations/location-page-template";

interface LocationPageProps {
  params: Promise<{ locationSlug: string }>;
}

export async function generateStaticParams() {
  const slugs = getLocationPageSlugs();
  return slugs.map((slug) => ({
    locationSlug: slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { locationSlug } = await params;
  const content = getLocationPageContent(locationSlug as any);

  if (!content) {
    return {
      title: "Location Not Found",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: content.title,
    description: content.metaDescription,
    path: `/locations/${content.slug}/`,
  });
}

export default async function DedicatedLocationPage({
  params,
}: LocationPageProps) {
  const { locationSlug } = await params;
  const content = getLocationPageContent(locationSlug as any);

  if (!content) {
    notFound();
  }

  const nextSlot = await getNextOpenStrategySlot();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: `/${content.slug}/` },
    { name: content.countryName, path: `/locations/${content.slug}/` },
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(breadcrumbs);
  const faqJsonLd = buildFaqJsonLd(content.faqs);

  const url = `${SITE_URL}/locations/${content.slug}/`;
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
    areaServed: {
      "@type": "Country",
      name: content.countryName,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocationPageTemplate content={content} nextSlot={nextSlot} />
    </>
  );
}
