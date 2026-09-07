"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, Cpu, Glasses } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Robotics Labs",
    description: "Build and program autonomous robots.",
    icon: Bot,
    bgGradient: "from-blue-500 to-indigo-600",
    pattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)"
  },
  {
    title: "STEM Programs",
    description: "Hands-on science and engineering projects.",
    icon: Code,
    bgGradient: "from-emerald-500 to-teal-600",
    pattern: "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)"
  },
  {
    title: "AI Learning",
    description: "Train models and understand neural networks.",
    icon: Cpu,
    bgGradient: "from-purple-500 to-fuchsia-600",
    pattern: "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)"
  },
  {
    title: "AR/VR Experiences",
    description: "Immersive educational environments.",
    icon: Glasses,
    bgGradient: "from-cyan-500 to-blue-500",
    pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)"
  }
];

export default function FeaturedPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
            >
              Step into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Future.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Discover our premier educational programs designed to ignite passion and build essential skills.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link 
              href="#" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative h-[360px] rounded-3xl overflow-hidden bg-gradient-to-br ${program.bgGradient} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              <div 
                className="absolute inset-0 opacity-50 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundImage: program.pattern }}
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                  {program.title}
                </h3>
                <p className="text-white/80 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
