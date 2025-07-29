'use client';

import { motion, Variants } from 'framer-motion';
import { LightBulbIcon, SparklesIcon } from '@heroicons/react/24/solid';

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

const iconHover = {
  rest: { scale: 1 },
  hover: { scale: 1.2, color: '#22c55e' }, // green-500
};

export default function GdhrpSolution() {
  return (
    <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-16 px-6 sm:px-12 w-full text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-tr from-green-800 via-green-900 to-green-950 opacity-20 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto"
      >
        {/* Left Content */}
        <motion.div variants={fadeSlideLeft} className="flex-1 space-y-6 pl-0 lg:pl-10">
          <motion.h2 
            className="text-3xl font-extrabold bg-gradient-to-r from-green-300 via-green-400 to-green-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          >
            The GDHRP Solution
          </motion.h2>
          <motion.p className="text-lg text-green-200 max-w-lg" variants={fadeUp}>
            SunvilaCoin’s Global Diaspora Homeland Reconnection Program (GDHRP)
            transforms traditional remittances into community-building capital —
            empowering both diaspora investors and families back home.
          </motion.p>

          <motion.div className="space-y-6" variants={containerVariants}>
            {/* Tokenized Investment */}
            <motion.div 
              className="flex items-start gap-4" 
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div variants={iconHover} className="text-green-400 cursor-pointer">
                <LightBulbIcon className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-green-100">Tokenized Sustainable Investment</h3>
                <p className="text-green-300 max-w-md">
                  Diaspora funds are pooled, tokenized, and transparently allocated to eco-friendly smart village projects.
                </p>
              </div>
            </motion.div>

            {/* Shared Growth Model */}
            <motion.div 
              className="flex items-start gap-4" 
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div variants={iconHover} className="text-green-400 cursor-pointer">
                <SparklesIcon className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-green-100">Shared Growth, Shared Prosperity</h3>
                <p className="text-green-300 max-w-md">
                  Families earn from ventures like farming, solar, and green housing; diaspora investors receive passive returns while uplifting their communities.
                </p>
              </div>
            </motion.div>

            {/* Diaspora Coming Home */}
            <motion.div 
              className="flex items-start gap-4" 
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div variants={iconHover} className="text-green-400 cursor-pointer">
                <LightBulbIcon className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-green-100">Diaspora Coming Home</h3>
                <p className="text-green-300 max-w-md">
                  GDHRP incentivizes skilled diaspora professionals to return, reinvest, and build a legacy through meaningful local impact.
                </p>
              </div>
            </motion.div>

            {/* Youth & Local Development */}
            <motion.div 
              className="flex items-start gap-4" 
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div variants={iconHover} className="text-green-400 cursor-pointer">
                <SparklesIcon className="w-10 h-10" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-green-100">Empowering the New Generation</h3>
                <p className="text-green-300 max-w-md">
                  By addressing the void in local community development, GDHRP helps youth see opportunity, pride, and purpose at home.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Graphic/Illustration */}
        <motion.div
          variants={scaleFadeIn}
          whileHover="hover"
          className="flex-1 flex justify-center"
        >
          <div className="w-full max-w-md h-64 bg-green-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center text-green-100 cursor-pointer select-none">
            <p className="text-2xl mb-2 font-semibold">Remittances ➜ Smart Villages</p>
            <p className="text-xl text-green-200 max-w-xs">
              A circular model of wealth creation and empowerment
            </p>
            <div className="mt-4 text-green-400 text-xl font-medium">
              Tokenized Capital → Real Projects → Shared Returns
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
