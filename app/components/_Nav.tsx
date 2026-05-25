'use client';

import React from 'react';
import Link from 'next/link';

export default function Nav({ simple = false }: { simple?: boolean }) {
  if (simple) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 print:hidden">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-[#002B5B] hover:text-[#001B3D] font-semibold flex items-center gap-2">
            ← Synlighed.nu
          </Link>
          <Link 
            href="/"
            className="text-sm font-medium text-[#002B5B] hover:underline"
          >
            Til forsiden
          </Link>
        </div>
      </nav>
    );
  }

  // Normal navigation på forsiden
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/75 backdrop-blur-xl z-50 border-b border-gray-100 print:hidden">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link href="/" className="flex justify-center text-2xl font-semibold tracking-tighter text-[#002B5B] mb-4">
          @SynlighedNu
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a href="#afstemning" className="px-5 py-3.5 bg-[#002B5B] hover:bg-[#001B3D] text-white text-sm font-semibold rounded-3xl transition-colors text-center">Afstemning</a>
          <a href="#de-store-greb" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">De store greb</a>
          <a href="#kreativitet" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">Kreativitet</a>
          <a href="#demokrati-2-0" className="px-5 py-3.5 bg-white border-2 border-[#002B5B] hover:bg-[#002B5B] hover:text-white text-[#002B5B] text-sm font-semibold rounded-3xl transition-colors text-center">Demokrati 2.0</a>
        </div>
      </div>
    </nav>
  );
}