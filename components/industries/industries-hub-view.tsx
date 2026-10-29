"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { IndustryEntry } from "@/content/industries";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface IndustriesHubViewProps {
  industries: IndustryEntry[];
  nextSlot: NextSlotResult;
}

const FAQS = [
  {
    question: "Do you specialise in one single industry?",
    answer:
      "No. While we have deep specialised playbooks for e-commerce, home-service contractors and real estate, our engineering and paid acquisition systems are built on universal unit economics: fast websites, strict lead qualification, frictionless tracking, and automated follow-up. We pair our technical framework with your domain expertise.",
  },
  {
    question: "Have you worked with businesses in my exact niche?",
    answer:
      "Across 91 repositories and 60+ clients, our in-house team has delivered projects for online retailers, roofers, electrical contractors, equipment leasing companies, real estate developers, healthcare clinics, and B2B consultancies across North America, the UAE, and Pakistan. On our strategy call, we share relevant live examples and case studies.",
  },
  {
    question: "Do you work with early-stage startups and new businesses?",
    answer:
      "Yes. For new ventures, we recommend focused 14-day launch sprints — such as a 5-page custom Next.js or Shopify store paired with local Google Maps setup or paid search tests — so you can validate demand before committing to heavy monthly retainers.",
  },
  {
    question: "How do you tailor your marketing strategies to local market regulations?",
    answer:
      "Our team complies strictly with regional data protection and advertising rules: CASL and PIPEDA in Canada, CAN-SPAM and A2P 10DLC in the US, WhatsApp Business policies and PDPL in the UAE, and regional consumer guidelines across Pakistan.",
  },
];

