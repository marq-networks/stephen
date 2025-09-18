'use client';

export default function Contact() {
  return (
    <section 
      className="relative py-20 px-6 min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/contact-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black-200 bg-opacity-100"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Side - Contact Info */}
          <div className="flex justify-between flex-col">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Let&apos;s talk<br />shop
              </h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium text-lg">hello@elovera.studio</p>
                <p className="text-gray-300 text-sm">(0123) 456-789</p>
                <p className="text-gray-300 text-sm">Los Angeles</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 ">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Make it happen</h3>
            </div>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 text-base transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 text-base transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-0 resize-none text-base transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 font-medium text-base"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}