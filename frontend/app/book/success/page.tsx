import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'

export default function SuccessPage({ searchParams }: { searchParams: { ref?: string } }) {
  const referenceId = searchParams.ref

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Received!</h1>
        <p className="text-gray-500 mb-8">
          Our education team will contact you shortly to schedule your personalized consultation.
        </p>

        {referenceId && (
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8">
            <p className="text-sm text-gray-500 mb-1">Your Booking Reference</p>
            <p className="text-xl font-mono font-bold text-gray-900">{referenceId}</p>
          </div>
        )}

        <div className="space-y-4 text-left mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">✓</div>
            <p className="text-gray-700">Request Received</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">→</div>
            <p className="text-gray-700">Team Review</p>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">→</div>
            <p>We Contact You</p>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">→</div>
            <p>Demo / Consultation</p>
          </div>
        </div>

        <Link
          href={BOOKING_ROUTES.HOME}
          className="block w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
