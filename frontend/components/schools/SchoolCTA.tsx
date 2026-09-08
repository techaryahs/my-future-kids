import BookDemoButton from "./BookDemoButton";

export default function SchoolCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-slate-950 dark:bg-slate-900 border border-transparent dark:border-slate-800 px-6 py-12 text-white md:px-16 md:py-20 shadow-2xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start the Conversation
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight md:text-6xl">
            Ready to build the school of tomorrow?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Let&apos;s explore how BeFutureKids can help your school create a
            future-ready learning ecosystem.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookDemoButton />

            <BookDemoButton variant="secondary">
              Talk to an Expert
            </BookDemoButton>
          </div>
        </div>
      </div>
    </section>
  );
}