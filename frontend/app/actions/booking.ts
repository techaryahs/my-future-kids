'use server'

import { createClient } from '@/src/lib/supabase/server'

export async function submitBooking(formData: any) {
  const supabase = await createClient()

  // Generate reference ID BFK-YYYY-XXXXXX
  const year = new Date().getFullYear()
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase()
  const referenceId = `BFK-${year}-${randomStr}`

  const dataToInsert = {
    ...formData,
    reference_id: referenceId,
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert([dataToInsert])
    .select('reference_id')
    .single()

  if (error) {
    console.error('Error inserting booking:', error)
    return { success: false, error: error.message }
  }

  return { success: true, referenceId: data.reference_id }
}
