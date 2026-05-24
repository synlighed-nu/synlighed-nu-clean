'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 print:hidden">
      <div className="max-w-6xl mx-auto px-6 py-3">

        {/* @SynlighedNu som klikbart link */}
        <a 
          href="https://x.com/SynlighedNu" 
          target="_blank"
          className="flex items-center justify-center sm:justify-start gap-2 text-2xl font-semibold tracking-tighter text-[#002B5B] hover:text-[#001B3D] transition-colors mb-3"
        >
          <span>@SynlighedNu</span>
        </a>

        {/* Knapper */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <a 
            href="#afstemning"
            className="px-6 py-3 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-3xl transition-colors flex-1 sm:flex-none text-center"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-6 py-3 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors flex-1 sm:flex-none text-center"
          >
            De store greb
          </a>

          <a 
            href="#kreativitet"
            className="px-6 py-3 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors flex-1 sm:flex-none text-center"
          >
            Kreativitet
          </a>

          <a 
            href="#demokrati-2-0"
            className="px-6 py-3 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors flex-1 sm:flex-none text-center"
          >
            Demokrati 2.0
          </a>
        </div>
      </div>
    </nav>
  );
}