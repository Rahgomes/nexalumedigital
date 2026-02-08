"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora-primary:var(--color-primary)]
            [--aurora-cyan:var(--color-accent-cyan)]
            [--aurora-bg:var(--color-background-dark)]
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-50
            will-change-transform
            [background-image:repeating-linear-gradient(100deg,var(--aurora-bg)_0%,var(--aurora-bg)_7%,transparent_10%,transparent_12%,var(--aurora-bg)_16%),repeating-linear-gradient(100deg,var(--aurora-primary)_10%,var(--aurora-cyan)_15%,var(--aurora-primary)_20%,var(--aurora-cyan)_25%,var(--aurora-primary)_30%)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter
            blur-[10px]
            after:content-[""]
            after:absolute
            after:inset-0
            after:[background-image:repeating-linear-gradient(100deg,var(--aurora-bg)_0%,var(--aurora-bg)_7%,transparent_10%,transparent_12%,var(--aurora-bg)_16%),repeating-linear-gradient(100deg,var(--aurora-primary)_10%,var(--aurora-cyan)_15%,var(--aurora-primary)_20%,var(--aurora-cyan)_25%,var(--aurora-primary)_30%)]
            after:[background-size:200%,_100%]
            after:animate-aurora
            after:mix-blend-difference
            after:[background-attachment:fixed]
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
