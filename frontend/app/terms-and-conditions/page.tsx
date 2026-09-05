import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | BeFutureKids',
}

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-sm text-amber-800 font-medium">
            Note: These Terms & Conditions are provided as a general website template and should be reviewed by a qualified legal professional before final production use.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <header className="mb-12 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-slate-600 mb-4">Rules and guidelines for using the BeFutureKids platform.</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Last Updated: September 2026</p>
          </header>

          <div className="space-y-8 text-slate-600">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing, browsing, or using the BeFutureKids website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Website</h2>
              <p className="leading-relaxed mb-2">
                Users are expected to use the website lawfully, respectfully, and responsibly. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Misuse or attempt to compromise the website functionality</li>
                <li>Make unauthorized access attempts to any part of our systems</li>
                <li>Interfere with website operation or security</li>
                <li>Submit fraudulent, false, or misleading enquiries and bookings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Educational Information</h2>
              <p className="leading-relaxed">
                The content provided on this website is intended for general informational and educational purposes. 
                While we strive for accuracy, program availability, curriculum details, and specific features are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Bookings and Enquiries</h2>
              <p className="leading-relaxed">
                Submitting a booking, demo request, or enquiry through our forms does not automatically guarantee enrollment, availability, or a confirmed service. 
                Following a submission, the BeFutureKids team may contact you to discuss your specific requirements, verify details, and confirm availability.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Programs and Services</h2>
              <p className="leading-relaxed">
                All program details, schedules, pricing, and availability mentioned on the website are subject to change. 
                Any confirmed commercial arrangement, partnership, or school deployment will be governed by a separate, formal agreement or communication provided directly by our team.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All website content, including but not limited to text, branding, logos, graphics, images, videos, and educational materials, is the property of BeFutureKids or its content suppliers. 
                These materials may not be copied, reproduced, distributed, or reused without our appropriate written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Third Party Services</h2>
              <p className="leading-relaxed">
                Our website may integrate with or link to third-party platforms and services. 
                When interacting with these third-party services, users may be subject to separate terms and privacy policies outside of our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, BeFutureKids shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your access to, use of, or inability to use the website or our educational services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Changes to Website</h2>
              <p className="leading-relaxed">
                BeFutureKids reserves the right to update, modify, suspend, or discontinue any features, pages, or content of the website at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms & Conditions periodically. Continued use of the website following any changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
              <p className="leading-relaxed">
                These terms shall be governed by applicable laws based on the registered business jurisdiction of BeFutureKids. 
                <br/><em className="text-sm text-slate-500 mt-2 block">TODO for legal review: Update with specific governing law jurisdiction.</em>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact</h2>
              <p className="leading-relaxed">If you have any questions or concerns regarding these Terms & Conditions, please contact us at:</p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
                <p className="font-medium text-slate-900 mb-1">BeFutureKids Legal Team</p>
                <p className="text-slate-600 mb-1"><strong className="text-slate-700">Email:</strong> [INSERT OFFICIAL EMAIL]</p>
                <p className="text-slate-600"><strong className="text-slate-700">Phone:</strong> [INSERT OFFICIAL PHONE]</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
