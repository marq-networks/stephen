'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
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
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Image - Hero T-shirt */}
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

      <div className="relative z-10 max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Heading - Centered */}
        <motion.h1 
          className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl  leading-tight text-left capitalize" 
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
           Life is
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Beautiful
          </motion.span>
        </motion.h1>
      </div>
    </motion.section>
  );
}
