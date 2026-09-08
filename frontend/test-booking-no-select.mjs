import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.readFileSync('.env.local', 'utf8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL="?([^"\n]+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY="?([^"\n]+)/);

const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim(), {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});

const dataToInsert = {
  booking_type: "b2c",
  parent_name: "Final Form Test",
  email: "finaltest@example.com",
  phone: "1111111111",
  status: "new",
  priority: "medium"
};

async function run() {
  const { data, error } = await supabase.from("bookings").insert([dataToInsert]);
  
  if (error) {
    console.error("FAILED:", error);
  } else {
    console.log("SUCCESS:", data);
  }
}

run();
