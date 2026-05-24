'use client';

import React, { useState, useEffect } from 'react';

const axioms = [
  "Vi bruger milliarder – men ved ikke hvad der virker.",
  "Problemet er ikke mangel på data. Problemet er mangel på overblik.",
  "Vi kalder det reformer. Men det er gentagelser.",
  "Systemet er ikke designet til at lære. Det er designet til at fortsætte.",
  "Vi behandler konsekvenser. Men ændrer ikke årsager.",
  "Sundhed er ikke problemet. Det er resultatet.",
  "Hvis børnene ikke udvikler sig, har vi ingen fremtid.",
  "Kreativitet skaber løsninger. Systemet kvæler dem.",
  "Synlighed ændrer ikke alt. Men uden synlighed ændres ingenting.",
  "Vi åbner systemet. Én del ad gangen.",
  "Vi måler aktivitet. Ikke resultater.",
  "Jo flere regler, jo mindre ansvar.",
  "Tillid opstår ikke af kontrol. Den opstår af synlighed.",
  "Det er lettere at begrave et problem i en rapport end at løse det.",
  "Fremtiden tilhører dem, der tør stille de rigtige spørgsmål."
  "Synlighed begynder først, når man tør erkende sine begrænsninger."
];

export default function Axioms() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % axioms.length);
    }, 8000); // Skifter hvert 8. sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 border-t border-gray-100 bg-white">
      <div className="text-center">
        <span className="inline-block px-4 py-1 bg-[#002B5B] text-white text-xs font-semibold tracking-widest rounded-full mb-4">
          AXIUM
        </span>
        
        <div className="min-h-[110px] flex items-center justify-center transition-all duration-700">
          <p className="text-xl md:text-2xl font-medium text-[#002B5B] leading-relaxed text-center max-w-2xl">
            {axioms[current]}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {axioms.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-[#002B5B] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}