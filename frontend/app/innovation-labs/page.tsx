import Link from "next/link";

const labs = [
  {
    number: "01",
    title: "Robotics Lab",
    subtitle: "Build. Program. Engineer.",
    description:
      "A hands-on environment where students explore robotics, electronics, mechanics and automation by building and programming real systems.",
    equipment: [
      "Robotics kits",
      "Sensors & electronics",
      "Motors & controllers",
      "Programming tools",
    ],
    activities: [
      "Robot building",
      "Automation challenges",
      "Sensor experiments",
      "Robotics competitions",
    ],
    outcome: "Engineering thinking and practical technology skills.",
  },
  {
    number: "02",
    title: "STEM Lab",
    subtitle: "Explore. Experiment. Discover.",
    description:
      "An interactive learning environment that connects science, technology, engineering and mathematics through real-world experimentation.",
    equipment: [
      "STEM activity kits",
      "Science equipment",
      "Engineering tools",
      "Measurement instruments",
    ],
    activities: [
      "Science experiments",
      "Engineering challenges",
      "Model building",
      "Design projects",
    ],
    outcome: "Curiosity, creativity and analytical thinking.",
  },
  {
    number: "03",
    title: "AI Lab",
    subtitle: "Understand the intelligence behind technology.",
    description:
      "Introduce students to artificial intelligence through practical projects, experiments and responsible technology exploration.",
    equipment: [
      "AI learning platforms",
      "Computing systems",
      "Camera & vision tools",
      "AI software environments",
    ],
    activities: [
      "AI experiments",
      "Computer vision",
      "Machine learning concepts",
      "AI prototypes",
    ],
    outcome: "AI literacy and computational thinking.",
  },
  {
    number: "04",
    title: "AR / VR Lab",
    subtitle: "Experience learning differently.",
    description:
      "Immersive learning environments that allow students to explore concepts, places and experiences beyond the physical classroom.",
    equipment: [
      "VR headsets",
      "AR-enabled devices",
      "3D learning resources",
      "Immersive software",
    ],
    activities: [
      "Virtual exploration",
      "3D experiences",
      "Immersive simulations",
      "Interactive learning",
    ],
    outcome: "Visualization, engagement and digital fluency.",
  },
  {
    number: "05",
    title: "Coding Lab",
    subtitle: "Turn ideas into digital products.",
    description:
      "A dedicated environment where students learn programming through creative projects, problem solving and digital product development.",
    equipment: [
      "Computing systems",
      "Coding platforms",
      "Development tools",
      "Digital learning resources",
    ],
    activities: [
      "Game development",
      "Web projects",
      "App concepts",
      "Coding challenges",
    ],
    outcome: "Logical thinking and digital creation skills.",
  },
  {
    number: "06",
    title: "Future Innovation Lab",
    subtitle: "Where multiple technologies come together.",
    description:
      "A multidisciplinary innovation space combining robotics, AI, coding, STEM and emerging technologies for advanced project-based learning.",
    equipment: [
      "Multi-technology workstations",
      "Prototyping tools",
      "Robotics systems",
      "Digital technology",
    ],
    activities: [
      "Innovation challenges",
      "Team projects",
      "Prototype development",
      "Student showcases",
    ],
    outcome: "Innovation mindset, collaboration and real-world problem solving.",
  },
];

const ecosystem = [
  {
    number: "01",
    title: "Infrastructure",
    text: "Purpose-built spaces, equipment and technology selected around your school's requirements.",
  },
  {
    number: "02",
    title: "Curriculum",
    text: "Structured learning experiences that turn technology into meaningful education.",
  },
  {
    number: "03",
    title: "Training",
    text: "Teacher enablement so educators can confidently support future-ready learning.",
  },
  {
    number: "04",
    title: "Activities",
    text: "Workshops, challenges and hands-on experiences that keep students engaged.",
  },
  {
    number: "05",
    title: "Projects",
    text: "Students apply concepts by designing, building and presenting their own solutions.",
  },
  {
    number: "06",
    title: "Support",
    text: "Continuous guidance, activities and program support as your ecosystem grows.",
  },
];

