'use client';

import React, { useState, useEffect } from 'react';
import SpeakerButton from '../common/_SpeakerButton';

const axioms = [
  "Synlighed begynder først, når man tør erkende sine begrænsninger.",
  "Problemet er ikke mangel på data – problemet er mangel på overblik.",
  "Vi kalder det reformer, men det er ofte bare gentagelser.",
  "Systemet er ikke designet til at lære – det er designet til at fortsætte.",
  "Vi behandler konsekvenser, men ændrer sjældent årsagerne.",
  "Hvis man bliver ved med at stille det forkerte spørgsmål, udelukker man det rigtige svar.",
  "Beskyttelse af grundvandet er ikke til forhandling."
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
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white">
      
      {/* Axiom badge – samme stil som KRITISK OMRÅDE */}
      <div className="text-center mb-8">
        <span className="inline-block px-5 py-1.5 bg-[#002B5B] text-white text-sm font-semibold tracking-widest rounded-full">
          AXIOM
        </span>
      </div>

      <div className="min-h-[140px] flex items-center justify-center text-center px-8">
        <p className="text-2xl font-medium leading-tight text-gray-700 max-w-2xl transition-all">
          "{axioms[current]}"
        </p>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {axioms.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-[#002B5B] scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <SpeakerButton />
    </section>
  );
}