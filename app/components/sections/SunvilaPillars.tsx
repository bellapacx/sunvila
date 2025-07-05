'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GiTreeGrowth,
  GiFactory,
  GiLightBulb,
  GiNetworkBars,
  GiShield,
  GiRecycle,
} from 'react-icons/gi';

const pillars = [
  {
    icon: <GiTreeGrowth className="text-green-400 text-5xl mb-4" />,
    title: 'Sustainable Environment',
    description: 'Promoting eco-friendly practices and reforestation through community engagement.',
  },
  {
    icon: <GiFactory className="text-yellow-400 text-5xl mb-4" />,
    title: 'Smart Industry',
    description: 'Developing smart agro-processing and industrial centers with modern technology.',
  },
  {
    icon: <GiLightBulb className="text-blue-400 text-5xl mb-4" />,
    title: 'Innovative Technology',
    description: 'Integrating smart technologies for education, health, and infrastructure.',
  },
  {
    icon: <GiNetworkBars className="text-purple-400 text-5xl mb-4" />,
    title: 'Connectivity',
    description: 'Building strong digital and physical networks for seamless communication and transport.',
  },
  {
    icon: <GiShield className="text-red-400 text-5xl mb-4" />,
    title: 'Strong Institutions',
    description: 'Establishing transparent and effective local governance and management systems.',
  },
  {
    icon: <GiRecycle className="text-teal-400 text-5xl mb-4" />,
    title: 'Circular Economy',
    description: 'Encouraging resource reuse and sustainable financial schemes for long-term growth.',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const SunvilaPillars = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-green-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sunvila Pillars
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map(({ icon, title, description }, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 p-8 rounded-xl shadow-md border border-zinc-700 hover:shadow-green-500/30 transition-all duration-300 cursor-pointer"
             
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <motion.div
                whileHover={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.6 },
                }}
              >
                {icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-zinc-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SunvilaPillars;
