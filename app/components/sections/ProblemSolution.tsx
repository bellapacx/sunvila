'use client';

import React from 'react';
import { GiFactory, GiForest, GiTeamIdea } from 'react-icons/gi';

const problems = [
  {
    icon: <GiFactory className="text-red-500 text-4xl mb-3" />,
    title: 'Structural Problems',
    points: [
      'Unproductive & underserved scattered settlements',
      'Idle labour due to wrong religious orientations',
      'Population explosion & deforestation',
      'Low level of productivity',
    ],
  },
  {
    icon: <GiForest className="text-yellow-500 text-4xl mb-3" />,
    title: 'Systemic Problems',
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

const ProblemSolution = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-black via-zinc-900 to-black">
  <div className="max-w-7xl mx-auto px-6 bg-gradient-to-b from-black via-zinc-900 to-black rounded-lg">
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-12">
        {/* Problems */}
        {problems.map(({ icon, title, points }, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-lg shadow-lg border border-zinc-700">
            <div>{icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Solutions */}
        {solutions.map(({ icon, title, points }, i) => (
          <div key={i} className="bg-green-900 p-6 rounded-lg shadow-lg border border-green-700">
            <div>{icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-green-200">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right 3D Model Placeholder */}
      <div className="lg:w-1/2 h-96 w-full rounded-xl bg-zinc-900 shadow-xl flex items-center justify-center border border-zinc-700">
        <p className="text-zinc-400 italic">[3D Smart Village Model Placeholder]</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProblemSolution;
