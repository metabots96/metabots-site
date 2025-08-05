import React from 'react';
import { aboutStats } from './aboutData';

export function AboutStats() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-3xl mx-auto">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-[#c084fc]">{stat.value}</div>
              <div className="mt-2 text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}