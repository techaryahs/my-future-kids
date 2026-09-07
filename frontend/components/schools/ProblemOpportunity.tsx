"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Brain,
  Rocket,
  Sparkles,
} from "lucide-react";

const opportunities = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Practical Learning",
    description:
      "Give students opportunities to build, experiment, test ideas and solve real-world problems.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Technology Skills",
    description:
      "Introduce students to emerging technologies such as AI, robotics, coding and immersive learning.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Future Careers",
    description:
      "Prepare students with capabilities that will help them adapt to rapidly changing career opportunities.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Innovation Mindset",
    description:
      "Create an environment where students become creators, problem-solvers and confident innovators.",
  },
];

export default function ProblemOpportunity() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            The Opportunity
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Education is{" "}
            <span className="text-blue-600">evolving.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tomorrow's students need more than knowledge from textbooks.
            Schools can give them the practical skills, technology exposure
            and innovation mindset needed to thrive in the future.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-300">
                    {item.number}
                  </span>

                  <div className="rounded-2xl bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-600">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}