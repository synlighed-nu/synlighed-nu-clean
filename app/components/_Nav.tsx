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

        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a 
            href="#afstemning" 
            className="hover:text-[#002B5B]/80 transition-colors"
          >
            Afstemning
          </a>
          <a 
            href="#de-store-greb" 
            className="hover:text-[#002B5B]/80 transition-colors"
          >
            De store greb
          </a>
          <a 
            href="https://x.com/SynlighedNu" 
            target="_blank"
            className="hover:text-[#002B5B]/80 transition-colors"
          >
            X
          </a>
        </div>

      </div>
    </nav>
  );
}