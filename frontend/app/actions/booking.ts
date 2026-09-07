'use server'

import { createClient } from '@supabase/supabase-js'

export async function submitBooking(formData: any) {
  // Use a clean server-side Supabase client with Anon Key
  // This completely bypasses any authenticated browser sessions
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
  const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  )

  const bookingData = {
    status: 'new',
    priority: 'medium',
    ...formData,
  }

  // Remove undefined values to ensure strict payload validity
  const cleanBookingData = Object.fromEntries(
    Object.entries(bookingData).filter(([_, value]) => value !== undefined)
  )

  // Do NOT use .select() here. 
  // Public users have an INSERT policy but NO SELECT policy.
  // Using .select() causes PostgREST to attempt to read the inserted row, 
  // which fails the RLS policy and throws a 42501 error.
  const { data, error } = await supabase
    .from('bookings')
    .insert([cleanBookingData])

  if (process.env.NODE_ENV !== 'production') {
    console.log('--- SUPABASE BOOKING SUBMISSION DEBUG ---')
    console.log('Supabase URL:', supabaseUrl)
    console.log('Anon Key Exists:', Boolean(supabaseAnonKey))
    console.log('Current Payload:', cleanBookingData)
    
    if (error) {
      console.error('BOOKING INSERT ERROR:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      })
    } else {
      console.log('BOOKING INSERT SUCCESS:', data)
    }
    console.log('-----------------------------------------')
  }

  if (error) {
    // Preserve exact error in development logs but return a clean object
    return { success: false, error: error.message || 'Failed to submit booking.' }
  }

  return { 
    success: true, 
    data: data,
    referenceId: null // We can no longer return the ID since we can't select it due to RLS
  }
}
