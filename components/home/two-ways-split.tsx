import * as React from "react";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/content/home";

/**
 * Home Section 8 — Two Ways to Work With Us on Cool Steel (#E4E6EB) per Correction #4.
 * Asymmetric split: 8 columns for Businesses, 4 columns for Agencies & IT Companies (white-label).
 */
export function TwoWaysSplit() {
  const { forBusinesses, forAgencies } = HOME_CONTENT.twoWays;

  return (
    <Section surface="steel" previousSurface="porcelain" notch>
      <Container>
        <div className="max-w-2xl space-y-3">
          <Kicker>{HOME_CONTENT.twoWays.kicker}</Kicker>
          <h2 className="type-h2">{HOME_CONTENT.twoWays.h2}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 8 Columns: For Businesses */}
          <div className="lg:col-span-7">
            <CutFrame
              cutSize="lg"
              innerClassName="p-6 md:p-9 h-full flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <Chip asSpan active>
                  {forBusinesses.badge}
                </Chip>
                <h3 className="type-h2 text-[#111215]">
                  {forBusinesses.title}
                </h3>
                <p className="type-body text-[#454954]">
                  {forBusinesses.description}
                </p>
                <ul className="space-y-2.5 pt-2 text-sm text-[#111215]">
                  {forBusinesses.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check
                        strokeWidth={1.75}
                        className="h-4 w-4 shrink-0 text-[#C8101A] mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#111215]/10">
                <Button href={forBusinesses.ctaHref} variant="primary">
                  {forBusinesses.ctaLabel}
                </Button>
              </div>
            </CutFrame>
          </div>

          {/* 4 Columns: For Agencies & IT Companies (White-Label) */}
          <div className="lg:col-span-5">
            <div
              data-surface="graphite"
              className="cut-tr-lg bg-[#141519] text-[#F5F6F8] p-6 md:p-9 h-full flex flex-col justify-between gap-6 border border-[#111215]/15"
            >
              <div className="space-y-4">
                <Chip asSpan>{forAgencies.badge}</Chip>
                <h3 className="type-h3 text-white">{forAgencies.title}</h3>
                <p className="text-sm text-[#A7ACB8] leading-relaxed">
                  {forAgencies.description}
                </p>
                <ul className="space-y-2.5 pt-2 text-sm text-[#F5F6F8]">
                  {forAgencies.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check
                        strokeWidth={1.75}
                        className="h-4 w-4 shrink-0 text-[#ED1C24] mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Button
                  href={forAgencies.ctaHref}
                  variant="secondary"
                  className="w-full"
                >
                  {forAgencies.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
