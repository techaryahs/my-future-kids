"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  FlaskConical,
  BrainCircuit,
  Glasses,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const labs = [
  {
    icon: Bot,
    number: "01",
    title: "Robotics Lab",
    description:
      "A hands-on environment where students learn robotics, engineering, automation and problem-solving by building real projects.",
    features: ["Robotics Kits", "Sensors", "Automation", "Project Building"],
    href: "/programs#robotics",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "STEM Innovation Lab",
    description:
      "A collaborative space designed for experimentation, scientific thinking, prototyping and project-based STEM learning.",
    features: ["Science Tools", "Experiments", "Prototyping", "Maker Activities"],
    href: "/programs#stem",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI Learning Space",
    description:
      "Introduce students to artificial intelligence through age-appropriate concepts, experiments and practical applications.",
    features: ["AI Concepts", "Machine Learning", "Computer Vision", "AI Projects"],
    href: "/programs#ai",
  },
  {
    icon: Glasses,
    number: "04",
    title: "AR / VR Experience Zone",
    description:
      "Create immersive learning experiences that help students explore concepts through interactive virtual and augmented environments.",
    features: ["VR Experiences", "AR Learning", "3D Content", "Immersive Projects"],
    href: "/programs#ar-vr",
  },
  {
    icon: Code2,
    number: "05",
    title: "Coding & Digital Skills Space",
    description:
      "A dedicated technology environment where students develop coding, computational thinking and digital creation skills.",
    features: ["Programming", "Web Development", "App Ideas", "Digital Projects"],
    href: "/programs#coding",
  },
];

export default function LabShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Built For Your Campus
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            What We Can Build{" "}
            <span className="text-blue-600">
              For Your School
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Transform classrooms and dedicated learning spaces into environments
            where students can build, experiment, create and solve real-world
            problems.
          </p>
        </motion.div>

        {/* Lab grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {labs.map((lab, index) => {
            const Icon = lab.icon;

            /*
             * First card gets a larger layout.
             * Remaining cards use normal grid sizing.
             */
            const largeCard = index === 0;
            const hasLink = lab.href;

            const card = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-950 p-7 text-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full ${hasLink ? "cursor-pointer" : ""} ${
                  largeCard
                    ? "lg:min-h-[420px]"
                    : ""
                }`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-2xl transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                        <Icon className="h-7 w-7 text-blue-300" />
                      </div>

                      <span className="text-sm font-semibold tracking-wider text-white/40">
                        {lab.number}
                      </span>
                    </div>

                    <div className="rounded-full border border-white/10 p-2 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/10">
                      <ArrowUpRight className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-auto pt-14">
                    <h3
                      className={`font-bold tracking-tight ${
                        largeCard
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {lab.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
                      {lab.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {lab.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            return hasLink ? (
              <Link
                key={lab.title}
                href={lab.href as string}
                className={`block ${largeCard ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                {card}
              </Link>
            ) : (
              <div key={lab.title} className={largeCard ? "lg:col-span-7" : "lg:col-span-5"}>
                {card}
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-blue-100 bg-blue-50/60 p-7 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-lg font-bold text-slate-900">
              More than a room filled with equipment.
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              We combine infrastructure, curriculum, teacher training,
              activities, projects and continuous support to create a complete
              learning ecosystem.
            </p>
          </div>

          <div className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm">
            Infrastructure + Curriculum + Support
          </div>
        </motion.div>
      </div>
    </section>
  );
}