'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav({ simple = false }: { simple?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="font-semibold text-2xl tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </Link>

          {/* Desktop menu */}
          {!simple && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="#afstemning" className="hover:text-[#001B3D] transition">Afstemning</Link>
              <Link href="#de-store-greb" className="hover:text-[#001B3D] transition">De store greb</Link>
              <Link href="#de-konkrete-omrader" className="hover:text-[#001B3D] transition">De konkrete områder</Link>
              <Link href="/kreativitet" className="hover:text-[#001B3D] transition">Kreativitet</Link>
              <Link href="/demokrati-2-0" className="hover:text-[#001B3D] transition">Demokrati 2.0</Link>
            </div>
          )}

          {/* Mobil hamburger - 3 røde streger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span className="block w-6 h-0.5 bg-red-600 transition-all"></span>
            <span className="block w-6 h-0.5 bg-red-600 transition-all"></span>
            <span className="block w-6 h-0.5 bg-red-600 transition-all"></span>
          </button>
        </div>
      </div>

      {/* Mobil menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="flex flex-col px-6 gap-4 text-sm font-medium">
            <Link href="#afstemning" className="py-2 hover:text-[#001B3D]" onClick={() => setMobileOpen(false)}>Afstemning</Link>
            <Link href="#de-store-greb" className="py-2 hover:text-[#001B3D]" onClick={() => setMobileOpen(false)}>De store greb</Link>
            <Link href="#de-konkrete-omrader" className="py-2 hover:text-[#001B3D]" onClick={() => setMobileOpen(false)}>De konkrete områder</Link>
            <Link href="/kreativitet" className="py-2 hover:text-[#001B3D]" onClick={() => setMobileOpen(false)}>Kreativitet</Link>
            <Link href="/demokrati-2-0" className="py-2 hover:text-[#001B3D]" onClick={() => setMobileOpen(false)}>Demokrati 2.0</Link>
          </div>
        </div>
      )}
    </nav>
  );
}