"use client";

import {
  Search,
  PenTool,
  Boxes,
  Wrench,
  GraduationCap,
  Rocket,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand Your Needs",
    description:
      "We begin by understanding your school's students, infrastructure, learning goals, available space, and technology requirements.",
    highlights: [
      "School requirement analysis",
      "Student age-group planning",
      "Infrastructure assessment",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design the Right Solution",
    description:
      "Our team creates a customized technology and learning solution designed specifically around your school's objectives.",
    highlights: [
      "Customized program planning",
      "Technology selection",
      "Lab & infrastructure design",
    ],
  },
  {
    number: "03",
    icon: Boxes,
    title: "Provide Tools & Technology",
    description:
      "We arrange the required robotics kits, IoT devices, sensors, microcontrollers, hardware, and learning resources.",
    highlights: [
      "Robotics kits",
      "IoT devices & sensors",
      "Hardware & equipment",
    ],
  },
  {
    number: "04",
    icon: Wrench,
    title: "Setup & Implementation",
    description:
      "We help implement the solution, set up the required technology environment, and prepare everything for students.",
    highlights: [
      "Lab setup",
      "Device configuration",
      "Technology installation",
    ],
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Training & Learning Begins",
    description:
      "Students learn through expert-led sessions, hands-on activities, experiments, coding, and project-based learning.",
    highlights: [
      "Expert trainers",
      "Hands-on sessions",
      "Practical learning",
    ],
  },
  {
    number: "06",
    icon: Rocket,
    title: "Build & Innovate",
    description:
      "Students apply their knowledge by building real projects, prototypes, solutions, and participating in innovation challenges.",
    highlights: [
      "Real-world projects",
      "Innovation challenges",
      "Competitions & showcases",
    ],
  },
  {
    number: "07",
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end after setup. We continue supporting schools, teachers, and students as their technology journey grows.",
    highlights: [
      "Technical support",
      "Program guidance",
      "Future upgrades",
    ],
  },
];

export default function ImplementationJourney() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-blue-100/60 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            SIMPLE. STRUCTURED. SCALABLE.
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            From Vision to
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Real Implementation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We make it easy for schools to introduce future-ready technology.
            From the first conversation to long-term support, we handle the
            complete journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-[8.33%] right-[8.33%] top-12 hidden h-px bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`group relative ${
                    index === 6 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                    {/* Number */}
                    <div className="absolute right-6 top-5 text-sm font-bold text-slate-200">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                      {step.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-slate-500"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Step indicator */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Step {step.number}
                      {index !== steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mx-auto mt-20 max-w-5xl rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-10 text-center shadow-xl shadow-blue-500/10 sm:px-12">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-100">
            END-TO-END PARTNERSHIP
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            One Partner. Complete Technology Ecosystem.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-blue-50">
            From planning and infrastructure to devices, trainers, student
            programs, projects, and ongoing support — My Future Kids helps
            schools build a sustainable ecosystem for future-ready learning.
          </p>
        </div>
      </div>
    </section>
  );
}