import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { buildBreadcrumbJsonLd, ORG_ID } from "@/lib/schema";

const path = "/case-studio/developed-a-custom-mobile-app-for-a-local-food-restaurant/";
const title = "Custom Restaurant Ordering App";
const description = "An anonymised Webix Solutions project to simplify the food ordering experience for a local restaurant.";

export const metadata = buildMetadata({ title, description, path });

export default function RestaurantAppPage() {
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Restaurant Websites, Apps & Marketing", path: "/category/restaurant/" },
    { name: title, path },
  ]);
  const project = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    creator: { "@id": ORG_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(project) }} />
      <Section surface="graphite" spacing="hero">
        <Container>
          <h1 className="type-display text-white">Custom mobile app for a local restaurant</h1>
          <p className="type-lead mt-5 max-w-2xl text-[#c5c9d1]">{description}</p>
        </Container>
      </Section>
      <Section surface="porcelain">
        <Container>
          <h2 className="type-h2">What we built</h2>
          <p className="type-body mt-4 max-w-3xl">We developed a customer-facing mobile app so diners could place food orders through a dedicated ordering flow.</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link className="studio-link" href="/mobile-app-development-services/">Mobile app development</Link>
            <Link className="studio-link" href="/category/restaurant/">More restaurant services</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
