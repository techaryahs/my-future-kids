-- ==========================================
-- BOOKING & LEAD MANAGEMENT SYSTEM SCHEMA
-- ==========================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create ADMIN PROFILES table
CREATE TABLE IF NOT EXISTS public.admin_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin', 'sales')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Create BOOKINGS table
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_id TEXT UNIQUE NOT NULL, -- e.g., BFK-2026-XXXXXX
  
  -- Core Types
  booking_type TEXT NOT NULL, -- school_demo, student_program, free_trial, workshop, partnership
  user_type TEXT NOT NULL, -- b2b, b2c
  
  -- Contact Info
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Organization Info (B2B mostly)
  organization_name TEXT,
  designation TEXT,
  
  -- Location
  city TEXT,
  state TEXT,
  country TEXT,
  
  -- Program Specifics
  student_name TEXT,
  student_age TEXT,
  program_interest TEXT,
  experience_level TEXT,
  learning_type TEXT,
  number_of_participants INTEGER,
  
  -- Scheduling
  preferred_date DATE,
  preferred_time TEXT,
  
  -- Context
  message TEXT,
  source TEXT,
  
  -- CRM Tracking
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'demo_scheduled', 'confirmed', 'completed', 'converted', 'lost', 'cancelled')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  assigned_to UUID REFERENCES public.admin_profiles(id),
  admin_notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Create Update Timestamp Trigger
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_bookings
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- 4. Setup Row Level Security (RLS)

-- Enable RLS
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- ADMIN PROFILES POLICIES
CREATE POLICY "Admins can read own profile" 
ON public.admin_profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can read all profiles" 
ON public.admin_profiles FOR SELECT 
USING (EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid()));

-- BOOKINGS POLICIES
CREATE POLICY "Anyone can insert a booking" 
ON public.bookings FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all bookings" 
ON public.bookings FOR SELECT 
USING (EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid()));

CREATE POLICY "Admins can update bookings" 
ON public.bookings FOR UPDATE 
USING (EXISTS (SELECT 1 FROM public.admin_profiles WHERE id = auth.uid()));
