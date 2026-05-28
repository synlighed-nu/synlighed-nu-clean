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
  "Beskyttelse af grundvandet er ikke til forhandling.",
  "Hurtigere. Bedre. Billigere. er det modsatte af statens normale måde at arbejde på."
];

interface SpeakerButtonProps {
  text: string;
  endingAxiomIndex?: number;   // hvilket axiom der skal læses til sidst
}

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = (message: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    // Stop evt. tidligere tale
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onend = () => {
      setIsSpeaking(false);
      // Hvis vi har et axiom-index, læs det automatisk til sidst
      if (endingAxiomIndex !== undefined && message === text) {
        const axiomText = AXIOMS[endingAxiomIndex] || AXIOMS[0];
        setTimeout(() => {
          const axiomUtterance = new SpeechSynthesisUtterance(axiomText);
          axiomUtterance.lang = 'da-DK';
          axiomUtterance.rate = 0.92;
          window.speechSynthesis.speak(axiomUtterance);
        }, 600);
      }
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      speak(text);
    }
  };

  return (
    <button
      onClick={toggleSpeech}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#E30613] rounded-2xl text-[#002B5B] transition-colors"
      title={isSpeaking ? "Stop oplæsning" : "Læs siden højt"}
    >
      <span className="text-2xl">{isSpeaking ? '⏹️' : '🔊'}</span>
      <span className="text-sm font-medium">{isSpeaking ? 'Stop' : 'Læs højt'}</span>
    </button>
  );
}