'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function StatementSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const slides = [
    {
      id: 1,
      title: '"Wear Your Truth"',
      subtitle: 'No Matter How Uncomfortable',
      philosophy: 'EXCLAIM PHILOSOPHY'
    },
    {
      id: 2,
      title: '"Express Authentically"',
      subtitle: 'Beyond Fashion Boundaries',
      philosophy: 'CREATIVE VISION'
    },
    {
      id: 3,
      title: '"Challenge Conventions"',
      subtitle: 'Through Bold Statements',
      philosophy: 'DESIGN ETHOS'
    },
    {
      id: 4,
      title: '"Sustainable Impact"',
      subtitle: 'For Future Generations',
      philosophy: 'ENVIRONMENTAL COMMITMENT'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <motion.section 
      className="py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8"
      style={{ maxWidth: '1570px', width: '100%' }}
      ref={sectionRef}
    >
      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Statements That Matter
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every piece carries a message. Every message sparks a conversation.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider Content */}
          <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="text-center px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.p 
                  className="text-orange-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slides[currentSlide].philosophy}
                </motion.p>
                
                <motion.h3 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ml-2 sm:ml-4"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mr-2 sm:mr-4"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}