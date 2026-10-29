import type { Metadata } from "next";
import { buildMetadata, SITE_URL, ensureTrailingSlash } from "@/config/seo";
import { ABOUT_CONTENT } from "@/content/about";
import { SITE_FACTS } from "@/content/site-facts";
import { buildFaqJsonLd, ORG_ID, FOUNDER_ID } from "@/lib/schema";
import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = buildMetadata({
  title: ABOUT_CONTENT.meta.title,
  description: ABOUT_CONTENT.meta.description,
  path: "/about-us/",
});

export default function AboutPage() {
  const faqJsonLd = buildFaqJsonLd(
    ABOUT_CONTENT.faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: ABOUT_CONTENT.meta.title,
    description: ABOUT_CONTENT.meta.description,
    url: `${SITE_URL}/about-us/`,
    mainEntity: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_FACTS.brandName,
      url: `${SITE_URL}/`,
      founder: {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: SITE_FACTS.founder.name,
        jobTitle: SITE_FACTS.founder.role,
        sameAs: [
          SITE_FACTS.founder.linkedin,
          SITE_FACTS.founder.githubPersonal,
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutView />
    </>
  );
}
