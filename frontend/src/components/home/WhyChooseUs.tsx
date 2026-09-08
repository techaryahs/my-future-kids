"use client";

import { motion } from "framer-motion";
import { Wrench, Rocket, Blocks, GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Hands-On Learning",
    description: "Students learn best by doing. Our interactive labs ensure every concept is applied practically.",
    icon: Wrench,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/60",
    colSpan: "md:col-span-2 lg:col-span-1",
    rowSpan: "lg:row-span-2",
  },
  {
    title: "Future-Ready Skills",
    description: "Curriculum designed to align with the fastest-growing technology sectors globally.",
    icon: Rocket,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/60",
    colSpan: "md:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Project-Based Education",
    description: "Moving away from rote memorization towards building real portfolios and solutions.",
    icon: Blocks,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/60",
    colSpan: "md:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Expert Mentorship",
    description: "Guided by industry professionals who bring real-world insights into the classroom.",
    icon: GraduationCap,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/60",
    colSpan: "md:col-span-2",
    rowSpan: "lg:row-span-1",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0b101b] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Beyond</span> the Classroom.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                We believe that education should be as dynamic and innovative as the world we live in. BeFutureKids provides an immersive environment where students are encouraged to explore, fail, learn, and succeed.
              </p>
              
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Learn more about our methodology
                <ArrowUpRight className="ml-1 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${feature.colSpan} ${feature.rowSpan} p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-full ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
