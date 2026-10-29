import * as React from "react";
import { cn } from "@/lib/utils";

export interface KickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional custom square color when placed on a Signal Red surface */
  inverted?: boolean;
}

/**
 * Section Kicker — 12px red square + sentence-case label in 500 weight.
 * Never ALL-CAPS pill badges (per docs/05-design-system.md).
 */
export function Kicker({
  inverted = false,
  className,
  children,
  ...props
}: KickerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-sm font-medium tracking-normal text-[var(--text-secondary)]",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-3 w-3 shrink-0",
          inverted ? "bg-white" : "bg-[#ED1C24]"
        )}
      />
      <span>{children}</span>
    </div>
  );
}
