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
  const b2bLeads = bookings?.filter(b => b.booking_type === 'b2b').length || 0
  const b2cLeads = bookings?.filter(b => b.booking_type === 'b2c').length || 0
  const newLeads = bookings?.filter(b => b.status === 'new').length || 0

  const recentBookings = bookings?.slice(0, 5) || []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-slate-400 mt-1">Welcome back. Here&apos;s what&apos;s happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl"><Users className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Total Leads</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalLeads}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl"><School className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">B2B (Schools)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{b2bLeads}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl"><Phone className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">B2C (Parents)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{b2cLeads}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-xl"><CheckCircle className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">New Enquiries</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{newLeads}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent Bookings</h2>
          <Link href={ADMIN_ROUTES.LEADS} className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 dark:text-slate-300">
            <thead className="bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    <Link href={`${ADMIN_ROUTES.LEADS}/${b.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {b.booking_type === 'b2b' ? b.school_name : b.parent_name}
                      {b.booking_type === 'b2b' && b.contact_person && <span className="block text-xs text-gray-500 dark:text-slate-400 font-normal">{b.contact_person}</span>}
                    </Link>
                  </td>
                  <td className="px-6 py-4 uppercase">{b.booking_type}</td>
                  <td className="px-6 py-4">{new Date(b.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      b.status === 'new' ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300' :
                      b.status === 'converted' ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' :
                      'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300'
                    }`}>
                      {b.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
              {recentBookings.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500 dark:text-slate-400">
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
