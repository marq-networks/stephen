'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'EXCLAIM - EXCLAIM - EXCLAIM - EXCLAIM - EXCLAIM - EXCLAIM - EXCLAIM - EXCLAIM - ',
    'DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - DESIGN - ',
    'CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - ',
    'INNOVATE - INNOVATE - INNOVATE - INNOVATE - INNOVATE - INNOVATE - INNOVATE - '
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  const handleSubscribe = (e: React.FormEvent) => {
      e.preventDefault();
      if (email) {
          // Handle newsletter subscription
          setEmail('');
          // Show success message
      }
  };

  return (
    <footer className="bg-white relative py-16 px-6">
      {/* Styles for marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: 200%;
          animation: marquee 15s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-700 hover:text-black transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-black transition-colors text-sm">About</Link></li>
              <li><Link href="/shop" className="text-gray-700 hover:text-black transition-colors text-sm">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-black transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-black transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-black transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-black transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-gray-700 hover:text-black transition-colors text-sm">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm">hello@stephen.studio</p>
              <p className="text-gray-700 text-sm">(0023) 6763-362</p>
              <p className="text-gray-700 text-sm">Los Angeles</p>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div />

          {/* Subscribe Section */}
          <div>
            <h3 className="text-black font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Join our newsletter and stay updated on the latest trends in digital design.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full text-sm focus:outline-none focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition-colors text-sm"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Rotating Marquee Section (right → left, shows immediately) */}
      <div className="bg-white py-8 overflow-hidden">
        <div
          className="relative w-full overflow-hidden h-[220px] flex items-center"
          aria-live="polite"
        >
          {/* Changing key restarts the animation for the new slide */}
          <div key={currentSlide} className="marquee-track">
            {/* Two copies for seamless looping */}
            <span className="text-6xl md:text-8xl font-extrabold text-black whitespace-nowrap pr-16">
              {slides[currentSlide]}
            </span>
            <span
              className="text-6xl md:text-8xl font-extrabold text-black whitespace-nowrap pr-16"
              aria-hidden="true"
            >
              {slides[currentSlide]}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
