import Image from "next/image";
import { buildMetadata } from "@/config/seo";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CardSurface } from "@/components/ui/card-surface";
import { Chip } from "@/components/ui/chip";
import { Kicker } from "@/components/ui/kicker";

export const metadata = buildMetadata({
  title: "Signal Design System | Webix Solutions",
  description: "The Webix Solutions styleguide for the Signal palette, typography and shared components.",
  path: "/styleguide/",
  noindex: true,
});

const tokens = [
  ["signal", "#ED1C24"], ["signal-ink", "#C8101A"], ["ember", "#FF5A60"],
  ["oxblood", "#4A0A0E"], ["ink", "#0E0E10"], ["ink-2", "#17171B"],
  ["ink-3", "#222228"], ["paper", "#FFFFFF"], ["paper-2", "#F3F3F5"],
  ["text-dim", "#A6A6B0"], ["text-mute", "#5C5F69"],
];

export default function StyleguidePage() {
  return (
    <>
      <Section surface="graphite" spacing="hero">
        <Container className="space-y-4">
          <Kicker>Design system</Kicker>
          <h1 className="type-h1">Signal</h1>
          <p className="type-lead text-[var(--text-secondary)]">A red, black and white identity built around the Webix Solutions logo. Clash Grotesk sets the headings, and Switzer carries the copy.</p>
          <dl className="grid grid-cols-2 gap-3 pt-5 sm:grid-cols-4 lg:grid-cols-6">
            {tokens.map(([name, hex]) => (
              <div className="rounded-xl bg-[var(--ink-2)] p-3" key={name}>
                <div className="mb-3 h-12 rounded-lg" style={{ backgroundColor: hex }} aria-hidden="true" />
                <dt className="font-medium">{name}</dt><dd className="text-sm text-[var(--text-secondary)]">{hex}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
      <Section surface="porcelain">
        <Container className="space-y-6">
          <h2 className="type-h2">Cards, buttons and inputs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <CardSurface innerClassName="space-y-4 p-6">
              <h3 className="type-h3">Action controls</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/book-a-call/">Book a free call</Button>
                <Button href="/our-work/" variant="secondary">See our work</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip asSpan active>Websites</Chip><Chip asSpan>CRM & portals</Chip><Chip asSpan>AI & automation</Chip>
              </div>
              <label className="block text-sm font-medium">Email address
                <input className="mt-1 block min-h-11 w-full rounded-[10px] border border-black/15 bg-white px-3" type="email" placeholder="you@company.com" />
              </label>
            </CardSurface>
            <figure className="signal-chamfer relative min-h-64 overflow-hidden">
              <Image fill src="/images/studio/camz.webp" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" alt="Cleaner wiping a kitchen counter" />
            </figure>
          </div>
        </Container>
      </Section>
      <Section surface="oxblood" spacing="compact">
        <Container className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="type-h2">The closing call to action</h2>
          <Button href="/book-a-call/">Book a free call</Button>
        </Container>
      </Section>
    </>
  );
}
