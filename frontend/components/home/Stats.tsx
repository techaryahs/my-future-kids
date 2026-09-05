"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 10000, suffix: "+", label: "Young Innovators" },
  { value: 50, suffix: "+", label: "School Partners" },
  { value: 500, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Cities Reached" },
];

function Counter({ from = 0, to, suffix }: { from?: number; to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const node = nodeRef.current;
    if (node && inView) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, inView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-blue-900 relative overflow-hidden text-white">
      {/* Background patterns */}
      <h2 className="sr-only">Our Impact in Numbers</h2>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent bg-[length:20px_20px]" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-30 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-30 translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-blue-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
