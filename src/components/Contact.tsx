'use client';

export default function Contact() {
  return (
    <section 
      className="relative py-20 min-h-screen flex items-center px-10 mx-auto"
      style={{ width: '1500px' }}
    >
      <div className="w-full">
       
        
        <div className="relative z-10 w-full">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-black">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Lets Create Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                  Amazing Together
                </span>
              </h2>
              <p className="text-xl text-blackleading-relaxed mb-8">
                Ready to make a statement? Get in touch with us and lets discuss how we can help you express your unique style.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg">hello@stephen.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
  
            {/* Right Side - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-black placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 text-base transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-black placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 text-base transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-black placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 resize-none text-base transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-black py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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