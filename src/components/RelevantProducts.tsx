import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RelevantProducts = () => {
  return (
    <section className="py-20 w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Relevant Products
          </h2>
        
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product 1 */}
          <div className="text-center group">
            <Link href="/shop" className="block">
              <div className="relative mb-6 overflow-hidden rounded-lg bg-white p-8 cursor-pointer">
                <Image
                  src="/hero.png"
                  alt="THE WHETHER IS IN U. T-shirt"
                  width={300}
                  height={350}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
          
          {/* Product 2 */}
          <div className="text-center group">
            <Link href="/shop" className="block">
              <div className="relative mb-6 overflow-hidden rounded-lg bg-white p-8 cursor-pointer">
                <Image
                  src="/hero.png"
                  alt="THE WHETHER IS IN U. T-shirt"
                  width={300}
                  height={350}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
          
          {/* Product 3 */}
          <div className="text-center group">
            <Link href="/shop" className="block">
              <div className="relative mb-6 overflow-hidden rounded-lg bg-white p-8 cursor-pointer">
                <Image
                  src="/hero.png"
                  alt="THE WHETHER IS IN U. T-shirt"
                  width={300}
                  height={350}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
        
        {/* Shop All Button */}
        <div className="text-center">
          <Link href="/shop" className="bg-[#46c34c] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-block">
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelevantProducts;