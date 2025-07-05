'use client';

import React from 'react';
import { GiTreeGrowth, GiFactory, GiLightBulb, GiNetworkBars, GiShield, GiRecycle } from 'react-icons/gi';

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

const SunvilaPillars = () => {
  return (
    <section className="py-8 bg-black text-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Sunvila Pillars</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {pillars.map(({ icon, title, description }, idx) => (
        <div
          key={idx}
          className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-700 hover:border-green-500 hover:shadow-green-600 transition-all duration-300 cursor-pointer"
        >
          <div>{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default SunvilaPillars;
