"use client";

import * as React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Calendar,
  Clock,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import {
  FLAGSHIP_OFFERS,
  MARKET_COMPARISON_RANGES,
} from "@/content/pricing";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface OffersLandingViewProps {
  nextSlot: NextSlotResult;
}

const FIRST_30_DAYS = [
  {
    phase: "Days 1–3",
    title: "Onboarding & Strategy Kickoff",
    detail: "Technical audit of current website, competitor research, keyword mapping, ad accounts access, and brand voice definition.",
  },
  {
    phase: "Days 4–10",
    title: "Website Build & Creative Sprint",
    detail: "Next.js/Shopify design & development sprint, CAPI tracking setup, first batch of 12 social posts + 4 reels scripted and designed.",
  },
  {
    phase: "Days 11–14",
    title: "Staging Review & Site Launch",
    detail: "Client staging walkthrough, DNS cutover, Google Business Profile optimization, and local citation submissions.",
  },
  {
    phase: "Days 15–30",
    title: "Ad Deployment & Continuous Optimization",
    detail: "Launch of Meta/Google ad campaigns, weekly social publishing schedule, review response automation, and month-1 growth reporting.",
  },
];

const FAQS = [
  {
    question: "What is the minimum term commitment for the $399/month Growth Engine?",
    answer:
      "The Growth Engine package carries a 6-month minimum agreement. This structure allows us to build or completely redesign your 5-page custom website in month 1 (a deliverable normally valued at $1,500+) with zero upfront development fees, amortizing that technical investment across 6 months of active marketing management.",
  },
  {
    question: "What if I already have an existing website?",
    answer:
      "A complete modern redesign is already included in month 1 at no extra charge! If your current website is already fast, modern, and high-converting, we instead dedicate those engineering hours to conversion rate optimization (CRO), building high-ticket landing pages, or configuring advanced tracking pipelines.",
  },
  {
    question: "Which advertising platforms are included in the monthly management?",
    answer:
      "The $399/mo Growth Engine includes dedicated management for one core paid channel (Meta Ads or Google Search/Maps). Growth Engine Pro ($799/mo) covers multi-channel execution across both Meta and Google Ads, managing up to $4,000/month in client ad spend.",
  },
  {
    question: "Who writes the content, captions, and designs the creative assets?",
    answer:
      "Our in-house team handles 100% of the creative and copywriting work. Designers, video editors, and senior copywriters collaborate directly on your account under senior review. You simply approve the batch before it goes live.",
  },
  {
    question: "What happens after the initial 6-month agreement concludes?",
    answer:
      "After 6 months, full website ownership and source code transfer 100% to your business. You can continue on a flexible month-to-month basis with 30 days notice, upgrade to Growth Engine Pro, or scale back to a standalone website care plan.",
  },
  {
    question: "Can I upgrade or downgrade my package as our business grows?",
    answer:
      "Yes. You can upgrade from the Launch Kit to the Growth Engine at any time, or scale from Growth Engine to Pro as your monthly advertising budget expands.",
  },
];

