import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type PremiumCardProps = ComponentPropsWithoutRef<"article"> & {
  accentClassName?: string;
  children: ReactNode;
  interactive?: boolean;
  variant?: "dark" | "glass" | "light";
};

export function PremiumCard({
  accentClassName,
  children,
  className,
  interactive = true,
  variant = "glass",
  ...props
}: PremiumCardProps) {
  const variantClassName = {
    dark: "border-white/[0.15] bg-[#071015] text-white",
    glass: "border-white/[0.15] bg-white/[0.12] text-white backdrop-blur-md",
    light:
      "border-black/[0.1] bg-[#fdfefe] text-[#071015] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100",
  }[variant];

  const interactiveClassName = {
    dark: "hover:border-cyan-200/[0.35] hover:bg-[#0b1a1c]",
    glass: "hover:border-white/[0.28] hover:bg-white/[0.16]",
    light:
      "hover:border-teal-500/[0.24] hover:bg-white dark:hover:border-teal-500/40 dark:hover:bg-slate-800",
  }[variant];

  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-lg border p-6 shadow-[0_24px_80px_rgba(12,18,28,0.14)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.58] before:to-transparent",
        interactive &&
          cn(
            "transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(12,18,28,0.2)]",
            interactiveClassName,
          ),
        variantClassName,
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full opacity-[0.42] blur-2xl transition duration-300 group-hover:scale-110",
          accentClassName ?? "bg-white/[0.1]",
        )}
      />
      <div className="relative z-10">{children}</div>
    </article>
  );
}
