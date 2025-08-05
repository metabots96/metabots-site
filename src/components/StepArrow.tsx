import React from 'react';
import { ArrowRight } from 'lucide-react';

export function StepArrow() {
  return (
    <div className="hidden md:flex items-center justify-center w-12">
      <ArrowRight className="w-5 h-5 text-[#c084fc]" />
    </div>
  );
}