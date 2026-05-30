'use client';

import React, { useState, useRef } from 'react';
import { AXIOMS } from '../../lib/constants';

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: { text: string; endingAxiomIndex?: number }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
      return;
    }

    const publicAxioms = AXIOMS.filter(a => a.visibility === "public");
    const axiomText = publicAxioms[endingAxiomIndex % publicAxioms.length].text;
    
    const fullText = `${text}\n\nAxiom: ${axiomText}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button
      onClick={toggleSpeech}
      className="flex items-center justify-center w-11 h-11 bg-[#002B5B] hover:bg-[#001B3D] text-white rounded-2xl transition-all active:scale-95 shadow-sm"
      title={isSpeaking ? "Stop" : "Læs højt"}   // title giver tooltip på hover
    >
      <span className="text-3xl">
        {isSpeaking ? '⏹️' : '▶️'}
      </span>
    </button>
  );
}