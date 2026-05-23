'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        
        {/* Logo – klikbar */}
        <a 
          href="#" 
          className="font-semibold text-2xl tracking-tighter text-[#002B5B] hover:text-[#001B3D] transition-colors"
        >
          Synlighed.nu
        </a>

        {/* Knapper – bedre mobil tilpasning */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="#afstemning"
            className="px-5 sm:px-6 py-2.5 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-5 sm:px-6 py-2.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-2xl transition-colors whitespace-nowrap"
          >
            De store greb
          </a>

          <a 
            href="https://x.com/SynlighedNu" 
            target="_blank"
            className="px-4 py-2.5 text-sm font-medium hover:text-[#002B5B] transition-colors hidden sm:block"
          >
            X
          </a>
        </div>
      </div>
    </nav>
  );
}