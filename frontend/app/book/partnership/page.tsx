'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitBooking } from '@/app/actions/booking'
import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'

export default function PartnershipBooking() {
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
      booking_type: 'b2b', // Using b2b to match schema instructions
      school_name: data.organization_name,
      contact_person: data.full_name,
      designation: data.designation,
      email: data.email,
      phone: data.phone,
      city: '',
      interested_in: data.program_interest,
      message: `Booking Source: Partnership Request\n\n${data.message || ''}`,
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
        <div className="bg-rose-600 px-4 sm:px-6 py-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Partner With Us</h2>
          <p className="mt-2 text-rose-100">Let&apos;s build the future of education together.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
          {error && <div className="p-4 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-900/50">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Full Name *</label>
              <input type="text" name="full_name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Designation</label>
              <input type="text" name="designation" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Organization Name *</label>
            <input type="text" name="organization_name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Email *</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Phone *</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Partnership Type</label>
            <select name="program_interest" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border">
              <option value="">Select Type</option>
              <option value="School Partnership">School Partnership</option>
              <option value="Corporate">Corporate</option>
              <option value="Education Partner">Education Partner</option>
              <option value="Technology Partner">Technology Partner</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Message</label>
            <textarea name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-2 border"></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-rose-600 text-white font-medium rounded-md hover:bg-rose-700 transition-colors disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit Partnership Request'}
          </button>
        </form>
      </div>
    </div>
  )
}
