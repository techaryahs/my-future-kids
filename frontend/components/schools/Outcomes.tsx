"use client";

import {
  Brain,
  Lightbulb,
  Code2,
  Wrench,
  Users,
  Presentation,
  Rocket,
  Trophy,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Students learn how to analyze challenges, think logically, and approach problems with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Innovation",
    description:
      "They transform ideas into meaningful solutions through experimentation and creative thinking.",
  },
  {
    icon: Code2,
    title: "Technology Skills",
    description:
      "Students gain practical exposure to coding, AI, robotics, IoT, and emerging technologies.",
  },
  {
    icon: Wrench,
    title: "Hands-On Experience",
    description:
      "Learning goes beyond theory as students build, test, improve, and showcase real working projects.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Team-based projects help students communicate, collaborate, and solve problems together.",
  },
  {
    icon: Presentation,
    title: "Confidence & Communication",
    description:
      "Students learn to explain their ideas, present projects, and confidently showcase their work.",
  },
];

const journey = [
  "Explore Technology",
  "Learn New Skills",
  "Build Projects",
  "Solve Problems",
  "Showcase Ideas",
  "Become Future Ready",
];

export default function Outcomes() {
  return (
<<<<<<< HEAD
    <section className="bg-slate-950 dark:bg-[#080d1a] border-y border-transparent dark:border-slate-800/80 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 transition-colors duration-200">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Student Outcomes
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technology is the tool.
            <br />
            <span className="text-white/50">Innovation is the outcome.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
            Our programs are designed to help students move beyond consuming
            technology and start creating, experimenting and solving real-world
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 sm:p-6"
            >
              <span className="text-sm text-white/40">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-base font-semibold sm:mt-10 sm:text-lg">
                {outcome}
=======
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <Rocket className="h-4 w-4" />
            STUDENT IMPACT
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Skills That Go Beyond
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              the Classroom
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Our goal isn't just to teach students technology. We help them
            develop the mindset, confidence, creativity, and practical skills
            needed to thrive in a rapidly changing world.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;

            return (
              <div
                key={outcome.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-7 top-6 text-5xl font-bold text-slate-50 transition-colors group-hover:text-blue-50">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="relative text-xl font-bold text-slate-900">
                  {outcome.title}
                </h3>

                <p className="relative mt-3 leading-relaxed text-slate-600">
                  {outcome.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Future-ready skill
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-100/50 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Student Journey */}
        <div className="mt-20 rounded-3xl bg-slate-950 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left Content */}
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Trophy className="h-7 w-7 text-cyan-400" />
              </div>

              <p className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                THE STUDENT JOURNEY
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                From Curious Learners to
                <span className="block text-cyan-400">
                  Confident Innovators.
                </span>
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
              </h3>

              <p className="mt-5 leading-relaxed text-slate-400">
                Every learning experience is designed to move students beyond
                simply consuming technology and towards understanding,
                creating, experimenting, and innovating with it.
              </p>
            </div>

            {/* Journey Steps */}
            <div className="space-y-3">
              {journey.map((step, index) => (
                <div
                  key={step}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-cyan-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="flex-1 font-medium text-slate-200">
                    {step}
                  </span>

                  {index === journey.length - 1 ? (
                    <Rocket className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-slate-600 sm:text-2xl">
            We believe the best learning happens when students are given the
            opportunity to
            <span className="font-bold text-blue-600">
              {" "}
              think, experiment, build, fail, improve, and create something
              they are proud of.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}