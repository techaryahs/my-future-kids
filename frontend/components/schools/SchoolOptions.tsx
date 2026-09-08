import Link from "next/link";

const studentBenefits = [
  {
    icon: "🧠",
    title: "Critical & Logical Thinking",
    description:
      "Students learn to understand problems, think logically and develop effective solutions.",
  },
  {
    icon: "🤖",
    title: "Technology Skills",
    description:
      "Hands-on exposure to Robotics, AI/ML, Coding, STEM and emerging technologies.",
  },
  {
    icon: "💡",
    title: "Creativity & Innovation",
    description:
      "Students turn their ideas into projects, prototypes and creative technology solutions.",
  },
  {
    icon: "🔍",
    title: "Problem-Solving Skills",
    description:
      "Students learn through experimentation, challenges, mistakes and continuous improvement.",
  },
  {
    icon: "🤝",
    title: "Collaboration & Communication",
    description:
      "Team-based activities help students communicate ideas, collaborate and present their work.",
  },
  {
    icon: "🚀",
    title: "Future Readiness",
    description:
      "Students develop the mindset and skills needed for a technology-driven future.",
  },
];

export default function SchoolOptions() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-[#f8fbff] dark:bg-[#090d16] transition-colors duration-200">
      <div className="mx-auto max-w-7xl">

        {/* INTRODUCTION */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Building Future-Ready Kids
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-6xl">
            Develop Young Minds.
            <span className="block text-gray-400 dark:text-gray-500">
              Build Future-Ready Kids.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base sm:text-lg leading-8 text-gray-600 dark:text-slate-300 md:text-xl">
            We help schools create an environment where students don&apos;t just
            learn technology — they learn how to think, create, experiment and
            solve real-world problems.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-7 text-gray-500 dark:text-slate-400">
            Through Robotics, AI/ML, STEM, Coding and Innovation, students get
            practical exposure to emerging technologies while developing
            logical thinking, creativity, problem-solving, collaboration and
            confidence.
          </p>
        </div>

        {/* TECHNOLOGY MESSAGE */}
        <div className="mt-16 rounded-[2rem] bg-gray-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 px-6 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Learn • Create • Solve • Innovate
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Education should prepare children for tomorrow.
              </h3>

              <p className="mt-5 text-base leading-7 text-white/60 md:text-lg">
                Our approach goes beyond traditional classroom learning.
                Students explore technology through hands-on experiences,
                projects and real-world challenges so they can become
                technology creators, problem solvers and innovators.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {["Robotics", "AI / ML", "STEM", "Coding"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STUDENT BENEFITS */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Student Development
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-4xl">
              What students develop through future-ready learning
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Our programs are designed to develop both technology skills and
              the thinking abilities students need to grow with confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studentBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-[1.5rem] border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 dark:bg-slate-800 text-2xl transition group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60">
                  {benefit.icon}
                </div>

                <h4 className="mt-5 text-xl font-bold text-gray-950 dark:text-white">
                  {benefit.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTIONS & PROGRAMS */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Choose Your Path
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
              Solutions & Programs for Your School
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-300">
              Choose the right combination of school technology solutions and
              student learning programs based on your school&apos;s goals and
              student needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* SCHOOL SOLUTIONS */}
            <div className="group rounded-[2rem] border border-gray-200/20 dark:border-slate-800 bg-gray-950 dark:bg-slate-900 p-6 sm:p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                ⚙️
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-400">
                For Schools
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                School Solutions
              </h3>

              <p className="mt-5 leading-7 text-white/60">
                Build a technology-enabled school ecosystem with Robotics,
                STEM, Artificial Intelligence, Coding, AR/VR and Innovation
                solutions.
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/70">
                <p>✓ Robotics & STEM ecosystem</p>
                <p>✓ AI/ML learning infrastructure</p>
                <p>✓ Coding & technology solutions</p>
                <p>✓ Innovation & future-ready learning</p>
              </div>

              <Link
                href="/school-solutions"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Explore Solutions →
              </Link>
            </div>

            {/* SCHOOL PROGRAMS */}
            <div className="group rounded-[2rem] border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-2xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-2xl">
                🚀
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                For Students
              </p>

              <h3 className="mt-3 text-3xl font-bold text-gray-950 dark:text-white">
                School Programs
              </h3>

              <p className="mt-5 leading-7 text-gray-600 dark:text-slate-300">
                Give students practical learning experiences through Coding,
                Robotics, STEM, AI/ML, Innovation workshops and technology
                programs.
              </p>

              <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-slate-300">
                <p>✓ Hands-on technology learning</p>
                <p>✓ Robotics & coding activities</p>
                <p>✓ AI/ML exploration</p>
                <p>✓ Projects, challenges & innovation</p>
              </div>

              <Link
                href="/school-programs"
                className="mt-8 inline-flex rounded-full bg-gray-950 dark:bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 dark:hover:bg-blue-500 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Explore Programs →
              </Link>
            </div>

          </div>
        </div>

        {/* FINAL MESSAGE */}
        <div className="mt-20 text-center">
          <p className="text-xl font-semibold text-gray-950 dark:text-white md:text-2xl">
            Thinkers. Creators. Problem Solvers. Innovators.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Give students the opportunity to explore, experiment and build
            today — so they can confidently create the future tomorrow.
          </p>
        </div>

      </div>
    </section>
  );
}