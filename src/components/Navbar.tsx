'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white px-6 py-6">
      <div className="max-w-[90%] mx-auto">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center">
          <div className="flex space-x-12 bg-[#33383C] backdrop-blur-sm px-8 py-3 rounded-xl">
            <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Shop
            </a>
            <a href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Blogs
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
            <a href="/favorites" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Favorites
            </a>
            <a href="/cart" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Cart
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-center">
          <button 
            className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-3 bg-gray-800/90 backdrop-blur-sm py-6 rounded-2xl">
              <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
              <a href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Shop
              </a>
              <a href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Blogs
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Contact
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Favorites
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Cart
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}