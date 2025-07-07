'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';
import Button from '../ui/Button';

export default function HeroSection() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-100px' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (inView && isSplineLoaded) {
      controls.start('visible');
    }
  }, [inView, isSplineLoaded, controls]);

  const containerVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="h-[70vh] md:h-[75vh] bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col-reverse lg:flex-row items-center justify-center gap-4 px-2 sm:px-6 py-4 max-w-8xl mx-auto relative overflow-hidden"
    >
      {/* Loading spinner */}
      {!isSplineLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Left Text */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-green-700">
          Empowering{' '}
          <span className="text-white">Smart Villages</span> with{' '}
          <motion.span
            className="text-yellow-500 drop-shadow-md"
            animate={{
              textShadow: '0px 0px 8px rgba(255, 221, 0, 0.8)',
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            SunvilaCoin
          </motion.span>
        </h1>

        <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
          A next-generation eco token for transforming communities through innovation,
          technology, and decentralized finance.
        </p>

        <motion.div
          className="flex justify-center lg:justify-start gap-3 flex-wrap"
          variants={buttonsVariants}
          initial="hidden"
          animate={controls}
        >
          <Button label="Buy SVC" href="#buy" />
          <Button label="Get Started" href="/about" />
          <Button label="Learn More" href="#learn" />
        </motion.div>
      </motion.div>

      {/* Right 3D model */}
      <motion.div
        className="flex-1 w-full max-w-md h-[160px] sm:h-[200px] md:h-[240px] lg:h-[300px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isSplineLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <Spline
          scene="https://prod.spline.design/Yz51Yqd9ktGyqB1D/scene.splinecode"
          onLoad={() => setIsSplineLoaded(true)}
        />
      </motion.div>
    </section>
  );
}
