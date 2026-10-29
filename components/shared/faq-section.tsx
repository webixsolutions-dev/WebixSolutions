import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Section, type SurfaceType } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import type { ServiceFaq } from "@/content/services";

export interface FaqSectionProps {
  kicker?: string;
  heading?: string;
  subtitle?: string;
  faqs: readonly ServiceFaq[] | ServiceFaq[];
  surface?: SurfaceType;
  previousSurface?: SurfaceType;
  notch?: boolean;
}

/**
 * Home Section 10 (and reusable FAQ section) — Uses native <details>/<summary>
 * so 100% of questions and answers exist in the initial server-rendered HTML
 * for GPTBot, ClaudeBot, PerplexityBot and Googlebot, with zero client JS needed.
 */
export function FaqSection({
  kicker = "Frequently asked questions",
  heading = "Direct answers on pricing, timelines, time zones and ownership",
  subtitle,
  faqs,
  surface = "porcelain",
  previousSurface = "graphite",
  notch = true,
}: FaqSectionProps) {
  return (
    <Section
      surface={surface}
      previousSurface={previousSurface}
      notch={notch}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            <Kicker>{kicker}</Kicker>
            <h2 className="type-h2">{heading}</h2>
            {subtitle && (
              <p className="type-body text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => (
              <CutFrame key={faq.question} innerClassName="p-0">
                <details
                  open={idx === 0}
                  className="group p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base md:text-lg font-medium text-[var(--text-primary)]">
                    <span>{faq.question}</span>
                    <ChevronDown
                      strokeWidth={1.5}
                      className="h-5 w-5 shrink-0 text-[#C8101A] transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="mt-3 pt-3 border-t border-[var(--border)] text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </CutFrame>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
