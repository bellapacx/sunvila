'use client'

import { useState } from 'react'
import {
  UserGroupIcon,
  HomeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const stakeholders = [
  {
    key: 'diaspora',
    title: 'Diaspora Investors',
    icon: UserGroupIcon,
    benefits: [
      'Preserve wealth vs. vanishing remittance cash.',
      'Earn yield from homeland green economy growth.',
    ],
  },
  {
    key: 'families',
    title: 'Local Families',
    icon: HomeIcon,
    benefits: [
      'Shift from handouts to self-employment.',
      'Receive tools, training, and seed funding.',
    ],
  },
  {
    key: 'homelands',
    title: 'Homeland Nations',
    icon: GlobeAltIcon,
    benefits: [
      'Reduce poverty-driven migration.',
      'Boost circular economy with local production and diaspora capital.',
    ],
  },
]

export default function BenefitsByStakeholder() {
  const [active, setActive] = useState('diaspora')

  return (
    <section id="benefits" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 text-center">
          Benefits by Stakeholder
        </h2>

        {/* Tabs for small screens */}
        <div className="flex justify-center gap-6 mb-12 lg:hidden">
          {stakeholders.map(({ key, title }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                active === key
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-green-700 border border-green-300 hover:bg-green-100'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          {stakeholders.map(({ key, title, icon: Icon, benefits }) => (
            <div
              key={key}
              className={`p-6 rounded-xl shadow-lg bg-white ${
                active === key ? 'block' : 'hidden lg:block'
              }`}
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-green-800">{title}</h3>
              </div>
              <ul className="list-disc list-inside text-green-700 space-y-2">
                {benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile content below tabs */}
        <div className="lg:hidden">
          {stakeholders
            .filter(({ key }) => key === active)
            .map(({ key, title, icon: Icon, benefits }) => (
              <div key={key} className="p-6 rounded-xl shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-green-800">{title}</h3>
                </div>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  {benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
