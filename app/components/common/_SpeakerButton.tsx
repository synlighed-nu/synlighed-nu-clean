'use client';

import React, { useState, useRef } from 'react';

const AXIOMS = [
  "Synlighed begynder først, når man tør erkende sine begrænsninger.",
  "Problemet er ikke mangel på data – det er mangel på overblik.",
  "Vi kalder det reformer, men det er ofte bare gentagelser.",
  "Systemet er ikke designet til at lære – det er designet til at fortsætte.",
  "Vi behandler konsekvenser, men ændrer sjældent årsagerne.",
  "Hvis børnene ikke udvikler sig, har vi ingen fremtid.",
  "Kreativitet skaber løsninger – systemet kvæler den.",
];

const DEV_VERSION = "DEV 28-05-2026 006";

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: { text: string; endingAxiomIndex?: number }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = () => {
    if (isSpeaking) return;

    const axiomText = AXIOMS[endingAxiomIndex % AXIOMS.length];
    const fullText = `${text}\n\nAxiom: ${axiomText}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const pause = () => {
    window.speechSynthesis.pause();
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    utteranceRef.current = null;
  };

  return (
    <div className="inline-flex items-center gap-2 bg-[#002B5B] text-white rounded-3xl p-1">
      {/* Læs højt */}
      <button
        onClick={speak}
        className="flex items-center gap-2 px-5 py-2.5 hover:bg-white/10 rounded-3xl transition-all active:scale-95"
      >
        <span className="text-xl">🔊</span>
        <span className="font-medium">Læs højt</span>
      </button>

      {/* Pause */}
      <button
        onClick={pause}
        className="flex items-center gap-2 px-4 py-2.5 hover:bg-white/10 rounded-3xl transition-all active:scale-95"
      >
        <span className="text-xl">⏸️</span>
      </button>

      {/* Stop */}
      <button
        onClick={stop}
        className="flex items-center gap-2 px-4 py-2.5 hover:bg-white/10 rounded-3xl transition-all active:scale-95"
      >
        <span className="text-xl">⏹️</span>
      </button>

      {/* DEV version */}
      <span className="text-[10px] font-mono opacity-40 px-3">
        {DEV_VERSION}
      </span>
    </div>
  );
}