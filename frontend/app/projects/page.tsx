import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/edtech/cta-band";
import { Icon, type IconName } from "@/components/edtech/icons";
import { PremiumCard } from "@/components/edtech/premium-card";
import { SectionHeader } from "@/components/edtech/section-header";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Projects | BeFutureKids",
  description:
    "Premium Robotics, STEM, AI, and Coding student projects from BeFutureKids innovation labs.",
};

type CategoryKey = "robotics" | "stem" | "ai" | "coding";

type Category = {
  accent: string;
  description: string;
  href: string;
  icon: IconName;
  key: CategoryKey;
  label: string;
};

type Project = {
  category: CategoryKey;
  description: string;
  imageAlt: string;
  imagePosition: string;
  level: string;
  outcome: string;
  title: string;
  technologies: string[];
};

type FeaturedInnovation = {
  icon: IconName;
  impact: string;
  team: string;
  title: string;
};

const categories: Category[] = [
  {
    accent: "bg-cyan-300/[0.18] text-cyan-50 border-cyan-200/[0.35]",
    description: "Autonomous builds, sensor logic, motors, and challenge arenas.",
    href: "#robotics-projects",
    icon: "robotics",
    key: "robotics",
    label: "Robotics",
  },
  {
    accent: "bg-amber-300/[0.18] text-amber-50 border-amber-200/[0.35]",
    description: "Hands-on experiments, prototypes, sustainability, and maker science.",
    href: "#stem-projects",
    icon: "flask",
    key: "stem",
    label: "STEM",
  },
  {
    accent: "bg-emerald-300/[0.18] text-emerald-50 border-emerald-200/[0.35]",
    description: "AI literacy, data patterns, prompt workflows, and responsible AI.",
    href: "#ai-projects",
    icon: "ai",
    key: "ai",
    label: "AI",
  },
  {
    accent: "bg-lime-300/[0.18] text-lime-50 border-lime-200/[0.35]",
    description: "Scratch, Python, web, games, apps, and computational thinking.",
    href: "#coding-projects",
    icon: "code",
    key: "coding",
    label: "Coding",
  },
];

const projects: Project[] = [
  {
    category: "robotics",
    description:
      "A line-following delivery robot that reads color markers, avoids obstacles, and completes school logistics missions.",
    imageAlt: "Students testing a robotics prototype in an innovation lab",
    imagePosition: "object-[58%_50%]",
    level: "Grades 6-8",
    outcome: "Students learn automation logic, calibration, teamwork, and iterative testing.",
    technologies: ["Sensors", "Motors", "Block code", "Arena design"],
    title: "Smart Campus Delivery Bot",
  },
  {
    category: "robotics",
    description:
      "A rescue rover prototype designed for maze navigation, object retrieval, and mission planning under time pressure.",
    imageAlt: "Robotics team working on a rover challenge",
    imagePosition: "object-[70%_48%]",
    level: "Grades 7-10",
    outcome: "Students practice mechanical design, control systems, and competition strategy.",
    technologies: ["Servo control", "Ultrasonic sensor", "Gears", "Mission map"],
    title: "Rescue Rover Challenge",
  },
  {
    category: "stem",
    description:
      "A sustainable city model where students design water flow, solar zones, bridge strength, and public systems.",
    imageAlt: "Students building a STEM city model",
    imagePosition: "object-[45%_52%]",
    level: "Grades 5-8",
    outcome: "Students connect science, engineering, math, and civic problem-solving.",
    technologies: ["Circuits", "Solar cell", "Materials testing", "Scale models"],
    title: "Future City STEM Model",
  },
  {
    category: "stem",
    description:
      "A bridge engineering lab where teams test load, compare materials, and improve structures through evidence.",
    imageAlt: "STEM learners testing a structural prototype",
    imagePosition: "object-[50%_48%]",
    level: "Grades 4-7",
    outcome: "Students build measurement confidence, scientific reasoning, and design discipline.",
    technologies: ["Load testing", "Geometry", "Data table", "Rapid prototype"],
    title: "Earthquake-Safe Bridge Lab",
  },
  {
    category: "ai",
    description:
      "A classroom-safe AI assistant that helps students classify recycling items and explain eco-friendly choices.",
    imageAlt: "Students exploring AI dashboards in a modern lab",
    imagePosition: "object-[62%_42%]",
    level: "Grades 7-10",
    outcome: "Students understand datasets, model behavior, bias checks, and AI usefulness.",
    technologies: ["Data labels", "Classification", "Prompting", "Ethics cards"],
    title: "EcoSort AI Assistant",
  },
  {
    category: "ai",
    description:
      "A visual recognition project where students train an AI workflow to identify plant health indicators.",
    imageAlt: "Learners reviewing AI model results on screens",
    imagePosition: "object-[76%_50%]",
    level: "Grades 8-10",
    outcome: "Students learn pattern recognition, evidence quality, and responsible interpretation.",
    technologies: ["Image dataset", "Model testing", "Confidence score", "Reflection log"],
    title: "Plant Doctor Vision Lab",
  },
  {
    category: "coding",
    description:
      "A student-built web dashboard that turns lab progress, project badges, and showcase moments into a portfolio.",
    imageAlt: "Students coding web projects in a futuristic classroom",
    imagePosition: "object-[64%_48%]",
    level: "Grades 7-10",
    outcome: "Students learn interface structure, data display, responsive design, and presentation.",
    technologies: ["HTML", "CSS", "JavaScript", "UI logic"],
    title: "Innovation Portfolio Dashboard",
  },
  {
    category: "coding",
    description:
      "A game-design challenge where students build levels, physics rules, score states, and reflective debugging notes.",
    imageAlt: "Coding lab students testing a game prototype",
    imagePosition: "object-[40%_50%]",
    level: "Grades 5-8",
    outcome: "Students develop computational thinking, sequencing, variables, and debugging habits.",
    technologies: ["Scratch", "Game loops", "Variables", "Level design"],
    title: "Mission Mars Coding Game",
  },
];

