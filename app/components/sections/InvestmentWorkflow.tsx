'use client'

import {
  CurrencyDollarIcon,
  ArrowPathIcon,
  SparklesIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { motion, Variants } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Send $500 via GDHRP',
    description: 'Diaspora user sends funds using the GDHRP platform.',
    icon: CurrencyDollarIcon,
  },
  {
    number: 2,
    title: 'Convert to SunvilaCoin',
    description:
      'Remittance cash is swapped for SunvilaCoin-backed investment pools.',
    icon: ArrowPathIcon,
  },
  {
    number: 3,
    title: 'Invest in Solar Farm',
    description:
      'Funds go into tokenized equity in renewable energy projects.',
    icon: SparklesIcon,
  },
  {
    number: 4,
    title: 'Receive Profits (Split)',
    description:
      'Annual profits are divided: 50% to investor, 50% to family startup capital.',
    icon: HandRaisedIcon,
  },
  {
    number: 5,
    title: 'Family Launches Business',
    description:
      'Relatives use seed capital to start sustainable local businesses.',
    icon: UserGroupIcon,
  },
]

// Variants without function in 'visible'
const fadeUpStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function InvestmentWorkflow() {
  return (
    <section className="relative bg-gradient-to-b from-green-500 to-green-800 py-20 px-6 w-full">
      <h2 className="text-4xl font-extrabold text-green-200 mb-16 text-center">
        Investment Workflow
      </h2>

      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-10 w-1 bg-green-700 hidden md:block z-0 pl-0 lg:pl-10" />
      <div className="absolute top-16 left-[30px] bottom-0 w-1 bg-green-100 md:hidden z-0 " />

      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-16 md:gap-4 relative z-10 pl-0 lg:pl-10">
        {steps.map(({ number, title, description, icon: Icon }, i) => (
          <motion.div
            key={number}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpStaggerVariants}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="relative flex-1 min-w-[220px] text-center md:text-left group hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Circle Number */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-lg shadow-lg mx-auto md:mx-0 mb-4 relative z-20">
              {number}
            </div>

            {/* Vertical line (mobile) */}
            {i < steps.length - 1 && (
              <div className="absolute w-1 h-full bg-green-100 top-12 left-[50%] transform -translate-x-1/2 md:hidden z-0" />
            )}

            {/* Icon */}
            <div className="flex justify-center md:justify-start mb-3">
              <Icon className="w-10 h-10 text-green-500 drop-shadow-lg group-hover:text-green-600 transition-colors duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-300 mb-2 group-hover:text-green-900 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-green-400 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
