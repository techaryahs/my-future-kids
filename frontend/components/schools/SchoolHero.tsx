"use client";

import Link from "next/link";
import { ArrowRight, Bot, Brain, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SchoolHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fbff] dark:bg-[#090d16] pt-28 transition-colors duration-200">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 top-32 h-[600px] w-[600px] rounded-full bg-blue-100/60 dark:bg-blue-600/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 dark:bg-cyan-600/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70 dark:border-slate-800/40" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/60 dark:border-slate-800/40" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 dark:border-blue-800/50 bg-white dark:bg-slate-900/80 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Future-Ready Education for Schools
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Transform Your School Into a{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Future-Ready
            </span>{" "}
            Learning Campus.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Bring Robotics, STEM, AI, Coding and immersive technologies into
            your school through hands-on programs, innovation labs and
            future-focused learning experiences.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book/school-demo"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Book a School Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-slate-600 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Explore School Solutions
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Hands-on Learning
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Future Skills
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              School Ready
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-[420px] sm:h-[520px] w-full max-w-[600px] items-center justify-center"
        >
          {/* Main futuristic circle */}
          <div className="absolute h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] lg:h-[430px] lg:w-[430px] rounded-full bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-50 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 shadow-[0_30px_80px_rgba(37,99,235,0.18)] dark:shadow-[0_30px_80px_rgba(37,99,235,0.08)] border border-transparent dark:border-slate-800/60" />

          <div className="absolute flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/30">
            <Brain className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
          </div>

          {/* Robotics Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1 top-8 sm:left-0 sm:top-20 rounded-2xl border border-white dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-50 dark:bg-orange-950/60 p-2.5 sm:p-3">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 dark:text-orange-400" />
              </div>

              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base">Robotics</p>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Engineering & Making</p>
              </div>
            </div>
          </motion.div>

          {/* Coding Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-8 right-1 sm:bottom-20 sm:right-0 rounded-2xl border border-white dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-50 dark:bg-purple-950/60 p-2.5 sm:p-3">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
              </div>

              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base">Coding & AI</p>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Digital Skills</p>
              </div>
            </div>
          </motion.div>

          {/* Small floating badge */}
          <div className="absolute right-10 top-4 hidden rounded-full border border-blue-100 dark:border-blue-800/60 bg-white dark:bg-slate-900/90 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-lg sm:block">
            Innovation Ecosystem
          </div>

          <div className="absolute bottom-4 left-12 hidden rounded-full border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-lg sm:block">
            Built for Schools
          </div>
        </motion.div>
      </div>
    </section>
  );
}