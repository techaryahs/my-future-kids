import { createClient } from '@/src/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'
import { AdminShell } from '@/components/admin/AdminShell'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(ADMIN_ROUTES.LOGIN)
  }

  return <AdminShell>{children}</AdminShell>
}
