// app/components/sections/CallToAction.tsx
"use client";

import React from "react";
import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Join the Sunvila Revolution</h2>
        <p className="text-lg mb-8 text-white/90">
          Be part of a transformative smart village economy. Buy $SVC, contribute to change,
          and shape the future with us.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button label="Buy SVC" href="#buy" />
          <Button label="Learn More" href="#learn" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
