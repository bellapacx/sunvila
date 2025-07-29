'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { motion, Variants } from 'framer-motion'

const steps = [
  {
    title: 'Convert Remittances into Investable Capital',
    points: [
      'Diaspora members swap remittance cash for SunvilaCoin-backed investment pools (e.g., EV Taxi Fleets, Solar Farms, Agribusiness, Affordable Housing).',
      'Investments are tokenized as digital assets, ensuring transparency and liquidity.',
      'Practical operations are led by local partners to maintain sustainability.',
      'Local partners must be trusted, legally compliant organizations with a proven track record, strong community presence, and the operational capacity to deliver and scale impact-driven projects. They should align with GDHRP values, practice financial transparency, collaborate openly with diaspora stakeholders, and prioritize sustainability, local empowerment, and effective risk management.'
    ],
  },
  {
    title: 'Dual-Benefit Returns',
    points: [
      'Principal Protection: Investments secured in revenue-generating green projects.',
      'Dividend Sharing:',
     
      '• 30% to diaspora investors for long-term wealth creation.',
'• 25% to diaspora families as startup capital (e.g., EV Taxi, Solar Kiosk, Poultry Farm).',
'• 30% allocated to Sunvila for program operations and scaling.',
'• 15% retained as investment reserve for future development and projects.'
    ],
  },
  {
    title: 'Smart Contract Automation',
    points: [
      'Self-executing agreements ensure fair profit distribution.',
      'Relatives receive micro-grants or microloans (tracked on-chain).',
    ],
  },
]

// 👇 Explicit typing to support `custom`
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function HowGDHRPWorks() {
  return (
    <section id="how-gdhrp-works" className="py-20 bg-gradient-to-b from-green-500 to-green-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-900 text-center mb-16">How GDHRP Works</h2>
        <div className="relative border-l-4 border-green-200 pl-6 space-y-16">
          {steps.map(({ title, points }, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={idx}
              className="relative"
            >
              <div className="absolute -left-4 top-1 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center shadow-md">
                <CheckCircleIcon className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-green-100">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">{title}</h3>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  {points.map((point, i) => (
                    <li key={i} className={point.startsWith('•') ? 'ml-4 list-none' : ''}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
