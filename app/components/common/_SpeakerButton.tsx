'use client';

import React, { useState, useRef } from 'react';

const AXIOMS = [
  "Synlighed begynder først, når man tør erkende sine begrænsninger",
  "Problemet er ikke mangel på data – det er mangel på overblik",
  "Vi kalder det reformer, men det er ofte bare gentagelser",
  "Systemet er ikke designet til at lære – det er designet til at fortsætte",
  "Vi behandler konsekvenser, men ændrer sjældent årsagerne",
  "Hvis børnene ikke udvikler sig, har vi ingen fremtid",
  "Kreativitet skaber løsninger – systemet kvæler den",
  "Beskyttelse af grundvandet er ikke til forhandling",
  "Hurtigere. Bedre. Billigere. er det modsatte af statens normale måde at arbejde på"
];

interface SpeakerButtonProps {
  text: string;
  endingAxiomIndex?: number;
}

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    if (utteranceRef.current) {
      utteranceRef.current = null;
    }
    setIsSpeaking(false);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeaking();
      return;
    }

    const axiomText = AXIOMS[endingAxiomIndex] || AXIOMS[0];
    const fullText = text + "\n\nAxiom: " + axiomText;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsSpeaking(false);
      utteranceRef.current = null;
    };

    // Stop alt tidligere tale
    stopSpeaking();

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button
      onClick={toggleSpeech}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#E30613] rounded-2xl text-[#002B5B] transition-colors"
    >
      <span className="text-2xl">
        {isSpeaking ? '⏹️' : '🔊'}
      </span>
      <span className="text-sm font-medium">
        {isSpeaking ? 'Stop' : 'Læs højt'}
      </span>

      <span className="ml-2 text-[10px] font-mono bg-red-100 text-red-600 px-2 py-px rounded">
        DEV 28-05-2026 003
      </span>
    </button>
  );
}