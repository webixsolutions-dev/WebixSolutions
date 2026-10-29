import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { BeforeAfterSlider } from "./before-after-slider";
import type { WorkEntry } from "@/content/work";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface CaseStudyTemplateProps {
  study: WorkEntry;
  nextSlot: NextSlotResult;
}

export function CaseStudyTemplate({ study, nextSlot }: CaseStudyTemplateProps) {
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
                  href="/our-work/"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Our Work
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/20">/</span>
                <span aria-current="page" className="text-white font-medium">
                  {study.slug}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider">
                {study.category}
              </span>
              <span className="text-xs font-mono text-[#A7ACB8]">
                {study.descriptor}
              </span>
            </div>

            <h1 className="type-display text-white">{study.title}</h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              {study.summary}
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
                Verified Commercial Case Study
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Delivered by Webix in-house engineering campus
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. METRICS SHOWCASE (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((res, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-2"
              >
                <div className="font-display text-3xl font-bold text-[#C8101A]">
                  {res.value}
                </div>
                <div className="font-display text-base font-semibold text-[#111215]">
                  {res.label}
                </div>
                <p className="text-xs text-[#717684] italic pt-1 border-t border-[#E4E6EB]">
                  {res.source}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. CHALLENGE & SOLUTION (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 p-8 rounded-xl bg-[#FAF0F0] border border-[#F5C2C4] space-y-4">
              <div className="flex items-center gap-2 text-[#C8101A]">
                <AlertCircle className="h-5 w-5" />
                <h2 className="font-display text-lg font-bold text-[#111215]">
                  The Challenge
                </h2>
              </div>
              <p className="text-sm text-[#454954] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="lg:col-span-7 p-8 rounded-xl bg-white border border-[#D5D8E0] space-y-5 shadow-2xs">
              <div className="flex items-center gap-2 text-[#16A34A]">
                <CheckCircle2 className="h-5 w-5" />
                <h2 className="font-display text-lg font-bold text-[#111215]">
                  What We Engineered & Shipped
                </h2>
              </div>
              <ul className="space-y-3.5">
                {study.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#111215]">
                    <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. BEFORE / AFTER COMPARISON (Porcelain with Notch)
         ========================================================================= */}
      {study.beforeAfter && (
        <Section
          surface="porcelain"
          previousSurface="steel"
          notch
          spacing="default"
        >
          <Container>
            <BeforeAfterSlider data={study.beforeAfter} />
          </Container>
        </Section>
      )}

      {/* =========================================================================
          5. TECH STACK (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface={study.beforeAfter ? "porcelain" : "steel"}
        notch
        grid
        spacing="compact"
      >
        <Container>
          <div className="space-y-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A7ACB8]">
              Technologies deployed in this project:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. RELATED SERVICES (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-8">
            <Kicker>Core services</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Services featured in this case study
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {study.services.map((serviceSlug) => (
              <Link
                key={serviceSlug}
                href={`/${serviceSlug}/`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#D5D8E0] hover:border-[#ED1C24] transition-colors text-sm font-medium text-[#111215]"
              >
                <span>{serviceSlug.replace(/-/g, " ")}</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#ED1C24]" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          7. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="steel" />
    </div>
  );
}
