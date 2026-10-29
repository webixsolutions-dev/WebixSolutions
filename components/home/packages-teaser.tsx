import * as React from "react";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { FLAGSHIP_OFFERS } from "@/content/pricing";
import { isConfirmed } from "@/content/site-facts";

/**
 * Home Section 6 — Packages Teaser on Carbon Graphite (#141519) per Correction #4.
 * Respects `offer.confirmed` flags: if a price is not yet confirmed for public display,
 * renders the package scope and a direct strategy-call quote prompt.
 */
export function PackagesTeaser() {
  const teaserOffers = FLAGSHIP_OFFERS.filter((o) =>
    ["launch-kit", "growth-engine", "ai-automation-sprint"].includes(o.id)
  );

  return (
    <Section surface="graphite" previousSurface="porcelain" notch grid>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Kicker>Clear scopes & packages</Kicker>
            <h2 className="type-h2 text-white">
              Packaged for fast launch or ongoing monthly growth
            </h2>
            <p className="type-body text-[#A7ACB8]">
              Start with a 14-day website launch kit, a 10-day AI automation
              sprint, or an all-in-one monthly growth team. Ad spend is always
              paid directly to the platforms by you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/offers/" variant="primary" size="sm">
              Compare all 4 packages
            </Button>
            <Button href="/pricing/" variant="secondary" size="sm">
              Full pricing breakdown
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {teaserOffers.map((offer) => {
            const showPrice = isConfirmed(offer.confirmed);
            return (
              <CutFrame
                key={offer.id}
                cutSize="lg"
                className={
                  offer.featured
                    ? "bg-[#ED1C24] p-[1.5px]"
                    : "bg-[var(--border)]"
                }
                innerClassName="p-6 md:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[#A7ACB8]">
                      {offer.deliveryTime}
                    </span>
                    {offer.badge && (
                      <Chip asSpan active={ Boolean(offer.featured) }>
                        {offer.badge}
                      </Chip>
                    )}
                  </div>

                  <div>
                    <h3 className="type-h3 text-white">{offer.name}</h3>
                    <div className="mt-2">
                      {showPrice ? (
                        <span className="font-metric text-3xl md:text-4xl text-white">
                          {offer.priceDisplay}
                        </span>
                      ) : (
                        <span className="font-display text-lg font-semibold text-[#ED1C24]">
                          Quoted after a 30-minute call
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#A7ACB8] leading-relaxed">
                    {offer.whoItsFor}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-white/10 text-sm text-[#F5F6F8]">
                    {offer.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check
                          strokeWidth={1.75}
                          className="h-4 w-4 shrink-0 text-[#ED1C24] mt-0.5"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <p className="text-xs text-[#6C7280] leading-relaxed">
                    {offer.guardrails}
                  </p>
                  <Button
                    href="/book-a-call/"
                    variant={offer.featured ? "primary" : "secondary"}
                    size="sm"
                    className="w-full"
                  >
                    Book a strategy call
                  </Button>
                </div>
              </CutFrame>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
