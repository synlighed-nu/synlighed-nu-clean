'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AXIOMS } from '@/lib/constants';

export default function Axioms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const publicAxioms = AXIOMS.filter(a => a.visibility === "public");

  const nextAxiom = () => {
    setCurrentIndex((prev) => (prev + 1) % publicAxioms.length);
  };

  const prevAxiom = () => {
    setCurrentIndex((prev) => (prev - 1 + publicAxioms.length) % publicAxioms.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">Axioms</h2>
        <Link 
          href="/axiomer"
          className="text-[#002B5B] hover:underline text-sm font-medium flex items-center gap-1"
        >
          Se alle Axioms →
        </Link>
      </div>

      {/* Karusel kort */}
      <Link href="/axiomer" className="block group">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/30 transition-all">
          <div className="inline-block px-4 py-1 bg-[#002B5B] text-white text-xs font-semibold tracking-widest rounded-full mb-6">
            AXIOM
          </div>
          <p className="text-2xl leading-relaxed text-gray-800">
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