const featuredInnovations: FeaturedInnovation[] = [
  {
    icon: "rocket",
    impact: "Selected for inter-school demo day",
    team: "Grade 8 Robotics Team",
    title: "Autonomous library book mover",
  },
  {
    icon: "flask",
    impact: "Reduced model energy load by 22%",
    team: "Grade 7 STEM Studio",
    title: "Solar micro-city prototype",
  },
  {
    icon: "ai",
    impact: "Built a responsible AI explanation board",
    team: "Grade 9 AI Lab",
    title: "Waste classifier assistant",
  },
];

const metrics = [
  { label: "Student projects", note: "built through guided lab modules", value: "12K+" },
  { label: "Showcase formats", note: "demos, portfolios, challenges, fairs", value: "6" },
  { label: "Skill tracks", note: "robotics, STEM, AI, coding, design", value: "5" },
  { label: "Prototype cycles", note: "plan, build, test, present", value: "4" },
];

const achievementCards = [
  {
    label: "Confident presenters",
    text: "Students explain what they built, why it matters, and how they improved it.",
  },
  {
    label: "Portfolio-ready artifacts",
    text: "Each project creates evidence through photos, diagrams, code snippets, and reflection notes.",
  },
  {
    label: "Team collaboration",
    text: "Learners practice roles, feedback, troubleshooting, and deadline-based delivery.",
  },
  {
    label: "Competition mindset",
    text: "Projects can extend into school exhibitions, innovation days, and challenge arenas.",
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

function getCategory(key: CategoryKey) {
  return categories.find((category) => category.key === key) ?? categories[0];
}

function ProjectCard({ project }: { project: Project }) {
  const category = getCategory(project.category);

  return (
    <article className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.13)]">
      <div className="relative h-64 overflow-hidden bg-[#071015]">
        <Image
          alt={project.imageAlt}
          className={cn(
            "object-cover transition duration-700 group-hover:scale-105",
            project.imagePosition,
          )}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          src="/befuturekids-school-lab-hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.88] via-[#050708]/[0.16] to-transparent" />
        <div className="absolute left-4 top-4">
          <IconBadge className={category.accent} icon={category.icon} />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
              {category.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {project.level}
            </p>
          </div>
          <span className="rounded-full border border-white/[0.18] bg-[#061011]/[0.86] px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            Project
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-[#071015]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#3f5056]">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded-full border border-black/10 bg-[#f8fbfb] px-3 py-1 text-xs font-semibold text-[#26343a]"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-black/10 bg-[#f8fbfb] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
            Learning outcome
          </p>
          <p className="mt-3 text-sm leading-7 text-[#33454c]">
            {project.outcome}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectSection({
  category,
  projectsForCategory,
}: {
  category: Category;
  projectsForCategory: Project[];
}) {
  return (
    <section
      className="bg-[#f6f8fb] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      id={`${category.key}-projects`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader
            align="left"
            description={category.description}
            eyebrow={`${category.label} projects`}
            title={`Premium ${category.label.toLowerCase()} builds students can explain, test, and showcase.`}
          />
          <div className="rounded-lg border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-4">
              <IconBadge
                className="border-black/10 bg-[#e8fbf6] text-teal-700"
                icon={category.icon}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-800">
                  Category pathway
                </p>
                <p className="mt-1 text-sm font-semibold text-[#071015]">
                  Project cards include image, tech stack, and learning outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projectsForCategory.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] text-[#071015]">
      <section className="relative isolate overflow-hidden bg-[#050708] px-4 pb-20 pt-5 text-white sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,204,21,0.1),transparent_28%),radial-gradient(circle_at_72%_84%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(135deg,#050708,#0b100f_48%,#11100b)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22] motion-safe:animate-[grid-drift_18s_linear_infinite]" />
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between rounded-lg border border-white/[0.16] bg-[#071015]/[0.88] px-3 py-3 shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <a
              aria-label="BeFutureKids projects page"
              className="flex items-center gap-3 rounded-full pr-2 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              href="/schools"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-[#071015]">
                BF
              </span>
              <span className="hidden text-sm font-semibold tracking-tight text-white sm:inline">
                BeFutureKids
              </span>
            </a>
            <nav
              aria-label="Project category navigation"
              className="hidden items-center gap-1 rounded-full border border-white/[0.16] bg-black/[0.32] p-1 lg:flex"
            >
              {categories.map((category) => (
                <a
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.82] transition hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  href={category.href}
                  key={category.key}
                >
                  {category.label}
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

          <div className="grid gap-10 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pt-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[#071015]/[0.76] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-50 shadow-[0_16px_60px_rgba(20,184,166,0.14)] backdrop-blur-md">
                <Icon className="h-4 w-4 text-emerald-200" name="rocket" />
                Student innovation projects
              </div>
              <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Projects that make future skills visible.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.84] sm:text-xl">
                Explore premium robotics, STEM, AI, and coding projects designed
                for school showcases, student portfolios, innovation days, and
                competition-ready confidence.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#071015] shadow-[0_22px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#project-categories"
                >
                  View Project Categories
                  <Icon className="h-4 w-4" name="arrowRight" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.18] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#featured"
                >
                  Featured Innovations
                </a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {metrics.slice(0, 3).map((metric) => (
                  <div
                    className="rounded-lg border border-white/[0.16] bg-[#071015]/[0.74] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
                    key={metric.label}
                  >
                    <dt className="text-xs leading-5 text-white/[0.78]">
                      {metric.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-cyan-300/[0.14] via-emerald-300/[0.1] to-amber-300/[0.12] blur-2xl" />
              <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] shadow-[0_35px_120px_rgba(0,0,0,0.38)] lg:min-h-[560px]">
                <Image
                  alt="Students presenting robotics, STEM, AI, and coding projects in a futuristic school lab"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/befuturekids-school-lab-hero.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.9] via-[#050708]/[0.16] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {["Build", "Test", "Showcase"].map((label, index) => (
                    <div
                      className="rounded-lg border border-white/20 bg-[#061011]/[0.86] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-md"
                      key={label}
                    >
                      <p className="text-xs text-white/[0.78]">
                        Phase 0{index + 1}
                      </p>
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
                    className="border-amber-200/[0.35] bg-amber-300/[0.18] text-amber-50"
                    icon="award"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/[0.76]">
                      Demo-ready
                    </p>
                    <p className="mt-1 text-lg font-semibold">Portfolio work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="project-categories"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="A clear category system helps school leaders scan project depth across robotics, STEM, AI, and coding without losing the premium showcase feel."
            eyebrow="Project categories navigation"
            title="Four pathways from guided learning to visible student achievement."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <PremiumCard
                accentClassName={category.accent}
                key={category.key}
                variant="dark"
              >
                <IconBadge className={category.accent} icon={category.icon} />
                <h2 className="mt-6 text-xl font-semibold tracking-tight">
                  {category.label}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/[0.82]">
                  {category.description}
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  href={category.href}
                >
                  Explore projects
                  <Icon className="h-4 w-4" name="arrowRight" />
                </a>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <ProjectSection
          category={category}
          key={category.key}
          projectsForCategory={projects.filter(
            (project) => project.category === category.key,
          )}
        />
      ))}

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="featured"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <SectionHeader
              align="left"
              description="Featured projects are shaped to look strong in school exhibitions, parent showcases, and portfolio reviews."
              eyebrow="Featured student innovations"
              inverse
              title="Student work that turns lab time into school proof."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {featuredInnovations.map((innovation) => (
                <div
                  className="rounded-lg border border-white/[0.16] bg-white/[0.11] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                  key={innovation.title}
                >
                  <IconBadge
                    className="border-cyan-200/[0.35] bg-cyan-300/[0.18] text-cyan-50"
                    icon={innovation.icon}
                  />
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {innovation.title}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-cyan-100">
                    {innovation.team}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/[0.8]">
                    {innovation.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="The Projects page is built for school decision-makers who want evidence of engagement, rigor, and presentation quality."
            eyebrow="Project success metrics"
            title="A premium way to communicate participation, outcomes, and momentum."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                className="rounded-lg border border-black/10 bg-[#f8fbfb] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                key={metric.label}
              >
                <p className="text-5xl font-semibold tracking-tight text-[#071015]">
                  {metric.value}
                </p>
                <p className="mt-4 text-base font-semibold text-[#071015]">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#48585e]">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            align="left"
            description="The showcase layer connects each project to confidence, communication, and school-facing proof."
            eyebrow="Student achievement showcase"
            title="Projects become achievement stories when students can present the journey."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {achievementCards.map((card, index) => (
              <article
                className="rounded-lg border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                key={card.label}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071015] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#071015]">
                  {card.label}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#48585e]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="request-demo">
        <CtaBand
          description="Walk your leadership team through project categories, sample student outputs, showcase formats, and the roadmap from lab learning to visible achievement."
          eyebrow="Request a school demo"
          primaryHref="mailto:schools@befuturekids.com?subject=Projects%20Showcase%20Demo%20Request"
          primaryLabel="Request a School Demo"
          secondaryHref="/innovation-labs"
          secondaryLabel="View Innovation Labs"
          title="Ready to make student innovation visible across your campus?"
        />
      </div>
    </main>
  );
}
