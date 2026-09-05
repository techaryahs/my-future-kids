"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { CtaBand } from "@/components/edtech/cta-band";
import { Icon, type IconName } from "@/components/edtech/icons";
import { PremiumCard } from "@/components/edtech/premium-card";
import { SectionHeader } from "@/components/edtech/section-header";
import { cn } from "@/src/lib/utils";

type GalleryCategory = "activities" | "workshops" | "events" | "competitions";
type FilterKey = "all" | GalleryCategory;

type GalleryItem = {
  category: GalleryCategory;
  description: string;
  heightClassName: string;
  imageAlt: string;
  imagePosition: string;
  location: string;
  metric: string;
  title: string;
};

type CategoryMeta = {
  accent: string;
  description: string;
  icon: IconName;
  label: string;
  tint: string;
};

const heroStats = [
  { label: "Gallery stories", value: "120+" },
  { label: "Showcase types", value: "4" },
  { label: "Demo-ready moments", value: "30+" },
];

const categoryMeta: Record<GalleryCategory, CategoryMeta> = {
  activities: {
    accent: "border-cyan-200/[0.35] bg-cyan-300/[0.18] text-cyan-50",
    description:
      "Everyday lab energy, hands-on exploration, prototype testing, and student-led discovery.",
    icon: "spark",
    label: "Activities",
    tint: "from-cyan-400/[0.28] via-transparent to-emerald-300/[0.18]",
  },
  workshops: {
    accent: "border-amber-200/[0.35] bg-amber-300/[0.18] text-amber-50",
    description:
      "Teacher enablement, parent showcases, special sessions, and expert-guided learning sprints.",
    icon: "users",
    label: "Workshops",
    tint: "from-amber-300/[0.28] via-transparent to-cyan-300/[0.16]",
  },
  events: {
    accent: "border-emerald-200/[0.35] bg-emerald-300/[0.18] text-emerald-50",
    description:
      "Innovation fairs, open days, demo celebrations, and school-wide future-skills moments.",
    icon: "calendar",
    label: "Events",
    tint: "from-emerald-300/[0.26] via-transparent to-cyan-300/[0.18]",
  },
  competitions: {
    accent: "border-rose-200/[0.35] bg-rose-300/[0.18] text-rose-50",
    description:
      "Robo arenas, STEM leagues, coding finals, team challenges, and competition-ready confidence.",
    icon: "award",
    label: "Competitions",
    tint: "from-rose-300/[0.24] via-transparent to-amber-300/[0.18]",
  },
};

const filterTabs: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "activities", label: "Activities" },
  { key: "workshops", label: "Workshops" },
  { key: "events", label: "Events" },
  { key: "competitions", label: "Competitions" },
];

const overviewCards = [
  {
    description:
      "A polished visual library helps schools show daily lab adoption, not only final outcomes.",
    icon: "lab",
    title: "Campus proof library",
  },
  {
    description:
      "Filterable categories make it easy for principals, coordinators, and parents to scan the story.",
    icon: "network",
    title: "Organized showcase flow",
  },
  {
    description:
      "Every card is shaped around context, student work, and a presentation-ready moment.",
    icon: "rocket",
    title: "Portfolio-grade storytelling",
  },
];

