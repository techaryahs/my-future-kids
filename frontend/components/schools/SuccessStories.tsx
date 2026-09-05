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
    <section className="bg-gray-50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Success Stories
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Built for measurable impact.
            </h2>
          </div>

          <p className="max-w-md text-gray-600">
            Verified school partnerships, student projects and impact stories
            will appear here.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="overflow-hidden rounded-[2rem] border border-black/10 bg-white"
            >
              <div className="aspect-[16/10] bg-gray-200" />

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {story.label}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {story.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
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