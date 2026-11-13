import Link from "next/link";
import { INTERIOR } from "@/content/interior";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { GithubActivityBlock } from "./github-activity-block";
import { OwnBrandsBand } from "./own-brands-band";
import { WorkDirectory } from "./work-directory";
import { WORK_CATEGORIES, type WorkEntry } from "@/content/work";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface OurWorkHubViewProps {
  entries: WorkEntry[];
  nextSlot: NextSlotResult;
}

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
              {INTERIOR.work.lead}
            </p>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="#work-directory" variant="secondary" size="lg">
                Browse projects
              </Button>
            </div>

            <dl className="interior-proof-strip">
              {INTERIOR.work.stats.map((stat) => (
                <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. CASE STUDIES DIRECTORY + FILTER (Porcelain with Notch)
         ========================================================================= */}
      <Section
        id="work-directory"
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <WorkDirectory entries={entries} categories={WORK_CATEGORIES.filter((item) => item === "All" || entries.some((entry) => entry.category === item))} />

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