export default function InnovationLabsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-950 px-6 py-28 text-white lg:px-10 lg:py-36">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Innovation Labs
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Build the Innovation Lab
              <span className="block text-white/40">
                Your Students Deserve.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">
              Transform a physical space into a future-ready learning
              environment where students can build, experiment, code,
              collaborate and solve real-world problems.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book a School Demo →
              </button>

              <Link
                href="/school-solutions"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract lab visual */}
        <div className="pointer-events-none absolute right-[-10%] top-[15%] hidden h-[500px] w-[500px] lg:block">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[12%] rounded-full border border-white/10" />
          <div className="absolute inset-[25%] rounded-full border border-blue-400/20" />

          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/20 bg-white/[0.06] backdrop-blur-xl" />
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Beyond Equipment
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              A lab is not just a room filled with equipment.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-600">
              The real value of an innovation lab comes from what students do
              inside it. BeFutureKids brings together infrastructure,
              curriculum, teacher training, activities, projects and ongoing
              support to create a complete learning ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Infrastructure",
                "Curriculum",
                "Training",
                "Activities",
                "Projects",
                "Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LABS */}
      <section className="bg-gray-50 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Lab Experiences
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              One campus.
              <br />
              Multiple possibilities.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Design one focused lab or combine multiple technology
              environments to create a complete innovation ecosystem.
            </p>
          </div>

          <div className="mt-16 space-y-8">

            {labs.map((lab) => (
              <article
                key={lab.number}
                className="group overflow-hidden rounded-[2.5rem] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

                  {/* Visual */}
                  <div className="relative min-h-[320px] overflow-hidden bg-gray-950 p-8 text-white lg:min-h-[500px]">

                    <span className="text-sm font-bold text-blue-400">
                      {lab.number}
                    </span>

                    <div className="absolute inset-x-8 bottom-8">
                      <p className="text-sm uppercase tracking-widest text-white/40">
                        BeFutureKids
                      </p>

                      <div className="mt-4 h-px w-full bg-white/10" />

                      <p className="mt-4 text-sm text-white/50">
                        Future-ready learning environment
                      </p>
                    </div>

                    <div className="absolute right-[-70px] top-[-70px] h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

                    <div className="absolute bottom-20 right-16 h-24 w-24 rounded-3xl border border-blue-400/20 bg-white/[0.05] backdrop-blur-xl transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">

                    <p className="text-sm font-semibold text-blue-600">
                      {lab.subtitle}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold tracking-tight">
                      {lab.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                      {lab.description}
                    </p>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2">

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          Key Equipment
                        </p>

                        <ul className="mt-4 space-y-3">
                          {lab.equipment.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-700"
                            >
                              <span className="mr-2 text-blue-600">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          Learning Activities
                        </p>

                        <ul className="mt-4 space-y-3">
                          {lab.activities.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-700"
                            >
                              <span className="mr-2 text-blue-600">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    <div className="mt-10 border-t border-black/10 pt-7">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Student Outcome
                      </p>

                      <p className="mt-2 font-medium text-gray-900">
                        {lab.outcome}
                      </p>
                    </div>

                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-gray-950 px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              The Complete Ecosystem
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              We build the environment.
              <span className="block text-white/40">
                You build the future.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              A successful innovation lab needs more than technology. Every
              layer works together to create meaningful student experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div
                key={item.number}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:bg-white/[0.08]"
              >
                <span className="text-sm font-bold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              From Space to Experience
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              We help you bring the lab to life.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Assess", "Understand your school's space, goals and requirements."],
              ["02", "Design", "Create a lab concept tailored to your learning vision."],
              ["03", "Implement", "Set up infrastructure, equipment and learning systems."],
              ["04", "Activate", "Train educators and launch student programs and projects."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[2rem] border border-black/10 p-7"
              >
                <span className="text-sm font-bold text-blue-600">
                  {number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-16 text-white md:px-16 md:py-24">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Build Your Lab
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              What could your students build here?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Talk to our education team about designing an innovation lab
              aligned with your school's vision, infrastructure and students.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Book a School Demo →
              </button>

              <button
                type="button"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request a Proposal
              </button>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}