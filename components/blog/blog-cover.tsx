import Image from "next/image";
import type { BlogPost } from "@/content/blog/types";

export function BlogCover({ cover, sizes, eager = false }: {
  cover: BlogPost["cover"];
  sizes: string;
  eager?: boolean;
}) {
  return (
    <div className="relative aspect-[40/21] overflow-hidden bg-[#e4e6eb]">
      <Image src={cover.path} alt={cover.alt} fill sizes={sizes} loading={eager ? "eager" : "lazy"} className="object-cover" />
    </div>
  );
}
