import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        inline-flex items-center
        px-8 py-4
        rounded-full
        bg-gradient-to-r from-[#c084fc] to-[#a855f7]
        text-white
        font-semibold
        shadow-lg shadow-[#c084fc]/30
        transition-all
        duration-300
        hover:from-[#d8b4fe] hover:to-[#c084fc]
        hover:scale-105
        hover:shadow-xl
        hover:shadow-[#c084fc]/40
        active:scale-100
        ring-2 ring-[#c084fc]/20
        hover:ring-[#c084fc]/40
        ${className}
      `}
    >
      <span className="font-medium">
        {children}
      </span>
      
      <span 
        className="
          ml-2
          w-6 h-6
          rounded-full
          inline-flex items-center justify-center
          bg-white
          transition-colors
          duration-300
          shadow-sm
        "
      >
        <ArrowRight className="h-4 w-4 text-[#c084fc]" />
      </span>

      <span 
        className="
          absolute inset-0
          rounded-full
          ring-offset-2 ring-offset-black/5
          focus-visible:ring-2 focus-visible:ring-[#c084fc]/50
        "
        aria-hidden="true"
      />
    </button>
  );
}