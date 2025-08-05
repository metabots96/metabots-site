import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { DemoButton } from './DemoButton';

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-full border border-white/10 px-6">
          <div className="flex justify-between h-16 items-center">
            <NavLogo />
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <DemoButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}