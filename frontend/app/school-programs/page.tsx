import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Annual Robotics Program",
    description:
      "A structured year-long robotics journey where students progressively move from fundamentals to advanced projects.",
    audience: "Primary, Middle & Secondary Students",
    duration: "Academic Year",
    format: "Weekly / Scheduled Sessions",
    activities: [
      "Robot building",
      "Programming",
      "Sensor experiments",
      "Engineering challenges",
      "Competitions",
    ],
    outcome:
      "Build engineering thinking, programming confidence and problem-solving skills.",
  },
  {
    number: "02",
    title: "STEM Curriculum Program",
    description:
      "Hands-on STEM learning designed to connect classroom concepts with practical experimentation and engineering.",
    audience: "Primary & Middle School",
    duration: "Term / Academic Year",
    format: "Classroom + Lab",
    activities: [
      "Experiments",
      "Design challenges",
      "Model building",
      "Scientific exploration",
      "Team projects",
    ],
    outcome:
      "Develop curiosity, creativity, collaboration and analytical thinking.",
  },
  {
    number: "03",
    title: "AI for Students",
    description:
      "An age-appropriate introduction to artificial intelligence, computational thinking and responsible technology.",
    audience: "Middle & Secondary Students",
    duration: "Short Course / Term",
    format: "Workshop + Project",
    activities: [
      "AI fundamentals",
      "Machine learning concepts",
      "Computer vision",
      "AI experiments",
      "AI prototypes",
    ],
    outcome:
      "Develop AI literacy and understand how intelligent technologies work.",
  },
  {
    number: "04",
    title: "Coding Program",
    description:
      "A progressive coding journey that helps students move from programming fundamentals to creative digital projects.",
    audience: "Primary, Middle & Secondary Students",
    duration: "Term / Academic Year",
    format: "Hands-On Sessions",
    activities: [
      "Programming",
      "Game development",
      "Web projects",
      "App concepts",
      "Coding challenges",
    ],
    outcome:
      "Develop logical thinking, creativity and digital creation skills.",
  },
  {
    number: "05",
    title: "Innovation Workshops",
    description:
      "Focused workshops designed around creativity, emerging technologies and real-world problem solving.",
    audience: "All Suitable Age Groups",
    duration: "1 Day – Multiple Days",
    format: "Workshop",
    activities: [
      "Ideation",
      "Design thinking",
      "Technology exploration",
      "Prototyping",
      "Problem solving",
    ],
    outcome:
      "Build confidence, creativity and an innovation mindset.",
  },
  {
    number: "06",
    title: "Summer / Winter Camps",
    description:
      "Immersive holiday experiences where students explore technology through challenges, projects and collaborative activities.",
    audience: "Students During School Breaks",
    duration: "1–4 Weeks",
    format: "Immersive Camp",
    activities: [
      "Robotics",
      "Coding",
      "AI exploration",
      "STEM challenges",
      "Innovation projects",
    ],
    outcome:
      "Give students an engaging technology experience while building practical skills.",
  },
  {
    number: "07",
    title: "School Competitions",
    description:
      "Technology and innovation challenges that encourage students to apply their learning in competitive environments.",
    audience: "Middle & Secondary Students",
    duration: "Event-Based",
    format: "Competition",
    activities: [
      "Robotics challenges",
      "Coding challenges",
      "Innovation competitions",
      "Team challenges",
      "Project showcases",
    ],
    outcome:
      "Build teamwork, resilience, communication and competitive problem solving.",
  },
];

const benefits = [
  "Project-based learning",
  "Age-appropriate curriculum",
  "Hands-on technology",
  "Teacher support",
  "Student showcases",
  "Continuous learning",
];

export default function SchoolProgramsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#090d16] text-gray-950 dark:text-slate-100 transition-colors duration-200">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 dark:bg-[#080d1a] border-b border-transparent dark:border-slate-800/80 px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-32 sm:pb-24 lg:px-8 lg:pt-36 lg:pb-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              School Programs
            </p>

            <h1 className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Learning programs
              <span className="block text-white/40">
                built for the future.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 md:text-xl">
              Flexible school programs that bring robotics, STEM, AI, coding,
              innovation and emerging technologies into meaningful student
              experiences.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/book/school-demo"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book a School Demo →
              </Link>

              <Link
                href="/schools"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Explore School Experience
              </Link>

            </div>
          </div>
        </div>

        {/* Decorative visual */}
        <div className="pointer-events-none absolute right-[-100px] top-20 hidden h-[550px] w-[550px] lg:block">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[15%] rounded-full border border-white/10" />
          <div className="absolute inset-[30%] rounded-full border border-blue-400/20" />

          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl" />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Program Architecture
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Programs that turn technology into capability.
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
            Every program is designed to move students beyond passive
            technology consumption and into building, experimenting,
            collaborating and solving real problems.
          </p>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-3xl border border-black/10 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80 p-5 sm:p-6"
              >
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  0{index + 1}
                </span>

                <h3 className="mt-5 sm:mt-7 text-base sm:text-lg font-semibold text-slate-950 dark:text-white">
                  {benefit}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-gray-50 dark:bg-[#0b101b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-200">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Program Portfolio
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Choose the right starting point.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
              Start with a focused program or create a broader future-ready
              learning roadmap across multiple technologies.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {programs.map((program) => (
              <article
                key={program.number}
                className="overflow-hidden rounded-[2rem] border border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-2xl"
              >

                <div className="grid lg:grid-cols-[0.2fr_0.9fr_1.1fr]">

                  {/* Number */}
                  <div className="border-b border-black/10 dark:border-slate-800 p-6 lg:border-b-0 lg:border-r lg:p-8">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {program.number}
                    </span>
                  </div>

                  {/* Main */}
                  <div className="p-6 sm:p-8 lg:p-10">

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                      {program.title}
                    </h3>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 dark:text-slate-300">
                      {program.description}
                    </p>

                    <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 min-[440px]:grid-cols-2">

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                          Target
                        </p>

                        <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">
                          {program.audience}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                          Duration
                        </p>

                        <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">
                          {program.duration}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Details */}
                  <div className="border-t border-black/10 dark:border-slate-800 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                      Learning Format
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {program.format}
                    </p>

                    <div className="mt-7">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                        Activities
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {program.activities.map((activity) => (
                          <span
                            key={activity}
                            className="rounded-full bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 text-xs font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>

                    </div>

                    <div className="mt-7 border-t border-black/10 dark:border-slate-800 pt-6">

                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                        Expected Outcome
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-slate-300">
                        {program.outcome}
                      </p>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CUSTOM PROGRAM */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2.5rem] bg-gray-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 px-6 py-12 text-white sm:px-12 sm:py-16 md:px-16 md:py-20 shadow-2xl">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">

              <div className="max-w-3xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Custom School Programs
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Don&apos;t see the right fit?
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
                  We can combine programs, labs, workshops and technology
                  experiences into a customized roadmap designed around your
                  school&apos;s curriculum, students and goals.
                </p>

              </div>

              <Link
                href="/book/school-demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:-translate-y-1 hover:shadow-xl shrink-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Request a Proposal →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Let&apos;s Build Together
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to create your school&apos;s future?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
            Talk to the BeFutureKids education team and discover the programs
            that can make your students future-ready.
          </p>

          <Link
            href="/book/school-demo"
            className="mt-9 rounded-full bg-gray-950 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Book a School Demo →
          </Link>

        </div>

      </section>

    </main>
  );
}