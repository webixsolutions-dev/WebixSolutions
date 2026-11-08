import Image from "next/image";
import type { WorkEntry } from "@/content/work";

export function ProjectCover({ study, sizes = "(max-width: 767px) 92vw, 48vw" }: { study: WorkEntry; sizes?: string }) {
  if (!study.cover) return null;
  return (
    <div className="studio-cover" data-project={study.slug}>
      <Image src={study.cover} alt="" fill sizes={sizes} unoptimized={study.cover.endsWith(".svg")} data-studio-cover />
      <span aria-hidden="true">{study.category}</span>
    </div>
  );
}
