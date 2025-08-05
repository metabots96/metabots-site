import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Book a Demo', href: '#book-demo' },
    { name: 'Portfolio', href: '#portfolio' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: 'X' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: '</>' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white">Onnix</span>
            <p className="text-gray-400 text-sm">
              Transforming businesses with powerful AI solutions. Build smarter, faster, and more efficient systems.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <span className="text-sm font-semibold">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group flex items-center text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="mailto:contact@onnix.ai" className="text-gray-300 hover:text-white transition-colors">
                    contact@onnix.ai
                  </a>
                </li>
                <li>
                  <span className="text-gray-300">
                    123 AI Street<br />
                    Tech Valley, CA 94043
                  </span>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Onnix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}