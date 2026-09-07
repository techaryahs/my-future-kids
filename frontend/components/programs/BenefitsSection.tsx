// src/components/programs/BenefitsSection.tsx
interface BenefitsSectionProps {
  benefits: string[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Why This Program?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex gap-3 p-4 rounded-lg border border-gray-200 hover:shadow-md transition"
          >
            <span className="text-indigo-600 font-bold text-lg">✓</span>
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}