'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
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
      className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/homeherobg.png"
            alt="Life is Beautiful T-shirt"
            width={1400}
            height={1400}
            className="w-full h-full object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </div>

      {/* Responsive Container with max width */}
      <div className="relative z-10 w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="flex items-center justify-start h-screen py-12 sm:py-16 lg:py-20">
          {/* Main About Us heading */}
          <motion.div 
            className="text-left w-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
            >
              About Us.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
  {/* Left Content */}
  <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
      LIFE IS
      <br />
      BEAUTIFUL
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
      We believe in creating products that inspire and bring joy to everyday life. Our mission is to spread positivity through thoughtful design.
    </p>
    <button className="bg-[#46c34c] hover:bg-[#479f78] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
      Learn More
    </button>
  </div>

  {/* Right Content - Hero Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/hero.png"
      alt="Life is Beautiful T-shirt"
      width={400}
      height={500}
      className="w-auto h-auto max-w-sm"
      priority
    />
  </div>
</div>