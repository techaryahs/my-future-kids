import { Icon } from "@/components/edtech/icons";

type CtaBandProps = {
  description: string;
  eyebrow: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
};

export function CtaBand({
  description,
  eyebrow,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  title,
}: CtaBandProps) {
  return (
    <section className="bg-[#f6f8fb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-black/10 bg-[#071015] text-white shadow-[0_30px_120px_rgba(7,16,21,0.26)]">
        <div className="relative isolate px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(250,204,21,0.12),transparent_28%),linear-gradient(135deg,#071015,#0b1415_46%,#10180f)]" />
          <div className="absolute inset-x-8 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/[0.55] to-transparent" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-8 text-white/[0.82] sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#071015] shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#071015]"
                href={primaryHref}
              >
                {primaryLabel}
                <Icon className="h-4 w-4" name="arrowRight" />
              </a>
              {secondaryHref && secondaryLabel ? (
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#071015]"
                  href={secondaryHref}
                >
                  {secondaryLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
