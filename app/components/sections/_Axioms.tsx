'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AXIOMS } from '../../lib/constants';

export default function Axioms() {
  const [currentIndex, setCurrentIndex] = useState(1); // starter fra 2. axiom
  const publicAxioms = AXIOMS.filter(a => a.visibility === "public");

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
      <Link href="/axiomer" className="block group">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/30 transition-all text-center">
          
          {/* Centreret badge */}
          <div className="mx-auto inline-block px-4 py-1 bg-[#002B5B] text-white text-xs font-semibold tracking-widest rounded-full mb-6">
            AXIOM
          </div>

          <p className="text-2xl leading-relaxed text-gray-800 max-w-2xl mx-auto">
            "{publicAxioms[currentIndex].text}"
          </p>
        </div>
      </Link>

      {/* Prikker */}
      <div className="flex justify-center gap-2 mt-8">
        {publicAxioms.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex 
                ? 'bg-[#002B5B] scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}