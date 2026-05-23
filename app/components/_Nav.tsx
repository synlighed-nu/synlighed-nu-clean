'use client';

import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* @SynlighedNu – hovedoverskrift */}
        <a 
          href="https://x.com/SynlighedNu" 
          target="_blank"
          className="block text-center sm:text-left text-3xl font-bold tracking-tighter text-[#002B5B] hover:text-[#001B3D] transition-colors mb-5"
        >
          @SynlighedNu
        </a>

        {/* Knapper – pænt centreret på både mobil og desktop */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <a 
            href="#afstemning"
            className="px-7 py-3 bg-[#002B5B] hover:bg-[#001B3D] text-white text-base font-semibold rounded-3xl transition-colors"
          >
            Afstemning
          </a>
          
          <a 
            href="#de-store-greb"
            className="px-7 py-3 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-base font-semibold rounded-3xl transition-colors"
          >
            De store greb
          </a>

          <a 
            href="#demokrati-2-0"
            className="px-7 py-3 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-base font-semibold rounded-3xl transition-colors"
          >
            Demokrati 2.0
          </a>
        </div>
      </div>
    </nav>
  );
}