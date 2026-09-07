// src/components/programs/ProgramCTA.tsx
import Link from "next/link";

interface ProgramCTAProps {
  ctaText: string;
}

export default function ProgramCTA({ ctaText }: ProgramCTAProps) {
  return (
    <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Begin the Journey?
      </h2>
      <p className="text-gray-200 mb-8 max-w-xl mx-auto">
        Join BeFutureKids and give your child hands-on skills for the future.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
      >
        {ctaText}
      </Link>
    </section>
  );
}