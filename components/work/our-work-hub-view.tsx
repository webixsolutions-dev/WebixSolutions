"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CutFrame } from "@/components/ui/cut-frame";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { GithubActivityBlock } from "./github-activity-block";
import { OwnBrandsBand } from "./own-brands-band";
import type { WorkEntry, WorkCategory } from "@/content/work";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface OurWorkHubViewProps {
  entries: WorkEntry[];
  nextSlot: NextSlotResult;
}

const CATEGORIES: WorkCategory[] = [
  "All",
  "Websites",
  "E-commerce",
  "Custom software & CRM",
  "AI & automation",
];

const PLATFORMS = [
  "Next.js",
  "React",
  "Shopify",
  "WordPress",
  "Node.js",
  "Flutter",
  "WooCommerce",
  "PostgreSQL",
  "Tailwind CSS",
  "Meta Ads CAPI",
  "Google Ads",
  "OpenAI API",
];

export function OurWorkHubView({ entries, nextSlot }: OurWorkHubViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<WorkCategory>("All");

  const filteredEntries =
    selectedCategory === "All"
      ? entries
      : entries.filter((e) => e.category === selectedCategory);

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
                <span aria-current="page" className="text-white font-medium">
                  Our Work
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>Commercial portfolio & case studies</Kicker>

            <h1 className="type-display text-white">Our work</h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              Case studies from 91 custom-coded builds, 50+ CMS websites and 50+ managed social accounts: websites, Shopify, CRM, AI agents and ad campaigns.
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
                91 Custom builds · 1,053 GitHub commits · 60+ Clients
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Only real commercial results and verified own-brand metrics
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. CASE STUDIES DIRECTORY + FILTER (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          {/* Category Filter Pills */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#717684] uppercase tracking-wider">
                Filter by discipline:
              </span>
              <span className="text-xs text-[#717684]">
                Showing {filteredEntries.length} published case studies
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#ED1C24] text-white border-[#ED1C24]"
                      : "bg-white text-[#454954] border-[#D5D8E0] hover:border-[#111215] hover:text-[#111215]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Stacked Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredEntries.map((study) => (
              <div
                key={study.slug}
                className="group p-8 md:p-10 rounded-2xl bg-white border border-[#E4E6EB] hover:border-[#ED1C24] transition-all shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F4F5F7] text-[#ED1C24]">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-[#717684]">
                      {study.country}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-[#111215] group-hover:text-[#ED1C24] transition-colors leading-snug">
                    {study.title}
                  </h2>

                  <p className="text-sm text-[#454954] leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Highlight Metric */}
                  {study.results[0] && (
                    <div className="p-4 rounded-xl bg-[#FAF0F0] border border-[#F5C2C4] flex items-center justify-between">
                      <div>
                        <div className="font-display text-2xl font-bold text-[#C8101A]">
                          {study.results[0].value}
                        </div>
                        <div className="text-xs text-[#454954] font-medium mt-0.5">
                          {study.results[0].label}
                        </div>
                      </div>
                      <span className="text-[11px] text-[#717684] italic max-w-[140px] text-right">
                        {study.results[0].source}
                      </span>
                    </div>
                  )}

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F4F5F7] text-[#454954]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4E6EB] flex items-center justify-between">
                  <span className="text-xs text-[#717684]">
                    {study.permission === "named" ? "Public Brand Proof" : "Anonymized Client Delivery"}
                  </span>
                  <Link
                    href={`/our-work/${study.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ED1C24] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Own Brands Band */}
          <OwnBrandsBand />
        </Container>
      </Section>

      {/* =========================================================================
          3. GITHUB ACTIVITY & CODEBASE STATS (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="porcelain"
        notch
        grid
        spacing="default"
      >
        <Container>
          <GithubActivityBlock />

          {/* Platform Marquee */}
          <div className="pt-12 text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A7ACB8]">
              Enterprise frameworks and tools we build on:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {PLATFORMS.map((plat) => (
                <span
                  key={plat}
                  className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-[#F5F6F8]"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. FINAL CTA SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="graphite" />
    </div>
  );
}
