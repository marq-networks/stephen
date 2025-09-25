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
      className="py-20  mx-auto px-10"
      style={{ width: '1570px' }}
      ref={sectionRef}
    >
      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Statements That Matter
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
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
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Main Quote */}
                <motion.h3 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h3>

                {/* Subtitle */}
                <motion.p 
                  className="text-2xl md:text-3xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Philosophy Tag */}
                <motion.div 
                  className="inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-12 h-px bg-yellow-400"></div>
                  <span className="text-yellow-400 font-semibold text-sm tracking-wider">
                    {slides[currentSlide].philosophy}
                  </span>
                  <div className="w-12 h-px bg-yellow-400"></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <motion.div
              className="bg-yellow-400 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Philosophy
          </motion.button>
        </motion.div>
      </div>
    </motion.section >
  );
}