'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitBooking } from '@/app/actions/booking'
import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'

export default function FreeTrialBooking() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    const dbData = {
      booking_type: 'b2c', // mapping 'free_trial' into b2c schema but we can put 'free_trial' in message or we can just leave it as b2c. Wait, user said booking_type is 'b2c' for b2c. But the UI says 'free_trial'. Let me use 'b2c' to follow instructions exactly, and put the actual trial type in message.
      parent_name: data.full_name,
      student_name: data.student_name,
      email: data.email,
      phone: data.phone,
      student_age: data.student_age,
      city: '',
      interested_in: data.program_interest,
      preferred_date: data.preferred_date || null,
      preferred_time: data.preferred_time || null,
      message: 'Booking Source: Free Trial',
    }
    
    const res = await submitBooking(dbData)
    
    setLoading(false)
    if (res.success) {
      router.push(`${BOOKING_ROUTES.SUCCESS}?ref=${res.referenceId}`)
    } else {
      setError(res.error || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#090d16] pt-32 pb-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
        <div className="bg-orange-500 px-6 py-8 text-center text-white">
          <h2 className="text-3xl font-bold">Book a Free Trial</h2>
          <p className="mt-2 text-orange-100">Experience hands-on learning with our expert instructors.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 rounded-lg">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Parent Name *</label>
              <input type="text" name="full_name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Student Name</label>
              <input type="text" name="student_name" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Email *</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Phone *</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Student Age</label>
              <input type="text" name="student_age" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Program Interest</label>
              <select name="program_interest" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border">
                <option value="">Select Program</option>
                <option value="Robotics">Robotics</option>
                <option value="STEM">STEM</option>
                <option value="Coding">Coding</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Preferred Date</label>
              <input type="date" name="preferred_date" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Preferred Time</label>
              <input type="time" name="preferred_time" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 p-2 border" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50">
            {loading ? 'Submitting...' : 'Book Free Trial'}
          </button>
        </form>
      </div>
    </div>
  )
}
