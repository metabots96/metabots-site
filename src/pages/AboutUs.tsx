import React from 'react';
import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStats } from '../components/about/AboutStats';
import { AboutValues } from '../components/about/AboutValues';

export function AboutUs() {
  return (
    <Background>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <AboutHero />
          <AboutStats />
          <AboutValues />
        </main>
        <Footer />
      </div>
    </Background>
  );
}