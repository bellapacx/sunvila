'use client'

import {GlobeAltIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'

const phases = [
  {
    title: 'Phase 1: African Diaspora',
    icon: <GlobeAltIcon className="w-10 h-10 text-orange-400" />,
    description:
      'We begin by targeting African diaspora communities in the US, Europe, and the Middle East, where remittance flows are high and the need for local investment is urgent.',
  },
  {
    title: 'Phase 2: Latin America & Caribbean',
    icon: <GlobeEuropeAfricaIcon className="w-10 h-10 text-orange-400" />,
    description:
      'Expansion into Latin American and Caribbean remittance corridors to empower local economies with tokenized green investments.',
  },
  {
    title: 'Phase 3: Asia & Global',
    icon: <GlobeAsiaAustraliaIcon className="w-10 h-10 text-orange-400" />,
    description:
      'Full global rollout connecting diaspora capital to sustainable development projects in Asia, Pacific Islands, and other underserved communities.',
  },
]

export default function PhasedRollout() {
  return (
    <section className="bg-green-700 py-20 px-6 sm:px-12 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-green-100">Phased Global Rollout</h2>
        <p className="text-center text-lg text-green-100 max-w-3xl mx-auto">
          We’re deploying the GDHRP in carefully designed phases, ensuring local impact, operational focus, and measurable growth across remittance-receiving regions.
        </p>

        <div className="grid gap-8 md:grid-cols-3 pt-10">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{phase.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">{phase.title}</h3>
              <p className="text-gray-600 mt-2">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
