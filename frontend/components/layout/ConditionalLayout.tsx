'use client'

import { usePathname } from 'next/navigation'

interface ConditionalLayoutProps {
  children: React.ReactNode
  navbar: React.ReactNode
  footer: React.ReactNode
}

export function ConditionalLayout({ children, navbar, footer }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <main className="flex-grow flex flex-col h-full bg-slate-50">{children}</main>
  }

  return (
    <>
      {navbar}
      <main className="flex-grow">{children}</main>
      {footer}
    </>
  )
}
