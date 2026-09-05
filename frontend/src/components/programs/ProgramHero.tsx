// src/components/programs/ProgramHero.tsx
interface ProgramHeroProps {
  title: string;
  tagline: string;
  overview: string;
  ageGroups: string[];
}

export default function ProgramHero({ title, tagline, overview, ageGroups }: ProgramHeroProps) {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-300 mb-6">{tagline}</p>
      <p className="max-w-2xl mx-auto text-gray-400 mb-6">{overview}</p>
      <div className="flex flex-wrap justify-center gap-3">
        {ageGroups.map((age) => (
          <span
            key={age}
            className="px-4 py-1 rounded-full bg-slate-700 text-sm text-gray-200"
          >
            {age}
          </span>
        ))}
      </div>
    </section>
  );
}