import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/edtech/cta-band";
import { Icon, type IconName } from "@/components/edtech/icons";
import { PremiumCard } from "@/components/edtech/premium-card";
import { SectionHeader } from "@/components/edtech/section-header";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Schools | BeFutureKids",
  description:
    "Future-ready robotics, STEM, AI, AR/VR, and coding labs for ambitious schools.",
};

type IconCard = {
  accent: string;
  description: string;
  icon: IconName;
  title: string;
};

type LabSolution = IconCard & {
  highlights: string[];
  metric: string;
};

type Benefit = IconCard & {
  detail: string;
};

const navItems = [
  { href: "#solutions", label: "Labs" },
  { href: "#benefits", label: "Benefits" },
  { href: "#metrics", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

const proofStats = [
  { label: "Partner schools", value: "120+" },
  { label: "Students activated", value: "45K" },
  { label: "Lab modules", value: "80+" },
];

const reasons: IconCard[] = [
  {
    accent: "border-cyan-200/[0.35] bg-cyan-300/[0.18] text-cyan-50",
    description:
      "Grade-wise lesson maps, facilitator guides, rubrics, and classroom rituals keep every lab session outcome-led.",
    icon: "book",
    title: "Curriculum that fits timetable reality",
  },
  {
    accent: "border-emerald-200/[0.35] bg-emerald-300/[0.18] text-emerald-50",
    description:
      "From equipment planning to teacher enablement, BeFutureKids helps schools launch without operational drag.",
    icon: "shield",
    title: "End-to-end launch support",
  },
  {
    accent: "border-amber-200/[0.35] bg-amber-300/[0.18] text-amber-50",
    description:
      "Dashboards, showcases, and measurable project milestones help leadership see adoption, skills, and progress.",
    icon: "trend",
    title: "Visible outcomes for leadership",
  },
  {
    accent: "border-rose-200/[0.35] bg-rose-300/[0.18] text-rose-50",
    description:
      "Workshops, competitions, demo days, and family showcases turn the lab into a signature school experience.",
    icon: "users",
    title: "Community momentum built in",
  },
];

const labSolutions: LabSolution[] = [
  {
    accent: "from-cyan-300/25 via-white/10 to-emerald-300/20",
    description:
      "A progressive robotics ecosystem for design thinking, sensors, automation, mechanical builds, and competition-ready teams.",
    highlights: ["Modular kits", "Arena challenges", "Mentor playbooks"],
    icon: "robotics",
    metric: "32 build missions",
    title: "Robotics Lab",
  },
  {
    accent: "from-amber-300/25 via-white/10 to-cyan-300/15",
    description:
      "Hands-on STEM stations that make physics, electronics, sustainability, and prototyping feel tangible for every learner.",
    highlights: ["Experiment benches", "Science demos", "Maker projects"],
    icon: "flask",
    metric: "24 inquiry modules",
    title: "STEM Lab",
  },
  {
    accent: "from-emerald-300/25 via-white/10 to-cyan-300/20",
    description:
      "Age-appropriate AI learning where students train models, explore ethics, and build assistants using guided workflows.",
    highlights: ["AI literacy", "Model training", "Responsible use"],
    icon: "ai",
    metric: "18 AI quests",
    title: "AI Lab",
  },
  {
    accent: "from-fuchsia-300/20 via-white/10 to-amber-300/20",
    description:
      "Immersive learning for science, geography, history, and spatial storytelling through AR overlays and VR experiences.",
    highlights: ["VR headsets", "AR worksheets", "Immersive tours"],
    icon: "vr",
    metric: "40 immersive scenes",
    title: "AR/VR Lab",
  },
  {
    accent: "from-lime-300/25 via-white/10 to-rose-300/15",
    description:
      "A coding track that moves from visual logic to web, apps, game design, data, and project-based problem solving.",
    highlights: ["Web projects", "Game logic", "App prototypes"],
    icon: "code",
    metric: "5 skill tracks",
    title: "Coding Lab",
  },
];

const benefits: Benefit[] = [
  {
    accent: "bg-[#e8fbf6] text-teal-700",
    description: "A stronger parent-facing innovation story",
    detail:
      "Showcase days, learning portfolios, and project artifacts make your future-readiness visible during admissions and annual events.",
    icon: "building",
    title: "Brand differentiation",
  },
  {
    accent: "bg-[#fff7df] text-amber-700",
    description: "Teachers receive ready-to-run support",
    detail:
      "Each solution includes facilitator notes, session flows, assessment rubrics, and escalation support for confident delivery.",
    icon: "users",
    title: "Teacher enablement",
  },
  {
    accent: "bg-[#eef5ff] text-cyan-700",
    description: "One roadmap across grades and abilities",
    detail:
      "Students grow from curiosity-led exploration to structured prototypes, competitions, capstones, and leadership roles.",
    icon: "rocket",
    title: "Student progression",
  },
  {
    accent: "bg-[#f5efff] text-violet-700",
    description: "Leadership gets measurable clarity",
    detail:
      "Implementation health, participation, project completion, and skill outcomes are tracked for reviews and planning.",
    icon: "trend",
    title: "Outcome reporting",
  },
];

const metrics = [
  {
    label: "Schools report higher STEM participation",
    value: "3.2x",
    note: "after hands-on lab adoption",
  },
  {
    label: "Teacher readiness sessions delivered",
    value: "900+",
    note: "across lab and project modules",
  },
  {
    label: "Student projects showcased",
    value: "12K",
    note: "through demos and competitions",
  },
  {
    label: "Implementation satisfaction",
    value: "96%",
    note: "from school leadership check-ins",
  },
];

const partnerSchools = [
  "NorthStar Global School",
  "Riverdale International",
  "Future Valley Academy",
  "Aurora Public School",
  "Greenfield World School",
  "Summit Heights School",
];

const faqs = [
  {
    answer:
      "Most schools begin with a readiness audit, lab design, equipment deployment, teacher orientation, and a 30-day launch calendar. The exact timeline depends on room readiness and the number of labs selected.",
    question: "How long does it take to launch a BeFutureKids school lab?",
  },
  {
    answer:
      "Yes. Programs are mapped as grade-wise modules, so younger students explore fundamentals while middle and senior students move into prototypes, competitions, and capstone projects.",
    question: "Can the curriculum work across different grade levels?",
  },
  {
    answer:
      "BeFutureKids provides facilitator guides, lesson plans, rubrics, onboarding sessions, and continuing support so teachers can run sessions with confidence.",
    question: "Do teachers need advanced technical experience?",
  },
  {
    answer:
      "The school receives implementation updates, participation indicators, project completion data, showcase artifacts, and review material for leadership teams and parent communication.",
    question: "How are outcomes tracked for school leadership?",
  },
];

function IconBadge({
  className,
  icon,
}: {
  className?: string;
  icon: IconName;
}) {
  const badgeClassName =
    className ?? "border-white/[0.18] bg-white/[0.1] text-white";

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-lg border",
        badgeClassName,
      )}
    >
      <Icon className="h-5 w-5" name={icon} />
    </span>
  );
}

