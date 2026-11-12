import { ArrowUpRight, GitFork } from "lucide-react";
import { SITE_FACTS } from "@/content/site-facts";

export function GithubActivityBlock() {
  const { githubContributionsLastYear, customCodedBuilds } = SITE_FACTS.stats;

  return (
    <div className="studio-engineering-card studio-cut-frame">
      <div className="studio-engineering-header">
        <span className="studio-chip"><GitFork size={16} aria-hidden="true" /> GitHub activity</span>
        <span>November 2026 snapshot</span>
      </div>
      <h2 className="type-h2 mt-4">The engineering behind our work</h2>
      <dl className="studio-engineering-metrics">
        <div><dt>Contributions in the reporting year</dt><dd>{githubContributionsLastYear.value}</dd></div>
        <div><dt>Repositories in that snapshot</dt><dd>{githubContributionsLastYear.repositoryCount}</dd></div>
      </dl>
      <p className="mb-4 text-[var(--text-secondary)]">{customCodedBuilds.value} custom-coded builds using Next.js, React, Node.js and Flutter.</p>
      <div className="studio-engineering-pattern" aria-hidden="true" />
      <a className="studio-link self-start" href={SITE_FACTS.socials.github} target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16} /></a>
    </div>
  );
}
