'use client';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <Hero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Contact Section - First section to overlay hero */}
        <div className="relative z-10 bg-[#fff]">
          <ContactUsSection />
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}

function ContactUsSection() {
  return (
    <section 
      className="relative py-20 min-h-screen flex items-center px-10 mx-auto"
      style={{ width: '1570px' }}
    >
      <div className="w-full">
        <div className="relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-black">
              Get In
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We will love to hear from you. Lets create something amazing together.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Info */}
            <div className="text-black">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Lets Create Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                  Amazing Together
                </span>
              </h2>
              <p className="text-xl text-black leading-relaxed mb-12">
                Ready to make a statement? Get in touch with us and lets discuss how we can help you express your unique style and bring your creative vision to reality.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Email Us</h3>
                    <span className="text-xl text-gray-700">hello@stephen.com</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Call Us</h3>
                    <span className="text-xl text-gray-700">+1 (555) 123-4567</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Visit Us</h3>
                    <span className="text-xl text-gray-700">123 Creative Street, Design City</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Side - Contact Form */}
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-black mb-8">Send us a message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-black placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-base transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-black placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-base transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-black placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-base transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-black placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-base transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-black placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none text-base transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-black mb-6">Why Choose Stephen?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-2">Fast Response</h4>
                  <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-2">Quality Assured</h4>
                  <p className="text-gray-600">Premium quality products and services guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-2">Customer Care</h4>
                  <p className="text-gray-600">Dedicated support throughout your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}