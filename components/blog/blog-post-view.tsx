"use client";

import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { BlogPost } from "@/content/blog/types";
import { BrandSocialIcon } from "@/components/layout/social-icons";
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Share2,
  Bookmark,
} from "lucide-react";

export interface BlogPostViewProps {
  post: BlogPost;
}

export function BlogPostView({ post }: BlogPostViewProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. POST HERO & ANSWER-FIRST INTRO (Porcelain)
         ========================================================================= */}
      <Section surface="porcelain" className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb nav */}
            <div className="flex items-center gap-2 text-xs text-[#717684]">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/blogs/" className="hover:underline">Blog</Link>
              <span>/</span>
              <span className="text-[#C8101A] font-medium">{post.category}</span>
            </div>

            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FAF0F0] text-[#C8101A] font-bold uppercase tracking-wider text-[11px] inline-block">
                {post.category}
              </span>

              <h1 className="type-display text-[#111215]">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#717684] pt-1 border-b border-[#E4E6EB] pb-5">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#121214] text-white flex items-center justify-center text-[10px] font-bold">
                    {post.author.avatarText}
                  </div>
                  <span className="font-semibold text-[#111215]">{post.author.name}</span>
                </div>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readingTimeMinutes} min read</span>
                </span>
                <span>•</span>
                <span>Last updated: {post.lastUpdated}</span>
              </div>
            </div>

            {/* Answer-First Box */}
            <div className="p-6 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-2">
              <div className="text-xs font-bold text-[#C8101A] uppercase tracking-wider">
                Direct Answer at a Glance
              </div>
              <p className="type-lead text-[#111215] font-medium">
                {post.answerFirst}
              </p>
            </div>

            {/* Key Takeaways Box (3 Bullets) */}
            <div className="p-6 rounded-xl bg-[#FAF0F0] border border-[#ED1C24]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C8101A] uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-[#ED1C24]" />
                <span>Key Takeaways for Decision-Makers</span>
              </div>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#111215]">
                    <CheckCircle2 className="h-4 w-4 text-[#C8101A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. TABLE OF CONTENTS & ARTICLE BODY (Porcelain)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="porcelain" spacing="compact">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Table of Contents */}
            {post.tableOfContents.length > 0 && (
              <div className="p-6 rounded-xl bg-[#F9FAFB] border border-[#E4E6EB] space-y-3">
                <div className="text-xs font-bold text-[#111215] uppercase tracking-wider">
                  Table of Contents
                </div>
                <ul className="space-y-1.5 text-xs">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a
                        href={`#${toc.id}`}
                        className="text-[#454954] hover:text-[#ED1C24] transition-colors inline-flex items-center gap-2"
                      >
                        <span className="text-[#C8101A]">→</span>
                        <span>{toc.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Body Sections */}
            <div className="space-y-12">
              {post.contentSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
                  <h2 className="type-h2 text-[#111215]">{sec.heading}</h2>

                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx} className="type-body text-[#454954] leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Optional Table */}
                  {sec.table && (
                    <div className="my-6 overflow-x-auto rounded-lg border border-[#E4E6EB]">
                      <table className="w-full text-xs text-left divide-y divide-[#E4E6EB]">
                        {sec.table.caption && (
                          <caption className="p-3 text-[11px] font-semibold text-[#717684] bg-[#F9FAFB] text-left">
                            {sec.table.caption}
                          </caption>
                        )}
                        <thead className="bg-[#F4F5F7] text-[#111215] font-bold">
                          <tr>
                            {sec.table.headers.map((h, i) => (
                              <th key={i} className="p-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E4E6EB] bg-white">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#F9FAFB] transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 text-[#454954]">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional Bullets */}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-2 pl-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-[#454954]">
                          <span className="text-[#ED1C24] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Related Service CTA Card */}
            <div className="p-8 rounded-xl bg-[#121214] text-white space-y-4">
              <div className="text-xs font-bold text-[#ED1C24] uppercase tracking-wider">
                Partner with Webix Solutions
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Looking to implement this strategy in your business?
              </h3>
              <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-xl">
                Our in-house engineers, marketers, and AI specialists manage complete delivery on your local time zone with written proposals in 48 hours.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button href={`/${post.relatedServiceSlug}/`} variant="primary" size="default">
                  {post.relatedServiceCtaLabel}
                </Button>
                <Button href="/book-a-call/" variant="secondary" size="default">
                  Book a strategy call
                </Button>
              </div>
            </div>

            {/* Author Box */}
            <div className="p-6 rounded-xl border border-[#E4E6EB] bg-white flex flex-col sm:flex-row gap-5 items-start">
              <div className="h-14 w-14 rounded-full bg-[#121214] text-white flex items-center justify-center font-display font-bold text-lg shrink-0">
                {post.author.avatarText}
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-[#111215]">
                    {post.author.name}
                  </h4>
                  <a
                    href={post.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#ED1C24] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <BrandSocialIcon name="linkedin" className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <p className="text-xs text-[#717684] font-medium">
                  {post.author.role}
                </p>
                <p className="text-xs text-[#454954] leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. FAQ ACCORDION (Steel with Notch)
         ========================================================================= */}
      {post.faqs.length > 0 && (
        <FaqSection
          kicker="Common questions"
          heading="Frequently asked questions about this guide"
          subtitle="Direct answers on implementation, timelines, and technical requirements."
          faqs={post.faqs}
          surface="steel"
          previousSurface="porcelain"
          notch
        />
      )}

      {/* =========================================================================
          4. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection previousSurface={post.faqs.length > 0 ? "steel" : "porcelain"} />
    </div>
  );
}
