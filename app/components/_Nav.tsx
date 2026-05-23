'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* @SynlighedNu */}
        <a 
          href="https://x.com/SynlighedNu" 
          target="_blank"
          className="block text-center sm:text-left text-3xl font-bold tracking-tighter text-[#002B5B] hover:text-[#001B3D] transition-colors mb-4"
        >
          @SynlighedNu
        </a>

        {/* Knapper */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <a 
            href="#afstemning"
            className="px-6 py-3 bg-white/70 hover:bg-white border border-[#002B5B]/30 hover:border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-3xl transition-all backdrop-blur-sm"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-6 py-3 bg-white/70 hover:bg-white border border-[#002B5B]/30 hover:border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-3xl transition-all backdrop-blur-sm"
          >
            De store greb
          </a>

          <a 
            href="#kreativitet"
            className="px-6 py-3 bg-white/70 hover:bg-white border border-[#002B5B]/30 hover:border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-3xl transition-all backdrop-blur-sm"
          >
            Kreativitet
          </a>

          <a 
            href="#demokrati-2-0"
            className="px-6 py-3 bg-white/70 hover:bg-white border border-[#002B5B]/30 hover:border-[#002B5B] text-[#002B5B] text-sm font-semibold rounded-3xl transition-all backdrop-blur-sm"
          >
            Demokrati 2.0
          </a>
        </div>
      </div>
    </nav>
  );
}