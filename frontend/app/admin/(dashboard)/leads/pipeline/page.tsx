import { createClient } from '@/src/lib/supabase/server'
import Link from 'next/link'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'

export const metadata = {
  title: 'Lead Pipeline | BeFutureKids',
}

const PIPELINE_STAGES = [
  { id: 'new', label: 'New', color: 'bg-blue-50 border-blue-200' },
  { id: 'contacted', label: 'Contacted', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'qualified', label: 'Qualified', color: 'bg-purple-50 border-purple-200' },
  { id: 'demo_scheduled', label: 'Demo Scheduled', color: 'bg-orange-50 border-orange-200' },
  { id: 'completed', label: 'Completed', color: 'bg-gray-50 border-gray-200' },
  { id: 'converted', label: 'Converted', color: 'bg-emerald-50 border-emerald-200' },
]

export default async function PipelinePage() {
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  const getLeadsByStatus = (status: string) => {
    return leads?.filter(l => l.status === status) || []
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Lead Pipeline</h1>
        <p className="text-gray-500 mt-1">Visual overview of your active enquiries.</p>
      </div>

      <div className="flex-1 flex gap-4 overflow-x-auto pb-4">
        {PIPELINE_STAGES.map(stage => {
          const stageLeads = getLeadsByStatus(stage.id)
          return (
            <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col">
              <div className={`px-4 py-3 rounded-t-xl border-t border-l border-r font-medium text-gray-900 ${stage.color} flex justify-between items-center`}>
                <span>{stage.label}</span>
                <span className="bg-white/50 text-gray-700 px-2 py-0.5 rounded-full text-xs">{stageLeads.length}</span>
              </div>
              <div className="flex-1 bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-xl p-3 space-y-3 overflow-y-auto min-h-[500px]">
                {stageLeads.map(lead => (
                  <Link href={`${ADMIN_ROUTES.LEADS}/${lead.id}`} key={lead.id} className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors">
                    <p className="font-medium text-gray-900 text-sm truncate">{lead.full_name}</p>
                    {lead.organization_name && <p className="text-xs text-indigo-600 mt-1 truncate">{lead.organization_name}</p>}
                    <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                      <span className="capitalize">{lead.booking_type.replace('_', ' ')}</span>
                      <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                    </div>
                  </Link>
                ))}
                {stageLeads.length === 0 && (
                  <div className="text-center p-4 text-xs text-gray-400">
                    No leads
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
