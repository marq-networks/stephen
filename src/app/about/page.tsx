'use client';
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/about/AboutHero';
import AboutContent from '../../components/about/AboutContent';
import Footer from '../../components/Footer';
import Founder from '@/components/about/founder';

export default function About() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <AboutHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* About Content Section - First section to overlay hero */}
          <div className="w-full bg-white rounded-t-2xl">
            <AboutContent />
          </div>
        </div>
        
        {/* Full-width background container for Founder */}
        <div className="w-full bg-white py-2">
          <div className="w-full bg-white rounded-2xl">
            <Founder />
          </div>
        </div>
        
        {/* Full-width background container for last section */}
        <div className="w-full bg-white py-2">
          <div className="w-full bg-white rounded-2xl">
            <section className="w-full py-12 sm:py-16 lg:py-20">
              <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
                    WE ARE <span className="text-gray-500">NUMEROUS</span>,<br />
                    YET, WE OPERATE<br />
                    AS A <span className="text-black">UNIFIED<br />
                      BEING.</span>
                  </h2>

                  <button className="bg-[#46c34c] hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                    Shop Now
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <div className="w-full bg-[#171717]">
        <Footer />
      </div>
    </div>
  );
}