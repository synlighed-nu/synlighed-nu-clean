'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="font-semibold text-2xl tracking-tighter">Synlighed.nu</div>
        
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#afstemning" className="hover:text-[#002B5B]/80 transition">Afstemning</a>
          <a href="#de-store-greb" className="hover:text-[#002B5B]/80 transition">De store greb</a>
          <a href="https://x.com/SynlighedNu" target="_blank" className="hover:text-[#002B5B]/80 transition">X</a>
          <a 
            href="https://opencollective.com/synlighed-nu" 
            target="_blank"
            className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
          >
            Støt projektet
          </a>
        </div>
      </div>
    </nav>
  );
}