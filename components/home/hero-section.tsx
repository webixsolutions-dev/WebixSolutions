import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { GrowthConsole } from "@/components/home/growth-console";
import { HOME_CONTENT } from "@/content/home";
import { getHomeProofSignals } from "@/content/home-proof";
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
  const signals = getHomeProofSignals(nextSlot);

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
