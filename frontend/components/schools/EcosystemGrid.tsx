"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FlaskConical,
  BrainCircuit,
  Code2,
  Glasses,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Robotics Education",
    description:
      "Hands-on robotics experiences that introduce students to engineering, automation and real-world problem solving.",
    tag: "Build",
  },
  {
    icon: FlaskConical,
    title: "STEM Learning",
    description:
      "Project-based STEM learning that connects science, technology, engineering and mathematics.",
    tag: "Explore",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Age-appropriate AI learning that helps students understand intelligent technologies and their applications.",
    tag: "Discover",
  },
  {
    icon: Code2,
    title: "Coding Programs",
    description:
      "Structured coding experiences that develop computational thinking, logic and digital confidence.",
    tag: "Create",
  },
  {
    icon: Glasses,
    title: "AR/VR Experiences",
    description:
      "Immersive learning experiences that bring complex concepts to life through interactive technology.",
    tag: "Experience",
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description:
      "Purpose-built learning environments where students can experiment, prototype and develop innovative ideas.",
    tag: "Innovate",
  },
];

export default function EcosystemGrid() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Ecosystem
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              One Partner.{" "}
              <span className="text-blue-600">
                Complete Ecosystem.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              From classroom programs to innovation infrastructure, BeFutureKids
              helps schools create a connected future-ready learning ecosystem.
            </p>
          </div>

          <div className="hidden rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-sm lg:block">
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
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl"
              >
                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-600">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>

                  <div className="mt-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {solution.tag}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {solution.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    Explore solution
                    <ArrowUpRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}