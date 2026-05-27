'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ExplanationPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  const closePopup = () => setShowPopup(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    if (showPopup) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showPopup]);

  return (
    <>
      {/* Teaser tekst */}
      <div
        className="max-w-2xl mx-auto text-center cursor-help"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Der er masser af data og rapporter.<br />
          Alligevel mangler vi det mest grundlæggende: <span className="font-semibold text-[#002B5B]">overblik</span>.
        </p>
      </div>

      {/* Pop-up boks */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-10 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 text-4xl text-[#E30613] hover:text-red-700 transition-colors"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold text-[#002B5B] mb-8 text-center">
              Synlighed først.
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-2xl leading-relaxed">
                Vi ved hvad vi bruger penge på – men ikke om det virker.
              </p>
              <p className="mt-6">
                Vi ser det samme mønster igen og igen:<br />
                Vi løser problemer ved at kompensere for dem, i stedet for at ændre dem.
              </p>
              <p className="mt-8 font-medium">
                Det handler ikke om manglende vilje.<br />
                Det handler om hvordan systemet er designet.
              </p>
              <p className="text-[#002B5B] mt-10 text-center text-xl font-semibold">
                Systemet er ikke bygget til at lære – det er bygget til at fortsætte.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}