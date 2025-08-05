import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu } from 'lucide-react';

export function NavLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <div className="relative">
            <Cpu className="w-8 h-8 text-[#c084fc]" />
            <Bot className="w-4 h-4 text-white absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" />
          </div>
          <div className="ml-2">
            <span className="text-2xl font-bold text-white logo-font">
              meta<span className="text-[#c084fc]">bots</span>
            </span>
          </div>
        </div>
        <span className="text-xs text-white/50 uppercase tracking-wider ml-10 logo-font">
          AI Technology
        </span>
      </div>
    </Link>
  );
}