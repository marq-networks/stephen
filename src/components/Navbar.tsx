'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrolled(scrollPercentage > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Icon Component
  const CartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );

  // Heart/Favorite Icon Component
  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  return (
    <motion.nav 
      className={`sticky top-0 left-0 right-0 z-50 text-white py-4 md:py-6 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
        >
          {/* Brand/Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" aria-label="Go to homepage" className="relative group inline-block hover:opacity-90 transition">
              <span
                className="relative inline-block text-5xl lg:text-6xl font-black tracking-[0.08em] bg-gradient-to-r from-[#46c34c] via-[#2eb54b] to-[#46c34c] bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:skew-x-1"
                style={{ WebkitTextStroke: '1.25px rgba(0,0,0,0.35)' }}
              >
                EXCLAIM!
              </span>
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 text-5xl lg:text-6xl font-black bg-gradient-to-r from-black/20 to-black/10 bg-clip-text text-transparent blur-[1.5px]"
                style={{ transform: 'translate(3px, 4px)', WebkitTextStroke: '0px transparent' }}
              >
                EXCLAIM!
              </span>
            </Link>
          </motion.div>

          {/* Main Navigation Links */}
          <div className="flex items-center space-x-8 xl:space-x-12">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop" },
              { href: "/blog", label: "Blogs" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cart and Favorites Icons */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/favorites" aria-label="View favorites" className="text-gray-300 hover:text-white transition-colors relative group">
                <HeartIcon />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Favorites
                </span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link href="/cart" aria-label="View cart" className="text-gray-300 hover:text-white transition-colors relative group">
                <CartIcon />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Cart
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Tablet Navigation (md to lg) */}
        <motion.div 
          className="hidden md:flex lg:hidden justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Brand/Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="relative group inline-block hover:opacity-90 transition">
              <span
                className="relative inline-block text-3xl font-extrabold tracking-[0.08em] bg-gradient-to-r from-[#46c34c] via-[#2eb54b] to-[#46c34c] bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:skew-x-1"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,0.35)' }}
              >
                EXCLAIM!
              </span>
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 text-3xl font-extrabold bg-gradient-to-r from-black/20 to-black/10 bg-clip-text text-transparent blur-[1.5px]"
                style={{ transform: 'translate(2px, 3px)', WebkitTextStroke: '0px transparent' }}
              >
                EXCLAIM!
              </span>
            </Link>
          </motion.div>
          {/* Condensed Navigation */}
          <div className="flex items-center space-x-6">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <Link href="/favorites" className="text-gray-300 hover:text-white transition-colors">
              <HeartIcon />
            </Link>
            <Link href="/cart" className="text-gray-300 hover:text-white transition-colors">
              <CartIcon />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="relative group inline-block hover:opacity-90 transition">
              <span
                className="relative inline-block text-2xl font-extrabold tracking-[0.07em] bg-gradient-to-r from-[#46c34c] via-[#2eb54b] to-[#46c34c] bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
                style={{ WebkitTextStroke: '0.8px rgba(0,0,0,0.35)' }}
              >
                EXCLAIM!
              </span>
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 text-2xl font-extrabold bg-gradient-to-r from-black/20 to-black/10 bg-clip-text text-transparent blur-[1.2px]"
                style={{ transform: 'translate(1.5px, 2px)', WebkitTextStroke: '0px transparent' }}
              >
                EXCLAIM!
              </span>
            </Link>
          </motion.div>
          
          {/* Mobile Cart and Favorites Icons */}
          <div className="flex items-center space-x-3">
            <Link href="/favorites" className="text-gray-300 hover:text-white transition-colors">
              <HeartIcon />
            </Link>
            <Link href="/cart" className="text-gray-300 hover:text-white transition-colors">
              <CartIcon />
            </Link>
            <motion.button
              className="text-white focus:outline-none ml-2 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              type="button"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden mt-4 bg-black/90 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
            >
              <motion.div 
                className="flex flex-col space-y-3 sm:space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, staggerChildren: 0.05 }}
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/shop", label: "Shop" },
                  { href: "/blog", label: "Blogs" },
                  { href: "/contact", label: "Contact" }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors text-2xl sm:text-3xl font-medium block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}