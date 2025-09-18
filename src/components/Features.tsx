export default function Features() {
  return (
    <section className="bg-[#171717] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sleek Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-gray-600 pb-8 mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Sleek design</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-300">Apps</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Websites</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Design system</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Wireframing</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-300">Dashboards</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Prototyping</span>
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
              <span className="text-sm text-gray-300">Website copy</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Tone of voice guidelines</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-300">Information architecture</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">UX writing</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Microcopy</span>
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
              <span className="text-sm text-gray-300">Logo design</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Typography & color systems</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-300">Brand guidelines</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Art Direction</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Motion Identity</span>
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
              <span className="text-sm text-gray-300">Framer & Webflow builds</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">Migration</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">SEO</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-300">CMS Integration</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">E-commerce setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}