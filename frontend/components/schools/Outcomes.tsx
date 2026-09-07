const outcomes = [
  "Critical Thinking",
  "Creativity",
  "Problem Solving",
  "Collaboration",
  "Technology Skills",
  "Innovation Mindset",
];

export default function Outcomes() {
  return (
    <section className="bg-gray-950 px-6 py-24 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Student Outcomes
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Technology is the tool.
            <br />
            <span className="text-white/50">Innovation is the outcome.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Our programs are designed to help students move beyond consuming
            technology and start creating, experimenting and solving real-world
            problems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
            >
              <span className="text-sm text-white/40">
                0{index + 1}
              </span>

              <h3 className="mt-10 text-lg font-semibold">
                {outcome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}