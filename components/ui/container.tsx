import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow";
  as?: React.ElementType;
}

export function Container({
  size = "default",
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[var(--gutter)]",
        size === "default" ? "max-w-[1280px]" : "max-w-[760px]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
