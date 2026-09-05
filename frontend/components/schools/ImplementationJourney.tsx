const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your school's goals, infrastructure and student requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create a customized future-ready education plan for your school.",
  },
  {
    number: "03",
    title: "Setup",
    description: "Build labs, technology infrastructure and learning environments.",
  },
  {
    number: "04",
    title: "Train",
    description: "Enable teachers and educators with practical training and resources.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Introduce students to hands-on programs, projects and experiences.",
  },
  {
    number: "06",
    title: "Grow",
    description: "Provide continuous activities, competitions, projects and support.",
  },
];

export default function ImplementationJourney() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Implementation Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            From vision to a future-ready campus.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We don't simply install technology. We help schools plan,
            implement and continuously grow their future-ready education
            ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <span className="text-xl opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-gray-950">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}