import React from 'react';
import { Bot, Phone } from 'lucide-react';
import { ComingSoonBanner } from './ComingSoonBanner';
import { GradientBackground } from './backgrounds/GradientBackground';
import { SectionTransition } from './transitions/SectionTransition';

const services = [
  {
    title: 'Voice Agents',
    description: 'AI-powered voice assistants for seamless communication',
    icon: Phone,
  },
  {
    title: 'Chatbot Development',
    description: 'Intelligent conversational AI for customer support',
    icon: Bot,
  },
];

export function Services() {
  return (
    <div id="services" className="relative bg-black">
      {/* Black gradient at the top */}
      <SectionTransition direction="top" />

      <GradientBackground
        glowConfig={{
          width: '800px',
          height: '400px',
          opacity: '0.3',
          blur: '120px'
        }}
      >
        <div className="relative z-20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">Our Services</h2>
              <p className="mt-4 text-xl text-gray-300">Comprehensive AI solutions for modern businesses</p>
            </div>

            <div className="mt-20 flex justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-3xl">
                {services.map((service) => (
                  <div 
                    key={service.title} 
                    className="relative flex flex-col items-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-[#c084fc]/50 transition-all duration-300"
                  >
                    {service.comingSoon && <ComingSoonBanner />}
                    <service.icon className="h-12 w-12 text-[#c084fc]" />
                    <h3 className="mt-4 text-lg font-medium text-white">{service.title}</h3>
                    <p className="mt-2 text-base text-gray-300 text-center">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Bottom transition to next section */}
      <SectionTransition direction="bottom" />
    </div>
  );
}