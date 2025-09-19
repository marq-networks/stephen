import Image from 'next/image';
import React from 'react';

const ShopHeroSection = () => {
  return (
    <div className="bg-white relative">
      {/* Hero Section with Shop heading */}
      <section className="relative text-white min-h-screen flex items-center justify-start p-4 overflow-hidden bg-gray-800">
        {/* Large "SHOP" text in background */}
        <div className="absolute inset-0 z-0">
                    <Image
                        src="/productherobg.png"
                        alt="Shop Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-1"></div>
        
        {/* Main Shop heading */}
      
      </section>

      {/* Product Image - Positioned to span both sections */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 z-30">
        <div className="rounded-2xl ">
          {/* T-shirt mockup */}
         
          <div className="flex justify-center relative">
                                <div className="relative -mt-32 z-20">
                                    <Image
                                        src="/shopbg.png"
                                        alt="THE WHETHER IS IN U. T-shirt"
                                        width={1000}
                                        height={1000}
                                        className="rounded-lg w-[1000px] drop-shadow-2xl"
                                    />
                                </div>
                            </div>
          {/* Subtle shadow under t-shirt */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/5 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Product Section */}
      <div className="bg-[#F5F5F5]  rounded-2xl relative">
        <section className="text-black py-20 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left Text */}
              <div className="text-left">
                <p className="text-lg font-bold leading-relaxed text-black max-w-xs">
                  We create brands and experiences that cut through the noise, promote style and, above all, endure.
                </p>
              </div>

              {/* Center - Empty space for overlapping image */}
              <div className="flex justify-center relative">
                {/* This space is intentionally left for the overlapping image */}
              </div>

              {/* Right Text */}
              <div className="text-right">
                <p className="text-lg font-bold leading-relaxed text-black max-w-xs ml-auto">
                  Spontaneous brain chemical releases and outcomes, actions and aligned spaces had made measure, its smooth, luxe appeal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopHeroSection;