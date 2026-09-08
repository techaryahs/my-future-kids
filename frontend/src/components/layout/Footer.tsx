import Link from "next/link";
import { Mail, Phone, Globe, MessageCircle, Share2, Users } from "lucide-react";
import Logo from "@/components/branding/Logo";

const socialLinks = {
  website: "https://aryahsworld.com",
  linkedin: "",
  instagram: "",
  youtube: "",
  facebook: "",
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 md:pt-24 pb-8 md:pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm leading-relaxed">
              Empowering young minds through future-ready education including Robotics, STEM, AI, and Innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.website && (
                <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm">
                  <span className="sr-only">Website</span>
                  <Globe className="h-5 w-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm">
                  <span className="sr-only">LinkedIn</span>
                  <Users className="h-5 w-5" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm">
                  <span className="sr-only">Instagram</span>
                  <MessageCircle className="h-5 w-5" />
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm">
                  <span className="sr-only">YouTube</span>
                  <Share2 className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">About Us</Link></li>
              <li><Link href="/about#mission" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Our Mission</Link></li>
              <li><Link href="/careers" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/robotics" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Robotics</Link></li>
              <li><Link href="/stem" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">STEM</Link></li>
              <li><Link href="/ai" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">AI</Link></li>
              <li><Link href="/coding" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Coding</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase mb-4">For Schools</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="/innovation-labs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Innovation Labs</Link></li>
              <li><Link href="/school-programs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">School Programs</Link></li>
              <li><Link href="/book/school-demo" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 inline-block">Book a Demo</Link></li>
            </ul>
            
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-slate-400 dark:text-slate-500 mr-2 shrink-0" />
                <a href="mailto:info@aryahsworld.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 break-all cursor-pointer inline-block">info@aryahsworld.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-slate-400 dark:text-slate-500 mr-2 shrink-0" />
                <a href="tel:+919619901999" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-600 cursor-pointer inline-block">+91 96199 01999</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} BeFutureKids. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 focus:outline-none focus:text-slate-900 inline-block">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 focus:outline-none focus:text-slate-900 inline-block">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
