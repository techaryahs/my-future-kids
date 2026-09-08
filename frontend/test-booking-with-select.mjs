import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.readFileSync('.env.local', 'utf8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL="?([^"\n]+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY="?([^"\n]+)/);

const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim(), {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});

const dataToInsert = {
  booking_type: "test_final",
  parent_name: "End to End Test",
  email: "end2end@example.com",
  phone: "5555555555",
  status: "new",
  priority: "high"
};

async function run() {
  console.log("Attempting insert WITH select()...");
  const { data, error } = await supabase.from("bookings").insert([dataToInsert]).select();
  
  if (error) {
    console.error("FAILED:", error);
  } else {
    console.log("SUCCESS:", data);
  }
}

run();
