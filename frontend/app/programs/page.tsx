import Link from "next/link";
import { programs } from "@/constants/programs";
import BookingForm from "@/components/programs/BookingForm";

export default function ProgramsPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
        {programs.map((program) => (
          <Link key={program.slug} href={`/${program.slug}`}>
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition h-full">
              <h3 className="text-xl font-semibold">{program.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{program.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      <BookingForm />
    </>
  );
}