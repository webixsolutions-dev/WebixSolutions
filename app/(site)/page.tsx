import { buildMetadata } from "@/config/seo";
import { buildFaqJsonLd } from "@/lib/schema";
import { HOME_CONTENT } from "@/content/home";
import { getMegaMenuColumns } from "@/content/navigation";
import { getPublishedWorkEntries } from "@/content/work";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { HeroSection } from "@/components/home/hero-section";
import { ProofStrip } from "@/components/home/proof-strip";
import { ServicesTabs } from "@/components/home/services-tabs";
import { AiSystemsSection } from "@/components/home/ai-systems-section";
import { WorkSlider } from "@/components/home/work-slider";
import { PackagesTeaser } from "@/components/home/packages-teaser";
import { HowWeWork } from "@/components/home/how-we-work";
import { TwoWaysSplit } from "@/components/home/two-ways-split";
import { ProofOrTestimonials } from "@/components/shared/proof-or-testimonials";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export const metadata = buildMetadata({
  title: HOME_CONTENT.meta.title,
  description: HOME_CONTENT.meta.description,
  path: "/",
});

/**
 * Phase 2 — Home Page (The Signature)
 * 11 sections with strictly alternating surfaces (Oxblood used ONCE on Final CTA):
 * 1. Hero (Graphite)
 * 2. Proof Strip (Porcelain)
 * 3. Services by Outcome Tabs (Graphite)
 * 4. AI Systems in Production (Signal Red + Monogram Watermark)
 * 5. Selected Work Slider (Porcelain)
 * 6. Packages Teaser (Graphite)
 * 7. How We Work (Porcelain)
 * 8. Two Ways to Work With Us (Steel)
 * 9. Testimonials / Proof Wall (Graphite)
 * 10. FAQ (Porcelain)
 * 11. Final CTA + Compact Booking Placeholder (Oxblood)
 */
export default async function HomePage() {
  const megaMenuColumns = getMegaMenuColumns();
  const publishedWork = getPublishedWorkEntries();
  const nextSlot = await getNextOpenStrategySlot();
  const faqJsonLd = buildFaqJsonLd(HOME_CONTENT.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero (Graphite) */}
      <HeroSection nextSlot={nextSlot} />

      {/* 2. Proof Strip (Porcelain) */}
      <ProofStrip />

      {/* 3. Services Tabs (Graphite — all 4 panels in SSR HTML) */}
      <ServicesTabs columns={megaMenuColumns} />

      {/* 4. AI Systems in Production (Signal Red — with Graphite diagram cards) */}
      <AiSystemsSection />

      {/* 5. Selected Work Slider (Porcelain) */}
      <WorkSlider publishedEntries={publishedWork} />

      {/* 6. Packages Teaser (Graphite) */}
      <PackagesTeaser />

      {/* 7. How We Work (Porcelain) */}
      <HowWeWork />

      {/* 8. Two Ways to Work With Us (Steel) */}
      <TwoWaysSplit />

      {/* 9. Testimonials / Proof Wall (Graphite) */}
      <ProofOrTestimonials />

      {/* 10. FAQ (Porcelain — all 8 Q&As in SSR HTML + FAQPage JSON-LD) */}
      <FaqSection
        kicker="Frequently asked questions"
        heading="Answers on pricing, time zones, code ownership and AI systems"
        subtitle="Can't find what you're looking for? Message us on WhatsApp or book a 30-minute strategy call."
        faqs={HOME_CONTENT.faqs}
        surface="porcelain"
        previousSurface="graphite"
        notch
      />

      {/* 11. Final CTA (Oxblood — used once per page) */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </>
  );
}
