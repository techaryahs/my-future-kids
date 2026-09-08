const stories = [
  {
    label: "School Partnership",
    title: "Future-ready learning ecosystem",
    text: "Placeholder for a verified school partnership story.",
  },
  {
    label: "Student Projects",
    title: "Students building real solutions",
    text: "Placeholder for verified student project outcomes.",
  },
  {
    label: "Innovation Workshop",
    title: "Hands-on technology experiences",
    text: "Placeholder for a verified workshop or event story.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-slate-50 dark:bg-[#090d16] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Success Stories
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Built for measurable impact.
            </h2>
          </div>

          <p className="max-w-md text-base text-slate-600 dark:text-slate-300">
            Verified school partnerships, student projects and impact stories
            will appear here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm"
            >
              <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-800" />

              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  {story.label}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
                  {story.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}