// src/components/programs/OutcomesSection.tsx
interface OutcomesSectionProps {
  outcomes: string[];
}

export default function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Learning Outcomes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-200"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}