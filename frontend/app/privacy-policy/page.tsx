import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BeFutureKids',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
          <p className="text-sm text-amber-800 font-medium">
            Note: This Privacy Policy is provided as a general website policy template and should be reviewed by a qualified legal professional before final production use.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <header className="mb-12 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600 mb-4">How BeFutureKids collects, uses, and protects your information.</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Last Updated: September 2026</p>
          </header>

          <div className="space-y-8 text-slate-600">
            
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                BeFutureKids respects your privacy and is committed to handling personal information responsibly. 
                This Privacy Policy explains how we collect, use, and safeguard information when you use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-2">We may collect the following types of information when you interact with our website or submit an enquiry:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>School or organization name and your designation</li>
                <li>City, state, or location details</li>
                <li>Student-related information (such as age or program interest) voluntarily provided through our forms</li>
                <li>Booking and enquiry details</li>
                <li>Standard website usage information (such as browser type and IP address)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Information</h2>
              <p className="leading-relaxed mb-2">The information we collect may be used for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to your enquiries and requests</li>
                <li>Scheduling demos or consultations</li>
                <li>Providing requested information about our programs</li>
                <li>Improving our services and website experience</li>
                <li>Communicating with you about relevant programs or updates</li>
                <li>Managing bookings and providing customer support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Information From Children</h2>
              <p className="leading-relaxed">
                Because BeFutureKids is an education-focused platform, we prioritize the protection of children's privacy. 
                Personal information relating to children should generally be provided by a parent, guardian, school, or authorized representative where applicable. 
                We do not knowingly collect unnecessary personal information directly from children without appropriate consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookies and Website Analytics</h2>
              <p className="leading-relaxed">
                Our website may use cookies, analytics tools, or similar technologies to help us understand how users interact with our platform and to improve the overall user experience. 
                You can typically manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information to third parties. 
                Information may be shared with authorized service providers only where reasonably necessary to operate our platform, provide our services, or comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable administrative and technical measures to protect personal information from unauthorized access or disclosure. 
                However, please note that no method of transmission over the internet or electronic storage is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Data Retention</h2>
              <p className="leading-relaxed">
                Your personal information may be retained only for as long as is reasonably necessary for the business, legal, operational, or service purposes for which it was collected.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Your Choices</h2>
              <p className="leading-relaxed mb-2">You may contact BeFutureKids at any time regarding:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Updating or correcting your information</li>
                <li>Changing your marketing communication preferences</li>
                <li>Any privacy-related questions or concerns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Third Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to external websites. BeFutureKids is not responsible for the privacy practices, content, or security of those third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
                Any updates will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
                <p className="font-medium text-slate-900 mb-1">BeFutureKids Privacy Team</p>
                <p className="text-slate-600 mb-1"><strong className="text-slate-700">Email:</strong> [INSERT OFFICIAL EMAIL]</p>
                <p className="text-slate-600 mb-1"><strong className="text-slate-700">Phone:</strong> [INSERT OFFICIAL PHONE]</p>
                <p className="text-slate-600"><strong className="text-slate-700">Address:</strong> [INSERT BUSINESS ADDRESS]</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
