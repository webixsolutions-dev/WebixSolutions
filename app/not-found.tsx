import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { CutFrame } from "@/components/ui/cut-frame";
import { getPublishedServices } from "@/content/services";

export default function NotFound() {
  const popularServices = getPublishedServices().slice(0, 6);

  return (
    <Section surface="graphite" spacing="hero" grid>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Kicker>Page not found (404)</Kicker>
            <h1 className="type-h1 text-white">
              This page has moved or no longer exists
            </h1>
            <p className="type-lead text-[#A7ACB8] max-w-xl">
              If you followed an older link from search, use the shortcuts below
              to reach our core services or book a free strategy call with our
              team.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/" variant="primary">
                Back to home page
              </Button>
              <Button href="/book-a-call/" variant="secondary">
                Book a strategy call
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CutFrame innerClassName="p-6 md:p-8 space-y-4">
              <p className="font-display text-lg font-semibold text-white">
                Core services
              </p>
              <ul className="divide-y divide-white/10 text-sm">
                {popularServices.map((srv) => (
                  <li key={srv.slug} className="py-2.5">
                    <Link
                      href={`/${srv.slug}/`}
                      className="flex items-center justify-between text-[#A7ACB8] hover:text-white transition-colors"
                    >
                      <span>{srv.name}</span>
                      <span className="text-xs text-[#ED1C24] font-medium">
                        Explore
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CutFrame>
          </div>
        </div>
      </Container>
    </Section>
  );
}
