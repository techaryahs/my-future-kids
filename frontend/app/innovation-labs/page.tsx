import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/edtech/cta-band";
import { Icon, type IconName } from "@/components/edtech/icons";
import { PremiumCard } from "@/components/edtech/premium-card";
import { SectionHeader } from "@/components/edtech/section-header";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Innovation Labs | BeFutureKids",
  description:
    "Premium STEM, robotics, AI, AR/VR, and coding innovation labs for future-ready schools.",
};

type Lab = {
  accent: string;
  features: string[];
  icon: IconName;
  id: string;
  metric: string;
  outcomes: string[];
  summary: string;
  title: string;
};

type Equipment = {
  category: string;
  icon: IconName;
  items: string[];
};

const heroStats = [
  { label: "Lab formats", value: "5" },
  { label: "Hands-on modules", value: "80+" },
  { label: "Launch roadmap", value: "30 days" },
];

const overviewCards = [
  {
    description:
      "Every lab is mapped to age-appropriate milestones, clear rubrics, and school-friendly session plans.",
    icon: "book",
    title: "Curriculum-led by design",
  },
  {
    description:
      "Equipment, room planning, facilitator training, and launch support come together as one implementation system.",
    icon: "lab",
    title: "Built for real campuses",
  },
  {
    description:
      "Students build visible projects that schools can showcase in assemblies, exhibitions, competitions, and parent events.",
    icon: "award",
    title: "Showcase-ready outcomes",
  },
];

const labs: Lab[] = [
  {
    accent: "bg-amber-300/[0.2]",
    features: [
      "Inquiry stations",
      "Electronics experiments",
      "Sustainability builds",
      "Design journals",
    ],
    icon: "flask",
    id: "stem-lab",
    metric: "24 guided experiments",
    outcomes: [
      "Scientific reasoning",
      "Prototype thinking",
      "Measurement confidence",
    ],
    summary:
      "A premium STEM Lab turns science and mathematics into active problem-solving through experiments, maker challenges, and real-world engineering prompts.",
    title: "STEM Lab",
  },
  {
    accent: "bg-cyan-300/[0.2]",
    features: [
      "Sensor kits",
      "Arena challenges",
      "Mechanical builds",
      "Competition prep",
    ],
    icon: "robotics",
    id: "robotics-lab",
    metric: "32 robotics missions",
    outcomes: [
      "Systems thinking",
      "Automation logic",
      "Collaborative engineering",
    ],
    summary:
      "The Robotics Lab gives students a structured path from first builds to autonomous systems, team challenges, and showcase-ready machines.",
    title: "Robotics Lab",
  },
  {
    accent: "bg-emerald-300/[0.2]",
    features: [
      "AI literacy",
      "Model training",
      "Prompt labs",
      "Responsible AI debates",
    ],
    icon: "ai",
    id: "ai-lab",
    metric: "18 AI learning quests",
    outcomes: ["Data awareness", "Ethical judgment", "AI-assisted creation"],
    summary:
      "The AI Lab introduces students to machine learning, generative tools, data patterns, and responsible decision-making with classroom-safe workflows.",
    title: "AI Lab",
  },
  {
    accent: "bg-fuchsia-300/[0.18]",
    features: [
      "Immersive field trips",
      "3D visualisation",
      "AR worksheets",
      "Spatial storytelling",
    ],
    icon: "vr",
    id: "ar-vr-lab",
    metric: "40 immersive scenes",
    outcomes: [
      "Spatial reasoning",
      "Concept retention",
      "Creative presentation",
    ],
    summary:
      "The AR/VR Lab makes abstract concepts memorable through immersive simulations, augmented activities, and guided exploration across subjects.",
    title: "AR/VR Lab",
  },
  {
    accent: "bg-lime-300/[0.18]",
    features: [
      "Scratch logic",
      "Python foundations",
      "Web projects",
      "Game prototypes",
    ],
    icon: "code",
    id: "coding-lab",
    metric: "5 coding tracks",
    outcomes: [
      "Computational thinking",
      "Product confidence",
      "Debugging discipline",
    ],
    summary:
      "The Coding Lab helps students progress from visual blocks to text-based programming, creative web builds, games, and problem-solving projects.",
    title: "Coding Lab",
  },
];

const equipment: Equipment[] = [
  {
    category: "Robotics and Making",
    icon: "robotics",
    items: ["Programmable robots", "Sensor modules", "Motors", "Build arenas"],
  },
  {
    category: "STEM Exploration",
    icon: "flask",
    items: [
      "Experiment kits",
      "Electronics boards",
      "Measuring tools",
      "Maker materials",
    ],
  },
  {
    category: "AI and Computing",
    icon: "ai",
    items: [
      "Student devices",
      "AI dashboards",
      "Data cards",
      "Project templates",
    ],
  },
  {
    category: "Immersive Learning",
    icon: "vr",
    items: ["VR headsets", "AR markers", "3D content", "Facilitator controls"],
  },
];