const galleryItems: GalleryItem[] = [
  {
    category: "activities",
    description:
      "Students calibrate sensors, tune motion logic, and test robot movement through a guided arena cycle.",
    heightClassName: "h-80",
    imageAlt: "Students testing robotics sensors during a lab activity",
    imagePosition: "object-[58%_48%]",
    location: "Robotics Studio",
    metric: "32 builds",
    title: "Robotics Arena Practice",
  },
  {
    category: "workshops",
    description:
      "Teachers rehearse session flow, troubleshoot kits, and learn how to guide teams without taking over.",
    heightClassName: "h-96",
    imageAlt: "Educator guiding a robotics workshop in a school lab",
    imagePosition: "object-[42%_44%]",
    location: "Teacher Enablement",
    metric: "18 mentors",
    title: "Facilitator Bootcamp",
  },
  {
    category: "events",
    description:
      "A school-wide showcase where students present working prototypes, design journals, and reflection boards.",
    heightClassName: "h-72",
    imageAlt: "Students presenting projects at a school innovation event",
    imagePosition: "object-[62%_48%]",
    location: "Innovation Fair",
    metric: "420 visitors",
    title: "Future Skills Open Day",
  },
  {
    category: "competitions",
    description:
      "Teams race through a maze challenge with autonomous navigation, recovery rules, and live judging.",
    heightClassName: "h-[28rem]",
    imageAlt: "Student team competing in a robotics maze challenge",
    imagePosition: "object-[70%_50%]",
    location: "Robo Challenge",
    metric: "16 teams",
    title: "Robo Maze League",
  },
  {
    category: "activities",
    description:
      "Learners build bridge models, compare material strength, and record results for design iteration.",
    heightClassName: "h-72",
    imageAlt: "Students building STEM prototypes during a hands-on activity",
    imagePosition: "object-[50%_56%]",
    location: "STEM Lab",
    metric: "4 test rounds",
    title: "STEM Maker Sprint",
  },
  {
    category: "workshops",
    description:
      "Parents join a guided lab walk-through and see how projects connect to communication and confidence.",
    heightClassName: "h-80",
    imageAlt: "Parents and students attending an innovation lab workshop",
    imagePosition: "object-[35%_50%]",
    location: "Parent Preview",
    metric: "96% interest",
    title: "Family Innovation Studio",
  },
  {
    category: "events",
    description:
      "Student teams demonstrate AI, coding, robotics, and STEM outcomes for leadership review.",
    heightClassName: "h-96",
    imageAlt: "Students demonstrating AI and coding projects at an event",
    imagePosition: "object-[78%_45%]",
    location: "Demo Day",
    metric: "5 tracks",
    title: "Campus Demo Day",
  },
  {
    category: "competitions",
    description:
      "Young engineers test load-bearing structures and explain the science behind every redesign.",
    heightClassName: "h-72",
    imageAlt: "Students competing in a STEM bridge-building challenge",
    imagePosition: "object-[46%_52%]",
    location: "STEM League",
    metric: "3.2x iteration",
    title: "Bridge Build Finals",
  },
  {
    category: "activities",
    description:
      "AI learners label data, compare confidence scores, and discuss where machine decisions need human judgment.",
    heightClassName: "h-96",
    imageAlt: "Students exploring AI model outputs during a lab activity",
    imagePosition: "object-[66%_42%]",
    location: "AI Lab",
    metric: "18 quests",
    title: "AI Discovery Session",
  },
  {
    category: "workshops",
    description:
      "A coding sprint where students turn ideas into playable prototypes and present debugging choices.",
    heightClassName: "h-72",
    imageAlt: "Students building coding projects during a workshop",
    imagePosition: "object-[55%_50%]",
    location: "Coding Lab",
    metric: "24 prototypes",
    title: "Game Design Workshop",
  },
  {
    category: "events",
    description:
      "A curated exhibition of student portfolios, prototypes, certificates, and school innovation stories.",
    heightClassName: "h-80",
    imageAlt: "Innovation lab showcase with student portfolio work",
    imagePosition: "object-[44%_48%]",
    location: "School Showcase",
    metric: "80 artifacts",
    title: "Portfolio Showcase",
  },
  {
    category: "competitions",
    description:
      "Students solve timed logic challenges, build web interfaces, and defend their design choices.",
    heightClassName: "h-[28rem]",
    imageAlt: "Students participating in a coding competition final",
    imagePosition: "object-[60%_46%]",
    location: "Code Arena",
    metric: "90 minutes",
    title: "Coding Sprint Finals",
  },
];

