import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "default" | "sm" | "lg";
  href?: string;
  external?: boolean;
  showArrow?: boolean;
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      className={cn("shrink-0 transition-transform duration-180 group-hover:translate-x-[3px] group-hover:-translate-y-[2px]", className)}>
      <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  tabIndex,
  ...props
}: ButtonProps) {
  const sizeClass = { sm: "px-4 text-sm", default: "px-6 text-[15px]", lg: "px-7 text-base" }[size];
  const classes = cn(
    "group",
    variant === "text"
      ? "studio-link"
      : cn("studio-button", variant === "secondary" && "studio-button-outline", sizeClass),
    className
  );
  const content = <>{children}{showArrow && <ArrowUpRightIcon />}</>;

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={classes} tabIndex={tabIndex}>{content}</a>
      : <Link href={href} className={classes} tabIndex={tabIndex}>{content}</Link>;
  }
  return <button type="button" className={classes} tabIndex={tabIndex} {...props}>{content}</button>;
}
