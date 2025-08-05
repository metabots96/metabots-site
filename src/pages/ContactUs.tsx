import React from 'react';
import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactUs() {
  return (
    <Background>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <div className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                Get in Touch
                <span className="block text-[#c084fc]">We're Here to Help</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Column - Calendly */}
                <div className="bg-[#c084fc] rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Book a Free Consultation for Custom AI Solutions
                  </h2>
                  
                  {/* Calendly Embed */}
                  <div className="bg-white rounded-lg overflow-hidden">
                    <iframe
                      src="https://calendly.com/sandor-metabots"
                      width="100%"
                      height="600"
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

                {/* Right Column - Contact Form */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Contact now to unlock your potential with personalized AI solutions tailored just for you.
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Your Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Write Message*
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc] focus:outline-none resize-none"
                        placeholder="Write Message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#c084fc] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#c084fc]/90 transition-colors duration-200"
                    >
                      SEND MESSAGE →
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#c084fc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-[#c084fc]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <a href="mailto:sandor@metabots.ai" className="text-gray-300 hover:text-[#c084fc] transition-colors">
                      sandor@metabots.ai
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#c084fc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-[#c084fc]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-[#c084fc] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#c084fc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-[#c084fc]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">
                      123 AI Street<br />
                      Tech Valley, CA 94043
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Background>
  );
}