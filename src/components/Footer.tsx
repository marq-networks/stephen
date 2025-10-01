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
    <footer className="bg-white relative py-12 sm:py-16">
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

      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-black font-semibold mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/" className="text-gray-700 hover:text-black transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-black transition-colors text-sm">About</Link></li>
              <li><Link href="/shop" className="text-gray-700 hover:text-black transition-colors text-sm">Shop</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-black transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-black transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-black font-semibold mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-700 hover:text-black transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-700 hover:text-black transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/shipping-policy" className="text-gray-700 hover:text-black transition-colors text-sm">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-black font-semibold mb-4 text-sm sm:text-base">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-700 text-sm">info@ExClaimStatedTs.com</p>
              <p className="text-gray-700 text-sm">+1 414 999 8833</p>
              <p className="text-gray-700 text-sm">Los Angeles</p>
            </div>
          </div>

          {/* Social Links - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block">
            <h3 className="text-black font-semibold mb-4 text-sm sm:text-base">Follow Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm block">Instagram</Link>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm block">Twitter</Link>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm block">LinkedIn</Link>
              <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm block">Facebook</Link>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-black font-semibold mb-4 text-sm sm:text-base">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
              Join our newsletter and stay updated on the latest trends in digital design.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-full sm:rounded-l-full sm:rounded-r-none text-sm focus:outline-none focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-gray-800 transition-colors text-sm"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Social Links for mobile - shown only on small screens */}
        <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-black font-semibold mb-4 text-sm">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm">Instagram</Link>
            <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm">Twitter</Link>
            <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm">LinkedIn</Link>
            <Link href="#" className="text-gray-700 hover:text-black transition-colors text-sm">Facebook</Link>
          </div>
        </div>
      </div>

      {/* Rotating Marquee Section (right → left, shows immediately) */}
      <div className="bg-white py-6 sm:py-8 overflow-hidden mt-8 sm:mt-12">
        <div
          className="relative w-full overflow-hidden h-[120px] sm:h-[160px] lg:h-[220px] flex items-center"
          aria-live="polite"
        >
          {/* Changing key restarts the animation for the new slide */}
          <div key={currentSlide} className="marquee-track">
            {/* Two copies for seamless looping */}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-black whitespace-nowrap pr-8 sm:pr-12 lg:pr-16">
              {slides[currentSlide]}
            </span>
            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-black whitespace-nowrap pr-8 sm:pr-12 lg:pr-16"
              aria-hidden="true"
            >
              {slides[currentSlide]}
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} STEPHEN™. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Powered by{' '}
              <Link 
                href="https://marqnetworks.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors font-medium"
              >
                marqnetworks
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
