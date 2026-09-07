import { createClient } from '@/src/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'
import { LeadDetailClient } from '@/components/admin/LeadDetailClient'
import { ArrowLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: { id: string } }) {
  return { title: 'Lead Detail | BeFutureKids' }
}

export default async function LeadDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data: lead } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!lead) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <Link href={ADMIN_ROUTES.LEADS} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-4 w-max">
          <ArrowLeft className="w-4 h-4" />
          Back to Leads
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{lead.booking_type === 'b2b' ? lead.school_name || lead.contact_person : lead.parent_name}</h1>
            <p className="text-gray-500 mt-1">ID: {lead.id}</p>
          </div>
          <div>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
              {lead.booking_type.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{lead.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">{lead.phone}</p>
              </div>
              {lead.city && (
                <div>
                  <p className="text-gray-500">City</p>
                  <p className="font-medium text-gray-900">{lead.city}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {lead.booking_type === 'b2b' && lead.school_name && (
                <div>
                  <p className="text-gray-500">School / Organization</p>
                  <p className="font-medium text-gray-900">{lead.school_name}</p>
                </div>
              )}
              {lead.school_type && (
                <div>
                  <p className="text-gray-500">School Type</p>
                  <p className="font-medium text-gray-900">{lead.school_type}</p>
                </div>
              )}
              {lead.contact_person && (
                <div>
                  <p className="text-gray-500">Contact Person</p>
                  <p className="font-medium text-gray-900">{lead.contact_person}</p>
                </div>
              )}
              {lead.designation && (
                <div>
                  <p className="text-gray-500">Designation</p>
                  <p className="font-medium text-gray-900">{lead.designation}</p>
                </div>
              )}
              {lead.student_name && (
                <div>
                  <p className="text-gray-500">Student Name</p>
                  <p className="font-medium text-gray-900">{lead.student_name}</p>
                </div>
              )}
              {lead.student_age && (
                <div>
                  <p className="text-gray-500">Student Age</p>
                  <p className="font-medium text-gray-900">{lead.student_age}</p>
                </div>
              )}
              {lead.number_of_students && (
                <div>
                  <p className="text-gray-500">Number of Students</p>
                  <p className="font-medium text-gray-900">{lead.number_of_students}</p>
                </div>
              )}
              {lead.interested_in && (
                <div className="col-span-2">
                  <p className="text-gray-500">Interests</p>
                  <p className="font-medium text-gray-900">{lead.interested_in}</p>
                </div>
              )}
              {lead.preferred_date && (
                <div>
                  <p className="text-gray-500">Preferred Date</p>
                  <p className="font-medium text-gray-900">{lead.preferred_date}</p>
                </div>
              )}
              {lead.preferred_time && (
                <div>
                  <p className="text-gray-500">Preferred Time</p>
                  <p className="font-medium text-gray-900">{lead.preferred_time}</p>
                </div>
              )}
              {lead.message && (
                <div className="col-span-2">
                  <p className="text-gray-500">Message</p>
                  <p className="font-medium text-gray-900 whitespace-pre-wrap">{lead.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <LeadDetailClient lead={lead} />
        </div>
      </div>
    </div>
  )
}
