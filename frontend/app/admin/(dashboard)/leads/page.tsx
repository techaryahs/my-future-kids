import { createClient } from '@/src/lib/supabase/server'
import Link from 'next/link'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'

export const metadata = {
  title: 'Leads Management | BeFutureKids',
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: { status?: string, type?: string }
}) {
  const supabase = await createClient()

  let query = supabase.from('bookings').select('*').order('created_at', { ascending: false })

  if (searchParams.status) {
    query = query.eq('status', searchParams.status)
  }
  if (searchParams.type) {
    query = query.eq('user_type', searchParams.type)
  }

  const { data: leads } = await query

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads Management</h1>
          <p className="text-gray-500 mt-1">Manage and track all incoming enquiries.</p>
        </div>
        <div className="flex gap-2">
          <Link href="?type=b2b" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">B2B Only</Link>
          <Link href="?type=b2c" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">B2C Only</Link>
          <Link href="?" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">Clear Filters</Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Name / Contact</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status & Priority</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads?.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 border-b border-gray-100 last:border-0">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{lead.full_name}</div>
                    <div className="text-xs text-gray-500">{lead.email}</div>
                    {lead.organization_name && <div className="text-xs font-medium text-indigo-600 mt-1">{lead.organization_name}</div>}
                  </td>
                  <td className="px-6 py-4">
                    <div className="capitalize">{lead.booking_type.replace('_', ' ')}</div>
                    <div className="text-xs text-gray-500 uppercase">{lead.user_type}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start gap-1">
                      <span className={`px-2 py-1 text-[11px] font-bold tracking-wider rounded-full ${
                        lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'contacted' ? 'bg-purple-100 text-purple-700' :
                        lead.status === 'qualified' ? 'bg-orange-100 text-orange-700' :
                        lead.status === 'demo_scheduled' ? 'bg-yellow-100 text-yellow-800' :
                        lead.status === 'converted' ? 'bg-emerald-100 text-emerald-700' :
                        lead.status === 'lost' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {lead.status.toUpperCase()}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                        lead.priority === 'urgent' ? 'text-red-600 border border-red-200 bg-red-50' :
                        lead.priority === 'high' ? 'text-orange-600 border border-orange-200 bg-orange-50' :
                        'text-gray-500 border border-gray-200 bg-gray-50'
                      }`}>
                        {lead.priority.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{new Date(lead.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <Link href={`${ADMIN_ROUTES.LEADS}/${lead.id}`} className="text-blue-600 hover:underline font-medium text-sm">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(!leads || leads.length === 0) && (
          <div className="p-12 flex flex-col items-center justify-center text-center bg-white">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No leads found</h3>
            <p className="mt-1 text-sm text-gray-500 max-w-sm">There are no leads matching your current filters. Try adjusting your search or clearing filters.</p>
            <Link href="?" className="mt-6 inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Clear Filters
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
