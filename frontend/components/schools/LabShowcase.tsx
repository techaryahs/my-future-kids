"use client";

import {
  Bot,
  Wifi,
  Cpu,
  Boxes,
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Lightbulb,
} from "lucide-react";

const labTypes = [
  {
    icon: Bot,
    title: "Robotics Lab",
    subtitle: "Build. Program. Innovate.",
    description:
      "A hands-on environment where students design, build, and program intelligent machines using real robotics hardware.",
    features: [
      "Robotics kits & controllers",
      "Motors, sensors & actuators",
      "Autonomous robot projects",
      "Mechanical design activities",
    ],
    tag: "MOST POPULAR",
  },
  {
    icon: Wifi,
    title: "IoT & Smart Lab",
    subtitle: "Connect Ideas to the Real World.",
    description:
      "Students explore connected devices, automation, sensors, wireless communication, and real-world smart systems.",
    features: [
      "Arduino & ESP32 boards",
      "IoT sensors & modules",
      "Smart automation projects",
      "Wireless connectivity",
    ],
    tag: "FUTURE READY",
  },
  {
    icon: Cpu,
    title: "AI & Coding Lab",
    subtitle: "Create with Intelligence.",
    description:
      "A future-ready environment for students to explore programming, artificial intelligence, computational thinking, and digital creation.",
    features: [
      "Coding workstations",
      "AI learning tools",
      "Programming projects",
      "Creative technology",
    ],
    tag: "NEXT GENERATION",
  },
];

const equipment = [
  "Arduino & Microcontrollers",
  "Raspberry Pi",
  "IoT Sensors",
  "Motors & Actuators",
  "Robotics Kits",
  "Electronic Components",
  "3D Design Tools",
  "Project Equipment",
];

export default function LabShowcase() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0b101b] py-24 sm:py-28 transition-colors duration-200">
      {/* Background */}
<<<<<<< HEAD
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-50/70 dark:bg-blue-600/10 blur-3xl" />
=======
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-[120px]" />
      </div>
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Built For Your Campus
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            What We Can Build{" "}
            <span className="text-blue-600 dark:text-blue-400">
              For Your School
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300">
            Transform classrooms and dedicated learning spaces into environments
            where students can build, experiment, create and solve real-world
            problems.
=======
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <CircuitBoard className="h-4 w-4" />
            FUTURE-READY INFRASTRUCTURE
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            More Than a Classroom.
            <span className="block text-blue-600">
              A Space Built for Innovation.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We help schools create technology-rich learning environments with
            the right infrastructure, hardware, devices, and practical tools
            students need to experiment and bring ideas to life.
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
          </p>
        </div>

        {/* Lab Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {labTypes.map((lab) => {
            const Icon = lab.icon;

            return (
              <div
                key={lab.title}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-slate-950 dark:bg-slate-900/90 p-5 sm:p-7 text-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  largeCard
                    ? "lg:col-span-7 lg:min-h-[420px]"
                    : "lg:col-span-5"
                }`}
=======
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
              >
                {/* Background Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  {/* Tag */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-500">
                      {lab.tag}
                    </span>
                  </div>

                  <p className="mb-2 text-sm font-semibold text-blue-600">
                    {lab.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {lab.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {lab.description}
                  </p>

                  {/* Features */}
                  <div className="mt-7 space-y-3">
                    {lab.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 transition-all group-hover:gap-3">
                    Explore Lab Solution
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/40 p-5 sm:p-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              More than a room filled with equipment.
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              We combine infrastructure, curriculum, teacher training,
              activities, projects and continuous support to create a complete
              learning ecosystem.
            </p>
          </div>

          <div className="shrink-0 rounded-full bg-white dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-transparent dark:border-slate-700 shadow-sm">
            Infrastructure + Curriculum + Support
=======
        {/* Equipment Section */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            {/* Left */}
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                <Boxes className="h-6 w-6 text-cyan-400" />
              </div>

              <p className="mb-3 text-sm font-bold tracking-widest text-cyan-400">
                HARDWARE & EQUIPMENT
              </p>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                We Provide the Tools
                <span className="block text-cyan-400">
                  Behind Great Ideas.
                </span>
              </h3>

              <p className="mt-5 leading-relaxed text-slate-400">
                From individual project kits to complete school technology
                infrastructure, we help provide the right equipment based on
                your learning goals and requirements.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {equipment.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <Lightbulb className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
>>>>>>> 2f067ad90cd85d8bbf09c2143870541a4578eef7
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-xl font-medium leading-relaxed text-slate-700">
            Every school is different. That's why we don't believe in
            one-size-fits-all labs.
            <span className="font-bold text-blue-600">
              {" "}
              We design solutions around your students, space, goals, and
              technology requirements.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}