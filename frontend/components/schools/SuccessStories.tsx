"use client";

import {
  Trophy,
  Rocket,
  Lightbulb,
  Bot,
  Code2,
  Users,
  ArrowUpRight,
  Sparkles,
  Presentation,
  GraduationCap,
} from "lucide-react";

const achievements = [
  {
    icon: Bot,
    category: "ROBOTICS",
    title: "From Components to Working Robots",
    description:
      "Students move beyond theory and learn to design, assemble, program, test, and improve functional robotics projects.",
    tags: ["Build", "Code", "Test"],
  },
  {
    icon: Code2,
    category: "CODING",
    title: "Young Creators Build Real Projects",
    description:
      "Students learn programming through hands-on projects, interactive applications, games, websites, and problem-solving challenges.",
    tags: ["Logic", "Create", "Launch"],
  },
  {
    icon: Lightbulb,
    category: "INNOVATION",
    title: "Ideas Become Meaningful Solutions",
    description:
      "Students identify real-world problems and use technology, creativity, and experimentation to build innovative solutions.",
    tags: ["Think", "Design", "Innovate"],
  },
];

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Future Skills",
    description: "Technology and innovation exposure",
  },
  {
    icon: Presentation,
    title: "Project Showcase",
    description: "Students present what they create",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Learning through teamwork",
  },
];

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <Sparkles className="h-4 w-4" />
            REAL LEARNING. REAL CREATION.
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where Learning Turns Into
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Achievement.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
            The true measure of learning is not just what students know —
            it's what they can create, solve, build, and confidently showcase.
          </p>
        </div>

        {/* Featured Impact Banner */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-500/10 p-8 sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-500/10 to-transparent" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/20">
                <Trophy className="h-8 w-8 text-white" />
              </div>

              <p className="mt-7 text-sm font-bold tracking-[0.2em] text-cyan-400">
                THE BIGGER IMPACT
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                We Help Students Move From
                <span className="text-cyan-400"> Technology Users</span>
                <br />
                To
                <span className="text-blue-400"> Technology Creators.</span>
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                Through project-based learning, students gain the confidence to
                experiment with ideas, use technology creatively, solve problems,
                and build solutions that they can proudly demonstrate.
              </p>
            </div>

            {/* Icon */}
            <div className="hidden lg:flex">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <div className="absolute inset-0 animate-pulse rounded-full border border-cyan-400/20" />
                <div className="absolute inset-6 rounded-full border border-blue-400/30" />

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-2xl shadow-cyan-500/30">
                  <Rocket className="h-11 w-11 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-400">
                      <Icon className="h-7 w-7" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[0.2em] text-cyan-400">
                    {achievement.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {achievement.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {achievement.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Areas */}
        <div className="mt-20 grid gap-5 border-y border-white/10 py-10 md:grid-cols-3">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className={`flex items-center gap-5 px-4 ${
                  index !== impactAreas.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <div>
                  <h4 className="font-bold text-white">{area.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-2xl font-medium leading-relaxed text-slate-300 sm:text-3xl">
            "The best way to prepare students for the future is to give them the
            opportunity to
            <span className="text-cyan-400">
              {" "}
              start creating it today.
            </span>
            "
          </p>
        </div>
      </div>
    </section>
  );
}