import React from 'react';
import { Loader2 } from 'lucide-react';

export function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <Loader2 className="w-8 h-8 text-[#c084fc] animate-spin" />
    </div>
  );
}