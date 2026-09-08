'use client'

import { useState } from 'react'
import { updateLeadStatus } from '@/app/actions/admin'
import { useRouter } from 'next/navigation'

interface LeadData {
  id: string;
  status: string;
  priority: string;
  admin_notes?: string | null;
}

export function LeadDetailClient({ lead }: { lead: LeadData }) {
  const router = useRouter()
  const [status, setStatus] = useState(lead.status)
  const [priority, setPriority] = useState(lead.priority)
  const [adminNotes, setAdminNotes] = useState(lead.admin_notes || '')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const handleSave = async () => {
    setLoading(true)
    setMsg('')
    const res = await updateLeadStatus(lead.id, status, priority, adminNotes)
    setLoading(false)
    if (res.success) {
      setMsg('Saved successfully!')
      router.refresh()
    } else {
      setMsg(`Error: ${res.error}`)
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">Admin Actions</h2>
      
      {msg && (
        <div className={`mb-4 p-3 rounded-lg text-sm border ${msg.includes('Error') ? 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900/50' : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/50'}`}>
          {msg}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="demo_scheduled">Demo Scheduled</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Priority</label>
          <select 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">Internal Admin Notes</label>
          <textarea 
            rows={4}
            value={adminNotes} 
            onChange={(e) => setAdminNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            placeholder="Add notes about this lead..."
          />
        </div>

        <button 
          onClick={handleSave} 
          disabled={loading}
          className="w-full py-2 px-4 bg-gray-900 dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