export function OffersLandingView({ nextSlot }: OffersLandingViewProps) {
  // Fire analytical events on CTA click
  const trackCtaClick = (offerName: string) => {
    if (typeof window !== "undefined") {
      const w = window as any;
      if (typeof w.gtag === "function") {
        w.gtag("event", "select_promotion", {
          promotion_name: offerName,
          creative_slot: "offers_page",
        });
      }
      if (typeof w.fbq === "function") {
        w.fbq("track", "InitiateCheckout", {
          content_name: offerName,
        });
      }
    }
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          1. SIMPLIFIED LANDING HERO (Graphite)
         ========================================================================= */}
      <Section surface="graphite" spacing="hero" grid className="relative">
        <Container>
          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider">
                Integrated Growth Packages
              </span>
              <Kicker>Zero Freelancer Chains</Kicker>
            </div>

            <h1 className="type-display text-white">
              Growth packages for businesses that want results, not reports
            </h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              Website build or redesign, ongoing social media management, paid ads, and Google Maps — executed by one unified 20+ person team from $399/month.
            </p>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button
                href="/book-a-call/"
                variant="primary"
                size="lg"
                onClick={() => trackCtaClick("hero_book_call")}
              >
                Book a free strategy call
              </Button>
              <Button
                href="#packages"
                variant="secondary"
                size="lg"
              >
                Compare packages
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                60+ Clients · 91 Builds · CA, US, UAE, NZ & PK
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Ad spend paid directly to platforms · Fast 14-day turnaround
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. THE FOUR FLAGSHIP PACKAGES (Porcelain with Notch)
         ========================================================================= */}
      <Section
        id="packages"
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Predictable pricing</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Choose the right growth engine for your stage
            </h2>
            <p className="type-body text-[#454954]">
              Four structured solutions with zero hidden markups. From fast 14-day launch kits to full-stack multi-channel dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {FLAGSHIP_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className={`p-7 rounded-2xl bg-white border flex flex-col justify-between space-y-6 shadow-xs relative ${
                  offer.featured
                    ? "border-[#ED1C24] ring-2 ring-[#ED1C24]/20"
                    : "border-[#E4E6EB]"
                }`}
              >
                {offer.featured && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#ED1C24] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    Most Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#717684]">
                      {offer.badge}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#111215]">
                      {offer.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1 pt-1 border-t border-[#E4E6EB]">
                    <span className="font-display text-3xl font-bold text-[#111215]">
                      {offer.priceDisplay}
                    </span>
                    {offer.minTerm && (
                      <span className="text-[11px] text-[#717684] block mt-0.5">
                        ({offer.minTerm})
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#454954] leading-relaxed">
                    {offer.whoItsFor}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E4E6EB]">
                    <span className="text-[11px] font-semibold text-[#717684] uppercase tracking-wider block">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5">
                      {offer.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#111215]">
                          <Check className="h-3.5 w-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E4E6EB]">
                  <p className="text-[10px] text-[#717684] italic leading-tight">
                    {offer.guardrails}
                  </p>
                  <Button
                    href="/book-a-call/"
                    variant={offer.featured ? "primary" : "secondary"}
                    size="default"
                    className="w-full"
                    onClick={() => trackCtaClick(offer.id)}
                  >
                    Select {offer.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. COST COMPARISON TABLE (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Market economics</Kicker>
            <h2 className="type-h2 text-[#111215]">
              What it would cost to hire this separately
            </h2>
            <p className="type-body text-[#454954]">
              Typical North American digital agency retainer rates versus our integrated Growth Engine package.
            </p>
          </div>

          <div className="rounded-xl border border-[#D5D8E0] bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#D5D8E0] bg-[#F8F9FA] text-[#717684] text-xs font-semibold uppercase tracking-wider">
                    <th scope="col" className="p-4 sm:p-5">Individual Service Deliverable</th>
                    <th scope="col" className="p-4 sm:p-5">Typical US / Canada Agency Rate</th>
                    <th scope="col" className="p-4 sm:p-5 text-[#C8101A]">Webix Growth Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E6EB]">
                  {MARKET_COMPARISON_RANGES.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F8F9FA]/50 transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-[#111215]">
                        {row.roleOrService}
                      </td>
                      <td className="p-4 sm:p-5 font-mono text-[#717684]">
                        {row.typicalUsCaRange}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-[#16A34A] flex items-center gap-1.5">
                        <Check className="h-4 w-4" />
                        <span>{row.webixGrowthEngine}</span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#FAF0F0] font-bold text-[#111215]">
                    <td className="p-4 sm:p-5">Total Estimated Monthly Investment</td>
                    <td className="p-4 sm:p-5 font-mono text-[#C8101A]">$2,350 – $5,000+ / mo</td>
                    <td className="p-4 sm:p-5 font-display text-lg text-[#16A34A]">$399 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. PROOF & VERIFIED SIGNALS (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="steel"
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Demonstrated delivery</Kicker>
            <h2 className="type-h2 text-white">
              Verified commercial results across real accounts
            </h2>
            <p className="type-lead text-[#A7ACB8]">
              No inflated claims. Proven outcomes backed by verified campaign metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
                Own Retail Store · Pakistan
              </span>
              <div className="font-display text-3xl font-bold text-white">
                Rs 15.01
              </div>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                64 verified customer WhatsApp conversations generated for our own retail brand Zelvomart in a 30-day verified campaign.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#16A34A]">
                Engineering Campus
              </span>
              <div className="font-display text-3xl font-bold text-white">
                1,053 Commits
              </div>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                Pushed across 91 Next.js, React, Node.js and Flutter repositories over the last 12 months with clean architectural hygiene.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
                Speed Benchmarks
              </span>
              <div className="font-display text-3xl font-bold text-white">
                &lt; 2.0s LCP
              </div>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                Server-rendered Next.js architectures with static edge caching, zero heavy theme plugins, and responsive image optimizations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. FIRST 30 DAYS TIMELINE (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Clear roadmap</Kicker>
            <h2 className="type-h2 text-[#111215]">
              What happens in your first 30 days
            </h2>
            <p className="type-body text-[#454954]">
              How we launch your new website and kickstart multi-channel lead acquisition in four seamless phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FIRST_30_DAYS.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C8101A] px-2 py-0.5 rounded bg-[#FAF0F0]">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-base font-semibold text-[#111215]">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-[#454954] leading-relaxed">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. FAQ ACCORDION (Steel with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Common questions about our growth packages"
        subtitle="Transparent terms regarding contract lengths, ad budgets, and ownership transfers."
        faqs={FAQS}
        surface="steel"
        previousSurface="porcelain"
        notch
      />

      {/* =========================================================================
          7. INLINE BOOKING SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="steel" />
    </div>
  );
}
