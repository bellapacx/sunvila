'use client';

import dynamic from 'next/dynamic';
import Button from '../ui/Button';

const Token3D = dynamic(() => import('../ui/Token3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-16 max-w-7xl mx-auto">
      {/* Left Side - Text */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-6 text-green-700 leading-tight">
          Empowering <span className="text-white">Smart Villages</span> with <span className="text-yellow-600">SunvilaCoin</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          A next-generation eco token for transforming communities through innovation, technology, and decentralized finance.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Button label="Buy SVC" href="#buy" />
          <Button label="Get Started" href="/about" />
          <Button label="Learn More" href="#learn" />
        </div>
      </div>

      {/* Right Side - 3D Coin (Hidden on Mobile) */}
      <div className="flex-1 h-[300px] hidden lg:block">
        <Token3D />
      </div>
    </section>
  );
}
