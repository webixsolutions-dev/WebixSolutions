import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CutFrame } from "@/components/ui/cut-frame";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { IndustryPageContent } from "@/content/industry-pages/types";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface IndustryPageTemplateProps {
  content: IndustryPageContent;
  nextSlot: NextSlotResult;
}

export function IndustryPageTemplate({
  content,
  nextSlot,
}: IndustryPageTemplateProps) {
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
                <Link
                  href="/industries/"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Industries
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/20">/</span>
                <span aria-current="page" className="text-white font-medium">
                  {content.shortLabel}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>{content.shortLabel} Growth Stack</Kicker>

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
                {content.heroProofChip}
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                20+ person in-house team serving CA, US, UAE, NZ and PK
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. WHAT USUALLY GOES WRONG (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Commercial realities</Kicker>
            <h2 className="type-h2 text-[#111215]">
              What usually goes wrong for {content.shortLabel.toLowerCase()} businesses
            </h2>
            <p className="type-body text-[#454954]">
              Before building any website or spending ad budget, we eliminate the structural bottlenecks that drain margins and lose inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.pitfalls.map((pitfall, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#FAF0F0] text-[#C8101A]">
                      Pitfall 0{idx + 1}
                    </span>
                    <AlertCircle className="h-4 w-4 text-[#C8101A]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#111215] leading-snug">
                    {pitfall.title}
                  </h3>
                  <p className="text-sm text-[#454954] leading-relaxed">
                    {pitfall.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. WHAT WE SET UP (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="porcelain"
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Engineered deliverables</Kicker>
            <h2 className="type-h2 text-white">
              What we set up for {content.shortLabel.toLowerCase()}
            </h2>
            <p className="type-lead text-[#A7ACB8]">
              Concrete assets, platforms, tracking pixels and automation flows delivered and managed directly by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.deliverables.map((group, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-5"
              >
                <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {group.groupTitle}
                  </h3>
                  <span className="text-xs font-mono text-[#ED1C24]">
                    Group 0{idx + 1}
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-[#A7ACB8]">
                      <Check className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. HOW IT WORKS (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Execution sequence</Kicker>
            <h2 className="type-h2 text-[#111215]">
              How we launch and scale your {content.shortLabel.toLowerCase()} system
            </h2>
            <p className="type-body text-[#454954]">
              Four structured phases from initial technical audit to monthly growth and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-xl bg-white border border-[#D5D8E0] space-y-4 shadow-2xs relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-[#111215]">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F4F5F7] text-[#717684]">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#111215]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#454954] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. PROOF & CASE STUDY (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="steel"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Verified results</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Real proof in {content.shortLabel.toLowerCase()}
            </h2>
            <p className="type-body text-[#454954]">
              We run real brands and live client codebases — not synthetic mockups.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-white border border-[#E4E6EB] shadow-xs space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E4E6EB] pb-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                  Featured Case Study
                </span>
                <h3 className="font-display text-2xl font-bold text-[#111215]">
                  {content.proof.brandName}
                </h3>
                <p className="text-sm text-[#717684]">{content.proof.tagline}</p>
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
              {content.proof.context}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {content.proof.bulletPoints.map((bp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#111215]">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bp}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. PRICING SNAPSHOT (Signal Red with Notch & Watermark)
         ========================================================================= */}
      <Section
        surface="red"
        previousSurface="porcelain"
        notch
        watermark="monogram"
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-6">
            <Kicker>Transparent investment</Kicker>
            <h2 className="type-h2 text-white font-bold">
              {content.pricingNote.headline}
            </h2>
            <p className="text-base md:text-lg text-white font-semibold leading-relaxed max-w-2xl">
              {content.pricingNote.subline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href={content.pricingNote.ctaHref} variant="secondary" size="lg">
                {content.pricingNote.ctaLabel}
              </Button>
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          7. TOOLS & PLATFORMS (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="red"
        notch
        grid
        spacing="compact"
      >
        <Container>
          <div className="space-y-6 text-center">
            <span className="text-xs font-semibold text-[#A7ACB8] uppercase tracking-wider block">
              Core platforms & integrations we build on:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {content.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-[#F5F6F8]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          8. FAQ ACCORDION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading={`Frequently asked questions about ${content.shortLabel.toLowerCase()} marketing`}
        subtitle="Transparent answers regarding implementation timelines, ad spend, and expected results."
        faqs={content.faqs}
        surface="porcelain"
        previousSurface="graphite"
        notch
      />

      {/* =========================================================================
          9. RELATED SERVICES (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Modular delivery</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Related services for {content.shortLabel.toLowerCase()}
            </h2>
            <p className="type-body text-[#454954]">
              Combine individual services or integrate them into our monthly growth packages.
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
                    {rel.shortOutcome}
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
          10. FINAL CTA SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="steel" />
    </div>
  );
}
