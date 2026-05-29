'use client';

import React from 'react';
import Link from 'next/link';

export default function Nav({ simple = false }: { simple?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="font-semibold text-2xl tracking-tighter text-[#002B5B]">
            @SynlighedNu
          </Link>

          {/* Knapper - centreret */}
          {!simple && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium mx-auto">
              <Link href="#afstemning" className="hover:text-[#001B3D] transition">Afstemning</Link>
              <Link href="#de-store-greb" className="hover:text-[#001B3D] transition">De store greb</Link>
              <Link href="#de-konkrete-omrader" className="hover:text-[#001B3D] transition">De konkrete områder</Link>
              <Link href="/kreativitet" className="hover:text-[#001B3D] transition">Kreativitet</Link>
              <Link href="/demokrati-2-0" className="hover:text-[#001B3D] transition">Demokrati 2.0</Link>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}