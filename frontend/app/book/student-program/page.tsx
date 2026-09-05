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
    
    const res = await submitBooking({
      ...data,
      booking_type: 'student_program',
      user_type: 'b2c',
      source: 'website'
    })
    
    setLoading(false)
    if (res.success) {
      router.push(`${BOOKING_ROUTES.SUCCESS}?ref=${res.referenceId}`)
    } else {
      setError(res.error || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-emerald-600 px-6 py-8 text-center text-white">
          <h2 className="text-3xl font-bold">Explore Programs</h2>
          <p className="mt-2 text-emerald-100">Find the perfect learning path for your child.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Name *</label>
              <input type="text" name="full_name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <input type="text" name="student_name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input type="tel" name="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Age</label>
              <input type="text" name="student_age" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" name="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Interested In</label>
            <select name="program_interest" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
              <option value="">Select Program</option>
              <option value="Robotics">Robotics</option>
              <option value="STEM">STEM</option>
              <option value="AI">AI</option>
              <option value="Coding">Coding</option>
              <option value="AR/VR">AR/VR</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience Level</label>
              <select name="experience_level" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Learning</label>
              <select name="learning_type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
                <option value="">Select Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Either">Either</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Message</label>
            <textarea name="message" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border"></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors disabled:opacity-50">
            {loading ? 'Submitting...' : 'Find the Right Program'}
          </button>
        </form>
      </div>
    </div>
  )
}
