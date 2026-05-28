'use client';

import React, { useState, useRef, useEffect } from 'react';

const AXIOMS = [
  "Synlighed begynder først, når man tør erkende sine begrænsninger.",
  "Problemet er ikke mangel på data – problemet er mangel på overblik.",
  "Vi løser problemer ved at kompensere for dem, i stedet for at ændre dem.",
  "Systemet er ikke bygget til at lære – det er bygget til at fortsætte.",
  "Beskyttelse af grundvandet er ikke til forhandling.",
  "Hurtigere. Bedre. Billigere. er det modsatte af, hvordan staten ofte fungerer.",
  "Hvis vi ikke kan se, hvordan systemet virker, kan vi heller ikke ændre det.",
  "Vi behandler konsekvenser – men ændrer ikke årsager.",
];

interface SpeakerButtonProps {
  text: string;
  endingAxiomIndex?: number;
  className?: string;
}

export default function SpeakerButton({ text, endingAxiomIndex, className = "" }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const triggerHaptic = (duration = 50) => {
    if ('vibrate' in navigator) navigator.vibrate(duration);
  };

  const toggleSpeech = () => {
    if (typeof window === 'undefined') return;

    const synth = window.speechSynthesis;
    synthRef.current = synth;

    if (isSpeaking && !isPaused) {
      synth.pause();
      setIsPaused(true);
      triggerHaptic(30);
    } else if (isPaused) {
      synth.resume();
      setIsPaused(false);
      triggerHaptic(30);
    } else {
      if (synth.speaking) synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'da-DK';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (endingAxiomIndex !== undefined && AXIOMS[endingAxiomIndex]) {
          const axiomUtterance = new SpeechSynthesisUtterance(AXIOMS[endingAxiomIndex]);
          axiomUtterance.lang = 'da-DK';
          axiomUtterance.rate = 0.9;
          synth.speak(axiomUtterance);
        }
        setIsSpeaking(false);
        setIsPaused(false);
      };

      synth.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
      triggerHaptic(50);
    }
  };

  return (
    <button
      onClick={toggleSpeech}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:bg-gray-100 ${className}`}
      title={isSpeaking ? (isPaused ? "Fortsæt oplæsning" : "Pause oplæsning") : "Læs teksten højt"}
    >
      <span className="text-2xl">
        {isSpeaking ? (isPaused ? "▶️" : "⏸️") : "🔊"}
      </span>
      <span className="text-sm font-medium">
        {isSpeaking ? (isPaused ? "Fortsæt" : "Pause") : "Læs højt"}
      </span>
    </button>
  );
}