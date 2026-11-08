import { GrowthConsole } from "@/components/home/growth-console";
import { getHomeProofSignals } from "@/content/home-proof";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export function HeroShowcase({ nextSlot }: { nextSlot: NextSlotResult }) {
  return (
    <div className="studio-showcase" data-hero-stage>
      <div data-hero-tilt>
        <div data-hero-card>
          <GrowthConsole signals={getHomeProofSignals(nextSlot)} />
        </div>
      </div>
    </div>
  );
}
