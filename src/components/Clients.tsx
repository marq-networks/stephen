'use client';
import { useState } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Testimonial data with product images
  const testimonials = [
    {
      id: 0,
      quote: "The closest thing to having an in-house design team without actually hiring one",
      description: "From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.",
      author: "Alex Morgan",
      position: "CEO at BRIX",
      image: "/howporduct1.png"
    },
    {
      id: 1,
      quote: "Exceptional design quality that exceeded our expectations",
      description: "Their attention to detail and creative approach transformed our brand identity completely. The results speak for themselves.",
      author: "Sarah Johnson",
      position: "Marketing Director at TechFlow",
      image: "/howporduct2.png"
    },
    {
      id: 2,
      quote: "Professional, reliable, and incredibly talented team",
      description: "Working with them was a game-changer for our startup. They understood our vision and brought it to life beautifully.",
      author: "Michael Chen",
      position: "Founder at InnovateLab",
      image: "/howporduct3.png"
    },
    {
      id: 3,
      quote: "Outstanding results delivered on time and within budget",
      description: "Their systematic approach and clear communication made the entire process smooth and enjoyable.",
      author: "Emily Rodriguez",
      position: "Product Manager at DataSync",
      image: "/howporduct4.png"
    }
  ];
  
  const currentTestimonial = testimonials[currentSlide];
  
  // Simple dots for client logos
  const clientDots = Array(6).fill(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Heading */}
          <div className="flex flex-col justify-start">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Clients</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real words from the people we've partnered with — honest feedback, lasting impact.
            </p>
          </div>

          {/* Center Column - Slides */}
          <div className="flex flex-col items-center">
            {/* Slide Image */}
            <div className="w-full h-80 bg-gray-300 rounded-lg mb-8 overflow-hidden relative">
              <img 
                src={currentTestimonial.image} 
                alt={`Client ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Navigation Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-10 h-10 rounded-md transition-all duration-300 hover:bg-gray-600 ${
                    index === currentSlide 
                      ? 'bg-gray-800' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial Text */}
          <div>
            {/* Testimonial Content */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-4 leading-tight transition-all duration-500">
                    {currentTestimonial.quote}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 transition-all duration-500">
                    {currentTestimonial.description}
                  </p>
                  
                  {/* Author */}
                  <div className="transition-all duration-500">
                    <p className="font-semibold text-black text-base">{currentTestimonial.author}</p>
                    <p className="text-sm text-gray-500 mt-1">{currentTestimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}