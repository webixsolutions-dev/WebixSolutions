"use client";

import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { BlogPost, BlogCategory } from "@/content/blog/types";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  User,
  Sparkles,
} from "lucide-react";

export interface BlogIndexViewProps {
  posts: BlogPost[];
  currentPage?: number;
  totalPages?: number;
}

const CATEGORIES: Array<"All" | BlogCategory> = [
  "All",
  "SEO & Search",
  "E-Commerce",
  "AI & Automation",
  "Growth & Marketing",
  "Web Development",
];

export function BlogIndexView({
  posts,
  currentPage = 1,
  totalPages = 1,
}: BlogIndexViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<"All" | BlogCategory>("All");

  const filteredPosts = React.useMemo(() => {
    if (selectedCategory === "All") return posts;
    return posts.filter((p) => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. HERO & CATEGORY SELECTOR (Graphite)
         ========================================================================= */}
      <Section surface="graphite" className="pt-24 pb-12">
        <Container>
          <div className="max-w-3xl space-y-4 mb-10">
            <Kicker>Engineering & growth insights</Kicker>
            <h1 className="type-display text-white">The Webix Solutions Blog</h1>
            <p className="type-lead text-[#9CA3AF]">
              Technical guides, verified data benchmarks, and implementation frameworks across custom web architecture, SEO, performance marketing, and enterprise AI automation.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10 pt-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#C8101A] text-white shadow-xs"
                      : "bg-white/[0.05] text-[#9CA3AF] hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. FEATURED POST & ARTICLE GRID (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="graphite" notch spacing="default">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="p-12 text-center text-[#717684]">
              No articles found in this category.
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post Card */}
              {featuredPost && (
                <Link
                  href={`/${featuredPost.slug}/`}
                  className="group block cut-tr-lg border border-[#E4E6EB] bg-white p-7 sm:p-10 shadow-xs hover:border-[#ED1C24] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0F0] text-[#C8101A] font-bold uppercase tracking-wider text-[10px]">
                          {featuredPost.category}
                        </span>
                        <span className="text-[#717684]">•</span>
                        <span className="text-[#717684] inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{featuredPost.readingTimeMinutes} min read</span>
                        </span>
                        <span className="text-[#717684]">•</span>
                        <span className="text-[#717684]">{featuredPost.lastUpdated}</span>
                      </div>

                      <h2 className="type-h2 text-[#111215] group-hover:text-[#ED1C24] transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="type-body text-[#454954] line-clamp-3">
                        {featuredPost.answerFirst}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <div className="h-7 w-7 rounded-full bg-[#121214] text-white flex items-center justify-center text-[10px] font-bold">
                          {featuredPost.author.avatarText}
                        </div>
                        <span className="text-xs font-semibold text-[#111215]">
                          {featuredPost.author.name}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E4E6EB] pt-6 lg:pt-0 lg:pl-8 space-y-4">
                      <div className="space-y-2">
                        <span className="text-[11px] font-semibold text-[#717684] uppercase tracking-wider block">
                          Key Takeaways:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#454954]">
                          {featuredPost.keyTakeaways.map((takeaway, i) => (
                            <li key={i} className="line-clamp-2">
                              • {takeaway}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-xs font-semibold text-[#ED1C24] inline-flex items-center gap-1.5 pt-2">
                        <span>Read full technical article</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid of Remaining Posts */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gridPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/${post.slug}/`}
                      className="group p-6 rounded-xl bg-white border border-[#E4E6EB] hover:border-[#ED1C24] shadow-xs flex flex-col justify-between space-y-4 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#717684]">
                          <span className="px-2 py-0.5 rounded-full bg-[#FAF0F0] text-[#C8101A] font-bold uppercase tracking-wider text-[9px]">
                            {post.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px]">
                            <Clock className="h-3 w-3" />
                            <span>{post.readingTimeMinutes} min</span>
                          </span>
                        </div>

                        <h3 className="font-display text-base font-bold text-[#111215] group-hover:text-[#ED1C24] transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs text-[#454954] line-clamp-3 leading-relaxed">
                          {post.answerFirst}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E4E6EB] flex items-center justify-between text-xs">
                        <span className="text-[11px] text-[#717684]">
                          {post.author.name}
                        </span>
                        <span className="font-semibold text-[#ED1C24] inline-flex items-center gap-1">
                          <span>Read</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* =========================================================================
          3. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection previousSurface="porcelain" />
    </div>
  );
}
