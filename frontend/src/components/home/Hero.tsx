"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Cpu, Atom } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-100/50 blur-[120px]" />
        
        {/* Orbital lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/50 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-slate-200/50 rounded-full border-dashed animate-[spin_90s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              <span>Next-Generation Education</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Empowering <br className="hidden lg:block" />
              Young Minds <br className="hidden lg:block" />
              to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Future</span>.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Hands-on learning experiences in <span className="font-medium text-slate-800">Robotics</span>, STEM, <span className="font-medium text-slate-800">AI</span>, Coding and immersive technologies designed to prepare students for tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                Book a School Demo
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                Hands-on Learning
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                Future Skills
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                School Ready
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual/Abstract */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center hidden md:flex">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 border border-white/60 shadow-2xl backdrop-blur-3xl flex items-center justify-center"
            >
              {/* Central glowing core */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full animate-pulse" />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_60px_rgba(37,99,235,0.4)] flex items-center justify-center z-20">
                <Atom className="w-16 h-16 text-white animate-pulse" />
              </div>

              {/* Floating cards */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
              >
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Robotics</div>
                  <div className="text-xs text-slate-500">Active Module</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30"
              >
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Coding</div>
                  <div className="text-xs text-slate-500">Syntax & Logic</div>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