export default function SchoolsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] text-[#071015]">
      <section className="relative isolate overflow-hidden bg-[#050708] px-4 pb-18 pt-5 text-white sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(250,204,21,0.1),transparent_28%),radial-gradient(circle_at_72%_82%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(135deg,#050708,#0b100f_48%,#11100b)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22] motion-safe:animate-[grid-drift_18s_linear_infinite]" />
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between rounded-lg border border-white/[0.16] bg-[#071015]/[0.88] px-3 py-3 shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <a
              aria-label="BeFutureKids schools page"
              className="flex items-center gap-3 rounded-full pr-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              href="#top"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-[#071015]">
                BF
              </span>
              <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
                BeFutureKids
              </span>
            </a>
            <nav
              aria-label="Schools page navigation"
              className="hidden items-center gap-1 rounded-full border border-white/[0.16] bg-black/[0.32] p-1 md:flex"
            >
              {navItems.map((item) => (
                <a
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.82] transition hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#071015] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              href="#request-demo"
            >
              Demo
              <Icon className="h-4 w-4" name="arrowRight" />
            </a>
          </header>

          <div
            className="grid gap-10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pt-20"
            id="top"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[#071015]/[0.76] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_16px_60px_rgba(20,184,166,0.14)] backdrop-blur-md">
                <Icon className="h-4 w-4 text-emerald-200" name="spark" />
                Future-ready school labs
              </div>
              <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Build the innovation school parents remember.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.84] sm:text-xl">
                BeFutureKids helps schools launch premium robotics, STEM, AI,
                AR/VR, and coding labs that turn curiosity into visible student
                outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#071015] shadow-[0_22px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#request-demo"
                >
                  Request a School Demo
                  <Icon className="h-4 w-4" name="arrowRight" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.18] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#solutions"
                >
                  Explore Lab Solutions
                </a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {proofStats.map((stat) => (
                  <div
                    className="rounded-lg border border-white/[0.16] bg-[#071015]/[0.74] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
                    key={stat.label}
                  >
                    <dt className="text-xs leading-5 text-white/[0.78]">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-cyan-300/[0.14] via-emerald-300/[0.1] to-amber-300/[0.12] blur-2xl" />
              <div className="relative min-h-[390px] overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] shadow-[0_35px_120px_rgba(0,0,0,0.38)] lg:min-h-[560px]">
                <Image
                  alt="Students and an educator collaborating in a futuristic robotics and AI school lab"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/befuturekids-school-lab-hero.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.88] via-[#050708]/[0.1] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ["AI literacy", "Grade 4+"],
                    ["Robotics", "Build to compete"],
                    ["STEM labs", "Hands-on cycles"],
                  ].map(([label, value]) => (
                    <div
                      className="rounded-lg border border-white/20 bg-[#061011]/[0.86] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-md"
                      key={label}
                    >
                      <p className="text-xs text-white/[0.78]">{label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-2 top-10 hidden rounded-lg border border-white/[0.18] bg-[#071015]/[0.88] p-4 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md motion-safe:animate-[float-y_7s_ease-in-out_infinite] xl:block">
                <div className="flex items-center gap-3">
                  <IconBadge
                    className="border-emerald-200/[0.35] bg-emerald-300/[0.18] text-emerald-50"
                    icon="award"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/[0.76]">
                      Demo day ready
                    </p>
                    <p className="mt-1 text-lg font-semibold">8 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="A premium lab is only valuable when it is easy to adopt, easy to teach, and easy to measure. BeFutureKids is designed around school operations from day one."
            eyebrow="Why schools choose BeFutureKids"
            title="Innovation infrastructure with the polish of a modern learning company."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <PremiumCard
                accentClassName={reason.accent}
                key={reason.title}
                variant="dark"
              >
                <IconBadge className={reason.accent} icon={reason.icon} />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.82]">
                  {reason.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-[#f6f8fb] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="solutions"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeader
              align="left"
              description="Pick one focused lab or build a complete innovation ecosystem across robotics, STEM, AI, immersive learning, and coding."
              eyebrow="Lab solutions showcase"
              title="A complete future-skills stack for ambitious campuses."
            />
            <div className="rounded-lg border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
              <div className="grid gap-3 sm:grid-cols-3">
                {["Audit", "Install", "Activate"].map((step, index) => (
                  <div
                    className="rounded-lg bg-[#f2f7f7] p-4"
                    key={step}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                      Phase 0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#071015]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-6">
            {labSolutions.map((solution, index) => (
              <PremiumCard
                accentClassName="bg-cyan-300/[0.2]"
                className={cn(
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                )}
                key={solution.title}
                variant="light"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-[0.5]",
                    solution.accent,
                  )}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <IconBadge
                    className="border-black/10 bg-white/[0.92] text-[#071015] shadow-[0_12px_34px_rgba(15,23,42,0.08)]"
                      icon={solution.icon}
                    />
                    <span className="rounded-full border border-black/10 bg-white/[0.92] px-3 py-1 text-xs font-semibold text-[#26343a]">
                      {solution.metric}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#3f5056]">
                    {solution.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {solution.highlights.map((highlight) => (
                      <li
                        className="rounded-full border border-black/10 bg-white/[0.92] px-3 py-1 text-xs font-semibold text-[#223037]"
                        key={highlight}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="benefits"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              description="BeFutureKids gives school leaders a high-trust program that improves student engagement, teacher confidence, parent perception, and long-term skill outcomes."
              eyebrow="Benefits for schools"
              title="Designed for the whole school ecosystem."
            />
            <div className="mt-8 rounded-lg border border-black/10 bg-[#071015] p-6 text-white shadow-[0_24px_90px_rgba(7,16,21,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Leadership lens
              </p>
              <p className="mt-4 text-pretty text-2xl font-semibold tracking-tight">
                Move innovation from a brochure promise to a weekly student
                experience.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Admissions", "Academics", "Showcases"].map((item) => (
                  <div
                    className="rounded-lg border border-white/[0.16] bg-white/[0.1] p-3 text-sm font-medium text-white/[0.84]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                className="rounded-lg border border-black/10 bg-[#f8fbfb] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                key={benefit.title}
              >
                <IconBadge className={benefit.accent} icon={benefit.icon} />
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#33454c]">
                  {benefit.description}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#48585e]">
                  {benefit.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="metrics"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeader
              align="left"
              description="Mock metrics for presentation use, shaped around the outcomes school leaders usually want to inspect before a pilot."
              eyebrow="Success metrics"
              inverse
              title="Clear signals that the lab is becoming part of school culture."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  className="rounded-lg border border-white/[0.16] bg-white/[0.11] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                  key={metric.label}
                >
                  <p className="text-5xl font-semibold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-base font-semibold text-white">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/[0.74]">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="A polished partner section for the portfolio build, using mock school names that can be replaced by real logos as partnerships are finalized."
            eyebrow="Partner schools"
            title="Built to look credible beside premium school brands."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerSchools.map((school) => {
              const initials = school
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3);

              return (
                <article
                  className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                  key={school}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#071015] text-sm font-bold text-white">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-[#071015]">
                      {school}
                    </h3>
                    <p className="mt-1 text-sm text-[#4e5f66]">
                      Innovation lab partner
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="faq"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            align="left"
            description="Straight answers for principals, coordinators, and school owners evaluating a BeFutureKids implementation."
            eyebrow="FAQ"
            title="Everything a school team usually asks before a demo."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                className="group rounded-lg border border-black/10 bg-[#f8fbfb] p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)] open:bg-white"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-base font-semibold tracking-tight text-[#071015] marker:hidden focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4 focus:ring-offset-white">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg text-teal-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#45565d]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div id="request-demo">
        <CtaBand
          description="Give your leadership team a high-impact walkthrough of lab options, launch timelines, teacher support, and the student showcase roadmap."
          eyebrow="Request a school demo"
          primaryHref="mailto:schools@befuturekids.com?subject=School%20Demo%20Request"
          primaryLabel="Request a School Demo"
          secondaryHref="/innovation-labs"
          secondaryLabel="View Innovation Labs"
          title="Ready to make future skills a signature part of your campus?"
        />
      </div>
    </main>
  );
}
