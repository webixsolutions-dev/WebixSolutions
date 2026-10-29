"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import { HOME_CONTENT } from "@/content/home";
import { isConfirmed } from "@/content/site-facts";

/**
 * Home Section 7 — How We Work on Warm Porcelain (#F4F5F7).
 * 4 numbered steps per docs/02 & Correction #3:
 * 01 Strategy call -> 02 Plan & proposal -> 03 Build & launch -> 04 Report & improve monthly.
 * 1px red connecting line draws once when scrolled into view.
 */
export function HowWeWork() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [lineDrawn, setLineDrawn] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const show48h = isConfirmed(HOME_CONTENT.howWeWork.proposal48hConfirmed);

  return (
    <Section surface="porcelain" previousSurface="graphite" notch>
      <Container>
        <div ref={sectionRef}>
          <div className="max-w-2xl space-y-3">
            <Kicker>{HOME_CONTENT.howWeWork.kicker}</Kicker>
            <h2 className="type-h2">{HOME_CONTENT.howWeWork.h2}</h2>
            <p className="type-body text-[#454954]">
              {HOME_CONTENT.howWeWork.lead}
            </p>
          </div>

          <div className="relative mt-12">
            {/* 1px Red Connecting Line on Desktop — Draws Once on Scroll */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-0 right-0 top-9 h-[1px] bg-[#111215]/10 overflow-hidden"
            >
              <div
                className={cn(
                  "h-full bg-[#ED1C24] origin-left transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  lineDrawn ? "scale-x-100" : "scale-x-0"
                )}
              />
            </div>

            <ol className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOME_CONTENT.howWeWork.steps.map((step) => {
                const desc =
                  step.number === "02" && show48h && "confirmed48hDescription" in step
                    ? step.confirmed48hDescription
                    : step.description;

                return (
                  <li key={step.number}>
                    <CutFrame innerClassName="p-6 h-full flex flex-col justify-between gap-4">
                      <div className="space-y-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center bg-[#C8101A] text-white font-metric text-base cut-tr-sm">
                          {step.number}
                        </div>
                        <h3 className="type-h3 text-[#111215]">{step.title}</h3>
                        <p className="text-sm text-[#454954] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </CutFrame>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
