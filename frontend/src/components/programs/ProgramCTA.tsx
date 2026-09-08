// src/components/programs/ProgramCTA.tsx
import Link from "next/link";

interface ProgramCTAProps {
  ctaText: string;
}

export default function ProgramCTA({ ctaText }: ProgramCTAProps) {
  return (
    <section className="py-16 px-4 sm:px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900/80 dark:to-purple-900/80 border-t border-transparent dark:border-slate-800/80 text-white transition-colors duration-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
        Ready to Begin the Journey?
      </h2>
      <p className="text-indigo-100 dark:text-purple-200 mb-8 max-w-xl mx-auto leading-relaxed">
        Join BeFutureKids and give your child hands-on skills for the future.
      </p>
      <Link
        href="/book/student-program"
        className="inline-block px-8 py-3.5 rounded-full bg-white text-indigo-700 dark:bg-slate-100 dark:text-indigo-900 font-semibold hover:bg-slate-50 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-white focus:outline-none"
      >
        {ctaText}
      </Link>
    </section>
  );
}