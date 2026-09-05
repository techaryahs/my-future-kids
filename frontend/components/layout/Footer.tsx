import Link from "next/link";
import { Mail, Phone, Globe, MessageCircle, Share2, Users } from "lucide-react";
import Logo from "@/components/branding/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-slate-600 mb-6 max-w-sm">
              Empowering young minds through future-ready education including Robotics, STEM, AI, and Innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Social</span>
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Community</span>
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Messages</span>
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Share</span>
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Robotics</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">STEM</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">AI</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Coding</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">For Schools</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Innovation Labs</Link></li>
              <li><Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">School Programs</Link></li>
              <li><Link href="/book/school-demo" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Book a Demo</Link></li>
            </ul>
            
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-slate-400 mr-2" />
                <a href="mailto:hello@befuturekids.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">hello@befuturekids.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-slate-400 mr-2" />
                <a href="tel:+1234567890" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; 2026 BeFutureKids. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-sm text-slate-500 hover:text-slate-900">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
