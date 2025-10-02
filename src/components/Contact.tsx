'use client';

export default function Contact() {
  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 mx-auto"
      style={{ maxWidth: '1570px', width: '100%' }}
    >
      <div className="w-full">
        <div className="relative z-10 w-full">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-black text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                Lets Create Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#46c34c] to-[#46c34c]">
                  Amazing Together
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-black leading-relaxed mb-6 sm:mb-8 px-4 lg:px-0">
                Ready to make a statement? Get in touch with us and lets discuss how we can help you express your unique style.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#46c34c] to-[#46c34c] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg">info@ExClaimStatedTs.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#46c34c] to-[#46c34c] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg">+1 414 999 8833</span>
                </div>
              </div>
            </div>
  
            {/* Right Side - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#46c34c] to-[#46c34c] text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-[#38db41] hover:to-[#38dd40] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black/30"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}