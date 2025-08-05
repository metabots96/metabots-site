import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const benefits = [
  {
    icon: Calendar,
    title: 'Quick Setup',
    description: 'Schedule a demo and get started within days, not weeks.',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'See how our AI solutions can save your practice hours every day.',
  },
  {
    icon: Video,
    title: 'Live Demo',
    description: 'Get a personalized walkthrough of features tailored to your needs.',
  },
];

export function BookDemo() {
  return (
    <div id="book-demo" className="relative py-24 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-6">
              See Our AI in Action
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Book a personalized demo to discover how our AI solutions can transform your practice's efficiency and patient care.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Calendly */}
          <div className="bg-[#c084fc] rounded-2xl p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6">
              Book a Free Consultation
            </h3>
            
            {/* Calendly Embed */}
            <div className="bg-white rounded-lg overflow-hidden flex-1">
              <iframe
                src="https://calendly.com/sandor-metabots"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="mt-6 text-white">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-sm">30 min</span>
              </div>
              <div className="text-sm opacity-90">
                <p className="mb-2">Web conferencing details provided upon confirmation.</p>
                <ul className="space-y-1 text-xs">
                  <li>• A tailored discussion about your business goals and challenges</li>
                  <li>• A demonstration of how our AI solutions can elevate your customer service and lead capture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us an Email
            </h3>
            <form className="space-y-6 flex-1 flex flex-col">
              <div className="flex-1 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white">
                  Name of the company
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c084fc] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#c084fc]/90 transition-colors duration-200 mt-auto"
              >
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}