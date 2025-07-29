'use client';

import { motion, Variants } from 'framer-motion';
import {
  BanknotesIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { BackgroundBeams } from '../ui/background-beams';

// Parent container variants for staggering children
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Fade + slide up variant for children
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Bounce/scale effect on list items hover
const listItemVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

// Icon hover scale effect
const iconHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};

// Right stat box animation variants
const statBoxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

type ProblemPointProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
};

const ProblemPoint = ({ Icon, title, items }: ProblemPointProps) => (
  <motion.div
    variants={fadeInUpVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="flex items-start gap-4 group"
  >
    <motion.div
      variants={iconHoverVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="cursor-pointer"
    >
      <Icon className="w-10 h-10 text-green-400 drop-shadow-lg" />
    </motion.div>
    <div>
      <motion.h3
        variants={fadeInUpVariants}
        className="text-xl font-semibold text-green-100"
      >
        {title}
      </motion.h3>
      <ul className="list-disc list-inside mt-2 text-green-300 space-y-1">
        {items.map((text, idx) => (
          <motion.li
            key={idx}
            variants={listItemVariants}
            initial="rest"
            whileHover="hover"
            className="cursor-pointer"
          >
            {text}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function ProblemWithRemittances() {
  return (
    <section className="relative bg-green-950 py-20 px-6 sm:px-12 text-white overflow-hidden min-h-[400px] sm:min-h-[600px]">
      {/* Background Beams */}
      <BackgroundBeams className="z-0" />

      {/* Glow Background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-500 rounded-full blur-3xl opacity-30 z-10" />

      <div className="max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left: Problems List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-12"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl font-bold text-green-100"
          >
            The Problem with Traditional Remittances
          </motion.h2>

          <ProblemPoint
            Icon={BanknotesIcon}
            title="Wasted Capital"
            items={[
              "$800B+ flows annually in global remittances, yet over 90% is consumed, not invested.",
              "Families remain trapped in aid dependency, lacking sustainable income sources.",
              "High transfer fees (5–12%) drain disposable income.",
              "Scamming Issue"
              ,
            ]}
          />

          <ProblemPoint
            Icon={ArrowDownTrayIcon}
            title="Missed Opportunities"
            items={[
              "No structured way for diaspora members to invest in their homelands.",
              "Local economies lack patient capital for green infrastructure and entrepreneurship.",
            ]}
          />
        </motion.div>

        {/* Right: Stat Box */}
        <motion.div
          variants={statBoxVariants}
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 flex justify-center cursor-pointer"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-tr from-green-600/10 via-green-500/10 to-transparent border border-green-700" />
            <div className="relative z-10 h-64 bg-green-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-green-100 p-6 border border-green-700">
              <p className="text-xl uppercase tracking-wide text-green-300 mb-2">
                Global Remittance Flow
              </p>
              <p className="text-5xl font-bold text-white mb-2">$800B+</p>
              <p className="text-green-200 mb-4">Annual Global Remittances</p>
              <p className="text-lg text-green-100 text-center">
                Over 90% is consumed — not invested.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
