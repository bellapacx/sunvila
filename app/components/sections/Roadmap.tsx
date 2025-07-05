'use client';

import React from 'react';

const milestones = [
  { year: '2025 Q3', title: 'Token Launch', description: 'Mint SunvilaCoin (SVC) and begin initial distribution.' },
  { year: '2025 Q4', title: 'Staking & DAO', description: 'Deploy staking contracts and launch DAO governance.' },
  { year: '2026 Q1', title: 'Smart Village Deployment', description: 'Begin physical Smart Village projects and infrastructure.' },
  { year: '2026 Q2', title: 'Global Expansion', description: 'Expand ecosystem outreach and partnerships globally.' },
  { year: '2026 Q3', title: 'Ecosystem Maturity', description: 'Full ecosystem integration and mass adoption.' },
];

const Roadmap = () => {
  return (
    <section className="relative py-10 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
  {/* Right-side quote */}
  <div className="hidden lg:block absolute right-30 top-1/2 transform -translate-y-1/2 text-zinc-600 text-2xl italic max-w-sm leading-relaxed z-0">
    &quot;Empowering communities through smart systems, belief, and action — that&apos;s the Sunvila way.&quot;
  </div>

  {/* Main container */}
  <div className="relative max-w-5xl mx-auto px-6 z-10">
    <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>

    <div className="relative border-l-4 border-green-500">
      {milestones.map(({ year, title, description }, idx) => (
        <div key={idx} className="mb-16 relative pl-20">
          {/* Number circle */}
          <div className="absolute left-[-1.65rem] top-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold shadow-md z-10">
            {idx + 1}
          </div>

          {/* Text content */}
          <div>
            <time className="text-green-400 font-semibold mb-1 block">{year}</time>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-zinc-300 mt-2">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Roadmap;
