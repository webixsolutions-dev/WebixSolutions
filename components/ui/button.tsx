import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "default" | "sm" | "lg";
  href?: string;
  external?: boolean;
  showArrow?: boolean;
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "shrink-0 transition-transform duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px]",
        className
      )}
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "default",
  href,
  external = false,
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "h-10 px-4 text-sm gap-2",
    default: "h-12 px-6 text-[15px] gap-2.5",
    lg: "h-13 px-7 text-base gap-3",
  }[size];

  if (variant === "text") {
    const textClasses = cn(
      "group inline-flex items-center gap-2 font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-180",
      className
    );
    const content = (
      <>
        <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 group-hover:after:scale-x-100">
          {children}
        </span>
        {showArrow && <ArrowUpRightIcon />}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={textClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={textClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button type="button" className={textClasses} {...props}>
        {content}
      </button>
    );
  }

  if (variant === "secondary") {
    const secondaryClasses = cn(
      "group relative inline-flex items-center justify-center font-medium cut-tr-sm p-[1px] bg-[var(--border)] hover:bg-[var(--accent)] transition-colors duration-180",
      className
    );

    const innerContent = (
      <span
        className={cn(
          "relative inline-flex w-full items-center justify-center cut-tr-sm bg-[var(--surface-elevated)] text-[var(--text-primary)] overflow-hidden transition-colors duration-180",
          sizeStyles
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[var(--accent-soft)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {showArrow && <ArrowUpRightIcon />}
        </span>
      </span>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryClasses}
          >
            {innerContent}
          </a>
        );
      }
      return (
        <Link href={href} className={secondaryClasses}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button type="button" className={secondaryClasses} {...props}>
        {innerContent}
      </button>
    );
  }

  // Primary button: --red-ink #C8101A (6.08:1 contrast with white) with top-right 45° cut corner (--cut: 10px) + hover fill slide to #ED1C24
  const primaryClasses = cn(
    "group relative inline-flex items-center justify-center font-medium cut-tr-sm bg-[#C8101A] text-white overflow-hidden transition-colors duration-180",
    sizeStyles,
    className
  );

  const primaryContent = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[#ED1C24] transition-transform duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && <ArrowUpRightIcon />}
      </span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryClasses}
        >
          {primaryContent}
        </a>
      );
    }
    return (
      <Link href={href} className={primaryClasses}>
        {primaryContent}
      </Link>
    );
  }

  return (
    <button type="button" className={primaryClasses} {...props}>
      {primaryContent}
    </button>
  );
}
