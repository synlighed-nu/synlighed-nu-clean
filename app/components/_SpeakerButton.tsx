'use client';

import React, { useEffect } from 'react';

export default function SpeakerButton() {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance();
    const mainContent = document.querySelector('main, .prose, section') || document.body;

    // Fjern tidligere markeringer
    document.querySelectorAll('.speaking-highlight').forEach(el => {
      el.classList.remove('speaking-highlight');
    });

    utterance.text = mainContent.textContent || '';
    utterance.lang = 'da-DK';
    utterance.rate = 0.92;
    utterance.pitch = 1;

    // Highlight-effekt mens det læses
    utterance.onboundary = (event) => {
      const text = utterance.text;
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      const currentIndex = Math.min(Math.floor(event.charIndex / 80), sentences.length - 1);

      // Fjern gamle highlights
      document.querySelectorAll('.speaking-highlight').forEach(el => el.classList.remove('speaking-highlight'));

      // Find og highlight den aktuelle sætning
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, li');
      for (let el of elements) {
        if (el.textContent && sentences[currentIndex] && el.textContent.includes(sentences[currentIndex].trim())) {
          el.classList.add('speaking-highlight');
          break;
        }
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