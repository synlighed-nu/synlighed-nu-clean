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

const DEV_VERSION = "DEV 28-05-2026 004";

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: { text: string; endingAxiomIndex?: number }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      // Pause
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsSpeaking(false);
      return;
    }

    if (isPaused) {
      // Fortsæt (starter forfra – browser-begrænsning)
      window.speechSynthesis.cancel();
      setIsPaused(false);
    }

    // Start / genstart
    const axiomText = AXIOMS[endingAxiomIndex % AXIOMS.length];
    const fullText = `${text}\n\nAxiom: ${axiomText}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    setIsSpeaking(true);
    setIsPaused(false);
  };

  return (
    <button
      onClick={toggleSpeech}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002B5B] hover:bg-[#001B3D] text-white rounded-3xl font-medium transition-all active:scale-95"
    >
      <span className="text-xl">
        {isSpeaking ? '⏸️' : isPaused ? '▶️' : '🔊'}
      </span>
      <span>
        {isSpeaking ? 'Pause' : isPaused ? 'Fortsæt' : 'Læs højt'}
      </span>
      <span className="text-[10px] opacity-40 font-mono ml-1">{DEV_VERSION}</span>
    </button>
  );
}