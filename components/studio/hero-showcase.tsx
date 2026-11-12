import { getHomeProofSignals } from "@/content/home-proof";
import type { NextSlotResult } from "@/lib/booking/next-slot";
import { ProofBoard } from "./proof-board";

type HeroShowcaseProps = { nextSlot: NextSlotResult; platforms: readonly string[]; markets: readonly string[] };

export function HeroShowcase({ nextSlot, platforms, markets }: HeroShowcaseProps) {
  return (
    <div className="studio-showcase" data-hero-stage>
      <span className="studio-showcase-slab" data-hero-slab aria-hidden="true" />
      <div data-hero-card>
        <ProofBoard signals={getHomeProofSignals(nextSlot)} platforms={platforms} markets={markets} />
      </div>
    </div>
  );
}
