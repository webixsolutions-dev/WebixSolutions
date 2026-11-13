"use client";

import { OFFER_FAQS } from "@/content/pricing";

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
import { INTERIOR } from "@/content/interior";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import {
  FLAGSHIP_OFFERS,
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



export function OffersLandingView({ nextSlot }: OffersLandingViewProps) {
  // Fire analytical events on CTA click
  const trackCtaClick = (offerName: string) => {
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
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
            <Kicker>Websites, growth and automation</Kicker>

            <h1 className="type-display text-white">
              Growth packages for businesses
            </h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              {INTERIOR.offers.lead}
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
                Choose a one-time project or monthly support
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Ad spend is paid directly to the platforms
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
                      {offer.confirmed ? offer.priceDisplay : "Custom quote"}
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
                      What’s included
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
            <Kicker>Package comparison</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Compare package scopes
            </h2>
            <p className="type-body text-[#454954]">
              Compare the type of support and the main focus of each package before you request a quote.
            </p>
          </div>

          <div className="rounded-xl border border-[#D5D8E0] bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#D5D8E0] bg-[#F8F9FA] text-[#717684] text-xs font-semibold uppercase tracking-wider">
                    <th scope="col" className="p-4 sm:p-5">Package</th>
                    <th scope="col" className="p-4 sm:p-5">Engagement</th>
                    <th scope="col" className="p-4 sm:p-5">Best fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E6EB]">
                  {FLAGSHIP_OFFERS.map((offer) => (
                    <tr key={offer.id}>
                      <th scope="row" className="p-4 sm:p-5 font-semibold text-[#111215]">{offer.name}</th>
                      <td className="p-4 sm:p-5 whitespace-nowrap">{offer.billingType === "monthly" ? "Monthly support" : "One-time project"}</td>
                      <td className="p-4 sm:p-5">{offer.whoItsFor}</td>
                    </tr>
                  ))}
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
                Engineering team
              </span>
              <div className="font-display text-3xl font-bold text-white">
                1,402 contributions
              </div>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                Made across 96 Next.js, React, Node.js and Flutter repositories over the last 12 months with clean architectural hygiene.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
                Speed Benchmarks
              </span>
              <div className="font-display text-3xl font-bold text-white">
                Performance checks
              </div>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                We review mobile performance and test key actions before handover.
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
              How we launch your new website and prepare the website and marketing work in four phases.
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
        faqs={OFFER_FAQS}
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
