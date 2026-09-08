'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitBooking } from '@/app/actions/booking'
import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'

export default function StudentProgramBooking() {
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
      booking_type: 'b2c',
      parent_name: data.full_name,
      student_name: data.student_name,
      email: data.email,
      phone: data.phone,
      student_age: data.student_age,
      city: data.city,
      interested_in: data.program_interest,
      message: `Experience: ${data.experience_level || 'N/A'}\nLearning Type: ${data.learning_type || 'N/A'}\n\n${data.message || ''}`,
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
        <div className="bg-emerald-600 px-4 sm:px-6 py-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Explore Programs</h2>
          <p className="mt-2 text-emerald-100">Find the perfect learning path for your child.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
          {error && <div className="p-4 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-900/50">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Parent Name *</label>
              <input type="text" name="full_name" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Student Name</label>
              <input type="text" name="student_name" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Email *</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Phone *</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Student Age</label>
              <input type="text" name="student_age" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">City</label>
              <input type="text" name="city" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Interested In</label>
            <select name="program_interest" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
              <option value="">Select Program</option>
              <option value="Robotics">Robotics</option>
              <option value="STEM">STEM</option>
              <option value="AI">AI</option>
              <option value="Coding">Coding</option>
              <option value="AR/VR">AR/VR</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Experience Level</label>
              <select name="experience_level" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Preferred Learning</label>
              <select name="learning_type" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
                <option value="">Select Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Either">Either</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Additional Message</label>
            <textarea name="message" rows={3} className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border"></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors disabled:opacity-50">
            {loading ? 'Submitting...' : 'Find the Right Program'}
          </button>
        </form>
      </div>
    </div>
  )
}
