/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SizeChart = () => {
  return (
    <section className="py-20 w-full bg-[#2D2F2E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-sm font-medium">Design &</span>
            <span className="text-blue-400 text-sm font-medium">Built.</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Size Chart
          </h2>
        </div>
        
        {/* Main Content - Table and Image Side by Side */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Size Chart Table */}
          <div className="w-full lg:flex-1 overflow-x-auto">
            <div className="space-y-8">
              {/* Inches Table */}
              <div>
                <div className="grid grid-cols-7 gap-2 md:gap-4 text-white min-w-[600px]">
                  {/* Header Row */}
                  <div className="text-white text-sm font-medium">Inch</div>
                  <div className="text-center font-semibold">S</div>
                  <div className="text-center font-semibold">M</div>
                  <div className="text-center font-semibold">L</div>
                  <div className="text-center font-semibold">XL</div>
                  <div className="text-center font-semibold">2XL</div>
                  <div className="text-center font-semibold">3XL</div>
                  
                  {/* A Length Row */}
                  <div className="text-white text-sm">A Length</div>
                  <div className="text-center text-white">28</div>
                  <div className="text-center text-white">29.1</div>
                  <div className="text-center text-white">29.9</div>
                  <div className="text-center text-white">31.1</div>
                  <div className="text-center text-white">31.9</div>
                  <div className="text-center text-white">33.1</div>
                  
                  {/* B Bust Row */}
                  <div className="text-white text-sm">B Bust</div>
                  <div className="text-center text-white">36.2</div>
                  <div className="text-center text-white">40.2</div>
                  <div className="text-center text-white">44.1</div>
                  <div className="text-center text-white">48</div>
                  <div className="text-center text-white">52</div>
                  <div className="text-center text-white">55.9</div>
                  
                  {/* C Shoulder Row */}
                  <div className="text-white text-sm">C Shoulder</div>
                  <div className="text-center text-white">15.7</div>
                  <div className="text-center text-white">16.9</div>
                  <div className="text-center text-white">18.1</div>
                  <div className="text-center text-white">19.3</div>
                  <div className="text-center text-white">20.5</div>
                  <div className="text-center text-white">21.7</div>
                </div>
              </div>
              
              {/* Centimeters Table */}
              <div className="pt-6 border-t border-gray-700">
                <div className="grid grid-cols-7 gap-2 md:gap-4 text-white min-w-[600px]">
                  {/* Centimeter Header */}
                  <div className="text-white text-sm font-medium">Centimetre</div>
                  <div className="text-center font-semibold">S</div>
                  <div className="text-center font-semibold">M</div>
                  <div className="text-center font-semibold">L</div>
                  <div className="text-center font-semibold">XL</div>
                  <div className="text-center font-semibold">2XL</div>
                  <div className="text-center font-semibold">3XL</div>
                  
                  {/* A Length Row (cm) */}
                  <div className="text-white text-sm">A Length</div>
                  <div className="text-center text-white">71</div>
                  <div className="text-center text-white">74</div>
                  <div className="text-center text-white">76</div>
                  <div className="text-center text-white">79</div>
                  <div className="text-center text-white">80</div>
                  <div className="text-center text-white">84</div>
                  
                  {/* B Bust Row (cm) */}
                  <div className="text-white text-sm">B Bust</div>
                  <div className="text-center text-white">92</div>
                  <div className="text-center text-white">102</div>
                  <div className="text-center text-white">112</div>
                  <div className="text-center text-white">122</div>
                  <div className="text-center text-white">132</div>
                  <div className="text-center text-white">142</div>
                  
                  {/* C Shoulder Row (cm) */}
                  <div className="text-white text-sm">C Shoulder</div>
                  <div className="text-center text-white">40</div>
                  <div className="text-center text-white">43</div>
                  <div className="text-center text-white">46</div>
                  <div className="text-center text-white">49</div>
                  <div className="text-center text-white">52</div>
                  <div className="text-center text-white">55</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* T-shirt Image */}
          <div className="w-full lg:w-auto flex justify-center lg:flex-shrink-0">
            <div className="relative">
              <img 
                src="/prduct.png" 
                alt="T-shirt size guide" 
                className="w-full max-w-[300px] md:max-w-[400px] lg:w-[500px] h-auto"
              />
              <div className="absolute top-4 md:top-8 right-2 md:right-4 text-red-500 text-xs md:text-sm font-bold">C</div>
              <div className="absolute top-12 md:top-24 right-4 md:right-8 text-red-500 text-xs md:text-sm font-bold">B</div>
              <div className="absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 text-red-500 text-xs md:text-sm font-bold">A</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeChart;