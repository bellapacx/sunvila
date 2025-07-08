'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GiFactory, GiForest, GiTeamIdea } from 'react-icons/gi';

const problems = [
  {
    icon: <GiFactory className="text-red-500 text-4xl mb-3" />,
    title: 'Structural Problems Of Rural Africa',
    points: [
      'Unproductive & underserved scattered settlements',
      'Idle labour due to wrong religious orientations',
      'Population explosion coupled with wrong energy usage & deforestation',
      'Low level of productivity',
    ],
  },
  {
    icon: <GiForest className="text-yellow-500 text-4xl mb-3" />,
    title: 'Systemic Problems Of Rural Africa',
    points: [
      'Subsistence economy due to food self-reliance strategy',
      'Lack of model solution centers',
      'Prevalence of broker economy',
      
      'Centralized planning leaving masses as messengers',
    ],
  },
];

const solutions = [
  {
    icon: <GiTeamIdea className="text-green-400 text-4xl mb-3" />,
    title: 'Smart Village Solution',
    points: [
      'Reorient rural settlements with new mindset, skillset & toolset',
      'Smart People, Smart Technology, Smart Institutions',
      'Smart Local Resource Development & Smart Finance Scheme',
      'Digital Marketing & Smart Logistics',
    ],
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ProblemSolution = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Text Content */}
          <div className="lg:w-1/2 space-y-12">
            {[...problems, ...solutions].map(({ icon, title, points }, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-lg shadow-lg border ${
                  title === 'Smart Village Solution'
                    ? 'bg-green-900 border-green-700'
                    : 'bg-zinc-800 border-zinc-700'
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div>{icon}</div>
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    title === 'Smart Village Solution'
                      ? 'text-green-400'
                      : 'text-white'
                  }`}
                >
                  {title}
                </h3>
                <ul
                  className={`list-disc list-inside space-y-2 ${
                    title === 'Smart Village Solution'
                      ? 'text-green-200'
                      : 'text-zinc-300'
                  }`}
                >
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Visual */}
<motion.div
  className="lg:w-1/2 w-full h-96 rounded-xl bg-zinc-900 border border-zinc-700 shadow-xl flex items-center justify-center overflow-hidden"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img
    src="/village.PNG" // <-- Replace with your actual path
    alt="3D Smart Village Model"
    className="w-full h-full object-cover"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
