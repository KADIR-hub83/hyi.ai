import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/services/utils";

export interface ShimmerButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;

  fullWidth?: boolean;
  align?: "left" | "center" | "right";

  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      // background = "rgba(0, 0, 0, 1)",
     background = "#000000",
      fullWidth = false,
      align = "left",

      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "w-full flex",
          align === "left" && "justify-start",
          align === "center" && "justify-center",
          align === "right" && "justify-end"
        )}
      >
        <button
          ref={ref}
          {...props}
          style={
            {
              "--spread": "90deg",
              "--shimmer-color": shimmerColor,
              "--radius": borderRadius,
              "--speed": shimmerDuration,
              "--cut": shimmerSize,
              "--bg": background,
            } as CSSProperties
          }
          className={cn(
            "group relative z-0 text-sm flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-3.5 py-2.5 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
               "text-white font-bold text-xl",

            // ✅ padding bigger
            "px-7 py-3",
            "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",

            fullWidth ? "w-full" : "w-fit",

            className
          )}
        >
          {/* spark container */}
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]"
            )}
          >
            <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1]">
              <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
            </div>
          </div>

          <span className="relative z-10">{children}</span>

          {/* Highlight */}
          <div
            className={cn(
              "absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )}
          />

          {/* backdrop */}
          <div
            className={cn(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
            )}
          />
        </button>
      </div>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";