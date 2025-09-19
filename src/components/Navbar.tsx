'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 py-6 border-b border-gray-800/50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[90%] mx-auto">
        {/* Desktop Navigation - Centered */}
        <motion.div 
          className="hidden md:flex justify-center items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
        >
          {[
            { href: "/about", label: "About" },
            { href: "/shop", label: "Shop" },
            { href: "/blog", label: "Blogs" },
            { href: "#", label: "Contact" },
            { href: "/favorites", label: "Favorites" },
            { href: "/cart", label: "Cart" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
            >
              <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            STEPHEN
          </motion.div>
          <motion.button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 bg-black/90 rounded-lg p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, staggerChildren: 0.05 }}
              >
                {[
                  { href: "/about", label: "About" },
                  { href: "/shop", label: "Shop" },
                  { href: "/blog", label: "Blogs" },
                  { href: "#", label: "Contact" },
                  { href: "/favorites", label: "Favorites" },
                  { href: "/cart", label: "Cart" }
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium block"
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