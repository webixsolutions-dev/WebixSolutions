import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  innerClassName?: string;
}

export function CardSurface({ className, innerClassName, children, ...props }: CardSurfaceProps) {
  return (
    <div className={cn("signal-card", className)} {...props}>
      <div className={cn("relative h-full w-full", innerClassName)}>{children}</div>
    </div>
  );
}
