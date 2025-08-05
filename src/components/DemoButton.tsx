import React from 'react';

export function DemoButton() {
  const scrollToDemo = () => {
    const demoSection = document.querySelector('#book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToDemo}
      className="inline-flex items-center px-8 py-4 rounded-full bg-[#c084fc] text-white hover:bg-[#c084fc]/90"
    >
      Get A Demo
    </button>
  );
}