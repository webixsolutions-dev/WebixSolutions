import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  asSpan?: boolean;
}

/**
 * Chip — Full pill (`rounded-full`) per correction #8 & docs/05-design-system.md.
 * Used for category filters, stack tags, and proof pills.
 */
export function Chip({
  active = false,
  asSpan = false,
  className,
  children,
  ...props
}: ChipProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-150",
    active
      ? "bg-[var(--signal-ink)] text-white"
      : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]",
    className
  );

  if (asSpan) {
    return <span className={baseClasses}>{children}</span>;
  }

  return (
    <button type="button" className={baseClasses} {...props}>
      {children}
    </button>
  );
}
