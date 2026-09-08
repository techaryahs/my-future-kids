import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.readFileSync('.env.local', 'utf8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL="?([^"\n]+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY="?([^"\n]+)/);

const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim(), {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});

async function run() {
  const priorities = ["low", "medium", "high", "normal"];
  for (const p of priorities) {
    const dataToInsert = {
      booking_type: "b2c",
      parent_name: "Priority Test",
      email: "priority@example.com",
      phone: "0000000000",
      status: "new",
      priority: p
    };
    const { error } = await supabase.from("bookings").insert([dataToInsert]);
    if (error) {
      console.error(`Priority '${p}' FAILED:`, error.message);
    } else {
      console.log(`Priority '${p}' SUCCESS!`);
    }
  }
}

run();