const outcomes = [
  "Students move from curiosity to working prototypes through weekly hands-on challenges.",
  "Teachers receive repeatable session flows, assessment rubrics, and confidence-building support.",
  "School leaders get visible proof of innovation through demos, portfolios, and showcase events.",
  "Parents see future skills expressed in real student work, not only in brochure language.",
];

const processSteps = [
  {
    label: "Campus Audit",
    text: "Map room readiness, grade bands, timetable fit, teacher capacity, and preferred lab mix.",
  },
  {
    label: "Lab Blueprint",
    text: "Finalize equipment, safety flow, curriculum tracks, launch calendar, and showcase milestones.",
  },
  {
    label: "Setup and Training",
    text: "Install the lab environment, onboard facilitators, and rehearse the first month of sessions.",
  },
  {
    label: "Student Activation",
    text: "Run guided modules, track progress, capture project artifacts, and prepare demo-day outputs.",
  },
  {
    label: "Review and Scale",
    text: "Use outcome reports to refine adoption, plan competitions, and expand across more grades.",
  },
];

function IconBadge({
  className,
  icon,
}: {
  className?: string;
  icon: IconName;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-lg border",
        className ?? "border-white/[0.18] bg-white/[0.1] text-white",
      )}
    >
      <Icon className="h-5 w-5" name={icon} />
    </span>
  );
}

