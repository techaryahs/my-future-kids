'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Calendar, Settings, LogOut, X } from 'lucide-react'
import { ADMIN_ROUTES } from '@/src/lib/bookingRoutes'
import { createClient } from '@/src/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface AdminSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function AdminSidebar({ isOpen = true, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const navItems = [
    { name: 'Dashboard', href: ADMIN_ROUTES.DASHBOARD, icon: LayoutDashboard },
    { name: 'Leads', href: ADMIN_ROUTES.LEADS, icon: Users },
    { name: 'Pipeline', href: ADMIN_ROUTES.PIPELINE, icon: Calendar },
    { name: 'Settings', href: ADMIN_ROUTES.SETTINGS, icon: Settings },
  ]

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push(ADMIN_ROUTES.LOGIN)
    router.refresh()
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-30 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-[260px] 
        flex flex-col bg-[#0F172A] text-slate-300
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-[72px] flex items-center justify-between px-6 border-b border-slate-800">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">BeFutureKids</h1>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-0.5">Admin Portal</p>
          </div>
          {onClose && (
            <button onClick={onClose} className="lg:hidden p-1 text-slate-400 hover:text-white" aria-label="Close sidebar">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === ADMIN_ROUTES.LEADS
                ? pathname === ADMIN_ROUTES.LEADS ||
                  (pathname.startsWith(ADMIN_ROUTES.LEADS + '/') &&
                    !pathname.startsWith(ADMIN_ROUTES.PIPELINE))
                : pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                onClick={() => {
                  if (window.innerWidth < 1024 && onClose) onClose();
                }}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-[#0B1220]">
          <div className="flex items-center gap-3 px-3 py-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white shrink-0">
              A
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-left text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
