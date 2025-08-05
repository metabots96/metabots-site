import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';

interface HeroContentProps {
  onGetStarted: () => void;
}

export function HeroContent({ onGetStarted }: HeroContentProps) {
  return (
    <div className="relative z-10 py-32 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                <span className="text-white">AI</span>
                <br />
                <span className="text-white">That</span>
                <br />
                <span className="text-purple-300">Delivers.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engage customers effortlessly with AI chatbots.
              <br />
              Automate workflows and stay connected 24/7.
            </motion.p>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button onClick={onGetStarted}>Get Started</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}