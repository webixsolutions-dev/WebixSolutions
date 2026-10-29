import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { LocationPageContent } from "@/content/location-pages/types";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface LocationPageTemplateProps {
  content: LocationPageContent;
  nextSlot: NextSlotResult;
}

export function LocationPageTemplate({
  content,
  nextSlot,
}: LocationPageTemplateProps) {
  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION (Graphite)
         ========================================================================= */}
      <Section surface="graphite" spacing="hero" grid className="relative">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 animate-hero-rise">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#A7ACB8]">
              <li className="flex items-center gap-2">
                <Link
                  href="/"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-[#A7ACB8]">Locations</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/20">/</span>
                <span aria-current="page" className="text-white font-medium">
                  {content.countryName}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider">
                {content.shortCode} Market
              </span>
              <Kicker>Market-Specific Delivery</Kicker>
            </div>

            <h1 className="type-display text-white">{content.h1}</h1>

            <div className="space-y-2">
              <p className="type-lead text-white/90 max-w-[62ch]">
                {content.heroIntro[0]}
              </p>
              <p className="type-body text-[#A7ACB8] max-w-[62ch]">
                {content.heroIntro[1]}
              </p>
            </div>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/offers/" variant="secondary" size="lg">
                View growth packages
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                {content.heroChip}
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Quotes in {content.currencyCode} · Team in Dunyapur, Pakistan
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. TIME ZONE OVERLAP TABLE (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Synchronous collaboration</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Real-time working overlap with {content.countryName}
            </h2>
            <p className="type-body text-[#454954]">
              {content.timezoneSummary}
            </p>
          </div>

          <div className="rounded-xl border border-[#E4E6EB] bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E4E6EB] bg-[#F8F9FA] text-[#717684] text-xs font-semibold uppercase tracking-wider">
                    <th scope="col" className="p-4 sm:p-5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-[#ED1C24]" />
                        <span>Pakistan Time (PKT)</span>
                      </span>
                    </th>
                    <th scope="col" className="p-4 sm:p-5">
                      <span>{content.countryName} Local Window</span>
                    </th>
                    <th scope="col" className="p-4 sm:p-5">
                      <span>Coordinated Activities</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E6EB]">
                  {content.overlapRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F9FA]/50 transition-colors">
                      <td className="p-4 sm:p-5 font-mono font-semibold text-[#111215] whitespace-nowrap text-xs sm:text-sm">
                        {row.pktWindow}
                      </td>
                      <td className="p-4 sm:p-5 font-medium text-[#C8101A] whitespace-nowrap text-xs sm:text-sm">
                        {row.localWindow}
                      </td>
                      <td className="p-4 sm:p-5 text-[#454954] text-xs sm:text-sm leading-relaxed">
                        {row.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. MARKET PRICING & CURRENCY (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Kicker>Commercial transparency</Kicker>
              <h2 className="type-h2 text-[#111215]">
                {content.currencyHeadline}
              </h2>
              <p className="type-body text-[#454954] leading-relaxed">
                {content.currencyExplanation}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/pricing/" variant="primary" size="default">
                  View full pricing table
                </Button>
                <Button href="/book-a-call/" variant="secondary" size="default">
                  Book a discovery call
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-xl bg-white border border-[#D5D8E0] shadow-sm space-y-5">
                <div className="border-b border-[#E4E6EB] pb-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#717684] uppercase tracking-wider mb-1">
                    <span>Pricing Standard</span>
                    <Coins className="h-4 w-4 text-[#ED1C24]" />
                  </div>
                  <div className="font-display text-2xl font-bold text-[#111215]">
                    {content.pricingCard.startingRate}
                  </div>
                  <p className="text-xs text-[#717684] mt-1">
                    {content.pricingCard.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {content.pricingCard.terms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#454954]">
                      <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. MARKET PLATFORMS & RULES (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="steel"
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Local compliance & ecosystem</Kicker>
            <h2 className="type-h2 text-white">
              Tailored for the {content.countryName} digital ecosystem
            </h2>
            <p className="type-lead text-[#A7ACB8]">
              We respect regional data laws, localized payment options, and channel preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.marketCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#ED1C24]">
                      Pillar 0{idx + 1}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-[#ED1C24]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A7ACB8] leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {card.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#F5F6F8]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. LOCAL PROOF & CASE STUDY (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white border border-[#E4E6EB] shadow-xs space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E4E6EB] pb-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                  Verified Market Experience
                </span>
                <h2 className="type-h2 text-[#111215]">{content.proof.title}</h2>
                <p className="text-sm text-[#717684]">{content.proof.subtitle}</p>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF0F0] border border-[#F5C2C4] shrink-0 text-left lg:text-right">
                <div className="font-display text-3xl font-bold text-[#C8101A]">
                  {content.proof.metric}
                </div>
                <div className="text-xs font-medium text-[#454954] mt-0.5">
                  {content.proof.metricLabel}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#454954] leading-relaxed max-w-3xl">
              {content.proof.narrative}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {content.proof.takeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#111215]">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. MARKET-SPECIFIC FAQS (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading={`Frequently asked questions for businesses in ${content.countryName}`}
        subtitle="Clear details on our communication workflows, contractual agreements, and payment methods."
        faqs={content.faqs}
        surface="porcelain"
        previousSurface="porcelain"
        notch
      />

      {/* =========================================================================
          7. RELATED SERVICES (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Core capabilities</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Popular services deployed for {content.countryName}
            </h2>
            <p className="type-body text-[#454954]">
              Available as individual deliverables or bundled into ongoing growth retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${rel.slug}/`}
                className="group p-5 rounded-lg bg-white border border-[#D5D8E0] hover:border-[#ED1C24] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <h3 className="font-display text-sm font-semibold text-[#111215] group-hover:text-[#ED1C24] transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-[#717684] line-clamp-2 leading-relaxed">
                    {rel.shortBenefit}
                  </p>
                </div>
                <span className="text-xs text-[#ED1C24] font-medium flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          8. FINAL CTA SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="steel" />
    </div>
  );
}
