'use client';

import { FaCoins, FaTag, FaBoxOpen, FaSeedling } from 'react-icons/fa';
import React from 'react';

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
        <h2 className="text-4xl font-bold text-amber-400 mb-12">Token Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 bo <TokenStats />rder border-zinc-800 p-6 rounded-xl shadow-xl hover:shadow-amber-500/20 transition duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-sm text-zinc-400 uppercase">{stat.label}</p>
              <p className="text-xl font-semibold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenStats;
