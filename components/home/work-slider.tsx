"use client";

import * as React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Chip } from "@/components/ui/chip";
import { CutFrame } from "@/components/ui/cut-frame";
import { Button, ArrowUpRightIcon } from "@/components/ui/button";
import {
  WORK_CATEGORIES,
  type WorkCategory,
  type WorkEntry,
} from "@/content/work";
import { SITE_FACTS } from "@/content/site-facts";

export interface WorkSliderProps {
  publishedEntries: WorkEntry[];
}

const VERIFIED_DELIVERY_TRACKS = [
  {
    id: "track-code",
    category: "Websites" as const,
    metric: "91",
    unit: "Custom-coded builds & repositories",
    title: "Next.js, React, Node.js and Flutter builds",
    detail:
      "1,053 contributions in the last 12 months across 91 repositories — custom marketing sites, web apps, portals and mobile MVPs.",
    stack: ["Next.js", "React", "Node.js", "Flutter", "TypeScript"],
    href: "https://github.com/webixsolutions-dev",
    external: true,
    ctaLabel: "Inspect GitHub organization",
  },
  {
    id: "track-cms",
    category: "E-commerce" as const,
    metric: "50+",
    unit: "CMS websites & stores delivered",
    title: "WordPress, WooCommerce, Shopify, Wix, Webflow & Squarespace",
    detail:
      "Conversion-focused service websites and e-commerce storefronts built for easy internal editing, fast mobile load times and clean technical SEO.",
    stack: ["Shopify", "WordPress", "WooCommerce", "Webflow", "Wix"],
    href: "/web-design-development-service/",
    external: false,
    ctaLabel: "Web & store development",
  },
  {
    id: "track-social",
    category: "Social media" as const,
    metric: "50+",
    unit: "Social media accounts managed",
    title: "Content calendars, short-form reels & community management",
    detail:
      "Ongoing social media planning, graphic design, video editing and publishing across Instagram, Facebook, TikTok and LinkedIn.",
    stack: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Reels"],
    href: "/social-media-management/",
    external: false,
    ctaLabel: "Social media management",
  },
  {
    id: "track-ai",
    category: "AI & automation" as const,
    metric: "24/7",
    unit: "AI agents & workflow automations",
    title: "Chatbots, voice receptionists & CRM pipelines",
    detail:
      "Custom AI assistants and n8n/Make workflows that answer website and WhatsApp leads, qualify callers and keep your CRM updated.",
    stack: ["OpenAI", "n8n", "Make", "WhatsApp API", "CRM"],
    href: "/ai-automation-services/",
    external: false,
    ctaLabel: "AI automation services",
  },
];

/**
 * Home Section 5 — Selected Work on Warm Porcelain (#F4F5F7).
 * Uses Embla carousel with filter chips and cut-corner cards.
 * Only `published: true` entries from `content/work/` are passed in, so fake "Sample"
 * placeholders never appear in production. When 0 case studies have `published: true`,
 * the slider renders the verified engineering & delivery tracks from `site-facts.ts`.
 */
