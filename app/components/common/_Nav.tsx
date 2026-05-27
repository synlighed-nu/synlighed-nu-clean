'use client';

import React, { useState, useEffect } from 'react';

interface NavProps {
  simple?: boolean;
}

export default function Nav({ simple = false }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Haptic feedback (vibration på Android)
  const triggerHaptic = (duration = 50) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  };

  // Auto-animation af burger første gang
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
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[60] border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
            <a href="#afstemning" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">Afstemning</a>
            <a href="#de-store-greb" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">De store greb</a>
            <a href="#de-konkrete-omrader" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">De konkrete områder</a>
            <a href="/kreativitet" className="px-6 py-2.5 text-sm font-medium hover:bg-gray-100 rounded-3xl transition">Kritisk område</a>
          </div>

          {/* Rød burger */}
          <button
            onClick={() => {
              triggerHaptic(50);
              setMenuOpen(!menuOpen);
            }}
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
        <>
          <div
            className="fixed top-16 inset-x-0 bottom-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out translate-x-0">
            <div className="p-6">
              <button
                onClick={() => {
                  triggerHaptic(40);
                  setMenuOpen(false);
                }}
                className="mb-8 text-3xl text-[#E30613] hover:text-red-700 transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col gap-6 text-lg font-medium">
                <a href="#afstemning" className="py-3 border-b" onClick={() => setMenuOpen(false)}>Afstemning</a>
                <a href="#de-store-greb" className="py-3 border-b" onClick={() => setMenuOpen(false)}>De store greb</a>
                <a href="#de-konkrete-omrader" className="py-3 border-b" onClick={() => setMenuOpen(false)}>De konkrete områder</a>
                <a href="/kreativitet" className="py-3 border-b" onClick={() => setMenuOpen(false)}>Kritisk område</a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}