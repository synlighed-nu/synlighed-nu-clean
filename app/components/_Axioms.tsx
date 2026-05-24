'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const axioms = [
  "Vi bruger milliarder – men ved ikke hvad der virker.",
  "Problemet er ikke mangel på data – det er mangel på overblik.",
  "Vi kalder det reformer – men det er gentagelser.",
  "Systemet er ikke designet til at lære – det er designet til at fortsætte.",
  "Vi behandler konsekvenser – men ændrer ikke årsager.",
  "Sundhed er ikke problemet – det er resultatet.",
  "Hvis børnene ikke udvikler sig – har vi ingen fremtid.",
  "Kreativitet skaber løsninger – systemet kvæler dem.",
  "Synlighed ændrer ikke alt – men uden synlighed ændres ingenting.",
  "Vi åbner systemet – én del ad gangen.",
  "Hurtigere. Bedre. Billigere. er det modsatte af staten i dag.",
  "Demokrati bliver til idiokrati uden løbende opgradering.",
  "Axiom er de få regler der aldrig må forhandles væk.",
  "Offentlig administration bør være et reasoning-værk – ikke et embed-værk.",
  "Synlighed begynder først, når man tør erkende sine begrænsninger."
];

export default function Axioms() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % axioms.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white border-t border-gray-100">
      <div className="text-center">
        <Link 
          href="/axiom"
          className="inline-block px-4 py-1 bg-[#002B5B] hover:bg-[#001B3D] text-white text-xs font-semibold tracking-widest rounded-full mb-6 transition-colors"
        >
          AXIOM
        </Link>
        
        <div className="min-h-[110px] flex items-center justify-center">
          <p className="text-xl md:text-2xl font-medium text-[#002B5B] leading-tight transition-opacity duration-700">
            {axioms[current]}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {axioms.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? 'bg-[#002B5B] scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}