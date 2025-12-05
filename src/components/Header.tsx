"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/85 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/ganesha-agro-hub-logo.jpeg"
            alt="Ganesha Agro Hub logo"
            width={56}
            height={56}
            className="object-contain rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold text-[#166534] m-0">Ganesha Agro Hub</h1>
            <p className="text-xs text-[#166534] m-0">Premium Pulses & Spices</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#about" className="text-gray-500 font-semibold hover:text-[#166534] transition-colors">
            About
          </Link>
          <Link href="#products" className="text-gray-500 font-semibold hover:text-[#166534] transition-colors">
            Products
          </Link>
          <Link href="#contact" className="text-gray-500 font-semibold hover:text-[#166534] transition-colors">
            Contact
          </Link>
          <Link
            href="#products"
            className="bg-[#166534] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#14532d] transition-colors"
          >
            Shop
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-3 bg-white">
          <Link href="#about" className="text-gray-500 font-semibold" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#products" className="text-gray-500 font-semibold" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="#contact" className="text-gray-500 font-semibold" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="#products"
            className="bg-[#166534] text-white px-4 py-2 rounded-lg font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
        </nav>
      )}
    </header>
  );
}
