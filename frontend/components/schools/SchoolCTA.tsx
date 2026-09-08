"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Building2,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const benefits = [
  "Customized solution for your school",
  "Technology, curriculum & mentor support",
  "Flexible implementation options",
];

export default function SchoolCTA() {
  return (
<<<<<<< HEAD
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-slate-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 px-6 py-12 text-white md:px-16 md:py-20 shadow-2xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start the Conversation
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight md:text-6xl">
            Ready to build the school of tomorrow?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Let&apos;s explore how BeFutureKids can help your school create a
            future-ready learning ecosystem.
          </p>
=======
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 shadow-2xl sm:px-12 sm:py-20 lg:px-20">
          {/* Decorative gradients */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                <Sparkles className="h-4 w-4" />
                LET'S BUILD THE FUTURE TOGETHER
              </div>

              <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Transform
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Learning at Your School?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                Let's create a technology learning ecosystem that gives your
                students the skills, confidence, and opportunities they need
                for the future.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book/school-demo"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book a School Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/book/partnership"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-4 font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/[0.1]"
                >
                  <Building2 className="h-5 w-5 text-cyan-400" />
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="relative">
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.09]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                      <Building2 className="h-6 w-6 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        For School Leaders
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Explore how My Future Kids can help your institution
                        build a complete technology and innovation ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.09]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                      <CalendarDays className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        Schedule a Demo
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        See our learning ecosystem, programs, technology
                        solutions, and implementation approach in action.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.09]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/20">
                      <MessageCircle className="h-6 w-6 text-purple-400" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        Talk to Our Team
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Discuss your school's requirements and discover the
                        right technology learning solution for your students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 -top-6 hidden rotate-6 rounded-2xl border border-cyan-400/20 bg-slate-900 px-5 py-3 shadow-xl lg:block">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">
                    Future Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom small message */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm text-slate-500">
            Every school is different. That's why we work with you to create a
            learning solution that fits your students, infrastructure, and
            educational goals.
          </p>
        </div>
      </div>
    </section>
  );
}