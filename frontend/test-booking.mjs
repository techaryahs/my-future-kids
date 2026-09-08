import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.readFileSync('.env.local', 'utf8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL="?([^"\n]+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY="?([^"\n]+)/);

const supabaseUrl = urlMatch[1].trim();
const supabaseAnonKey = keyMatch[1].trim();

console.log("Supabase URL:", supabaseUrl);
console.log("Anon key exists:", Boolean(supabaseAnonKey));

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
);

const bookingData = {
  booking_type: "test",
  parent_name: "Connection Test",
  student_name: "Test Student",
  email: "connection-test@example.com",
  phone: "9999999999",
  student_age: 10,
  city: "Mumbai",
  interested_in: "Robotics",
  message: "Direct Supabase connection test",
  status: "new",
  priority: "medium"
};

const cleanBookingData = Object.fromEntries(
  Object.entries(bookingData).filter(([_, value]) =>
    value !== undefined
  )
);

async function run() {
  const { data, error } = await supabase
    .from("bookings")
    .insert([cleanBookingData])
    .select();

  if (error) {
    console.error("BOOKING INSERT ERROR:", {
      code: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint
    });
  } else {
    console.log("BOOKING INSERT SUCCESS:", data);
  }
}

run();
