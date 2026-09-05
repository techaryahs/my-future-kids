import BookDemoButton from "./BookDemoButton";

export default function SchoolCTA() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-16 text-white md:px-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start the Conversation
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Ready to build the school of tomorrow?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Let's explore how BeFutureKids can help your school create a
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