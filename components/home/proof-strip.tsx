import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SITE_FACTS } from "@/content/site-facts";

/**
 * Home Section 2 — Proof Strip on Warm Porcelain (#F4F5F7) with top-left notch.
 * Displays ONLY confirmed stats from content/site-facts.ts.
 */
export function ProofStrip() {
  const confirmedStats = [
    SITE_FACTS.stats.customCodedBuilds,
    SITE_FACTS.stats.cmsWebsitesBuilt,
    SITE_FACTS.stats.totalClientsServed,
    SITE_FACTS.stats.socialAccountsManaged,
    SITE_FACTS.stats.teamSize,
  ].filter((s) => s.confirmed);

  return (
    <Section
      surface="porcelain"
      previousSurface="graphite"
      notch
      spacing="compact"
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {confirmedStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-[#ED1C24] pl-4 space-y-1"
            >
              <div className="font-metric text-3xl md:text-4xl text-[#111215]">
                {stat.value}
              </div>
              <div className="font-display text-sm font-semibold text-[#111215]">
                {stat.label}
              </div>
              {stat.detail && (
                <p className="text-xs text-[#454954] leading-snug">
                  {stat.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
