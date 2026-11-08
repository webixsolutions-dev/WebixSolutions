import { Section, type SurfaceType } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { INTERIOR } from "@/content/interior";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface FinalCtaSectionProps {
  nextSlot?: NextSlotResult;
  previousSurface?: SurfaceType;
}

export function FinalCtaSection({ previousSurface = "porcelain" }: FinalCtaSectionProps) {
  return (
    <Section surface="oxblood" previousSurface={previousSurface} notch className="interior-closing" spacing="compact">
      <Container>
        <div className="interior-closing-panel studio-cut-frame">
          <div className="space-y-3">
            <h2 className="type-h1 text-white">{INTERIOR.closing.title}</h2>
            <p className="type-lead text-[#f3dce1]">{INTERIOR.closing.detail}</p>
          </div>
          <Button href="/book-a-call/" variant="primary" size="lg" className="interior-closing-button">Book a strategy call</Button>
        </div>
      </Container>
    </Section>
  );
}
