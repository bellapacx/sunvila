'use client'

import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Remittance Swap Portal',
    description: 'Fiat-to-SunvilaCoin gateway with under 1% fees (vs traditional 5–12%).',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Project Marketplace',
    description: 'Investors choose ventures like "Invest $1K in a Nigeria Solar Co-op".',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Impact Tracking',
    description: 'Real-time ROI reports showing financial and social impact.',
    icon: ChartBarIcon,
  },
  {
    title: 'DAO Governance',
    description: 'Key Diaspora investors vote on new projects and platform direction.',
    icon: UsersIcon,
  },
]

export default function KeyFeatures() {
  return (
    <section id="key-features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-12">Key Features</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-green-200 hover:shadow-lg hover:shadow-green-300 transition cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-green-100 mx-auto">
                <Icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
              <p className="text-green-700 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
