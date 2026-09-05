import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'
import { BookingOptionCard } from '@/components/booking/BookingOptionCard'
import { School, GraduationCap, Rocket, TestTube, Handshake } from 'lucide-react'

export const metadata = {
  title: 'Book a Demo or Consultation | BeFutureKids',
  description: 'How can we help you? Book a school demo, student program, or free trial.',
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How Can We Help You?
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Select an option below to schedule your consultation or demo with our education team.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <BookingOptionCard
            title="Book a School Demo"
            description="For School Principals and Decision Makers to explore our innovation labs and curricula."
            icon={School}
            href={BOOKING_ROUTES.SCHOOL_DEMO}
            colorClass="bg-indigo-50 text-indigo-600"
          />

          <BookingOptionCard
            title="Explore Programs"
            description="For Parents and Students interested in STEM, Robotics, and AI education."
            icon={GraduationCap}
            href={BOOKING_ROUTES.STUDENT_PROGRAM}
            colorClass="bg-emerald-50 text-emerald-600"
          />

          <BookingOptionCard
            title="Book a Free Trial"
            description="Experience Future Learning with a hands-on trial session for your child."
            icon={Rocket}
            href={BOOKING_ROUTES.FREE_TRIAL}
            colorClass="bg-orange-50 text-orange-600"
          />

          <BookingOptionCard
            title="Join a Workshop"
            description="Explore our upcoming interactive learning experiences and events."
            icon={TestTube}
            href={BOOKING_ROUTES.WORKSHOP}
            colorClass="bg-purple-50 text-purple-600"
          />

          <div className="md:col-span-2">
            <BookingOptionCard
              title="Partner With Us"
              description="Collaboration and Partnership Opportunities for corporates and educational institutions."
              icon={Handshake}
              href={BOOKING_ROUTES.PARTNERSHIP}
              colorClass="bg-rose-50 text-rose-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
