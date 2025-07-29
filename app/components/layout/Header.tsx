'use client';

import { useState } from 'react';
import { Menu, X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Roadmap', href: 'roadmap' },
    { label: 'Contact',href: '/contact', type: 'page' },
  ];

  // Scroll smoothly to section and close menu (for mobile)
  function handleScroll(href: string) {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-green-700/80 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleScroll('home')}
          className="text-2xl font-black tracking-tight hover:opacity-90 transition cursor-pointer"
        >
          SunvilaCoin
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[16px] font-medium">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(href);
              }}
              className="relative group transition text-white hover:text-yellow-300 cursor-pointer"
            >
              {label}
              <span className="block h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden focus:outline-none transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 bg-green-800/95 text-white"
          >
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(href);
                }}
                className="block py-3 text-lg font-medium hover:text-yellow-400 transition cursor-pointer"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
