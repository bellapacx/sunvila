'use client';

import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface Milestone {
  title: string;
  description: string;
  details?: string;
}

interface Quarter {
  title: string;
  milestones: Milestone[];
}

const quarters: Quarter[] = [
  {
    title: 'Q1 - Token Launch & Initial Sales',
    milestones: [
      {
        title: 'Token Launch',
        description: 'Total Supply: 1B | Circulating: 283M | Market Cap: $2.83M',
      },
      {
        title: 'Private Sale',
        description: '15% Allocation (150M tokens)',
        details: 'TGE 25% (37.5M tokens), Cliff 1 month, 75% linear over 4 months',
      },
      {
        title: 'Public Sale',
        description: '5% Allocation (50M tokens), 100% at TGE',
      },
      {
        title: 'AI Integration',
        description: 'Begin AI-powered analytics and community engagement tools development',
      },
    ],
  },
  {
    title: 'Q2 - Team & Advisors Vesting Starts',
    milestones: [
      {
        title: 'Team Vesting',
        description: '5% Allocation (50M tokens)',
        details: 'Cliff 4 months, linear vesting over 2 years',
      },
      {
        title: 'Advisors Vesting',
        description: '4% Allocation (40M tokens)',
        details: 'Cliff 3 months, linear vesting over 2 years',
      },
      {
        title: 'Market Tracker App',
        description: 'Development and beta launch of real-time token market tracker app',
      },
    ],
  },
  {
    title: 'Q3 - Partners & KOL Vesting Begins',
    milestones: [
      {
        title: 'Partners Vesting',
        description: '3% Allocation (30M tokens)',
        details: '15% TGE, cliff 3 months, 85% linear over 1 year',
      },
      {
        title: 'KOLs Vesting',
        description: '3% Allocation (30M tokens)',
        details: '20% TGE, cliff 6 months, 80% linear over 2 years',
      },
      {
        title: 'Web3 Wallet',
        description: 'Launch of integrated Web3 wallet for token management and transactions',
      },
    ],
  },
  {
    title: 'Q4 - Exchange Listing & Marketing',
    milestones: [
      {
        title: 'Exchange Listing',
        description: '20% Allocation (200M tokens), 100% at listing',
      },
      {
        title: 'Marketing & Community Giveaways',
        description: '18% Allocation (180M tokens)',
        details: 'Cliff 1 month, 100% linear vesting over 1 year',
      },
    ],
  },
  {
    title: 'Q5 - Development & Liquidity',
    milestones: [
      {
        title: 'Development & Ecosystem',
        description: '12% Allocation (120M tokens)',
        details: 'Cliff 3 months, 100% linear vesting over 1 year',
      },
      {
        title: 'Liquidity Pool',
        description: '15% Allocation (150M tokens)',
        details: '20% TGE, cliff 6 months, 80% linear vesting over 2 years',
      },
    ],
  },
];


function MilestoneItem({ milestone, isOpen, onToggle }: { milestone: Milestone; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-green-600">{milestone.title}</h4>
        {milestone.details && (
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            className="flex items-center gap-1 text-green-600 hover:text-green-800 focus:outline-none"
          >
            <InformationCircleIcon className="w-5 h-5" />
            <span>{isOpen ? 'Hide details' : 'Show details'}</span>
          </button>
        )}
      </div>
      <p className="text-green-400 mt-1">{milestone.description}</p>
      {isOpen && milestone.details && (
        <p className="mt-2 text-green-700 bg-green-100 rounded-md p-3 whitespace-pre-wrap">{milestone.details}</p>
      )}
    </div>
  );
}

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState<{ quarter: number; milestone: number } | null>(null);

  const toggleDetails = (quarterIndex: number, milestoneIndex: number) => {
    if (openIndex && openIndex.quarter === quarterIndex && openIndex.milestone === milestoneIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex({ quarter: quarterIndex, milestone: milestoneIndex });
    }
  };

  return (
    <section id='roadmap' className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-green-600 mb-12 text-center">
        SunvilaCoin Token Launch Roadmap
      </h2>

      <div className="space-y-14">
        {quarters.map((quarter, qIdx) => (
          <div key={qIdx}>
            <h3 className="text-2xl font-bold text-green-500 mb-6 border-l-4 border-green-600 pl-4">
              {quarter.title}
            </h3>
            <div className="pl-6 border-l-2 border-green-300">
              {quarter.milestones.map((milestone, mIdx) => (
                <MilestoneItem
                  key={mIdx}
                  milestone={milestone}
                  isOpen={!!openIndex && openIndex.quarter === qIdx && openIndex.milestone === mIdx}
                  onToggle={() => toggleDetails(qIdx, mIdx)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
