'use server'

import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export async function submitBooking(formData: Record<string, unknown>) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })

  const bookingData = {
    status: 'new',
    priority: 'medium',
    ...formData,
  }

  const cleanBookingData = Object.fromEntries(
    Object.entries(bookingData).filter(function (entry) {
      return entry[1] !== undefined
    })
  )

  const insertResult = await supabase.from('bookings').insert([cleanBookingData])
  const data = insertResult.data
  const error = insertResult.error

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
        hint: error.hint,
      })
    } else {
      console.log('BOOKING INSERT SUCCESS:', data)
    }
    console.log('-----------------------------------------')
  }

  if (error) {
    return { success: false, error: error.message || 'Failed to submit booking.' }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const parentName = formData.parent_name ? String(formData.parent_name) : 'there'
    const studentName = formData.student_name ? String(formData.student_name) : ''
    const email = formData.email ? String(formData.email) : ''
    const phone = formData.phone ? String(formData.phone) : ''
    const interestedIn = formData.interested_in ? String(formData.interested_in) : 'General'
    const msg = formData.message ? String(formData.message) : ''

    const companyHtmlParts = [
      '<h2>New Program Booking</h2>',
      '<p><strong>Parent Name:</strong> ' + parentName + '</p>',
      '<p><strong>Student Name:</strong> ' + studentName + '</p>',
      '<p><strong>Email:</strong> ' + email + '</p>',
      '<p><strong>Phone:</strong> ' + phone + '</p>',
      '<p><strong>Interested In:</strong> ' + interestedIn + '</p>',
      '<p><strong>Message:</strong> ' + msg + '</p>',
    ]
    const companyHtml = companyHtmlParts.join('')

    await transporter.sendMail({
      from: '"BeFutureKids Website" <' + process.env.EMAIL_USER + '>',
      to: process.env.NOTIFY_EMAIL,
      subject: 'New Program Enquiry: ' + interestedIn,
      html: companyHtml,
    })

    if (email) {
      const userHtmlParts = [
        '<h2>Thank you, ' + parentName + '!</h2>',
        '<p>We have received your enquiry for <strong>' + interestedIn + '</strong>.</p>',
        '<p>Our team will contact you shortly on ' + phone + ' or this email.</p>',
        '<br/>',
        '<p>Team BeFutureKids</p>',
      ]
      const userHtml = userHtmlParts.join('')

      await transporter.sendMail({
        from: '"BeFutureKids" <' + process.env.EMAIL_USER + '>',
        to: email,
        subject: 'We received your enquiry - BeFutureKids',
        html: userHtml,
      })
    }
  } catch (emailError) {
    console.error('Email sending failed:', emailError)
  }

  return {
    success: true,
    data: data,
    referenceId: null,
  }
}