export function IndustriesHubView({ industries, nextSlot }: IndustriesHubViewProps) {
  const [selectedSlug, setSelectedSlug] = React.useState<string>(industries[0]?.slug || "ecommerce");

  const activeIndustry = industries.find((i) => i.slug === selectedSlug) || industries[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (Graphite)
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
                <span aria-current="page" className="text-white font-medium">
                  Industries
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>Domain-specific execution</Kicker>

            <h1 className="type-display text-white">
              Industries we serve
            </h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              Marketing, websites and AI automation built around how your customers actually buy — engineered by our 20+ person in-house team across 14 distinct commercial verticals.
            </p>

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
                14 Targeted commercial sectors
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Select an industry below to view common bottlenecks and delivery playbooks
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          INTERACTIVE SELECTOR + DETAIL PANEL (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          {/* Horizontal Industry Selector Bar */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#717684] uppercase tracking-wider">
                Select industry vertical:
              </span>
              <span className="text-xs text-[#717684]">
                Scroll horizontally on mobile
              </span>
            </div>

            <div className="overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin">
              <div className="flex items-center gap-2 min-w-max">
                {industries.map((ind) => {
                  const isSelected = ind.slug === selectedSlug;
                  return (
                    <button
                      key={ind.slug}
                      type="button"
                      onClick={() => setSelectedSlug(ind.slug)}
                      className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-150 flex items-center gap-2 border ${
                        isSelected
                          ? "bg-[#ED1C24] text-white border-[#ED1C24] shadow-xs"
                          : "bg-white text-[#454954] border-[#D5D8E0] hover:border-[#111215] hover:text-[#111215]"
                      }`}
                    >
                      <span>{ind.shortLabel}</span>
                      {ind.hasDedicatedPage && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isSelected
                              ? "bg-white/20 text-white font-semibold"
                              : "bg-[#F4F5F7] text-[#ED1C24] font-medium"
                          }`}
                        >
                          W1 Page
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Industry Panel */}
          {activeIndustry && (
            <div className="p-8 md:p-12 rounded-2xl bg-white border border-[#E4E6EB] shadow-sm space-y-10 animate-fade-in">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E4E6EB] pb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F5F7] text-xs font-semibold text-[#ED1C24]">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{activeIndustry.shortLabel} Playbook</span>
                    </span>
                    {activeIndustry.hasDedicatedPage && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#16A34A] font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                        <span>Comprehensive guide available</span>
                      </span>
                    )}
                  </div>
                  <h2 className="type-h2 text-[#111215]">{activeIndustry.name}</h2>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {activeIndustry.hasDedicatedPage ? (
                    <Button
                      href={`/industries/${activeIndustry.slug}/`}
                      variant="primary"
                      size="default"
                    >
                      <span>View full {activeIndustry.shortLabel} guide</span>
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  ) : (
                    <Button href="/book-a-call/" variant="primary" size="default">
                      Book a strategy call
                    </Button>
                  )}
                  <Button href="/offers/" variant="secondary" size="default">
                    Explore packages
                  </Button>
                </div>
              </div>

              {/* Struggles vs Solutions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* What usually goes wrong */}
                <div className="p-6 md:p-8 rounded-xl bg-[#F8F9FA] border border-[#E4E6EB] space-y-4">
                  <div className="flex items-center gap-2 text-[#C8101A]">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <h3 className="font-display text-base font-semibold text-[#111215]">
                      What usually holds back {activeIndustry.shortLabel} businesses
                    </h3>
                  </div>
                  <p className="text-xs text-[#717684]">
                    Common operational and commercial pitfalls we routinely resolve:
                  </p>
                  <ul className="space-y-3.5 pt-2">
                    {activeIndustry.struggles.map((struggle, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#454954]">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#ED1C24] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{struggle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we set up */}
                <div className="p-6 md:p-8 rounded-xl bg-white border border-[#D5D8E0] space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#16A34A]">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <h3 className="font-display text-base font-semibold text-[#111215]">
                      What the Webix team engineers & manages
                    </h3>
                  </div>
                  <p className="text-xs text-[#717684]">
                    Our direct implementation stack for this vertical:
                  </p>
                  <ul className="space-y-3.5 pt-2">
                    {activeIndustry.whatWeDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#111215]">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#16A34A] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Relevant Services & Proof Note */}
              <div className="pt-6 border-t border-[#E4E6EB] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#717684] uppercase tracking-wider block">
                    Core services combined for this vertical:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.relevantServiceSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/${slug}/`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F4F5F7] border border-[#E4E6EB] text-xs font-medium text-[#454954] hover:border-[#ED1C24] hover:text-[#ED1C24] transition-colors"
                      >
                        <span>{slug.replace(/-/g, " ")}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                {activeIndustry.proofNote && (
                  <div className="p-4 rounded-lg bg-[#FAF0F0] border border-[#F5C2C4] max-w-md">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C8101A] mb-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Verified proof point</span>
                    </div>
                    <p className="text-xs text-[#454954] leading-relaxed">
                      {activeIndustry.proofNote.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Hidden All-Industries Static Output for Search Engines (SSR Crawlers) */}
          <div className="sr-only" aria-hidden="true">
            {industries.map((ind) => (
              <article key={ind.slug}>
                <h3>{ind.name}</h3>
                <p>{ind.shortLabel}</p>
                <div>
                  <h4>Common struggles:</h4>
                  <ul>
                    {ind.struggles.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Our solutions:</h4>
                  <ul>
                    {ind.whatWeDo.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          CONSULTATIVE SCOPING SECTION (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="p-8 md:p-12 rounded-xl bg-white border border-[#D5D8E0] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <Kicker>Cross-industry engineering</Kicker>
              <h2 className="type-h2 text-[#111215]">
                Don't see your exact industry vertical listed?
              </h2>
              <p className="type-body text-[#454954]">
                While client businesses vary, high-performance digital foundations remain consistent: sub-2.5s website load times, frictionless inquiry forms, transparent ad tracking, and instant automated response. Schedule a discovery call and our team will map out a bespoke strategy for your niche.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/services/" variant="secondary" size="lg">
                Browse all 18 services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          FAQ ACCORDION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Industry FAQs"
        heading="Frequently asked questions about our industry coverage"
        subtitle="How our Pakistani engineering and marketing team delivers results across different sectors."
        faqs={FAQS}
        surface="porcelain"
        previousSurface="steel"
        notch
      />

      {/* =========================================================================
          FINAL CTA SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </div>
  );
}
