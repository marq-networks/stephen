'use client';

export default function Features() {
  return (
    <section className="py-20 bg-black px-10 w-full">
      <div className="w-full">
        {/* Sleek Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gray-600 pb-8 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Sleek design</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Apps</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Websites</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Design system</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Wireframing</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Dashboards</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Prototyping</span>
            </div>
          </div>
        </div>

        {/* Bamboo Cotton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gray-600 pb-8 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Bamboo Cotton</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Website copy</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Tone of voice guidelines</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Information architecture</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">UX writing</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Microcopy</span>
            </div>
          </div>
        </div>

        {/* Natural Cotton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gray-600 pb-8 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Natural Cotton</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Logo design</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Typography & color systems</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Brand guidelines</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Art Direction</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Motion Identity</span>
            </div>
          </div>
        </div>

        {/* ECO Friendly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">ECO Friendly</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">Framer & Webflow builds</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">Migration</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">SEO</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-[20px] text-gray-300">CMS Integration</span>
              <span className="text-[20px] text-gray-300">•</span>
              <span className="text-[20px] text-gray-300">E-commerce setup</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Our Products
          </h2>
          <p className="text-[20px] md:text-xl text-white max-w-3xl mx-auto">
            Experience the perfect blend of quality, sustainability, and style in every piece we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Premium Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Crafted from the finest materials with meticulous attention to detail, ensuring durability and comfort.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Sustainable Fashion</h3>
            <p className="text-gray-600 leading-relaxed">
              Committed to eco-friendly practices and sustainable materials for a better future.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Quick and reliable shipping to get your favorite pieces to you as soon as possible.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Fair Pricing</h3>
            <p className="text-gray-600 leading-relaxed">
              Transparent and competitive pricing without compromising on quality or ethics.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Round-the-clock customer support to help you with any questions or concerns.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Easy Returns</h3>
            <p className="text-gray-600 leading-relaxed">
              Hassle-free return policy to ensure you are completely satisfied with your purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}