export function WorkSlider({ publishedEntries }: WorkSliderProps) {
  const [selectedCategory, setSelectedCategory] =
    React.useState<WorkCategory>("All");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const hasPublishedCaseStudies = publishedEntries.length > 0;

  const filteredCaseStudies = React.useMemo(() => {
    if (selectedCategory === "All") return publishedEntries;
    return publishedEntries.filter((e) => e.category === selectedCategory);
  }, [publishedEntries, selectedCategory]);

  const filteredVerifiedTracks = React.useMemo(() => {
    if (selectedCategory === "All") return VERIFIED_DELIVERY_TRACKS;
    const matches = VERIFIED_DELIVERY_TRACKS.filter(
      (t) => t.category === selectedCategory
    );
    return matches.length > 0 ? matches : VERIFIED_DELIVERY_TRACKS;
  }, [selectedCategory]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section surface="porcelain" previousSurface="red" notch>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Kicker>Selected work & verified output</Kicker>
            <h2 className="type-h2">
              Built in-house across {SITE_FACTS.stats.customCodedBuilds.value}{" "}
              custom-coded repositories and{" "}
              {SITE_FACTS.stats.cmsWebsitesBuilt.value} CMS sites
            </h2>
            <p className="type-body text-[#454954]">
              Every project is designed, coded and tested by our{" "}
              {SITE_FACTS.stats.teamSize.label}. Client names are published only
              with written permission.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous work slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111215]/15 bg-white text-[#111215] hover:border-[#ED1C24] hover:text-[#ED1C24] transition-colors"
            >
              <ChevronLeft strokeWidth={1.5} className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next work slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111215]/15 bg-white text-[#111215] hover:border-[#ED1C24] hover:text-[#ED1C24] transition-colors"
            >
              <ChevronRight strokeWidth={1.5} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Chips (Full Pills) */}
        <div
          role="group"
          aria-label="Filter work by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {WORK_CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Chip>
          ))}
        </div>

        {/* Embla Slider Viewport */}
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {hasPublishedCaseStudies
              ? filteredCaseStudies.map((entry) => (
                  <div
                    key={entry.slug}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 pl-6"
                  >
                    <CutFrame
                      cutSize="lg"
                      innerClassName="p-6 md:p-8 h-full flex flex-col justify-between gap-6"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#454954]">
                          <span className="font-medium text-[#C8101A]">
                            {entry.descriptor}
                          </span>
                          <span>{entry.country}</span>
                        </div>
                        <h3 className="type-h3 text-[#111215]">
                          {entry.title}
                        </h3>
                        <p className="text-sm text-[#454954] leading-relaxed">
                          {entry.summary}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {entry.stack.map((tech) => (
                            <Chip key={tech} asSpan>
                              {tech}
                            </Chip>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-[#111215]/10">
                          <Link
                            href={`/our-work/${entry.slug}/`}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-[#111215] hover:text-[#C8101A]"
                          >
                            <span>Read case study</span>
                            <ArrowUpRightIcon />
                          </Link>
                        </div>
                      </div>
                    </CutFrame>
                  </div>
                ))
              : filteredVerifiedTracks.map((track) => (
                  <div
                    key={track.id}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 pl-6"
                  >
                    <CutFrame
                      cutSize="lg"
                      innerClassName="p-6 md:p-8 h-full flex flex-col justify-between gap-6"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#C8101A]">
                            {track.category} · Verified track record
                          </span>
                        </div>
                        <div className="flex items-baseline gap-3 pt-1">
                          <span className="font-metric text-4xl md:text-5xl text-[#111215]">
                            {track.metric}
                          </span>
                          <span className="text-sm font-medium text-[#454954]">
                            {track.unit}
                          </span>
                        </div>
                        <h3 className="type-h3 text-[#111215]">
                          {track.title}
                        </h3>
                        <p className="text-sm text-[#454954] leading-relaxed">
                          {track.detail}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {track.stack.map((tech) => (
                            <Chip key={tech} asSpan>
                              {tech}
                            </Chip>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-[#111215]/10">
                          {track.external ? (
                            <a
                              href={track.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 text-sm font-medium text-[#111215] hover:text-[#C8101A]"
                            >
                              <span>{track.ctaLabel}</span>
                              <ArrowUpRightIcon />
                            </a>
                          ) : (
                            <Link
                              href={track.href}
                              className="group inline-flex items-center gap-2 text-sm font-medium text-[#111215] hover:text-[#C8101A]"
                            >
                              <span>{track.ctaLabel}</span>
                              <ArrowUpRightIcon />
                            </Link>
                          )}
                        </div>
                      </div>
                    </CutFrame>
                  </div>
                ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#454954]">
            Want to see live walkthroughs relevant to your industry? We share
            staging and live examples on our strategy call.
          </p>
          <Button href="/our-work/" variant="secondary" size="sm">
            Explore our work hub
          </Button>
        </div>
      </Container>
    </Section>
  );
}
