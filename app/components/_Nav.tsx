'use client';

import React, { useState } from 'react';

export default function Nav({ simple = false }: { simple?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo venstre */}
          <div className="font-semibold text-2xl tracking-tighter">
            @SynlighedNu
          </div>

          {/* Centrerede knapper på desktop/iPad */}
          {!simple && (
            <div className="hidden md:flex items-center gap-3 mx-auto">
              <a href="#afstemning" className="px-5 py-2 bg-[#002B5B] text-white text-sm font-medium rounded-3xl hover:bg-[#001B3D] transition">
                Afstemning
              </a>
              <a href="#de-store-greb" className="px-5 py-2 border border-[#002B5B] text-[#002B5B] text-sm font-medium rounded-3xl hover:bg-[#002B5B] hover:text-white transition">
                De store greb
              </a>
              <a href="#kreativitet" className="px-5 py-2 border border-[#002B5B] text-[#002B5B] text-sm font-medium rounded-3xl hover:bg-[#002B5B] hover:text-white transition">
                Kreativitet
              </a>
              <a href="#demokrati-2-0" className="px-5 py-2 border border-[#002B5B] text-[#002B5B] text-sm font-medium rounded-3xl hover:bg-[#002B5B] hover:text-white transition">
                Demokrati 2.0
              </a>
            </div>
          )}

          {/* Hamburger på mobil */}
          {!simple && (
            <button 
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          )}
        </div>

        {/* Mobil menu */}
        {!simple && menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-2">
            <a href="#afstemning" className="px-6 py-4 bg-[#002B5B] text-white text-center rounded-3xl" onClick={() => setMenuOpen(false)}>
              Afstemning
            </a>
            <a href="#de-store-greb" className="px-6 py-4 border border-[#002B5B] text-center rounded-3xl" onClick={() => setMenuOpen(false)}>
              De store greb
            </a>
            <a href="#kreativitet" className="px-6 py-4 border border-[#002B5B] text-center rounded-3xl" onClick={() => setMenuOpen(false)}>
              Kreativitet
            </a>
            <a href="#demokrati-2-0" className="px-6 py-4 border border-[#002B5B] text-center rounded-3xl" onClick={() => setMenuOpen(false)}>
              Demokrati 2.0
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}