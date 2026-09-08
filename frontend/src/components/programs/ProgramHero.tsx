// src/components/programs/ProgramHero.tsx
interface ProgramHeroProps {
  title: string;
  tagline: string;
  overview: string;
  ageGroups: string[];
}

export default function ProgramHero({ title, tagline, overview, ageGroups }: ProgramHeroProps) {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-850 dark:from-[#060a12] dark:via-[#090e1a] dark:to-[#0d1527] text-white transition-colors duration-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
      <p className="text-lg sm:text-xl text-blue-200 dark:text-blue-300 mb-6 font-medium">{tagline}</p>
      <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">{overview}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {ageGroups.map((age) => (
          <span
            key={age}
            className="px-4 py-1.5 rounded-full bg-slate-800/90 dark:bg-slate-800/80 border border-slate-700/70 text-sm font-medium text-slate-200 shadow-sm"
          >
            {age}
          </span>
        ))}
      </div>
    </section>
  );
}