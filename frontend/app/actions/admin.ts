'use server'

import { createClient } from '@/src/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLeadStatus(id: string, status: string, priority: string, adminNotes: string) {
  const supabase = await createClient()

  // Ensure admin is logged in
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: 'Unauthorized' }
  }

  const { error } = await supabase
    .from('bookings')
    .update({ 
      status, 
      priority, 
      admin_notes: adminNotes 
    })
    .eq('id', id)

  if (error) {
    console.error('Error updating lead:', error)
    return { success: false, error: error.message }
  }

  revalidatePath(`/admin/leads/${id}`)
  revalidatePath('/admin/leads')
  revalidatePath('/admin/dashboard')

  return { success: true }
}
