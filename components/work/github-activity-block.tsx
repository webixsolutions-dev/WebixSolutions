import * as React from "react";
import Link from "next/link";
import { GitBranch, GitCommit, GitPullRequest, ArrowUpRight } from "lucide-react";

export function GithubActivityBlock() {
  // Generate 52 weeks x 7 days static contribution tiles with realistic distribution
  const weeks = 52;
  const days = 7;

  // Pseudo-random deterministic intensity based on index (0 = none, 1 = low, 2 = med, 3 = high)
  const getIntensity = (w: number, d: number) => {
    const val = (w * 13 + d * 7 + 19) % 100;
    if (val < 25) return 0;
    if (val < 55) return 1;
    if (val < 85) return 2;
    return 3;
  };

  const colors = [
    "bg-white/[0.04]", // 0
    "bg-[#ED1C24]/30", // 1
    "bg-[#ED1C24]/60", // 2
    "bg-[#ED1C24]", // 3
  ];

  return (
    <div className="p-8 md:p-10 rounded-2xl bg-[#141519] border border-white/12 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
              Verified Developer Activity
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">
            1,053 Contributions across 91 Repositories
          </h3>
          <p className="text-xs text-[#A7ACB8]">
            Next.js, React, Node.js and Flutter codebases committed by our in-house engineering campus over the past 12 months.
          </p>
        </div>

        <a
          href="https://github.com/webixsolutions-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-colors shrink-0"
        >
          <span>View GitHub Organization</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#ED1C24]" />
        </a>
      </div>

      {/* Contribution Grid */}
      <div className="space-y-3">
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[720px]">
            {Array.from({ length: weeks }).map((_, w) =>
              Array.from({ length: days }).map((_, d) => {
                const intensity = getIntensity(w, d);
                return (
                  <div
                    key={`${w}-${d}`}
                    className={`h-2.5 w-2.5 rounded-2xs ${colors[intensity]} transition-colors`}
                    title={`Week ${w + 1}, Day ${d + 1}`}
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#A7ACB8] pt-1">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <GitCommit className="h-3.5 w-3.5 text-[#ED1C24]" />
              <span>Clean Git Commits</span>
            </span>
            <span className="flex items-center gap-1.5">
              <GitBranch className="h-3.5 w-3.5 text-[#16A34A]" />
              <span>Staging Pull Requests</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <span className="h-2.5 w-2.5 rounded-2xs bg-white/[0.04]" />
            <span className="h-2.5 w-2.5 rounded-2xs bg-[#ED1C24]/30" />
            <span className="h-2.5 w-2.5 rounded-2xs bg-[#ED1C24]/60" />
            <span className="h-2.5 w-2.5 rounded-2xs bg-[#ED1C24]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
