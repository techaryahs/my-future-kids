import { createClient } from '@/src/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'
import { LeadDetailClient } from '@/components/admin/LeadDetailClient'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Lead Detail | BeFutureKids',
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
        <Link href={ADMIN_ROUTES.LEADS} className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white mb-4 w-max">
          <ArrowLeft className="w-4 h-4" />
          Back to Leads
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{lead.booking_type === 'b2b' ? lead.school_name || lead.contact_person : lead.parent_name}</h1>
            <p className="text-gray-500 dark:text-slate-400 mt-1">ID: {lead.id}</p>
          </div>
          <div>
            <span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 rounded-full text-sm font-medium capitalize">
              {lead.booking_type.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-slate-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-slate-100">{lead.email}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-slate-400">Phone</p>
                <p className="font-medium text-gray-900 dark:text-slate-100">{lead.phone}</p>
              </div>
              {lead.city && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">City</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.city}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {lead.booking_type === 'b2b' && lead.school_name && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">School / Organization</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.school_name}</p>
                </div>
              )}
              {lead.school_type && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">School Type</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.school_type}</p>
                </div>
              )}
              {lead.contact_person && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Contact Person</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.contact_person}</p>
                </div>
              )}
              {lead.designation && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Designation</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.designation}</p>
                </div>
              )}
              {lead.student_name && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Student Name</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.student_name}</p>
                </div>
              )}
              {lead.student_age && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Student Age</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.student_age}</p>
                </div>
              )}
              {lead.number_of_students && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Number of Students</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.number_of_students}</p>
                </div>
              )}
              {lead.interested_in && (
                <div className="col-span-2">
                  <p className="text-gray-500 dark:text-slate-400">Interests</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.interested_in}</p>
                </div>
              )}
              {lead.preferred_date && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Preferred Date</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.preferred_date}</p>
                </div>
              )}
              {lead.preferred_time && (
                <div>
                  <p className="text-gray-500 dark:text-slate-400">Preferred Time</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100">{lead.preferred_time}</p>
                </div>
              )}
              {lead.message && (
                <div className="col-span-2">
                  <p className="text-gray-500 dark:text-slate-400">Message</p>
                  <p className="font-medium text-gray-900 dark:text-slate-100 whitespace-pre-wrap">{lead.message}</p>
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
