'use client';

import React, { useState, useRef } from 'react';

interface SpeakerButtonProps {
  text: string;
  className?: string;
}

export default function SpeakerButton({ text, className = "" }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggleSpeech = () => {
    const synth = window.speechSynthesis;

    if (isSpeaking && !isPaused) {
      // Pause
      synth.pause();
      setIsPaused(true);
    } 
    else if (isPaused) {
      // Resume
      synth.resume();
      setIsPaused(false);
    } 
    else {
      // Start ny oplæsning
      if (synth.speaking) {
        synth.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'da-DK';        // Dansk
      utterance.rate = 0.95;           // Lidt langsommere end standard (mere behageligt)
      utterance.pitch = 1;

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      synth.speak(utterance);
      utteranceRef.current = utterance;
      setIsSpeaking(true);
      setIsPaused(false);
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