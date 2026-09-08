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
    <section className="bg-slate-950 dark:bg-[#080d1a] border-y border-transparent dark:border-slate-800/80 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 transition-colors duration-200">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Student Outcomes
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technology is the tool.
            <br />
            <span className="text-white/50">Innovation is the outcome.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
            Our programs are designed to help students move beyond consuming
            technology and start creating, experimenting and solving real-world
            problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 sm:p-6"
            >
              <span className="text-sm text-white/40">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-base font-semibold sm:mt-10 sm:text-lg">
                {outcome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}