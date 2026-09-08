"use client";

import Link from "next/link";
import {
  Bot,
  Brain,
  Glasses,
  Box,
  Code2,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const technologies = [
  {
    id: 1,
    title: "Robotics",
    subtitle: "Build. Program. Innovate.",
    description:
      "Robotics introduces students to the exciting world of designing, building, and programming machines. Through hands-on projects, students learn how sensors, motors, electronics, and code work together to create robots that can respond to their environment. These activities build engineering skills, logical thinking, creativity, teamwork, and real-world problem-solving abilities.",
    icon: Bot,
    features: [
      "Hands-on Robot Building",
      "Sensors & Motors",
      "Automation Projects",
      "Problem Solving",
    ],
    number: "01",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    subtitle: "Understand the Intelligence of Tomorrow.",
    description:
      "Artificial Intelligence helps students understand how computers can learn, recognize patterns, make predictions, and perform tasks that normally require human intelligence. Students explore machine learning, computer vision, generative AI, and practical AI tools through engaging activities and experiments. The program encourages curiosity, critical thinking, creativity, and responsible use of AI technology.",
    icon: Brain,
    features: [
      "AI Fundamentals",
      "Machine Learning Concepts",
      "Computer Vision",
      "Real-World AI Tools",
    ],
    number: "02",
  },
  {
    id: 3,
    title: "AR & VR",
    subtitle: "Step Inside the Learning Experience.",
    description:
      "Augmented Reality and Virtual Reality transform learning into an immersive experience where students can explore places, objects, and concepts beyond the traditional classroom. Through virtual environments, simulations, and interactive experiences, students can visualize difficult concepts and learn by exploration. This approach encourages curiosity, creativity, spatial understanding, and active participation.",
    icon: Glasses,
    features: [
      "Virtual Exploration",
      "Immersive Learning",
      "Interactive Experiences",
      "Virtual Labs",
    ],
    number: "03",
  },
  {
    id: 4,
    title: "Interactive 3D Learning",
    subtitle: "See It. Explore It. Understand It.",
    description:
      "Interactive 3D Learning allows students to explore realistic digital models and understand complex concepts through visual and interactive experiences. Students can examine objects, structures, systems, and environments from different perspectives instead of relying only on textbooks or static images. This makes learning more engaging, memorable, and easier to connect with real-world applications.",
    icon: Box,
    features: [
      "Interactive 3D Models",
      "Visual Learning",
      "Concept Exploration",
      "Curriculum Support",
    ],
    number: "04",
  },
  {
    id: 5,
    title: "Coding & Logic",
    subtitle: "Think Like a Creator.",
    description:
      "Coding and Logic helps students develop computational thinking by teaching them how to break complex problems into smaller, manageable steps. Students create programs, games, animations, and digital projects while learning algorithms, sequences, conditions, loops, and programming logic. The experience develops problem-solving, creativity, logical reasoning, and confidence in building technology.",
    icon: Code2,
    features: [
      "Block Coding",
      "Programming Logic",
      "Game Development",
      "Computational Thinking",
    ],
    number: "05",
  },
  {
    id: 6,
    title: "IoT & Smart Technology",
    subtitle: "Connect Ideas to the Real World.",
    description:
      "IoT and Smart Technology introduces students to the connected world of smart devices, sensors, automation, and intelligent systems. Students discover how devices communicate, collect information, and respond to real-world conditions through practical activities and projects. This helps them understand the connection between the physical and digital worlds while developing creativity, technical thinking, and problem-solving skills.",
    icon: Cpu,
    features: [
      "Internet of Things",
      "Smart Devices",
      "Sensors & Connectivity",
      "Automation Systems",
    ],
    number: "06",
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-[10%] top-20 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              <Sparkles size={16} />
              FUTURE-READY TECHNOLOGY
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Where Technology Meets{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Curiosity.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
              We bring tomorrow&apos;s technologies into today&apos;s classrooms
              — empowering students to explore, experiment, create, and
              innovate.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="book/school-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
              >
                Bring Technology to Your School
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#technologies"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Explore Technologies
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Technology floating cards */}
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.id}
                    className="group relative rounded-2xl border border-white bg-white/80 p-5 text-center shadow-lg shadow-blue-900/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25">
                      <Icon size={23} />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-800">
                      {technology.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
              OUR TECHNOLOGY ECOSYSTEM
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
              Learning Beyond
              <br />
              the Textbook.
            </h2>
          </div>

          <p className="self-end text-lg leading-8 text-slate-600">
            Technology is not just something students should learn about. It
            should be something they actively experience. Our ecosystem combines
            physical tools, immersive experiences, intelligent systems, and
            creative projects to make learning meaningful and exciting.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY CARDS */}
      <section
        id="technologies"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.id}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="absolute right-6 top-5 text-6xl font-bold text-slate-100 transition group-hover:text-blue-50">
                  {technology.number}
                </div>

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-950">
                    {technology.title}
                  </h3>

                  <p className="mt-2 font-medium text-blue-600">
                    {technology.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600">
                    {technology.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                    {technology.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 size={17} className="text-blue-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-600 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-400">
              THE LEARNING JOURNEY
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-6xl">
              From Curiosity to Creation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Students don&apos;t just consume technology. They learn to
              understand it, experiment with it, and eventually create with it.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Explore",
                text: "Discover emerging technologies and real-world possibilities.",
              },
              {
                step: "02",
                title: "Experiment",
                text: "Learn through hands-on activities and interactive experiences.",
              },
              {
                step: "03",
                title: "Create",
                text: "Transform ideas into projects, solutions, and innovations.",
              },
              {
                step: "04",
                title: "Innovate",
                text: "Develop the confidence to solve tomorrow's challenges.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <span className="text-sm font-bold text-blue-400">
                  {item.step}
                </span>

                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/25">
            <Sparkles size={30} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
            Bring the Future Into Your Classroom.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Give students the opportunity to explore the technologies shaping
            their future through meaningful, hands-on learning experiences.
          </p>

          <Link
            href="/book/school-demo"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            Book a Free Demo
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
