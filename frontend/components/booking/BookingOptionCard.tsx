import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface BookingOptionCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  colorClass?: string
}

export function BookingOptionCard({
  title,
  description,
  icon: Icon,
  href,
  colorClass = 'bg-blue-50 text-blue-600',
}: BookingOptionCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-100 dark:hover:border-blue-500/30 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${colorClass} shrink-0`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  )
}
