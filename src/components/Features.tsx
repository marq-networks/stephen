'use client';

export default function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mx-auto" style={{ maxWidth: '1570px', width: '100%' }}>
      <div className="w-full">
        {/* Sleek Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-600 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black">Sleek design</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Apps</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Websites</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Design system</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Wireframing</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Dashboards</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Prototyping</span>
            </div>
          </div>
        </div>

        {/* Bamboo Cotton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-600 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black">Bamboo Cotton</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Website copy</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Tone of voice guidelines</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Information architecture</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">UX writing</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Microcopy</span>
            </div>
          </div>
        </div>

        {/* Brand Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-600 pb-6 sm:pb-8 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black">Brand identity</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Logo design</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Brand guidelines</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Color palettes</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Typography</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Brand strategy</span>
            </div>
          </div>
        </div>

        {/* Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-black">Development</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">React</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Next.js</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">TypeScript</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Node.js</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">API development</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black">Database design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}