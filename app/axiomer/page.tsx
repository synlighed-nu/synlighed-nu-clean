'use client';

import React, { useState, useEffect } from 'react';
import Nav from '../components/common/_Nav';
import { AXIOMS, DEV_VERSION } from '../lib/constants';   // ← korrekt sti

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

  const top3 = [...AXIOMS]
    .map((item, i) => ({ ...item, likes: likes[i], index: i }))
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-8">Axioms</h1>

        <div className="prose prose-lg max-w-none mb-16">
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

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">De mest værdsatte Axioms lige nu</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {top3.map((item, i) => (
              <div key={i} className="bg-white border border-[#002B5B]/10 rounded-3xl p-6">
                <div className="text-sm font-medium text-[#E30613] mb-2">#{i + 1}</div>
                <p className="text-lg leading-relaxed">{item.text}</p>
                <div className="mt-6 text-sm text-gray-500">
                  {item.likes} personer synes dette er vigtigt
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Alle Axioms</h2>
        <div className="space-y-6">
          {AXIOMS.map((axiom, index) => (
            <div key={index} className="flex gap-4 bg-white border border-gray-200 rounded-3xl p-6 hover:border-[#002B5B]/30 transition-colors">
              <div className="flex-1">
                <p className="text-lg leading-relaxed">{axiom.text}</p>
              </div>
              <button
                onClick={() => toggleLike(index)}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all ${
                  userLikes[index] 
                    ? 'bg-red-100 text-red-600' 
                    : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                }`}
              >
                <span className="text-2xl">❤️</span>
                <span className="text-xs font-medium mt-1">{likes[index]}</span>
              </button>
              {userLikes[index] && (
                <div className="text-xs text-[#002B5B] self-center font-medium">Du har liket dette</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h3 className="text-xl font-semibold mb-6">Forslag til nyt Axiom</h3>
          <p className="text-sm text-gray-600 mb-4">
            Har du et princip du synes bør være med? Vi er altid åbne for nye perspektiver.
          </p>
          <textarea 
            className="w-full h-32 border border-gray-300 rounded-2xl p-4 focus:outline-none focus:border-[#002B5B]"
            placeholder="Skriv dit forslag til et nyt Axiom her..."
          />
          <button className="mt-6 px-8 py-4 bg-[#002B5B] text-white rounded-3xl font-medium hover:bg-[#001B3D]">
            Send forslag
          </button>
        </div>

        <div className="text-center text-xs text-gray-400 mt-12">
          {DEV_VERSION}
        </div>
      </div>
    </div>
  );
}