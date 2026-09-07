export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f6f8fb] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="rounded-lg bg-[#071015] p-5 sm:p-8">
          <div className="mb-16 h-12 rounded-full bg-white/10" />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="h-4 w-40 rounded-full bg-white/15" />
              <div className="mt-6 h-16 max-w-xl rounded-lg bg-white/15" />
              <div className="mt-4 h-16 max-w-lg rounded-lg bg-white/10" />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="h-12 rounded-full bg-white/15" />
                <div className="h-12 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="min-h-[360px] rounded-lg bg-white/10" />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="h-36 rounded-lg border border-black/10 bg-white"
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
