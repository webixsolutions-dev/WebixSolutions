import * as React from "react";
import { cn } from "@/lib/utils";

export type SurfaceType = "graphite" | "porcelain" | "steel" | "red" | "oxblood";

const SURFACE_BG_HEX: Record<SurfaceType, string> = {
  graphite: "#141519",
  porcelain: "#F4F5F7",
  steel: "#E4E6EB",
  red: "#ED1C24",
  oxblood: "#5A0B10",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: SurfaceType;
  /** Preceding section's surface so the 45° top-left notch reveals the exact preceding color */
  previousSurface?: SurfaceType;
  /** Cut a 45° top-left corner notch where the surface changes */
  notch?: boolean;
  /** Subtle architectural grid background on dark surfaces */
  grid?: boolean;
  /**
   * The ONLY allowed section watermark is the outlined Webix monogram ("monogram")
   * on Signal Red (`surface="red"`) sections. Never giant section numbers or letters.
   */
  watermark?: "monogram" | false;
  /** Section vertical spacing preset */
  spacing?: "default" | "hero" | "compact" | "none";
}

function OutlinedWebixMonogramWatermark() {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none select-none absolute -right-10 -bottom-10 w-[340px] md:w-[480px] h-auto opacity-[0.12]"
    >
      {/* Angular W + S geometric strokes with 45° chamfered corners */}
      <path
        d="M24 24H68V168L124 128L180 168V116H124V76H220L248 104V196L184 240L124 196L64 240L24 204V24Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M104 24H264L296 56V96H252V68H144V92H236L264 120V148"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Section({
  surface = "graphite",
  previousSurface = "graphite",
  notch = false,
  grid = false,
  watermark = false,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    default: "py-14 md:py-24",
    hero: "pt-28 pb-16 md:pt-36 md:pb-24",
    compact: "py-10 md:py-16",
    none: "",
  }[spacing];

  const showMonogramWatermark = watermark === "monogram" && surface === "red";

  const innerSection = (
    <section
      data-surface={surface}
      className={cn(
        "relative w-full overflow-hidden border-t border-[var(--border)]",
        notch && "section-notch-tl",
        grid && "bg-architectural-grid",
        spacingClasses,
        className
      )}
      {...props}
    >
      {showMonogramWatermark ? <OutlinedWebixMonogramWatermark /> : null}
      <div className="relative z-10">{children}</div>
    </section>
  );

  if (!notch) {
    return innerSection;
  }

  return (
    <div
      style={{ backgroundColor: SURFACE_BG_HEX[previousSurface] }}
      className="relative w-full"
    >
      {innerSection}
    </div>
  );
}
