import { Section, type SurfaceType } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface FinalCtaSectionProps {
  nextSlot?: NextSlotResult;
  previousSurface?: SurfaceType;
}

export function FinalCtaSection({ previousSurface = "porcelain" }: FinalCtaSectionProps) {
  return (
    <Section surface="oxblood" previousSurface={previousSurface} notch>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="type-h1 text-white">Let’s talk about your project.</h2>
            <p className="type-lead text-[#f3dce1]">Choose a date and time for a free call with our team.</p>
          </div>
          <Button href="/book-a-call/" variant="primary" size="lg">Book a strategy call</Button>
        </div>
      </Container>
    </Section>
  );
}
