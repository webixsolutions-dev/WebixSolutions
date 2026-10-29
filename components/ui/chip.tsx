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
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 border",
    active
      ? "bg-[#ED1C24] text-white border-[#ED1C24]"
      : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]",
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
