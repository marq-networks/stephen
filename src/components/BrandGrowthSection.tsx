'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function BrandGrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <motion.section 
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 rounded-r-3xl rounded-l-3xl min-h-screen flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8"
      style={{ y, opacity, maxWidth: '1570px', width: '100%' }}
    >
      <div className="w-full">
        {/* Original BrandGrowthSection Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1 items-start mb-8 sm:mb-12 lg:mb-16">
          {/* Left Side - Large Number */}
          <motion.div
            className="flex items-start justify-center lg:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Massive Number */}
            <motion.h2 
              className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-black text-black leading-none select-none"
              initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              0-1
            </motion.h2>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Brand Name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-sm font-bold text-black mb-4 tracking-[0.2em] uppercase">STEPHEN™</h3>
            </motion.div>

            {/* Client Avatars */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-3 mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="flex -space-x-2">
                {[
                  'from-purple-400 to-pink-400',
                  'from-blue-400 to-cyan-400', 
                  'from-green-400 to-emerald-400'
                ].map((gradient, index) => (
                  <motion.div
                    key={index}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${gradient} border-2 border-white`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: false }}
                  />
                ))}
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 border-2 border-white flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: false }}
                >
                  <span className="text-white text-xs font-bold">95+</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              className="mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: false }}
            >
              <p className="text-gray-600 text-xs mb-2 font-medium">Trusted by Industry leaders</p>
              <div className="flex justify-center lg:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-3 h-3 text-orange-400 fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + (i * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: false }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </motion.div>

            {/* Main Description */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              viewport={{ once: false }}
            >
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight">
                We help brands grow with strategic design that s{' '}
                <motion.span
                  className="text-[#46c34c]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  viewport={{ once: false }}
                >
                  thoughtful
                </motion.span>
                , visually bold, and built to make an impression.
              </h4>
            </motion.div>
          </motion.div>
        </div>

        {/* ProductShowcase Content */}
        <div className="w-full">
          {/* Product Grid */}
          <div className="w-full space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
              {/* Text Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm w-full flex flex-col justify-around hover:shadow-lg transition-shadow duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Premium Quality</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Crafted from the finest materials with attention to every detail. Our products are designed to last and provide unmatched comfort.
                  </p>
                </div>
                <div className="mt-6">
                  <Link href="/shop">
                    <button className="bg-[#46c34c] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#46c34c]/80 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 sm:gap-6 w-full">
              {/* Chart Image */}
              <div className="rounded-2xl w-full overflow-hidden transition-shadow duration-300">
                <Image 
                  src="/chart.png" 
                  alt="Chart" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto rounded-2xl" 
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
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/shop">
                <button className="bg-[#46c34c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-[#46c34c]/80 transition-colors duration-300 w-full sm:w-auto">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}