// src/components/programs/CurriculumSection.tsx
import { CurriculumItem } from "@/types/program";

interface CurriculumSectionProps {
  curriculum: CurriculumItem[];
}

export default function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Curriculum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {curriculum.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
