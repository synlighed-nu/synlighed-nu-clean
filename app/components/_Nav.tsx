'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Venstre: Logo */}
        <a 
          href="#" 
          className="font-semibold text-xl tracking-tighter text-[#002B5B]"
        >
          Synlighed.nu
        </a>

        {/* Midten: Det lille eye-logo (brand-symbol) */}
        <a href="#" className="flex items-center justify-center w-9 h-9">
          {/* Her kan du senere indsætte dit rigtige eye-billede */}
          <span className="text-3xl">👁️</span>
        </a>

        {/* Højre: Knapper – meget mere kompakte på mobil */}
        <div className="flex items-center gap-2">
          <a 
            href="#afstemning"
            className="px-4 py-2 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-2xl transition-colors"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-4 py-2 bg-white border border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-2xl transition-colors"
          >
            De store greb
          </a>
        </div>
      </div>
    </nav>
  );
}