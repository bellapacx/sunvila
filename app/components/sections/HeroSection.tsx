'use client';

import { useEffect } from 'react';
import Button from '../ui/Button';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.22/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-between gap-12 px-4 sm:px-6 py-16 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-700 leading-tight">
          Empowering <span className="text-white">Smart Villages</span> with{' '}
          <span className="text-yellow-600">SunvilaCoin</span>
        </h1>
        <p className="text-gray-300 mb-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          A next-generation eco token for transforming communities through innovation,
          technology, and decentralized finance.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
          <Button label="Buy SVC" href="#buy" />
          <Button label="Get Started" href="/about" />
          <Button label="Learn More" href="#learn" />
        </div>
      </div>

      {/* Spline 3D model - visible on all screens, under text on mobile */}
      <div className="flex-1 w-full max-w-md h-[300px]">
        <Spline scene="https://prod.spline.design/Yz51Yqd9ktGyqB1D/scene.splinecode" />
      </div>
    </section>
  );
}
