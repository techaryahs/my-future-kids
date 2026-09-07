"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Premium Futuristic Gradient Background */}
      <div className="absolute inset-0 bg-blue-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20 translate-y-1/3 -translate-x-1/4" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Future?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bring future-ready learning experiences to your school and inspire the next generation of innovators.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-medium text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="#" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-blue-800/50 backdrop-blur-md border border-blue-400/30 rounded-full hover:bg-blue-800/70 hover:border-blue-400/50 transition-all shadow-lg"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
