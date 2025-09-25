'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ShopHero() {
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

      <div className="relative z-10 max-w-[1570px] mx-auto px-6 w-full h-full">
        {/* Main Hero Content */}
        <div className="flex items-center justify-start h-screen py-20">
          {/* Main Shop heading */}
          <motion.div 
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2 
              className="text-6xl lg:text-8xl font-bold"
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
              Shop.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}