import { Mail, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Careers | BeFutureKids',
  description: "Join Our Mission. We're growing and always looking for passionate educators, innovators, and technology enthusiasts.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] pt-28 pb-20 sm:pt-32 sm:pb-24 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Join Our Mission</h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          We&apos;re growing and always looking for passionate educators, innovators, and technology enthusiasts.
        </p>

        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto">
            While we don&apos;t have any specific open roles right now, we&apos;re always excited to connect with talented people. Send us your resume and tell us how you can contribute.
          </p>
          <a
            href="mailto:info@aryahsworld.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50"
          >
            Email Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  )
}
