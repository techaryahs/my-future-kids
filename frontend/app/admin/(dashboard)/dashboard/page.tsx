import { createClient } from '@/src/lib/supabase/server'
import { Users, School, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'

export const metadata = {
  title: 'Admin Dashboard | BeFutureKids',
}

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch some stats
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
  
  const totalLeads = bookings?.length || 0
  const b2bLeads = bookings?.filter(b => b.user_type === 'b2b').length || 0
  const b2cLeads = bookings?.filter(b => b.user_type === 'b2c').length || 0
  const newLeads = bookings?.filter(b => b.status === 'new').length || 0

  const recentBookings = bookings?.slice(0, 5) || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Leads</p>
            <p className="text-2xl font-bold text-gray-900">{totalLeads}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><School className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">B2B (Schools)</p>
            <p className="text-2xl font-bold text-gray-900">{b2bLeads}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Phone className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">B2C (Parents)</p>
            <p className="text-2xl font-bold text-gray-900">{b2cLeads}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><CheckCircle className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">New Enquiries</p>
            <p className="text-2xl font-bold text-gray-900">{newLeads}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
          <Link href={ADMIN_ROUTES.LEADS} className="text-sm text-blue-600 font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <Link href={`${ADMIN_ROUTES.LEADS}/${b.id}`} className="hover:text-blue-600">
                      {b.full_name}
                      {b.organization_name && <span className="block text-xs text-gray-500 font-normal">{b.organization_name}</span>}
                    </Link>
                  </td>
                  <td className="px-6 py-4 capitalize">{b.booking_type.replace('_', ' ')}</td>
                  <td className="px-6 py-4">{new Date(b.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      b.status === 'new' ? 'bg-rose-100 text-rose-700' :
                      b.status === 'converted' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {b.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
              {recentBookings.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
