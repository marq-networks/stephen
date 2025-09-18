'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white px-6 py-6">
      <div className="max-w-[90%] mx-auto">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Shop
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Blogs
          </Link>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Contact
          </a>
          <Link href="/favorites" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Favorites
          </Link>
          <a href="/cart" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Cart
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-xl font-bold">STEPHEN</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm`}>
          <div className="flex flex-col space-y-4 px-6 py-6">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Blogs
            </Link>
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
      </div>
    </nav>
  );
}