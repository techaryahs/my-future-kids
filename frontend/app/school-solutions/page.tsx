import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Robotics Education",
    tagline: "Build. Program. Innovate.",
    description:
      "Give students practical experience with robotics through structured, project-based learning.",
    learn: [
      "Robotics fundamentals",
      "Sensors and electronics",
      "Mechanical design",
      "Programming and automation",
    ],
    activities: [
      "Robot building",
      "Obstacle challenges",
      "Automation projects",
      "Robotics competitions",
    ],
    outcomes: "Engineering thinking, problem solving and technical confidence.",
  },
  {
    number: "02",
    title: "STEM Learning",
    tagline: "Turn concepts into experiences.",
    description:
      "Connect science, technology, engineering and mathematics through hands-on experimentation.",
    learn: [
      "Scientific thinking",
      "Engineering concepts",
      "Design thinking",
      "Applied mathematics",
    ],
    activities: [
      "Experiments",
      "Engineering challenges",
      "Model building",
      "Real-world projects",
    ],
    outcomes: "Curiosity, creativity, collaboration and analytical thinking.",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    tagline: "Prepare students for the AI era.",
    description:
      "Introduce students to AI concepts and responsible technology through age-appropriate practical learning.",
    learn: [
      "AI fundamentals",
      "Machine learning concepts",
      "Computer vision",
      "Responsible AI",
    ],
    activities: [
      "AI experiments",
      "Vision projects",
      "AI-powered prototypes",
      "Problem-solving challenges",
    ],
    outcomes: "AI literacy, computational thinking and future technology awareness.",
  },
  {
    number: "04",
    title: "Coding Programs",
    tagline: "From ideas to digital products.",
    description:
      "Develop programming skills through creative projects that encourage students to become technology creators.",
    learn: [
      "Programming fundamentals",
      "Logic and algorithms",
      "Web and app concepts",
      "Computational thinking",
    ],
    activities: [
      "Game development",
      "Interactive projects",
      "Web experiences",
      "Coding challenges",
    ],
    outcomes: "Logical thinking, creativity and digital confidence.",
  },
  {
    number: "05",
    title: "AR / VR Learning",
    tagline: "Make learning immersive.",
    description:
      "Use immersive technologies to create engaging learning experiences beyond the traditional classroom.",
    learn: [
      "Immersive technology",
      "3D environments",
      "Virtual experiences",
      "Interactive learning",
    ],
    activities: [
      "Virtual exploration",
      "3D experiences",
      "Immersive simulations",
      "Interactive demonstrations",
    ],
    outcomes: "Engagement, visualization skills and technology fluency.",
  },
  {
    number: "06",
    title: "Innovation Programs",
    tagline: "Turn students into problem solvers.",
    description:
      "Help students identify real-world problems and transform ideas into prototypes and solutions.",
    learn: [
      "Design thinking",
      "Research and ideation",
      "Prototyping",
      "Entrepreneurial thinking",
    ],
    activities: [
      "Innovation challenges",
      "Prototype building",
      "Team projects",
      "Problem-solving workshops",
    ],
    outcomes: "Innovation mindset, leadership and real-world problem solving.",
  },
];

export default function SchoolSolutionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#090d16] text-gray-950 dark:text-slate-100 transition-colors duration-200">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 dark:bg-[#080d1a] border-b border-transparent dark:border-slate-800/80 px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-32 sm:pb-24 lg:px-8 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              School Solutions
            </p>

            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Future-ready education,
              <span className="block text-white/45">
                designed for your school.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 md:text-xl">
              From robotics and STEM to artificial intelligence, coding and
              immersive learning, BeFutureKids helps schools build a complete
              technology-enabled learning ecosystem.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schools"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-gray-950 transition hover:-translate-y-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                ← Back to Schools
              </Link>

              <Link
                href="/book/school-demo"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Book a School Demo →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 top-34 h-52 w-52 rounded-full border border-white/10" />
      </section>

      {/* INTRO */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              One Partner. Multiple Possibilities.
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              A complete future-learning ecosystem.
            </h2>
          </div>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
            Schools don&apos;t need another isolated technology activity. They need
            a structured way to introduce emerging technologies while keeping
            learning practical, engaging and connected to student outcomes.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-gray-50 dark:bg-[#0b101b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Our Solutions
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Technology that becomes learning.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
              Each solution can be implemented independently or combined into
              a customized school-wide education ecosystem.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group overflow-hidden rounded-[2rem] border border-black/10 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800/80 hover:shadow-2xl"
              >
                <div className="grid lg:grid-cols-[0.3fr_1fr_1fr]">
                  {/* Number */}
                  <div className="border-b border-black/10 dark:border-slate-800 p-6 lg:border-b-0 lg:border-r lg:p-8">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {solution.number}
                    </span>
                  </div>

                  {/* Main */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {solution.tagline}
                    </p>

                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-600 dark:text-slate-300">
                      {solution.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="border-t border-black/10 dark:border-slate-800 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                          Students Learn
                        </p>

                        <ul className="mt-3 space-y-2">
                          {solution.learn.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-700 dark:text-slate-300"
                            >
                              <span className="mr-2 text-blue-600 dark:text-blue-400">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                          Example Activities
                        </p>

                        <ul className="mt-3 space-y-2">
                          {solution.activities.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-700 dark:text-slate-300"
                            >
                              <span className="mr-2 text-blue-600 dark:text-blue-400">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-black/10 dark:border-slate-800 pt-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
                        Expected Outcome
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-slate-300">
                        {solution.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gray-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 px-6 py-12 text-white sm:px-12 sm:py-16 md:px-16 md:py-20 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Built Around Your School
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Your school&apos;s journey doesn&apos;t have to look like anyone else&apos;s.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
                Choose individual programs or combine multiple solutions into a
                customized future-ready education roadmap based on your
                infrastructure, curriculum and student needs.
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
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Start Your Transformation
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s design your school&apos;s future.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-slate-300">
            Talk to our education team and explore the right combination of
            programs, labs and learning experiences for your school.
          </p>

          <Link
            href="/book/school-demo"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-gray-950 dark:bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800 dark:hover:bg-blue-500 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Book a School Demo →
          </Link>
        </div>
      </section>
    </main>
  );
}