import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Steps } from '../components/Steps';
import { Pricing } from '../components/Pricing';
import { BookDemo } from '../components/BookDemo';
import { Footer } from '../components/Footer';
import { SectionTransition } from '../components/transitions/SectionTransition';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <Background>
      <div className="min-h-screen">
        <Navbar />
        <main className="relative">
          <Hero />
          
          <div className="relative bg-black">
            <Services />
            <Steps />
            <Pricing />
            <BookDemo />
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
}