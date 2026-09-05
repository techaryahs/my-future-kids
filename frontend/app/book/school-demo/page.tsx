'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { submitBooking } from '@/app/actions/booking'
import { BOOKING_ROUTES } from '@/src/lib/bookingRoutes'

export default function SchoolDemoBooking() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    booking_type: 'school_demo',
    user_type: 'b2b',
    organization_name: '',
    school_type: '',
    city: '',
    state: '',
    full_name: '',
    designation: '',
    email: '',
    phone: '',
    program_interest: [] as string[],
    student_age: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
    source: 'website'
  })

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.program_interest.includes(interest)
        ? prev.program_interest.filter(i => i !== interest)
        : [...prev.program_interest, interest]
      return { ...prev, program_interest: interests }
    })
  }

  const handleNext = () => setStep(s => s + 1)
  const handlePrev = () => setStep(s => s - 1)

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    
    // Formatting data for DB
    const dbData = {
      ...formData,
      program_interest: formData.program_interest.join(', ')
    }
    // Remove temporary keys not in DB
    delete (dbData as any).school_type

    const res = await submitBooking(dbData)
    setLoading(false)

    if (res.success) {
      router.push(`${BOOKING_ROUTES.SUCCESS}?ref=${res.referenceId}`)
    } else {
      setError(res.error || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-600 px-6 py-8 text-center text-white">
          <h2 className="text-3xl font-bold">Book a School Demo</h2>
          <p className="mt-2 text-indigo-100">Step {step} of 5</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">School Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">School Name *</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border" 
                  value={formData.organization_name} onChange={e => updateForm('organization_name', e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">School Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.school_type} onChange={e => updateForm('school_type', e.target.value)}>
                  <option value="">Select Type</option>
                  <option value="Private">Private</option>
                  <option value="Government">Government</option>
                  <option value="International">International</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    value={formData.city} onChange={e => updateForm('city', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    value={formData.state} onChange={e => updateForm('state', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Contact Person</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.full_name} onChange={e => updateForm('full_name', e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.designation} onChange={e => updateForm('designation', e.target.value)}>
                  <option value="">Select Designation</option>
                  <option value="Principal">Principal</option>
                  <option value="Director">Director</option>
                  <option value="Trustee">Trustee</option>
                  <option value="Academic Coordinator">Academic Coordinator</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.email} onChange={e => updateForm('email', e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.phone} onChange={e => updateForm('phone', e.target.value)} required />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Requirement</h3>
              <p className="text-sm text-gray-500">What are you interested in?</p>
              <div className="space-y-2">
                {['Robotics Program', 'STEM Program', 'AI Education', 'Coding Program', 'AR/VR Learning', 'Innovation Lab', 'Teacher Training', 'Complete School Solution'].map(interest => (
                  <label key={interest} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                      checked={formData.program_interest.includes(interest)}
                      onChange={() => toggleInterest(interest)} />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Approximate Number of Students</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.student_age} onChange={e => updateForm('student_age', e.target.value)} placeholder="e.g. 500+" />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Preferred Demo</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    value={formData.preferred_date} onChange={e => updateForm('preferred_date', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                  <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    value={formData.preferred_time} onChange={e => updateForm('preferred_time', e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  value={formData.message} onChange={e => updateForm('message', e.target.value)} />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900">Review Request</h3>
              <p className="text-gray-500">Please confirm your details to submit.</p>
              <div className="bg-gray-50 p-6 rounded-lg text-left text-sm text-gray-700 space-y-2">
                <p><strong>School:</strong> {formData.organization_name}</p>
                <p><strong>Name:</strong> {formData.full_name} ({formData.designation})</p>
                <p><strong>Contact:</strong> {formData.email} | {formData.phone}</p>
                <p><strong>Interests:</strong> {formData.program_interest.join(', ') || 'None'}</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button type="button" onClick={handlePrev} disabled={loading}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Back
              </button>
            ) : <div></div>}
            
            {step < 5 ? (
              <button type="button" onClick={handleNext}
                disabled={!formData.organization_name && step === 1 || (!formData.full_name || !formData.email || !formData.phone) && step === 2}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50">
                Next Step
              </button>
            ) : (
              <button type="button" onClick={handleSubmit} disabled={loading}
                className="px-8 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center">
                {loading ? 'Submitting...' : 'Request School Demo'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
