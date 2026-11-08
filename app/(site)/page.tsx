import { buildMetadata } from "@/config/seo";
import { buildFaqJsonLd } from "@/lib/schema";
import { STUDIO } from "@/content/studio";
import { StudioHome } from "@/components/studio/studio-home";

export const metadata = buildMetadata({
  title: "Web Design, SEO & AI Agency | Webix Solutions",
  description: "Webix Solutions builds websites, CRMs and client portals, runs SEO and AI search projects, and delivers white-label work for agencies.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(STUDIO.faqs)) }} />
      <StudioHome />
    </>
  );
}
