'use client';

import React, { useState, useEffect } from 'react';

interface NavProps {
  simple?: boolean;
}

export default function Nav({ simple = false }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Auto-animation af burger-menu (kun på desktop)
  useEffect(() => {
    if (!hasAnimated && !simple) {
      setTimeout(() => setMenuOpen(true), 800);
      setTimeout(() => {
        setMenuOpen(false);
        setHasAnimated(true);
      }, 3300);
    }
  }, [hasAnimated, simple]);

  // DEV vandmærke i toppen
  const DevBanner = () => (
    <div className="bg-red-600 text-white text-[10px] font-mono py-1 text-center tracking-widest">
      DEV 28-05-2026 001 — Kun til test • Ikke offentlig
    </div>
  );

  if (simple) {
    return (
      <>
        <DevBanner />
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
            <a href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
              @SynlighedNu
            </a>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <DevBanner />
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        {/* resten af din navigation her (den gamle kode) */}
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-semibold text-2xl tracking-tighter">Synlighed.nu</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#afstemning" className="hover:text-[#002B5B]/80 transition">Afstemning</a>
            <a href="#de-store-greb" className="hover:text-[#002B5B]/80 transition">De store greb</a>
            <a href="#de-konkrete-omrader" className="hover:text-[#002B5B]/80 transition">De konkrete områder</a>
            <a href="/kreativitet" className="hover:text-[#002B5B]/80 transition">Kreativitet</a>
            <a href="/demokrati-2-0" className="hover:text-[#002B5B]/80 transition">Demokrati 2.0</a>
          </div>

          {/* Burger menu til mobil */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#E30613]"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
}