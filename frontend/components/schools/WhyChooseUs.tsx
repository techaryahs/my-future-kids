const reasons = [
  {
    title: "Complete Ecosystem",
    text: "Programs, infrastructure, curriculum, training and continuous support.",
  },
  {
    title: "Hands-On Learning",
    text: "Students learn by building, testing, creating and solving problems.",
  },
  {
    title: "Curriculum-Aligned",
    text: "Future-ready programs designed to complement the school's academic journey.",
  },
  {
    title: "Teacher Enablement",
    text: "Teachers receive training and resources to confidently deliver programs.",
  },
  {
    title: "Modern Technology",
    text: "Robotics, AI, coding, AR/VR and emerging technologies in one ecosystem.",
  },
  {
    title: "Continuous Support",
    text: "Projects, workshops, competitions and ongoing program support.",
  },
];

export default function WhyChooseUs() {
  return (
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
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}