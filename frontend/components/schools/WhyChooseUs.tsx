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
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why BeFutureKids
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            More than a technology provider.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A long-term partner for building future-ready learning
            environments.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-black/10 p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 h-10 w-10 rounded-2xl bg-gray-950" />

              <h3 className="text-xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}