'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/75 backdrop-blur-lg z-50 border-b border-gray-100 print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* @SynlighedNu */}
        <a 
          href="https://x.com/SynlighedNu" 
          target="_blank"
          className="flex justify-center text-2xl font-semibold tracking-tighter text-[#002B5B] hover:text-[#001B3D] mb-4"
        >
          @SynlighedNu
        </a>

        {/* Knapper – bedre mobil layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a href="#afstemning" className="px-5 py-3.5 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-3xl transition-colors text-center">
            Afstemning
          </a>
          <a href="#de-store-greb" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">
            De store greb
          </a>
          <a href="#kreativitet" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">
            Kreativitet
          </a>
          <a href="#demokrati-2-0" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">
            Demokrati 2.0
          </a>
        </div>
      </div>
    </nav>
  );
}