"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/studio/project-cover";
import type { WorkCategory, WorkEntry } from "@/content/work";

export function WorkDirectory({ entries, categories }: { entries: WorkEntry[]; categories: WorkCategory[] }) {
  const [category, setCategory] = useState<WorkCategory>("All");
  const count = category === "All" ? entries.length : entries.filter((entry) => entry.category === category).length;

  return (
    <section aria-labelledby="work-directory-title" className="work-directory">
      <div className="work-directory-header">
        <h2 id="work-directory-title" className="type-h2">Explore our projects</h2>
        <p aria-live="polite">{count} {count === 1 ? "project" : "projects"}</p>
      </div>
      <div className="work-directory-filters" role="group" aria-label="Filter projects by discipline">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={item === category} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="work-directory-grid">
        {entries.map((study) => (
          <article key={study.slug} hidden={category !== "All" && category !== study.category} className="work-directory-card">
            <ProjectCover study={study} sizes="(min-width: 1440px) 402px, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 94vw" />
            <div className="work-directory-card-copy">
              <p className="work-directory-meta">
                <span>{study.category}</span>
                {study.country && <span>{study.country}</span>}
              </p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              {study.results[0] && (
                <p className="work-directory-result"><strong>{study.results[0].value}</strong> {study.results[0].label}</p>
              )}
              <div className="work-directory-card-footer">
                <span>{study.scopeOnly ? "Anonymised project · Illustration" : study.coverCaption ?? (study.permission === "anonymised" ? "Anonymised project" : "")}</span>
                {!study.scopeOnly && (
                  <Link href={`/our-work/${study.slug}/`} aria-label={`Read the ${study.title} case study`}>
                    Read case study <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
