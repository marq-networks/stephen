import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <section className="py-20 w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left Side - Text Content */}
          <div className='w-full lg:w-3/5'>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 leading-tight">
              A streamlined process,<br />
              executed with methodical care.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We transform understanding brands into inspiring experiences, built to reflect the quality, ambition, and greatness.
            </p>
          </div>
          
          {/* Right Side - Timeline */}
          <div className='w-full '>
          
            <Image
                src="/chart.png"
                alt="THE WHETHER OR U. T-shirt"
                width={150}
                height={180}
                className="w-full h-auto"
              />
          </div>
        </div>
      </div>
       <div className="max-w-7xl mx-auto ">
        {/* Header Text */}
        <div className="text-center my-12 py-20 ">
          <p className="text-black text-xl font-extrabold leading-relaxed max-w-4xl mx-auto">
            Premium cotton shirts that redefine comfort and style — crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant look. Soft on skin, light as air, and perfect for every occasion. Just pure comfort, no compromise.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2  mx-auto">
          {/* Top Left - Male Model */}
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/one.png"
              alt="Life is Beautiful T-shirt - Male Model"
              fill
              className="o"
            />
          </div>
          
          {/* Top Right - Female Model */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/2.png"
              alt="Life is Beautiful T-shirt - Female Model"
              fill
              className=" "
            />
          </div>
          
          {/* Bottom Left - Female Model Different Angle */}
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/3.png"
              alt="Life is Beautiful T-shirt - Female Model Side View"
              fill
              className=""
            />
          </div>
          
          {/* Bottom Right - Close-up Detail */}
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/4.png"
              alt="Life is Beautiful T-shirt - Detail View"
              fill
              className=""
            />
          </div>
        </div>
        
        {/* Decorative Element */}
      
      </div>
    </section>
  );
};

export default Process;