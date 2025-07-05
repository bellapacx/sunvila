'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaTag, FaBoxOpen, FaSeedling } from 'react-icons/fa';

const stats = [
  {
    label: 'Token Name',
    value: 'SunvilaCoin',
    icon: <FaCoins className="text-amber-400 text-3xl" />,
  },
  {
    label: 'Symbol',
    value: 'SVC',
    icon: <FaTag className="text-green-400 text-3xl" />,
  },
  {
    label: 'Total Supply',
    value: '1,000,000,000',
    icon: <FaBoxOpen className="text-blue-400 text-3xl" />,
  },
  {
    label: 'Purpose',
    value: 'Eco Transformation',
    icon: <FaSeedling className="text-lime-400 text-3xl" />,
  },
];

const TokenStats = () => {
  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-amber-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Token Stats
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-amber-500/20 transition duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: [0, 15, -15, 0], transition: { duration: 0.5 } }}
              >
                {stat.icon}
              </motion.div>
              <p className="text-sm text-zinc-400 uppercase">{stat.label}</p>
              <p className="text-xl font-semibold mt-1 text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
