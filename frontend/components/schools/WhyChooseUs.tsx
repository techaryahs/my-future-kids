"use client";

import {
  CheckCircle2,
  Award,
  Users,
  Cpu,
  GraduationCap,
  Wrench,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Complete Learning Ecosystem",
    description:
      "We don't just conduct workshops. We provide structured programs, curriculum, mentors, technology, projects, and continuous learning support.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Technologies",
    description:
      "Students get exposure to Robotics, AI, Coding, IoT, STEM, AR/VR and other emerging technologies through practical learning.",
  },
  {
    icon: Wrench,
    title: "Hardware + Software Support",
    description:
      "From robotics kits and IoT devices to software platforms and learning resources, we help schools build a complete technology ecosystem.",
  },
  {
    icon: Users,
    title: "Expert Mentor Support",
    description:
      "Our trainers and mentors guide students throughout their learning journey with hands-on sessions and real project-based learning.",
  },
  {
    icon: BarChart3,
    title: "Measurable Student Growth",
    description:
      "Schools can track participation, projects, skills development, and student engagement through structured learning outcomes.",
  },
  {
    icon: Award,
    title: "Real Projects & Achievements",
    description:
      "Students don't just complete lessons. They build projects, participate in challenges, showcase ideas, and create meaningful achievements.",
  },
];

const highlights = [
  "Customized programs based on school requirements",
  "Age-appropriate learning paths for students",
  "Hands-on technology and innovation projects",
  "Robotics kits and IoT device integration",
  "Experienced trainers and mentor support",
  "Flexible implementation for schools",
];

export default function WhyChooseUs() {
  return (
<<<<<<< HEAD
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 bg-white dark:bg-[#0b101b] transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Why BeFutureKids
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            More than a technology provider.
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">
            A long-term partner for building future-ready learning
            environments.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/90 p-5 sm:p-7 transition-all hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-xl"
            >
              <div className="mb-6 h-10 w-10 rounded-2xl bg-blue-600 dark:bg-blue-500 shadow-md shadow-blue-500/20" />

              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
                {reason.text}
=======
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            WHY MY FUTURE KIDS
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            More Than a Training Provider.
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Your Technology Education Partner.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We work alongside schools to create sustainable technology learning
            ecosystems that inspire students, support educators, and prepare
            institutions for the future.
          </p>
        </div>

        {/* Main Feature */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl lg:grid-cols-2">
          {/* Left */}
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>

              <p className="mt-8 text-sm font-bold tracking-[0.2em] text-cyan-400">
                ONE COMPLETE PARTNER
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Everything Your School Needs to Build a
                <span className="block text-cyan-400">
                  Future-Ready Learning Culture.
                </span>
              </h3>

              <p className="mt-6 leading-relaxed text-slate-400">
                Instead of managing multiple vendors for technology, trainers,
                curriculum, and equipment, My Future Kids brings everything
                together into one connected learning ecosystem.
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
              </p>

              <div className="mt-10 space-y-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Visual Cards */}
          <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />

            <div className="relative grid w-full max-w-md grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-sm">
                <Cpu className="h-8 w-8 text-white" />
                <p className="mt-4 text-sm text-blue-100">Technology</p>
                <p className="mt-1 text-lg font-bold text-white">
                  Modern Labs
                </p>
              </div>

              <div className="translate-y-8 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-sm">
                <GraduationCap className="h-8 w-8 text-white" />
                <p className="mt-4 text-sm text-blue-100">Learning</p>
                <p className="mt-1 text-lg font-bold text-white">
                  Curriculum
                </p>
              </div>

              <div className="-translate-y-2 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
                <p className="mt-4 text-sm text-blue-100">Support</p>
                <p className="mt-1 text-lg font-bold text-white">
                  Mentors
                </p>
              </div>

              <div className="translate-y-6 rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-sm">
                <Award className="h-8 w-8 text-white" />
                <p className="mt-4 text-sm text-blue-100">Impact</p>
                <p className="mt-1 text-lg font-bold text-white">
                  Outcomes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="mt-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-blue-600">
                THE DIFFERENCE
              </p>

              <h3 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Built for Long-Term Impact
              </h3>
            </div>

            <p className="max-w-md text-slate-600">
              Our approach is designed to create meaningful and sustainable
              technology education experiences for schools and students.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-slate-900">
                    {reason.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center sm:p-10 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Ready to Build a Future-Ready School?
            </h3>

            <p className="mt-2 text-slate-600">
              Let's discuss how we can create the right technology learning
              ecosystem for your students.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-xl">
            Partner With Us
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}