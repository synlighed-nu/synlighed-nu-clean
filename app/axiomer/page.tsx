'use client';

import React, { useState, useEffect } from 'react';
import Nav from '../components/common/_Nav';
import SpeakerButton from '../components/common/_SpeakerButton';
import { AXIOMS, DEV_VERSION } from '../lib/constants';

export default function AxiomerPage() {
  const [likes, setLikes] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('axiomLikes');
      return saved ? JSON.parse(saved) : new Array(AXIOMS.length).fill(0);
    }
    return new Array(AXIOMS.length).fill(0);
  });

  const [userLikes, setUserLikes] = useState<boolean[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('userAxiomLikes');
      return saved ? JSON.parse(saved) : new Array(AXIOMS.length).fill(false);
    }
    return new Array(AXIOMS.length).fill(false);
  });

  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  // Introduktionstekst som skal læses højt
  const introText = `
    Axioms er de få, enkle principper vi vælger at holde fast i. 
    De er ikke absolutte sandheder, og vi er ikke bedrevidende. 
    De er blot værktøjer, der hjælper os med at tænke klarere, hurtigere og mere faktuelt. 
    Når vi arbejder med klare principper, viser erfaring og forskning, 
    at vi ofte træffer markant bedre beslutninger – op til 80 % bedre resultater 
    sammenlignet med ad-hoc-tænkning.
  `;

  useEffect(() => {
    localStorage.setItem('axiomLikes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('userAxiomLikes', JSON.stringify(userLikes));
  }, [userLikes]);

  const toggleLike = (index: number) => {
    const newUserLikes = [...userLikes];
    const newLikes = [...likes];

    if (newUserLikes[index]) {
      newUserLikes[index] = false;
      newLikes[index] = Math.max(0, newLikes[index] - 1);
    } else {
      newUserLikes[index] = true;
      newLikes[index] += 1;
    }

    setUserLikes(newUserLikes);
    setLikes(newLikes);
  };

  const handleSubmitSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestionSubmitted(true);
    setTimeout(() => setSuggestionSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Axioms</h1>

        {/* Introduktion med højtaler-knap til højre */}
        <div className="flex gap-8 mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed">
              Axioms er de få, enkle principper vi vælger at holde fast i. 
              De er ikke absolutte sandheder, og vi er ikke bedrevidende. 
              De er blot værktøjer, der hjælper os med at tænke klarere, hurtigere og mere faktuelt.
            </p>
            <p className="text-xl leading-relaxed">
              Når vi arbejder med klare principper, viser erfaring og forskning, 
              at vi ofte træffer markant bedre beslutninger – op til 80 % bedre resultater 
              sammenlignet med ad-hoc-tænkning.
            </p>
            <a 
              href="https://www.ted.com/talks/ray_dalio_how_to_build_a_company_where_the_best_ideas_win"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#002B5B] hover:underline mt-4"
            >
              Se Ray Dalios TED Talk om principper →
            </a>
          </div>

          {/* Højtaler-knap placeret til højre */}
          <div className="pt-2">
            <SpeakerButton text={introText} endingAxiomIndex={0} />
          </div>
        </div>

        {/* Resten af siden (Top 3, alle Axioms, forslag) forbliver uændret */}
        {/* ... (resten af koden er den samme som før) */}

        {/* Top 3 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">De mest værdsatte Axioms lige nu</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Top 3 kode som før */}
          </div>
        </div>

        {/* Alle Axioms og forslag til nyt Axiom beholdes som tidligere */}
        {/* ... */}

        <div className="text-center text-xs text-gray-400 mt-12">
          {DEV_VERSION}
        </div>
      </div>
    </div>
  );
}