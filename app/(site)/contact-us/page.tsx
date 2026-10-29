import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { SITE_FACTS } from "@/content/site-facts";
import { ORG_ID } from "@/lib/schema";
import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Book a Call or Get a Quote | Webix Solutions",
  description:
    "Call +92 322 9472354, email info@webixsolutions.com, message us on WhatsApp or book a free strategy call. Replies within one business day.",
  path: "/contact-us/",
});

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Webix Solutions",
    description:
      "Get in touch with Webix Solutions for custom web design, SEO, performance paid advertising, and AI automation inquiries.",
    url: `${SITE_URL}/contact-us/`,
    mainEntity: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_FACTS.brandName,
      url: `${SITE_URL}/`,
      telephone: SITE_FACTS.contact.phoneE164,
      email: SITE_FACTS.contact.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE_FACTS.contact.phoneE164,
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "New Zealand" },
          { "@type": "Country", name: "Pakistan" },
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactView />
    </>
  );
}
