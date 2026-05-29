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

const DEV_VERSION = "DEV 28-05-2026 008";

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: { text: string; endingAxiomIndex?: number }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleSpeech = () => {
    if (isSpeaking) {
      // STOP
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
      return;
    }

    // START
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

  return (
    <button
      onClick={toggleSpeech}
      className="inline-flex items-center gap-3 px-6 py-3 bg-[#002B5B] hover:bg-[#001B3D] text-white rounded-3xl font-medium transition-all active:scale-95 shadow-sm"
    >
      <span className="text-2xl">
        {isSpeaking ? '⏹️' : '▶️'}
      </span>
      <span className="text-lg">
        {isSpeaking ? 'Stop' : 'Læs højt'}
      </span>
      <span className="text-xs font-mono opacity-40 tracking-tighter">
        {DEV_VERSION}
      </span>
    </button>
  );
}