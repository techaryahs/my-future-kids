// src/components/programs/BenefitsSection.tsx
interface BenefitsSectionProps {
  benefits: string[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-900 dark:text-white">Why This Program?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:shadow-md transition"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">✓</span>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}