'use client'

import { usePathname } from 'next/navigation'
import { Search, Bell, User, Menu } from 'lucide-react'

export function AdminHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const pathname = usePathname()
  
  // Create breadcrumb from pathname
  const paths = pathname?.split('/').filter(Boolean) || []
  const title = paths.length > 1 
    ? paths[paths.length - 1].replace(/-/g, ' ') 
    : 'Dashboard'

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-gray-500">
            Home <span className="mx-2">/</span> 
            <span className="text-gray-900 capitalize">{title}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-64 transition-all"
          />
        </div>
        
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

        <button className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-lg pr-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
            A
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  )
}
