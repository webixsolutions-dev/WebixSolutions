import * as React from "react";
import { cn } from "@/lib/utils";

export interface CutFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  cutSize?: "default" | "sm" | "lg";
  /** Render as a liquid-glass frame (allowed only on Hero Growth Console & Booking Panel) */
  glass?: "none" | "dark" | "light";
  innerClassName?: string;
}

/**
 * CutFrame — 45° top-right-only cut-corner frame with a crisp 1px hairline border
 * following the diagonal cut edge.
 */
export function CutFrame({
  cutSize = "default",
  glass = "none",
  className,
  innerClassName,
  children,
  ...props
}: CutFrameProps) {
  const cutClass =
    cutSize === "lg" ? "cut-tr-lg" : cutSize === "sm" ? "cut-tr-sm" : "cut-tr";

  if (glass !== "none") {
    return (
      <div
        className={cn(
          "relative",
          cutClass,
          glass === "dark" ? "glass-surface-dark" : "glass-surface-light",
          className
        )}
        {...props}
      >
        <div className={cn("relative w-full h-full", innerClassName)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative p-[1px] bg-[var(--border)] transition-colors duration-200",
        cutClass,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full bg-[var(--surface-elevated)]",
          cutClass,
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
