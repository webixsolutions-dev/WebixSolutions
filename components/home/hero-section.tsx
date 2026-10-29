import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import {
  GrowthConsole,
  type GrowthSignalItem,
} from "@/components/home/growth-console";
import { HOME_CONTENT } from "@/content/home";
import { SITE_FACTS, isConfirmed } from "@/content/site-facts";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface HeroSectionProps {
  nextSlot: NextSlotResult;
}

/**
 * Home Section 1 — Hero on Graphite (#141519) with the Growth Console and
 * pre-rendered 3D monogram backdrop (/public/images/hero-monogram.avif placeholder + oxblood glow).
 * No WebGL.
 */
export function HeroSection({ nextSlot }: HeroSectionProps) {
  const adMetric = SITE_FACTS.adResults[0];

  // Ordered signals:
  // 1) Zelvomart — Rs 15.01 per WhatsApp conversation
  // 2) AI receptionist flow
  // 3) 1,053 contributions across 91 repositories
  // 4) Next open strategy call (WhatsApp/email fallback in production until booking is live)
  const candidateSignals: GrowthSignalItem[] = [
    {
      id: "signal-ads",
      kicker: "Zelvomart e-commerce campaign",
      metricValue: adMetric.metricValue,
      title: "Cost per WhatsApp conversation",
      detail:
        "64 WhatsApp conversations generated at Rs 15.01 each in the last 30 days for our own brand, Zelvomart.",
      sourceLabel: "Source: Meta Ads Manager (last 30 days)",
      href: "/paid-advertising-services/",
      linkLabel: "Paid advertising services",
      confirmed: isConfirmed(adMetric.confirmed),
    },
    {
      id: "signal-ai",
      kicker: "AI systems in production",
      metricValue: "24/7",
      title: "AI receptionist that answers, qualifies and books",
      detail:
        "Website and WhatsApp chatbots, AI phone receptionists and Google Maps lead engines built with OpenAI, n8n and Make.",
      sourceLabel: "Source: Production AI deployments",
      href: "/ai-automation-services/",
      linkLabel: "AI automation services",
      confirmed: true,
    },
    {
      id: "signal-github",
      kicker: "Verified GitHub engineering activity",
      metricValue: SITE_FACTS.stats.githubContributionsLastYear.value,
      title: "Contributions across 91 repositories",
      detail:
        "1,053 contributions in the last 12 months across 91 Next.js, React, Node.js and Flutter repositories.",
      sourceLabel: "Source: github.com/webixsolutions-dev",
      href: "/our-work/",
      linkLabel: "Explore our work",
      confirmed: isConfirmed(
        SITE_FACTS.stats.githubContributionsLastYear.confirmed
      ),
    },
    {
      id: "signal-slot",
      kicker: "Next open strategy call",
      title: "30-minute video call with our team",
      detail:
        "Discuss your website, marketing or AI workflow goals directly with our team on your time zone.",
      sourceLabel: "Direct video call with our team",
      href: "/book-a-call/",
      linkLabel: "Book this call",
      slotData: nextSlot,
      confirmed: true,
    },
    {
      id: "signal-shifts",
      kicker: "Two daily shifts across 5 markets",
      metricValue: "5 markets",
      title: "Day and night shifts overlapping your business hours",
      detail:
        "Our night shift (9:00 PM to 5:00 AM PKT) overlaps North American business hours; our day shift (from 9:00 AM PKT) overlaps the UAE.",
      sourceLabel: "Canada, US, UAE, New Zealand and Pakistan",
      href: "/contact-us/",
      linkLabel: "See working hours",
      confirmed: isConfirmed(SITE_FACTS.stats.marketsServedCount.confirmed),
    },
  ];

  const signals = candidateSignals.filter((s) => s.confirmed).slice(0, 4);

  return (
    <Section surface="graphite" spacing="hero" grid className="relative">
      {/* Oxblood radial glow + pre-rendered 3D monogram backdrop (No WebGL) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(600px at 72% 38%, rgba(237, 28, 36, 0.22), rgba(90, 11, 16, 0.08) 45%, transparent 70%)",
        }}
      >
        {/* Pre-rendered 3D Monogram Artwork Placeholder (/images/hero-monogram.avif) */}
        <div
          data-placeholder="/images/hero-monogram.avif"
          className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[480px] md:w-[580px] opacity-25 hidden lg:block"
        >
          <img
            src="/images/hero-monogram.svg"
            alt=""
            width={580}
            height={480}
            decoding="async"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left 7 Columns: Answer-first Hero Copy */}
          <div className="lg:col-span-7 space-y-6 animate-hero-rise">
            <Kicker>{HOME_CONTENT.hero.kicker}</Kicker>
            <h1 className="type-display text-white max-w-[16ch]">
              {HOME_CONTENT.hero.h1}
            </h1>
            <p className="type-lead text-[#A7ACB8] max-w-[54ch]">
              {HOME_CONTENT.hero.lead}
            </p>
            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button
                href={HOME_CONTENT.hero.primaryCta.href}
                variant="primary"
                size="lg"
                className="w-full min-[480px]:w-auto"
              >
                {HOME_CONTENT.hero.primaryCta.label}
              </Button>
              <Button
                href={HOME_CONTENT.hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full min-[480px]:w-auto"
              >
                {HOME_CONTENT.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right 5 Columns: Proof at a glance */}
          <div className="lg:col-span-5">
            <GrowthConsole signals={signals} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
