"use client";

import { motion } from "framer-motion";
import { Cpu, FlaskConical, BrainCircuit, Glasses, TerminalSquare, Lightbulb } from "lucide-react";

const technologies = [
  {
    title: "Robotics",
    description: "Design, build, and program robots to solve real-world challenges through hands-on engineering.",
    icon: Cpu,
    gradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-600 dark:text-blue-400",
    bgLight: "bg-blue-50 dark:bg-blue-950/60",
    shadowHover: "hover:shadow-blue-500/20",
  },
  {
    title: "STEM Learning",
    description: "Integrated science, technology, engineering, and mathematics methodology for practical problem solving.",
    icon: FlaskConical,
    gradient: "from-emerald-500 to-emerald-600",
    textColor: "text-emerald-600 dark:text-emerald-400",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/60",
    shadowHover: "hover:shadow-emerald-500/20",
  },
  {
    title: "Artificial Intelligence",
    description: "Understand the fundamentals of AI, machine learning, and how smart algorithms shape our future.",
    icon: BrainCircuit,
    gradient: "from-purple-500 to-purple-600",
    textColor: "text-purple-600 dark:text-purple-400",
    bgLight: "bg-purple-50 dark:bg-purple-950/60",
    shadowHover: "hover:shadow-purple-500/20",
  },
  {
    title: "AR / VR",
    description: "Experience immersive learning through Augmented and Virtual Reality technologies.",
    icon: Glasses,
    gradient: "from-cyan-500 to-cyan-600",
    textColor: "text-cyan-600 dark:text-cyan-400",
    bgLight: "bg-cyan-50 dark:bg-cyan-950/60",
    shadowHover: "hover:shadow-cyan-500/20",
  },
  {
    title: "Coding",
    description: "Master modern programming languages and develop logical thinking to build software solutions.",
    icon: TerminalSquare,
    gradient: "from-orange-500 to-orange-600",
    textColor: "text-orange-600 dark:text-orange-400",
    bgLight: "bg-orange-50 dark:bg-orange-950/60",
    shadowHover: "hover:shadow-orange-500/20",
  },
  {
    title: "Innovation",
    description: "Cultivate an entrepreneurial mindset and turn creative ideas into viable technological projects.",
    icon: Lightbulb,
    gradient: "from-pink-500 to-pink-600",
    textColor: "text-pink-600 dark:text-pink-400",
    bgLight: "bg-pink-50 dark:bg-pink-950/60",
    shadowHover: "hover:shadow-pink-500/20",
  }
];

export default function TechnologyEcosystem() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#090d16] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            One Ecosystem. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Infinite Possibilities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Students explore a comprehensive suite of future technologies, building a versatile skill set that prepares them for the careers of tomorrow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 sm:p-8 bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tech.shadowHover} overflow-hidden`}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/40 dark:to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${tech.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`w-7 h-7 ${tech.textColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>
              
              {/* Animated bottom border line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${tech.gradient} group-hover:w-full transition-all duration-500 ease-out`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
