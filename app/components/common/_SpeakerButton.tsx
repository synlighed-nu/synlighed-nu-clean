'use client';

import React, { useState } from 'react';

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
  endingAxiomIndex?: number;
}

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (message: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speak(text);

      // Fast tid: start Axiom automatisk efter ca. 8 sekunder
      setTimeout(() => {
        const axiomText = AXIOMS[endingAxiomIndex] || AXIOMS[0];
        speak(axiomText);
        setIsSpeaking(false);
      }, 8000);
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