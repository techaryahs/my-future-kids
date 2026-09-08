const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL="?([^"\n]+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY="?([^"\n]+)/);

const { createClient } = require('@supabase/supabase-js');

async function run() {
  const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

  const dataToInsert = {
    booking_type: 'b2c',
    parent_name: 'Test Parent',
    email: 'test@example.com',
    phone: '1234567890',
    status: 'new',
    priority: 'normal',
  };

  const { data, error } = await supabase
    .from('bookings')
    .insert([dataToInsert])
    .select();

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success:', data);
  }
}

run();
