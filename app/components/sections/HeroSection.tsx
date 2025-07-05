'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Button from '../ui/Button';

export default function HeroSection() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    // Show content after slight delay to ensure Spline is loading
    const timer = setTimeout(() => setIsContentVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-[70vh] md:h-[75vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-4 px-2 sm:px-6 py-4 max-w-7xl mx-auto relative">
      {/* Loading placeholder */}
      {!isSplineLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Text Content - Only visible after Spline loads */}
      {isContentVisible && (
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={isSplineLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-green-700">
            Empowering{' '}
            <span className="text-white">Smart Villages</span> with{' '}
            <motion.span
              className="text-yellow-500 drop-shadow-md"
              animate={{ textShadow: '0px 0px 8px rgba(255, 221, 0, 0.8)' }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={isSplineLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button label="Buy SVC" href="#buy" />
            <Button label="Get Started" href="/about" />
            <Button label="Learn More" href="#learn" />
          </motion.div>
        </motion.div>
      )}

      {/* Spline 3D model - Priority load */}
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