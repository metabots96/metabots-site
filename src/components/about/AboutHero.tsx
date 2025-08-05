import React from 'react';
import { SectionTransition } from '../transitions/SectionTransition';

export function AboutHero() {
  return (
    <div className="relative">
      {/* Top transition */}
      <SectionTransition 
        direction="top" 
        startColor="#000000"
        height="200px"
      />

      <div className="relative py-20 sm:py-24">
        {/* Purple blur and grid background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Purple glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[1200px] h-[800px] 
              bg-[#c084fc] opacity-30 
              blur-[140px] rounded-full"
          />

          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(192, 132, 252, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(192, 132, 252, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '2rem 2rem'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Transforming Business
            <span className="block text-[#c084fc]">Through AI Innovation</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            We're on a mission to make artificial intelligence accessible, practical, and transformative for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Bottom transition */}
      <SectionTransition 
        direction="bottom" 
        startColor="#000000"
        height="200px"
      />
    </div>
  );
}