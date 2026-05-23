'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="font-semibold text-2xl tracking-tighter text-[#002B5B]">
          Synlighed.nu
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          
          {/* Knapper */}
          <a 
            href="#afstemning"
            className="px-6 py-2.5 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-2xl transition-colors"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-6 py-2.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-2xl transition-colors"
          >
            De store greb
          </a>

          {/* X-link (stadig som tekst-link) */}
          <a 
            href="https://x.com/SynlighedNu" 
            target="_blank"
            className="px-5 py-2.5 text-sm font-medium hover:text-[#002B5B] transition-colors"
          >
            X
          </a>
        </div>

      </div>
    </nav>
  );
}