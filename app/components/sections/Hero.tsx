'use client';

import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { GridBackground } from '../ui/Gridbackground'; // adjust path as needed

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-5xl text-center space-y-6">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-green-800 dark:text-green-400">
  SunvilaCoin — Empowering Communities through the Global Diaspora Homeland Reconnection Program (GDHRP)
</h1>

<div className="bg-green-600 dark:bg-green-800/30 rounded-lg p-4 md:p-6 shadow-md max-w-3xl mx-auto">
  <p className="text-base md:text-lg font-semibold text-green-950 dark:text-green-100 leading-relaxed text-center">
    We transform global remittances into tokenized sustainable investments via <span className="font-bold text-green-900 dark:text-green-300">SunvilaCoin</span>, empowering diaspora investors and families with passive income, green jobs, and smart village growth—breaking dependency cycles and reducing illegal immigration through economic independence.
  </p>
</div>


        <div className="flex justify-center gap-4 pt-4">
          <Button className="shadow-lg" variant="solid">
            Join the Mission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button className="" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
