'use client';

import { PieChart } from 'react-minimal-pie-chart';
import { motion } from 'framer-motion';

const allocations = [
  { category: 'Private Sale', percentage: 15, color: '#16a34a' },
  { category: 'Public Sale', percentage: 5, color: '#4ade80' },
  { category: 'Team', percentage: 5, color: '#22c55e' },
  { category: 'Advisors', percentage: 4, color: '#86efac' },
  { category: 'Partners', percentage: 3, color: '#34d399' },
  { category: 'KOLs', percentage: 3, color: '#6ee7b7' },
  { category: 'Exchanges', percentage: 20, color: '#10b981' },
  { category: 'Marketing / Community', percentage: 18, color: '#059669' },
  { category: 'Development / Ecosystem', percentage: 12, color: '#047857' },
  { category: 'Liquidity', percentage: 15, color: '#065f46' },
];

const totalTokens = 1_000_000_000;

export default function Tokenomics() {
  return (
    <section className="relative w-full px-8 py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-900
         max-w-7xl mx-auto
        shadow-2xl
        before:absolute before:inset-0 before:rounded-3xl before:-z-10
        before:shadow-[0_0_20px_6px_rgba(16,185,129,0.8)]
        before:animate-pulse">
      <motion.h2
        className="text-5xl font-extrabold text-white text-center mb-16 tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        SunvilaCoin Tokenomics
      </motion.h2>

      {/* Stats Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
      >
        {[
          { label: 'Total Supply', value: '1,000,000,000 SVC' },
          { label: 'Circulating Supply', value: '283,000,000 SVC' },
          { label: 'Market Cap', value: '$2,830,000' },
          { label: 'Fully Diluted Market Cap', value: '$10,000,000' },
        ].map(({ label, value }) => (
          <motion.div
            key={label}
            className="bg-green-800 bg-opacity-40 rounded-xl p-6 shadow-lg border border-green-700 hover:bg-green-700 hover:bg-opacity-70 transition-colors"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-lg font-semibold text-green-300 tracking-wide">{label}</h3>
            <p className="text-2xl font-mono text-white mt-2 select-text">{value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pie Chart & Cards */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Animated Pie Chart */}
        <motion.div
  className="max-w-sm mx-auto bg-green-800 bg-opacity-40 rounded-3xl p-8 shadow-2xl"
  initial={{ scale: 0.85, opacity: 0 }}
  whileInView={{ scale: 1.5, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <PieChart
    data={allocations.map(({ category, percentage, color }) => ({
      title: category,
      value: percentage,
      color,
    }))}
    animate
    lineWidth={40}
    paddingAngle={4}
    radius={45}
    label={({ dataEntry }) =>
      dataEntry.percentage > 5 ? `${Math.round(dataEntry.percentage)}%` : ''
    }
    labelStyle={{
      fontSize: '5px',
      fontWeight: '700',
      fill: '#d1fae5',
      textShadow: '0 0 4px rgba(0,0,0,0.3)',
    }}
    labelPosition={75}
    // show connector lines for clarity
  />
</motion.div>


        {/* Token Allocation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {allocations.map(({ category, percentage, color }) => (
            <motion.div
              key={category}
              className="bg-green-800 bg-opacity-30 rounded-xl border border-green-600 p-6 shadow-md hover:shadow-lg transition-shadow cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              title={`${category}: ${(totalTokens * (percentage / 100)).toLocaleString()} SVC`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-5 h-5 rounded-full border-2 border-green-400"
                  style={{ backgroundColor: color }}
                />
                <h4 className="text-white font-semibold text-lg tracking-wide">{category}</h4>
              </div>
              <p className="text-green-200 font-mono mt-3 text-xl select-text">
                {(totalTokens * (percentage / 100)).toLocaleString()} SVC
              </p>
              <p className="text-green-300 mt-1 text-sm">{percentage}% of supply</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
