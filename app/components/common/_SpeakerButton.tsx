'use client';

import React from 'react';

export default function SpeakerButton() {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance();
    
    // Fjern eventuel tidligere oplæsning
    window.speechSynthesis.cancel();

    // Hent tekst fra hovedindholdet
    const content = document.querySelector('main, .prose, section') || document.body;
    utterance.text = content.textContent || document.body.textContent || '';
    
    utterance.lang = 'da-DK';     // Dansk
    utterance.rate = 0.95;        // Lidt langsommere end normalt
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="fixed bottom-8 right-8 bg-white border-2 border-[#002B5B] text-[#002B5B] w-14 h-14 rounded-3xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-50 text-3xl"
      title="Læs siden højt"
    >
      🔊
    </button>
  );
}