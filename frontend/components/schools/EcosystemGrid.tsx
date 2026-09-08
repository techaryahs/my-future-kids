"use client";

import {
  Bot,
  BrainCircuit,
  Wifi,
  Cpu,
  FlaskConical,
  Building2,
  GraduationCap,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const ecosystemItems = [
  {
    icon: Bot,
    title: "Robotics & STEM",
    description:
      "Hands-on programs where students design, build, program, and experiment with real robotics and STEM concepts.",
    number: "01",
  },
  {
    icon: BrainCircuit,
    title: "AI & Coding",
    description:
      "Future-ready learning experiences covering artificial intelligence, programming, computational thinking, and digital creativity.",
    number: "02",
  },
  {
    icon: Wifi,
    title: "IoT & Smart Technology",
    description:
      "Students explore connected devices, sensors, automation, smart systems, and real-world Internet of Things applications.",
    number: "03",
  },
  {
    icon: Cpu,
    title: "Kits & Hardware",
    description:
      "Access to robotics kits, microcontrollers, sensors, motors, electronic components, and project-based technology tools.",
    number: "04",
  },
  {
    icon: FlaskConical,
    title: "Innovation Labs",
    description:
      "Complete STEM, Robotics, IoT, Coding, and Maker Lab solutions designed for practical experimentation and innovation.",
    number: "05",
  },
  {
    icon: Building2,
    title: "Customized Solutions",
    description:
      "Technology programs, infrastructure, devices, and learning experiences tailored specifically to your school's requirements.",
    number: "06",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    description:
      "Experienced trainers and mentors guide students throughout their learning journey, projects, and innovation challenges.",
    number: "07",
  },
  {
    icon: Lightbulb,
    title: "Real-World Projects",
    description:
      "Students transform ideas into working prototypes through hands-on projects, challenges, exhibitions, and competitions.",
    number: "08",
  },
];

export default function EcosystemGrid() {
  return (
<<<<<<< HEAD
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#f8fbff] dark:bg-[#090d16] py-24 sm:py-28 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Our Ecosystem
=======
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            COMPLETE TECHNOLOGY ECOSYSTEM
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything Students Need to
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Build the Future
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
            </span>
          </h2>

<<<<<<< HEAD
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              One Partner.{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Complete Ecosystem.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">
              From classroom programs to innovation infrastructure, BeFutureKids
              helps schools create a connected future-ready learning ecosystem.
            </p>
          </div>

          <div className="hidden rounded-full border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm lg:block">
            Robotics • STEM • AI • Coding • AR/VR
          </div>
        </motion.div>

        {/* Solution cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 dark:hover:border-blue-800/80 hover:shadow-2xl"
              >
                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50 dark:bg-blue-950/40 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/60 p-4 transition-all duration-300 group-hover:bg-blue-600">
                      <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 dark:text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </div>

                  <div className="mt-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {solution.tag}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Explore solution
                    <ArrowUpRight className="h-4 w-4 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
=======
          <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
            From future-ready learning programs to robotics kits, IoT devices,
            innovation labs, and expert mentorship — we provide a complete
            ecosystem designed to help students explore, build, and innovate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                {/* Number */}
                <span className="absolute right-5 top-5 text-sm font-bold text-white/10 transition-colors group-hover:text-cyan-400/30">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
                  <Icon className="h-7 w-7 text-cyan-400" />
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-6 flex items-center text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity duration-300 group-hover:bg-cyan-500/20" />
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="mx-auto max-w-3xl text-lg font-medium text-slate-300">
            We don't just teach technology.
            <span className="ml-2 text-cyan-400">
              We provide the tools, infrastructure, guidance, and opportunities
              students need to create with it.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}