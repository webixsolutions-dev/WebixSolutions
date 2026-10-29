import * as React from "react";
import { Section, type SurfaceType } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { HOME_CONTENT } from "@/content/home";
import { SITE_FACTS } from "@/content/site-facts";
import { BookingWidget } from "@/components/booking/booking-widget";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface FinalCtaSectionProps {
  nextSlot?: NextSlotResult;
  previousSurface?: SurfaceType;
}

/**
 * Section — Final CTA on Deep Oxblood (#5A0B10) — used strictly ONCE per page (Correction #4).
 * Embeds <BookingWidget variant="compact" /> (allowed glass surface #3 in docs/05).
 * Rule (Correction #2): In production without Google Calendar credentials, shows the
 * WhatsApp/email fallback — never fake slots.
 */
export function FinalCtaSection({
  previousSurface = "porcelain",
}: FinalCtaSectionProps) {
  return (
    <Section surface="oxblood" previousSurface={previousSurface} notch>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Columns: Pitch & Direct Actions */}
          <div className="lg:col-span-7 space-y-5">
            <Kicker>{HOME_CONTENT.finalCta.kicker}</Kicker>
            <h2 className="type-h1 text-white">
              {HOME_CONTENT.finalCta.h2}
            </h2>
            <p className="type-lead text-[#E2C6C8] max-w-xl">
              {HOME_CONTENT.finalCta.lead}
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a free strategy call
              </Button>
              <a
                href={SITE_FACTS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 cut-tr-sm border border-white/25 bg-white/[0.08] px-6 text-base font-medium text-white hover:border-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp {SITE_FACTS.contact.phoneDisplay}</span>
              </a>
            </div>
            <div className="pt-2 text-xs text-[#E2C6C8] flex flex-wrap items-center gap-4">
              <span>• Coordinated shifts (Canada, US, UAE, NZ & PK)</span>
              <span>• Scope & quote within 48 hours</span>
              <span>• Zero sales fluff</span>
            </div>
          </div>

          {/* Right 5 Columns: Compact Interactive Booking Widget (Allowed Glass Surface #3) */}
          <div className="lg:col-span-5">
            <BookingWidget variant="compact" sourcePage="Final CTA Section" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
