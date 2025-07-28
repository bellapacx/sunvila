'use client';

import { motion } from 'framer-motion';

interface TokenAllocation {
  category: string;
  percentage: number;
  tokens: number;
  description?: string;
}

const allocations: TokenAllocation[] = [
  { category: 'Private Sale', percentage: 15, tokens: 150_000_000 },
  { category: 'Public Sale', percentage: 5, tokens: 50_000_000 },
  { category: 'Team', percentage: 5, tokens: 50_000_000 },
  { category: 'Advisors', percentage: 4, tokens: 40_000_000 },
  { category: 'Partners', percentage: 3, tokens: 30_000_000 },
  { category: 'KOLs', percentage: 3, tokens: 30_000_000 },
  { category: 'Exchanges', percentage: 20, tokens: 200_000_000 },
  { category: 'Marketing / Community', percentage: 18, tokens: 180_000_000 },
  { category: 'Development / Ecosystem', percentage: 12, tokens: 120_000_000 },
  { category: 'Liquidity', percentage: 15, tokens: 150_000_000 },
];

// Helper for circular progress stroke dashoffset calculation
const circleRadius = 40;
const circleCircumference = 2 * Math.PI * circleRadius;

export default function Tokenomics() {
  return (
    <section className="relative w-full px-6 py-20 bg-gradient-to-b from-green-700 to-green-900 shadow-xl">
      <h2 className="text-4xl font-extrabold text-green-500 mb-12 text-center drop-shadow-sm">
        SunvilaCoin Tokenomics
      </h2>

      {/* Supply Info */}
      <div className="flex flex-wrap justify-center gap-10 mb-16 text-center text-green-800">
        {[
          { label: 'Total Supply', value: '1,000,000,000 SVC' },
          { label: 'Circulating Supply', value: '283,000,000 SVC' },
          { label: 'Market Cap', value: '$2,830,000' },
          { label: 'Fully Diluted Market Cap', value: '$10,000,000' },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center min-w-[150px] p-4 bg-white rounded-xl shadow-md border border-green-200"
          >
            <h3 className="text-xl font-semibold mb-1">{label}</h3>
            <p className="font-mono text-lg text-green-700">{value}</p>
          </div>
        ))}
      </div>

      {/* Token Allocation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pl-0 lg:p-30">
        {allocations.map(({ category, percentage, tokens }) => {
          const strokeDashoffset =
            circleCircumference - (circleCircumference * percentage) / 100;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-green-300 rounded-xl shadow-lg border border-green-200 p-6 flex flex-col items-center text-center group hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Circular progress bar */}
              <svg
                className="mb-6"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={circleRadius}
                  stroke="#d1fae5"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={circleRadius}
                  stroke="#16a34a"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.6s ease-out' }}
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-green-900 font-bold text-xl select-none"
                >
                  {percentage}%
                </text>
              </svg>

              {/* Category */}
              <h4 className="text-lg font-semibold text-green-900 mb-2 group-hover:text-green-800 transition-colors">
                {category}
              </h4>

              {/* Tokens */}
              <p className="font-mono text-green-700 text-lg mb-1">
                {tokens.toLocaleString()} SVC
              </p>

              {/* Percentage label */}
              <p className="text-green-600 text-sm select-none">
                of total supply
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