const highlights = [
  {
    description:
      "Each gallery story is written for school teams that need credible, parent-facing proof of future skills.",
    icon: "shield",
    title: "Trust-building visuals",
  },
  {
    description:
      "The grid mixes lab process, finished work, celebrations, and competition moments for a complete narrative.",
    icon: "spark",
    title: "Balanced storytelling",
  },
  {
    description:
      "Modal previews keep context close, with category, location, metric, and a clear visual moment.",
    icon: "play",
    title: "Preview-ready cards",
  },
  {
    description:
      "Responsive masonry keeps the page polished across phone, tablet, laptop, and large display layouts.",
    icon: "building",
    title: "Showcase-safe layout",
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

function GalleryCard({
  item,
  onPreview,
}: {
  item: GalleryItem;
  onPreview: (item: GalleryItem) => void;
}) {
  const meta = categoryMeta[item.category];

  return (
    <article className="group mb-5 break-inside-avoid overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.13)]">
      <button
        aria-label={`Preview ${item.title}`}
        className={cn(
          "relative block w-full overflow-hidden bg-[#071015] text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-4 focus:ring-offset-white",
          item.heightClassName,
        )}
        onClick={() => onPreview(item)}
        type="button"
      >
        <Image
          alt={item.imageAlt}
          className={cn(
            "object-cover transition duration-700 group-hover:scale-105",
            item.imagePosition,
          )}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
          src="/befuturekids-school-lab-hero.png"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t", meta.tint)} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.92] via-[#050708]/[0.18] to-transparent" />
        <div className="absolute left-4 top-4">
          <IconBadge className={meta.accent} icon={meta.icon} />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            {meta.label}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/[0.18] bg-[#061011]/[0.86] px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {item.location}
            </span>
            <span className="rounded-full border border-white/[0.18] bg-[#061011]/[0.86] px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {item.metric}
            </span>
          </div>
        </div>
      </button>
      <div className="p-5">
        <p className="text-sm leading-7 text-[#3f5056]">{item.description}</p>
        <button
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-[#071015] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4 focus:ring-offset-white"
          onClick={() => onPreview(item)}
          type="button"
        >
          Preview image
          <Icon className="h-4 w-4" name="arrowRight" />
        </button>
      </div>
    </article>
  );
}

function PreviewModal({
  item,
  onClose,
}: {
  item: GalleryItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const meta = categoryMeta[item.category];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020506]/[0.82] px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >
      <section
        aria-labelledby="gallery-preview-title"
        aria-modal="true"
        className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/[0.18] bg-[#071015] text-white shadow-[0_35px_140px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(250,204,21,0.1),transparent_26%),linear-gradient(135deg,#071015,#0b1415_46%,#10180f)]" />
          <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-[#050708] sm:min-h-[500px]">
              <Image
                alt={item.imageAlt}
                className={cn("object-cover", item.imagePosition)}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                src="/befuturekids-school-lab-hero.png"
              />
              <div
                className={cn("absolute inset-0 bg-gradient-to-t", meta.tint)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.72] via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <IconBadge className={meta.accent} icon={meta.icon} />
                <button
                  aria-label="Close image preview"
                  autoFocus
                  className="flex h-10 w-10 shrink-0 rotate-45 items-center justify-center rounded-full border border-white/[0.18] text-2xl leading-none text-white transition hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  onClick={onClose}
                  type="button"
                >
                  +
                </button>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                {meta.label}
              </p>
              <h2
                className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
                id="gallery-preview-title"
              >
                {item.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/[0.82]">
                {item.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/[0.16] bg-white/[0.1] p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.68]">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.location}
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.16] bg-white/[0.1] p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.68]">
                    Highlight
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.metric}
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm leading-7 text-white/[0.76]">
                This mock gallery entry is designed as a realistic visual proof
                point for a premium school innovation showcase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  function handleFilterChange(filter: FilterKey) {
    if (filter === activeFilter) {
      return;
    }

    setActiveFilter(filter);
    setIsFiltering(true);
    window.setTimeout(() => setIsFiltering(false), 220);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] text-[#071015]">
      <section className="relative isolate overflow-hidden bg-[#050708] px-4 pb-20 pt-5 text-white sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,204,21,0.1),transparent_28%),radial-gradient(circle_at_72%_84%,rgba(34,197,94,0.12),transparent_32%),linear-gradient(135deg,#050708,#0b100f_48%,#11100b)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22] motion-safe:animate-[grid-drift_18s_linear_infinite]" />
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between rounded-lg border border-white/[0.16] bg-[#071015]/[0.88] px-3 py-3 shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <a
              aria-label="BeFutureKids gallery page"
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
              aria-label="Gallery page navigation"
              className="hidden items-center gap-1 rounded-full border border-white/[0.16] bg-black/[0.32] p-1 lg:flex"
            >
              {filterTabs.slice(1).map((tab) => (
                <a
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/[0.82] transition hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  href="#filters"
                  key={tab.key}
                  onClick={() => handleFilterChange(tab.key)}
                >
                  {tab.label}
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
                <Icon className="h-4 w-4 text-emerald-200" name="spark" />
                School innovation gallery
              </div>
              <h1 className="mt-7 max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                A visual showcase of future skills in action.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.84] sm:text-xl">
                Explore BeFutureKids lab activities, workshops, events, and
                competitions through a premium gallery built for school
                credibility, parent confidence, and portfolio storytelling.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#071015] shadow-[0_22px_60px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#filters"
                >
                  Open Gallery
                  <Icon className="h-4 w-4" name="arrowRight" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.18] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/[0.45] hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#050708]"
                  href="#highlights"
                >
                  View Highlights
                </a>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
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
                  alt="Students and educators in a futuristic BeFutureKids innovation lab gallery moment"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/befuturekids-school-lab-hero.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/[0.9] via-[#050708]/[0.16] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                  {["Activities", "Workshops", "Competitions"].map(
                    (label, index) => (
                      <div
                        className="rounded-lg border border-white/20 bg-[#061011]/[0.86] p-4 shadow-[0_14px_45px_rgba(0,0,0,0.3)] backdrop-blur-md"
                        key={label}
                      >
                        <p className="text-xs text-white/[0.78]">
                          Gallery 0{index + 1}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {label}
                        </p>
                      </div>
                    ),
                  )}
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
                      Showcase-ready
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      Visual proof
                    </p>
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
            description="The gallery is designed to help schools communicate momentum: what students do, what teachers guide, what families see, and what leaders can proudly showcase."
            eyebrow="Gallery overview"
            title="A premium visual system for school innovation stories."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {overviewCards.map((card) => (
              <PremiumCard
                accentClassName="bg-cyan-300/[0.16]"
                key={card.title}
                variant="light"
              >
                <IconBadge
                  className="border-black/10 bg-[#e8fbf6] text-teal-700"
                  icon={card.icon as IconName}
                />
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#061014]">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#3f5056]">
                  {card.description}
                </p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-[#f6f8fb] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        id="filters"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <SectionHeader
              align="left"
              description="Use the tabs to move between daily activities, guided workshops, school events, and competition moments."
              eyebrow="Filter tabs"
              title="Browse the gallery by the story a school wants to tell."
            />
            <div className="rounded-lg border border-black/10 bg-white p-3 shadow-[0_18px_70px_rgba(15,23,42,0.08)]">
              <div
                aria-label="Gallery filters"
                className="grid gap-2 sm:grid-cols-5"
                role="tablist"
              >
                {filterTabs.map((tab) => {
                  const active = activeFilter === tab.key;

                  return (
                    <button
                      aria-selected={active}
                      className={cn(
                        "inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white",
                        active
                          ? "bg-[#071015] text-white shadow-[0_16px_45px_rgba(7,16,21,0.18)]"
                          : "border border-black/10 bg-[#f8fbfb] text-[#33454c] hover:bg-white hover:text-[#071015]",
                      )}
                      key={tab.key}
                      onClick={() => handleFilterChange(tab.key)}
                      role="tab"
                      type="button"
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-[0_14px_50px_rgba(15,23,42,0.05)]">
            <p
              aria-live="polite"
              className="text-sm font-semibold text-[#33454c]"
            >
              Showing {filteredItems.length}{" "}
              {activeFilter === "all"
                ? "gallery moments"
                : `${categoryMeta[activeFilter].label.toLowerCase()} moments`}
            </p>
            {isFiltering ? (
              <span className="rounded-full bg-[#e8fbf6] px-3 py-1 text-xs font-semibold text-teal-800 motion-safe:animate-pulse">
                Refreshing
              </span>
            ) : (
              <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-xs font-semibold text-cyan-800">
                Masonry view
              </span>
            )}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3">
            {filteredItems.map((item) => (
              <GalleryCard
                item={item}
                key={item.title}
                onPreview={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-[#071015] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
        id="highlights"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(244,114,182,0.08),transparent_32%),linear-gradient(135deg,#071015,#0d1412_50%,#11100b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <SectionHeader
              align="left"
              description="The highlights layer gives school decision-makers the why behind the gallery, turning images into a stronger conversion and trust asset."
              eyebrow="Highlights section"
              inverse
              title="Every visual moment supports a premium school showcase."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  className="rounded-lg border border-white/[0.16] bg-white/[0.11] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                  key={highlight.title}
                >
                  <IconBadge
                    className="border-cyan-200/[0.35] bg-cyan-300/[0.18] text-cyan-50"
                    icon={highlight.icon as IconName}
                  />
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-white">
                    {highlight.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/[0.8]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="request-demo">
        <CtaBand
          description="Give your leadership team a premium walkthrough of lab activities, workshop formats, school events, competition pathways, and the showcase assets that help parents see future skills clearly."
          eyebrow="Request a school demo"
          primaryHref="mailto:schools@befuturekids.com?subject=Gallery%20Showcase%20Demo%20Request"
          primaryLabel="Request a School Demo"
          secondaryHref="/projects"
          secondaryLabel="View Projects"
          title="Ready to turn school innovation into a gallery parents remember?"
        />
      </div>

      <PreviewModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </main>
  );
}
