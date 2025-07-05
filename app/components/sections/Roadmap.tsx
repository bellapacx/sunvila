'use client';

import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2025 Q3', title: 'Token Launch', description: 'Mint SunvilaCoin (SVC) and begin initial distribution.' },
  { year: '2025 Q4', title: 'Staking & DAO', description: 'Deploy staking contracts and launch DAO governance.' },
  { year: '2026 Q1', title: 'Smart Village Deployment', description: 'Begin physical Smart Village projects and infrastructure.' },
  { year: '2026 Q2', title: 'Global Expansion', description: 'Expand ecosystem outreach and partnerships globally.' },
  { year: '2026 Q3', title: 'Ecosystem Maturity', description: 'Full ecosystem integration and mass adoption.' },
];



const Roadmap = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
      {/* Vertical animated timeline line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-10 top-0 bottom-0 w-1 bg-green-600 origin-top rounded"
      />

      {/* Right-side quote */}
      <motion.blockquote
        className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 text-zinc-600 text-2xl italic max-w-sm leading-relaxed z-0 select-none"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      >
        &quot;Empowering communities through smart systems, belief, and action — that&apos;s the Sunvila way.&quot;
      </motion.blockquote>

      {/* Main container */}
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold mb-14 text-center text-green-400">Roadmap</h2>

        <div className="relative border-l-4 border-green-600 pl-16">
          {milestones.map(({ year, title, description }, idx) => (
            <motion.div
              key={idx}
              className="mb-20 relative"
              
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Number circle */}
              <motion.div
                whileHover={{ scale: 1.3, boxShadow: '0 0 8px #22c55e' }}
                className="absolute left-[-3.25rem] top-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg cursor-pointer select-none"
              >
                {idx + 1}
              </motion.div>

              {/* Text content */}
              <time className="text-green-400 font-semibold mb-1 block">{year}</time>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-zinc-300 mt-2 max-w-lg">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
