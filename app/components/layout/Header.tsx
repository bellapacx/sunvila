'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          SunvilaCoin
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-white/80 text-lg transition">Home</Link>
          <Link href="/about" className="hover:text-white/80 text-lg transition">About</Link>
          <Link href="/roadmap" className="hover:text-white/80 text-lg transition">Roadmap</Link>
          <Link href="/contact" className="hover:text-white/80 text-lg transition">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
      <div className="md:hidden px-6 pb-4 bg-green-700">
  <Link href="/" className="block py-2 hover:text-white/90 text-lg">Home</Link>
  <Link href="/about" className="block py-2 hover:text-white/90 text-lg">About</Link>
  <Link href="/roadmap" className="block py-2 hover:text-white/90 text-lg">Roadmap</Link>
  <Link href="/contact" className="block py-2 hover:text-white/90 text-lg">Contact</Link>
</div>
      )}
    </header>
  );
}
