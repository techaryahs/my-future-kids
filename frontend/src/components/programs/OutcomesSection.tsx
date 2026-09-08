// src/components/programs/OutcomesSection.tsx
interface OutcomesSectionProps {
  outcomes: string[];
}

export default function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 bg-slate-50 dark:bg-[#090d16] transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">Learning Outcomes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold text-sm shrink-0">
                {index + 1}
              </span>
              <p className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}