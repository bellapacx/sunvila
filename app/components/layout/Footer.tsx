// app/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black to-zinc-900 text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Logo + Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold text-green-500 mb-2">SunvilaCoin</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Powering smart village transformation through belief, action, and sustainable technology.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col space-y-2 text-sm text-zinc-300">
          <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
          <Link href="/about" className="hover:text-green-500 transition">About</Link>
          <Link href="/roadmap" className="hover:text-green-500 transition">Roadmap</Link>
          <Link href="/contact" className="hover:text-green-500 transition">Contact</Link>
        </div>

        {/* Column 3: Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 text-xl text-zinc-400">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaTelegramPlane />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} SunvilaCoin. All rights reserved.
      </div>
    </footer>
  );
}
