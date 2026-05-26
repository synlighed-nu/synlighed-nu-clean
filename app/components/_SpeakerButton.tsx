'use client';

import React from 'react';

export default function SpeakerButton() {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance();
    
    // Fjern tidligere highlights
    document.querySelectorAll('.speaking-highlight').forEach(el => {
      el.classList.remove('speaking-highlight');
    });

    // Hent al tekst fra hovedindholdet
    const content = document.querySelector('main, .prose, section') || document.body;
    utterance.text = content.textContent || '';
    utterance.lang = 'da-DK';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    // Highlight den aktuelle paragraph mens det læses
    utterance.onboundary = (event) => {
      const paragraphs = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, li'));
      
      // Find hvilken paragraph vi er i ud fra tegnposition
      let currentParagraph = paragraphs[0];
      let charCount = 0;

      for (let p of paragraphs) {
        charCount += (p.textContent || '').length + 1;
        if (event.charIndex < charCount) {
          currentParagraph = p;
          break;
        }
      }

      // Fjern gamle highlights
      document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));

      // Tilføj highlight til den aktuelle
      if (currentParagraph) {
        currentParagraph.classList.add('speaking-highlight');
      }
    };

    utterance.onend = () => {
      document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));
    };

    window.speechSynthesis.cancel();
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