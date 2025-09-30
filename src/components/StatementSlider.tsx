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
      subtitle: 'Authentic Self-Expression Through Sustainable Fashion',
      philosophy: 'AUTHENTIC EXPRESSION',
      description: 'Every thread tells a story of authenticity. Our organic cotton tees are designed for those who believe in wearing their values, not just their style.',
      keywords: 'authentic fashion, sustainable clothing, organic cotton tees, meaningful apparel'
    },
    {
      id: 2,
      title: '"Process & Transform"',
      subtitle: 'Mindful Fashion for Conscious Living',
      philosophy: 'MINDFUL DESIGN',
      description: 'From processing thoughts to transforming perspectives, our statement tees inspire personal growth and mindful living through premium quality materials.',
      keywords: 'mindful fashion, conscious clothing, statement tees, personal growth apparel'
    },
    {
      id: 3,
      title: '"Challenge Conventions"',
      subtitle: 'Bold Statements for Fearless Individuals',
      philosophy: 'FEARLESS CREATIVITY',
      description: 'Break boundaries with our thought-provoking designs. Each piece challenges conventional thinking while maintaining comfort and sustainability.',
      keywords: 'bold fashion statements, unique t-shirt designs, creative apparel, unconventional clothing'
    },
    {
      id: 4,
      title: '"Sustainable Impact"',
      subtitle: 'Eco-Conscious Fashion for Future Generations',
      philosophy: 'ENVIRONMENTAL RESPONSIBILITY',
      description: 'Our commitment to sustainability goes beyond organic materials. We create lasting fashion that respects both people and planet.',
      keywords: 'sustainable fashion, eco-friendly clothing, organic cotton, ethical apparel, green fashion'
    },
    {
      id: 5,
      title: '"The Whether is in U"',
      subtitle: 'Empowerment Through Personal Choice',
      philosophy: 'INNER STRENGTH',
      description: 'Discover the power within. Our empowering message tees remind you that every choice, every decision, every transformation starts from within.',
      keywords: 'empowerment clothing, motivational apparel, personal strength, inspirational fashion'
    },
    {
      id: 6,
      title: '"Life is Beautiful"',
      subtitle: 'Celebrating Positivity in Every Moment',
      philosophy: 'POSITIVE MINDSET',
      description: 'Embrace life\'s beauty with our uplifting designs. Premium comfort meets positive messaging in every carefully crafted piece.',
      keywords: 'positive fashion, uplifting apparel, beautiful life, optimistic clothing, feel-good fashion'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6 seconds for better readability

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
      role="region"
      aria-label="Brand Philosophy and Statement Collection"
    >
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stephen Fashion",
            "description": "Sustainable statement fashion for authentic self-expression",
            "url": typeof window !== 'undefined' ? window.location.origin : '',
            "sameAs": [],
            "brand": {
              "@type": "Brand",
              "name": "Stephen",
              "description": "Mindful fashion brand creating statement tees with meaningful messages"
            },
            "products": slides.map(slide => ({
              "@type": "Product",
              "name": slide.title.replace(/"/g, ''),
              "description": slide.description,
              "category": "Apparel",
              "brand": "Stephen"
            }))
          })
        }}
      />

      <div className="w-full">
        {/* SEO-optimized Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Statements That Define You
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our collection of sustainable statement tees designed for authentic self-expression. 
            Every piece carries a meaningful message that sparks conversation and inspires personal growth.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative" role="tabpanel" aria-live="polite">
          {/* Main Slider Content */}
          <div className="relative h-80 sm:h-96 lg:h-[28rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentSlide}
                className="text-center px-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                aria-label={`Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}`}
              >
                <motion.p 
                  className="text-[#46c34c] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slides[currentSlide].philosophy}
                </motion.p>
                
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.p 
                  className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <a 
                    href="/shop" 
                    className="inline-block bg-[#46c34c] text-white px-6 py-3 rounded-full hover:bg-[#46c34c]/90 transition-colors duration-300 font-medium text-sm sm:text-base"
                    aria-label={`Shop ${slides[currentSlide].title.replace(/"/g, '')} collection`}
                  >
                    Explore This Collection
                  </a>
                </motion.div>

                {/* Hidden SEO content for current slide */}
                <div className="sr-only">
                  <h3>Keywords: {slides[currentSlide].keywords}</h3>
                  <p>Category: Statement T-Shirts, Sustainable Fashion, Organic Cotton Apparel</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ml-2 sm:ml-4 focus:outline-none focus:ring-2 focus:ring-[#46c34c] focus:ring-opacity-50"
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mr-2 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-[#46c34c] focus:ring-opacity-50"
              aria-label="Next slide"
              type="button"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-8 sm:mt-12" role="tablist" aria-label="Slide navigation">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#46c34c] focus:ring-opacity-50 ${
                  index === currentSlide ? 'bg-[#46c34c]' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* SEO-optimized content section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Statement Collection?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Sustainable Materials</h4>
                <p className="text-gray-700 text-sm">
                  100% organic cotton sourced ethically, ensuring comfort while respecting our planets resources.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Meaningful Messages</h4>
                <p className="text-gray-700 text-sm">
                  Each design carries deep philosophical meaning, inspiring personal growth and authentic self-expression.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Premium Quality</h4>
                <p className="text-gray-700 text-sm">
                  Reinforced seams, pre-shrunk fabric, and eco-friendly printing ensure lasting durability and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}