export default function InnovationLabsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] dark:bg-[#090d16] text-[#071015] dark:text-slate-100">
      <section className="relative isolate overflow-hidden bg-[#050708] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-36">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,204,21,0.1),transparent_28%),radial-gradient(circle_at_72%_84%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(135deg,#050708,#0b100f_48%,#11100b)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22] motion-safe:animate-[grid-drift_18s_linear_infinite]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[#071015]/[0.76] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_16px_60px_rgba(20,184,166,0.14)] backdrop-blur-md">
                <Icon className="h-4 w-4 text-emerald-200" name="lab" />
                Innovation labs for schools
              </div>
              <h1 className="mt-7 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Future-skills labs that feel like a school advantage.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/[0.84] sm:text-lg sm:leading-8">
                Build a premium campus ecosystem for STEM, robotics, AI, AR/VR,
                and coding with guided curriculum, modern equipment, teacher
                support, and showcase-ready student outcomes.
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
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.18] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#labs"
                >
                  Explore Lab Stack
                </a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                {heroStats.map((stat) => (
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
              <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] shadow-[0_35px_120px_rgba(0,0,0,0.38)] lg:min-h-[560px]">
                <Image
                  alt="Students collaborating inside a futuristic school innovation lab"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/befuturekids-school-lab-hero.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.88] via-[#050708]/[0.14] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {["STEM", "Robotics", "AI + AR/VR"].map((label) => (
                    <div
                      className="rounded-lg border border-white/20 bg-[#061011]/[0.86] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-md"
                      key={label}
                    >
                      <p className="text-xs text-white/[0.78]">Lab track</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-2 top-10 hidden rounded-lg border border-white/[0.18] bg-[#071015]/[0.88] p-4 text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md motion-safe:animate-[float-y_7s_ease-in-out_infinite] xl:block">
                <div className="flex items-center gap-3">
                  <IconBadge
                    className="border-emerald-200/[0.35] bg-emerald-300/[0.18] text-emerald-50"
                    icon="rocket"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/[0.76]">
                      Launch-ready
                    </p>
                    <p className="mt-1 text-lg font-semibold">Campus labs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white dark:bg-[#0b101b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="overview"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="BeFutureKids innovation labs combine curriculum, equipment, training, and visible student output into one premium B2B school experience."
            eyebrow="Innovation labs overview"
            title="A future-ready learning environment, not just a room full of devices."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {overviewCards.map((card) => (
              <PremiumCard
                accentClassName="bg-cyan-300/[0.16]"
                key={card.title}
                variant="light"
              >
                <IconBadge
                  className="border-black/10 dark:border-slate-700 bg-[#e8fbf6] dark:bg-teal-950/40 text-teal-700 dark:text-teal-400"
                  icon={card.icon as IconName}
                />
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#061014] dark:text-white">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#3f5056] dark:text-slate-300">
                  {card.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-[#f6f8fb] dark:bg-[#090d16] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="labs"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Each lab can stand alone or combine into a complete school innovation ecosystem for exploratory, project-based, and competition-ready learning."
            eyebrow="Lab categories"
            title="Five signature lab experiences under one future-skills strategy."
          />
          <div className="mt-12 grid gap-5">
            {labs.map((lab, index) => (
              <article
                className="grid overflow-hidden rounded-lg border border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_22px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.82fr_1.18fr]"
                id={lab.id}
                key={lab.title}
              >
                <div
                  className={cn(
                    "relative isolate min-h-72 overflow-hidden bg-[#071015] p-6 text-white sm:p-8 lg:min-h-full",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(250,204,21,0.1),transparent_30%),linear-gradient(135deg,#071015,#0d1718_48%,#11140d)]" />
                  <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.22]" />
                  <div className="flex h-full flex-col justify-between gap-12">
                    <div>
                      <IconBadge
                        className={cn(
                          "border-white/[0.18] text-white",
                          lab.accent,
                        )}
                        icon={lab.icon}
                      />
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                        {lab.metric}
                      </p>
                      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        {lab.title}
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {lab.features.slice(0, 4).map((feature) => (
                        <div
                          className="rounded-lg border border-white/[0.16] bg-white/[0.1] p-3 text-sm font-medium text-white/[0.84] backdrop-blur-md"
                          key={feature}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-pretty text-lg leading-8 text-[#33454c] dark:text-slate-300">
                    {lab.summary}
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {lab.outcomes.map((outcome) => (
                      <div
                        className="rounded-lg border border-black/10 dark:border-slate-800 bg-[#f8fbfb] dark:bg-slate-800/60 p-4"
                        key={outcome}
                      >
                        <Icon className="h-5 w-5 text-teal-700 dark:text-teal-400" name="check" />
                        <p className="mt-3 text-sm font-semibold leading-6 text-[#071015] dark:text-slate-100">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {lab.features.map((feature) => (
                      <span
                        className="rounded-full border border-black/10 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-[#26343a] dark:text-slate-200"
                        key={feature}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white dark:bg-[#0b101b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="equipment"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeader
              align="left"
              description="A premium lab experience needs tools that feel intentional, durable, and easy for teachers to run week after week."
              eyebrow="Equipment showcase"
              title="Curated equipment for active learning and polished demonstrations."
            />
            <div className="rounded-lg border border-black/10 dark:border-slate-800 bg-[#f8fbfb] dark:bg-slate-900 p-4 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
              <div className="grid gap-3 sm:grid-cols-3">
                {["Plan", "Procure", "Operate"].map((step, index) => (
                  <div className="rounded-lg bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 p-4" key={step}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800 dark:text-teal-400">
                      Kit 0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#071015] dark:text-slate-100">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {equipment.map((kit) => (
              <PremiumCard
                accentClassName="bg-emerald-300/[0.16]"
                key={kit.category}
                variant="light"
              >
                <IconBadge
                  className="border-black/10 dark:border-slate-700 bg-[#eef5ff] dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400"
                  icon={kit.icon}
                />
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#061014] dark:text-white">
                  {kit.category}
                </h2>
                <ul className="mt-5 space-y-3">
                  {kit.items.map((item) => (
                    <li
                      className="flex items-center gap-3 text-sm font-medium text-[#3f5056] dark:text-slate-300"
                      key={item}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="outcomes"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <SectionHeader
              align="left"
              description="The strongest labs do more than impress visitors. They change what students can make, explain, and present."
              eyebrow="Learning outcomes"
              inverse
              title="Future skills that become visible through student work."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  className="rounded-lg border border-white/[0.16] bg-white/[0.11] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                  key={outcome}
                >
                  <span className="text-sm font-semibold text-cyan-100">
                    Outcome 0{index + 1}
                  </span>
                  <p className="mt-4 text-base leading-7 text-white/[0.84]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f6f8fb] dark:bg-[#090d16] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="process"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="A clear implementation process helps school leaders understand how the lab moves from idea to daily student experience."
            eyebrow="Implementation process timeline"
            title="From campus audit to a confident innovation lab launch."
          />
          <div className="relative mt-14">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-teal-500 via-cyan-500 to-emerald-500 md:block" />
            <div className="grid gap-5">
              {processSteps.map((step, index) => (
                <article
                  className="relative grid gap-4 rounded-lg border border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)] md:grid-cols-[auto_1fr]"
                  key={step.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071015] dark:bg-slate-800 border border-transparent dark:border-slate-700 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(7,16,21,0.2)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#071015] dark:text-white">
                      {step.label}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#48585e] dark:text-slate-300">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="request-demo">
        <CtaBand
          description="Bring your leadership team a premium walkthrough of lab categories, equipment, implementation timelines, teacher support, and student showcase outcomes."
          eyebrow="Request a school demo"
          primaryHref="/book/school-demo"
          primaryLabel="Request a School Demo"
          secondaryHref="/schools"
          secondaryLabel="Back to Schools"
          title="Ready to turn your campus into a future-skills showcase?"
        />
      </div>
    </main>
  );
}
