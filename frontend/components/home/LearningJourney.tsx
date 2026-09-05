"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    title: "Explore",
    description: "Discover new technologies through interactive demonstrations and guided discovery sessions that spark curiosity.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Learn",
    description: "Deep dive into core concepts, algorithms, and engineering principles with expert educators.",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Build",
    description: "Apply theoretical knowledge to hands-on projects, collaborating with peers to construct real working prototypes.",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Innovate",
    description: "Take creations a step further by iterating, optimizing, and presenting solutions to real-world problems.",
    icon: Rocket,
    color: "bg-emerald-100 text-emerald-600",
  }
];

export default function LearningJourney() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
          >
            From Curious Minds to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Future Innovators.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Our proven learning methodology ensures that students don&apos;t just consume technology, but actively create it.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-full bg-slate-200 -z-10" />
                )}
                
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-xl border-4 border-white transform transition-transform hover:scale-110 duration-300 relative`}>
                  <step.icon className="w-8 h-8" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
