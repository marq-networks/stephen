'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.9]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gray-100 py-12 rounded-2xl min-h-screen flex items-start relative"
      style={{ y, opacity }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Main Description */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            <strong>Premium cotton shirts that redefine comfort and style crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant look. Soft on skin, light as air, and perfect for every occasion. Just pure comfort, no compromise.</strong>
          </p>
        </div>

        {/* Product Grid */}
        <div className="w-full space-y-16">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Text Card */}
            <div className="bg-white rounded-2xl p-10 h-[85%] shadow-sm w-full flex flex-col justify-around hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Crafted from the finest materials with attention to every detail. Our products are designed to last and provide unmatched comfort.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/shop">
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    Explore Collection
                  </button>
                </Link>
              </div>
            </div>

            {/* Image 1 */}
            <Link href="/shop">
              <div className="rounded-2xl cursor-pointer w-full transition-shadow duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/2.png"
                    alt="Product 1"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Link>

            {/* Image 2 */}
            <Link href="/shop">
              <div className="rounded-2xl cursor-pointer w-full transition-shadow duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/3.png"
                    alt="Product 2"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 w-full">
            {/* Chart Image */}
            <div className="rounded-2xl w-full overflow-hidden transition-shadow duration-300">
              <Image 
                src="/chart.png" 
                alt="Chart" 
                width={600} 
                height={400} 
                className="w-full h-[80%] rounded-2xl" 
              />
            </div>

            {/* Image 4 */}
            <Link href="/shop">
              <div className="rounded-2xl cursor-pointer w-full overflow-hidden transition-shadow duration-300"> 
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/4.png"
                    alt="Product 4"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link href="/shop">
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
