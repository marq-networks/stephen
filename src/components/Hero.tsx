'use client';
import Image from 'next/image';
import Link from 'next/link';
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
      className="relative text-white min-h-screen flex items-end overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full">
        {/* Main Hero Content */}
        <div className="flex items-end gap-3 justify-between h-screen py-20">
          {/* Left Side - Services List */}
          <div>
            <motion.div 
              className="flex flex-col space-y-2 text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              <motion.div
                initial={{ y: 30, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-white/80 text-lg font-medium"
              >
                Product design
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-white/80 text-lg font-medium"
              >
                Content strategy
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-white/80 text-lg font-medium"
              >
                Brand identity design
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-white/80 text-lg font-medium"
              >
                Front-end development
              </motion.div>
            </motion.div>

            {/* Center - Main Content */}
            <motion.div 
              className="flex-1"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            >
         

              <motion.h2 
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight relative z-10"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.4, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  Creative studio
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                >
                  for founders
                </motion.span>
              </motion.h2>
            </motion.div>
          </div>
          
          <div>
            {/* Right Side - Description and CTA */}
            <motion.div 
              className="flex flex-col items-start max-w-md"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
            >
              <motion.p 
                className="text-white text-lg md:text-xl leading-relaxed mb-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: 1.6, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
              >
                We partner with brands to create digital design that drives conversion and commands attention.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.8,
                  type: "spring",
                  stiffness: 150
                }}
              >
                <Link href="/shop">
                  <motion.button
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(249, 115, 22, 0.5)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    See pricing
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
