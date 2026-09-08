import { cn } from "@/src/lib/utils";

type SectionHeaderProps = {
  align?: "left" | "center";
  className?: string;
  description?: string;
  eyebrow?: string;
  inverse?: boolean;
  title: string;
};

export function SectionHeader({
  align = "center",
  className,
  description,
  eyebrow,
  inverse = false,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.28em]",
            inverse ? "text-cyan-100" : "text-teal-800 dark:text-teal-400",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          inverse ? "text-white" : "text-[#061014] dark:text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-8 sm:text-lg",
            inverse ? "text-white/[0.82]" : "text-[#3d4d53] dark:text-slate-300",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
