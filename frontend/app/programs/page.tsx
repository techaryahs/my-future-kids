import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  FlaskConical,
  Glasses,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { programs } from "@/constants/programs";
import BookingForm from "@/components/programs/BookingForm";

const programIcons = {
  robotics: Bot,
  stem: FlaskConical,
  ai: Brain,
  "ar-vr": Glasses,
  coding: Code2,
};

const programColors = {
  robotics: "from-blue-600 to-cyan-500",
  stem: "from-orange-500 to-amber-400",
  ai: "from-purple-600 to-pink-500",
  "ar-vr": "from-violet-600 to-indigo-500",
  coding: "from-emerald-600 to-teal-500",
};

export default function ProgramsPage() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.45] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#dbeafe 1px, transparent 1px), linear-gradient(90deg, #dbeafe 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient Background Effects */}
      <div className="absolute -top-40 left-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-[120px]" />
      <div className="absolute top-[500px] right-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-300/20 dark:bg-purple-600/10 blur-[120px]" />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 text-center md:px-8 md:pt-32">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800/60 bg-white/80 dark:bg-slate-900/80 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-300 shadow-sm backdrop-blur">
          <Sparkles size={16} />
          FUTURE-READY LEARNING PROGRAMS
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-7xl">
          Learning Today.
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Leading Tomorrow.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
          Discover hands-on technology programs designed to help students
          explore, build, experiment, and develop the skills needed for the
          future.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Explore Programs
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 px-7 py-3.5 font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition hover:border-blue-200 dark:hover:border-slate-600 hover:text-blue-600 dark:hover:text-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Explore Our Programs
          </p>

          <h2 className="text-3xl font-bold text-slate-950 dark:text-white md:text-5xl">
            Designed for Curious Young Minds
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Every program combines practical learning, creativity, technology,
            and real-world problem solving.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon =
              programIcons[program.slug as keyof typeof programIcons] ||
              Sparkles;

            const gradient =
              programColors[program.slug as keyof typeof programColors] ||
              "from-blue-600 to-indigo-500";

            return (
              <Link
                key={program.slug}
                href={`/${program.slug}`}
                className="group relative"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-2xl hover:shadow-blue-900/10">
                  {/* Top Gradient */}
                  <div
                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${gradient}`}
                  />

                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                  >
                    <Icon size={27} />
                  </div>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {program.tagline}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {program.overview}
                  </p>

                  {/* Age Groups */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.ageGroups.map((age) => (
                      <span
                        key={age}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300"
                      >
                        {age}
                      </span>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="mt-6 space-y-2">
                    {program.benefits.slice(0, 2).map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-slate-950 dark:text-white transition group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Explore Program
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY PROGRAMS */}
      <section className="border-y border-slate-200 dark:border-slate-850 bg-white/80 dark:bg-slate-900/60 py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Bot size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Hands-On Learning</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Students learn by building, experimenting, coding and creating
                real projects.
              </p>
            </div>

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <Brain size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Future-Ready Skills</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Our programs introduce technologies shaping the future of
                education and careers.
              </p>
            </div>

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                <Sparkles size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">Learn Through Projects</h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Every learning journey focuses on creativity, exploration and
                practical outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking">
        <BookingForm />
      </section>
    </main>
  );
}
