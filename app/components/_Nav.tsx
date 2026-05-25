'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-4">
        
        {/* Logo / Titel */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </Link>

          {/* Hamburger-knap – kun synlig på mobil */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#002B5B] text-3xl focus:outline-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop knapper */}
        <div className="hidden md:grid grid-cols-4 gap-3 mt-6">
          <a href="#afstemning" className="px-5 py-3.5 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-3xl transition-colors text-center">Afstemning</a>
          <a href="#de-store-greb" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">De store greb</a>
          <a href="#kreativitet" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">Kreativitet</a>
          <a href="#demokrati-2-0" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">Demokrati 2.0</a>
        </div>

        {/* Mobil menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white border border-gray-200 rounded-3xl py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-3">
              <a href="#afstemning" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-center font-medium hover:bg-gray-100 rounded-2xl">Afstemning</a>
              <a href="#de-store-greb" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-center font-medium hover:bg-gray-100 rounded-2xl">De store greb</a>
              <a href="#kreativitet" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-center font-medium hover:bg-gray-100 rounded-2xl">Kreativitet</a>
              <a href="#demokrati-2-0" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-center font-medium hover:bg-gray-100 rounded-2xl">Demokrati 2.0</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}