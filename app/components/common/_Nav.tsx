'use client';

import React, { useState, useEffect } from 'react';

interface NavProps {
  simple?: boolean;          // ← Dette var det manglende stykke
}

export default function Nav({ simple = false }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Auto-animation af den røde burger (2-3 sekunder første gang)
  useEffect(() => {
    if (!hasAnimated && !simple) {
      setTimeout(() => setMenuOpen(true), 800);
      setTimeout(() => {
        setMenuOpen(false);
        setHasAnimated(true);
      }, 3300);
    }
  }, [hasAnimated, simple]);

  if (simple) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </a>

          {/* Desktop knapper - centrerede */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
            <a href="#afstemning" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">Afstemning</a>
            <a href="#de-store-greb" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">De store greb</a>
            <a href="/kreativitet" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">Kreativitet</a>
            <a href="/demokrati-2-0" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">Demokrati 2.0</a>
          </div>

          {/* Rød burger (kun mobil) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <div className={`w-6 h-0.5 bg-[#E30613] transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#E30613] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#E30613] transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobil menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3">
          <a href="#afstemning" className="py-3 text-lg font-medium" onClick={() => setMenuOpen(false)}>Afstemning</a>
          <a href="#de-store-greb" className="py-3 text-lg font-medium" onClick={() => setMenuOpen(false)}>De store greb</a>
          <a href="/kreativitet" className="py-3 text-lg font-medium" onClick={() => setMenuOpen(false)}>Kreativitet</a>
          <a href="/demokrati-2-0" className="py-3 text-lg font-medium" onClick={() => setMenuOpen(false)}>Demokrati 2.0</a>
        </div>
      )}
    </nav>
  );
}