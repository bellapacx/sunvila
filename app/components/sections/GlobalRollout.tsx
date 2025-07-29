'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const rolloutPhases = [
  {
  id: 1,
  title: 'Africa Diaspora Homeland Reconnection Program',
  description:
    'Launching pilot projects across African remittance corridors by integrating local partners to establish foundational investments and local entrepreneurship.',
},
{
  id: 2,
  title: 'Asian Diaspora Homeland Reconnection Program',
  description:
  'Expanding to Asia — including China, India, and Pakistan — by working with local partners and regulatory frameworks.',

},
{
  id: 3,
  title: 'Latino Diaspora Homeland Reconnection Program',
  description:
    'Targeting Latin American communities with tokenized investments and strategic integration of local partners for sustainable development.',
},
{
  id: 4,
  title: 'Middle East Diaspora Homeland Reconnection Program',
  description:
    'Integrating local partners to adapt green projects within Middle Eastern financial ecosystems.',
},
{
  id: 5,
  title: 'Europe & USA Diaspora Investment Program',
  description:
    'Engaging western diaspora for impact investments with transparent ROI, in collaboration with local partners.',
},
{
  id: 6,
  title: 'Rest of the World Diaspora Homeland Reconnection Program',
  description:
    'Covering remaining global communities with smart village initiatives that involve and empower local partners.',
},
{
  id: 7,
  title: 'Empowering Communities to Live Proudly in Smart Villages',
  description:
    'Driving the fight against illegal immigration and human trafficking through sustainable local economies, enabled by strong partnerships with local actors.',
}

]

export default function GlobalRollout() {
  const [openPhase, setOpenPhase] = useState<number | null>(null)

  const togglePhase = (id: number) => {
    setOpenPhase(openPhase === id ? null : id)
  }

  return (
    <section className="bg-gradient-to-b from-green-900 to-green-800 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Global Rollout & Scalability</h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {rolloutPhases.map(({ id, title, description }) => {
          const isOpen = openPhase === id

          return (
            <motion.div
              key={id}
              layout
              initial={{ borderRadius: 16 }}
              className="bg-green-950/50 backdrop-blur-sm border border-green-700 rounded-2xl"
            >
              <button
                onClick={() => togglePhase(id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-800/30 transition rounded-2xl"
              >
                <span className="text-lg sm:text-xl font-semibold">{`Phase ${id}: ${title}`}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-6 h-6 text-green-300" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden px-6 pb-5"
                  >
                    <p className="text-green-300">{description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
