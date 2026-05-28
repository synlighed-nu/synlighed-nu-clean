'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ExplanationPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowPopup(true);
      setExpanded(false);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setExpanded(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Kun på klienten
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };

    if (showPopup) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleEsc);
      }
    };
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
            className={`bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-10 relative transition-all duration-300 ${
              expanded ? 'max-h-[90vh] overflow-auto' : ''
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={toggleExpand}
                className="text-4xl text-green-600 hover:text-green-700 transition-colors"
                title="Vis mere tekst"
              >
                ✓
              </button>

              <button
                onClick={closePopup}
                className="text-4xl text-[#E30613] hover:text-red-700 transition-colors"
              >
                ✕
              </button>
            </div>

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
            </div>

            {expanded && (
              <div className="mt-10 prose prose-lg text-gray-700 border-t pt-8">
                <p className="font-medium">
                  Det handler ikke om manglende vilje.<br />
                  Det handler om hvordan systemet er designet.
                </p>
                <p className="mt-6">
                  Systemet er ikke bygget til at lære – det er bygget til at fortsætte.
                </p>
                <p className="mt-8 text-[#002B5B] font-semibold">
                  Derfor gør vi det anderledes.<br />
                  Vi tager ét område ad gangen med fuld synlighed.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}