'use client';

import React from 'react';

export default function SpeakerButton() {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance();
    
    // Finder al tekst på siden (undtagen navigation og footer)
    const mainContent = document.querySelector('main, section, .prose') || document.body;
    utterance.text = mainContent?.textContent || document.body.textContent || '';
    
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    window.speechSynthesis.cancel(); // Stopper eventuel tidligere oplæsning
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="fixed bottom-6 right-6 bg-white border border-gray-300 hover:border-[#002B5B] text-[#002B5B] w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 z-40"
      title="Læs siden højt"
    >
      🔊
    </button>
  );
}