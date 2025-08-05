import React from 'react';
import { aboutValues } from './aboutData';

export function AboutValues() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white">Our Values</h2>
          <p className="mt-4 text-xl text-gray-300">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value) => (
            <div key={value.title} className="relative flex flex-col items-center p-6 bg-gray-900/30 rounded-lg border border-gray-800">
              <value.icon className="h-12 w-12 text-[#c084fc]" />
              <h3 className="mt-4 text-lg font-medium text-white">{value.title}</h3>
              <p className="mt-2 text-base text-gray-300 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}