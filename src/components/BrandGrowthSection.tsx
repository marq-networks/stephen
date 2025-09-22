'use client';
import { motion, useScroll, useTransform } from 'motion/react';
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
      className="sticky top-0 bg-gray-100 py-20 px-6 min-h-screen flex items-center z-10"
      style={{ y, opacity }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Number and Branding */}
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Large Number */}
            <motion.h2 
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-black leading-none select-none"
              initial={{ scale: 0.5, opacity: 0, rotateX: -90 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              0-1
            </motion.h2>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Brand Name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-black mb-2 tracking-wider">STEPHEN™</h3>
            </motion.div>

            {/* Client Avatars */}
            <motion.div
              className="flex items-center space-x-4 mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex -space-x-2">
                {[
                  'from-purple-400 to-pink-400',
                  'from-blue-400 to-cyan-400', 
                  'from-green-400 to-emerald-400'
                ].map((gradient, index) => (
                  <motion.div
                    key={index}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} border-2 border-white`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  />
                ))}
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 border-2 border-white flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-white text-sm font-bold">95+</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              className="mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-sm mb-2">Trusted by industry leaders</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4 text-orange-400 fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + (i * 0.1),
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
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
              viewport={{ once: true }}
            >
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                We help brands grow with strategic design that{' '}
                <motion.span
                  className="text-orange-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  viewport={{ once: true }}
                >
                  thoughtful
                </motion.span>
                , visually bold, and built to make an impression.
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}