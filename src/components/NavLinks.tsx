import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function NavLinks() {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home with state
      navigate('/', { state: { scrollTo: 'pricing' } });
    } else {
      // If we're already on the home page, just scroll
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home with state
      navigate('/', { state: { scrollTo: 'book-demo' } });
    } else {
      // If we're already on the home page, just scroll
      const contactSection = document.getElementById('book-demo');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <>
      <Link 
        to="/about"
        className="text-white hover:text-purple-300 transition-colors"
      >
        About Us
      </Link>
      <a 
        href="#pricing"
        onClick={handlePricingClick}
        className="text-white hover:text-purple-300 transition-colors cursor-pointer"
      >
        Pricing
      </a>
      <Link 
        to="/contact"
        className="text-white hover:text-purple-300 transition-colors"
      >
        Contact Us
      </Link>
    </>
  );
}