// src/components/programs/CurriculumSection.tsx
import { CurriculumItem } from "@/types/program";

interface CurriculumSectionProps {
  curriculum: CurriculumItem[];
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">Curriculum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {curriculum.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}