'use client';

import React, { useState } from 'react';

const AXIOMS = [
  "Synlighed begynder først, når man tør erkende sine begrænsninger.",
  "Problemet er ikke mangel på data – det er mangel på overblik.",
  "Vi kalder det reformer, men det er ofte bare gentagelser.",
  "Systemet er ikke designet til at lære – det er designet til at fortsætte.",
  "Vi behandler konsekvenser, men ændrer sjældent årsagerne.",
  "Hvis børnene ikke udvikler sig, har vi ingen fremtid.",
  "Kreativitet skaber løsninger – systemet kvæler den.",
  "Beskyttelse af grundvandet er ikke til forhandling.",
  "Hurtigere. Bedre. Billigere. er det modsatte af statens normale måde at arbejde på."
];

interface SpeakerButtonProps {
  text: string;
  endingAxiomIndex?: number;
}

export default function SpeakerButton({ text, endingAxiomIndex = 0 }: SpeakerButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

  console.log("🔑 API Key status:", API_KEY ? "FINDES (starter med " + API_KEY.substring(0, 10) + "...)" : "MANGLER");

  const toggleSpeech = async () => {
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }

    if (!API_KEY) {
      console.error("❌ Ingen API key fundet i miljøvariabler");
      alert("Manglende ElevenLabs API key – tjek Vercel Environment Variables");
      return;
    }

    setIsLoading(true);

    const axiomText = AXIOMS[endingAxiomIndex] || AXIOMS[0];
    const fullText = text + "\n\n" + axiomText;

    try {
      console.log("🚀 Sender til ElevenLabs...");
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': API_KEY,
        },
        body: JSON.stringify({
          text: fullText,
          model_id: "eleven_multilingual_v2",
          voice_settings: { stability: 0.75, similarity_boost: 0.85 }
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ ElevenLabs fejl:", response.status, errorText);
        throw new Error(`ElevenLabs fejl: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      audio.play();
      setIsSpeaking(true);

    } catch (error) {
      console.error("🚨 Fejl ved afspilning:", error);
      alert("Kunne ikke afspille lyd – tjek console for detaljer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={toggleSpeech}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#E30613] rounded-2xl text-[#002B5B] transition-colors disabled:opacity-50"
    >
      <span className="text-2xl">
        {isLoading ? '⏳' : isSpeaking ? '⏹️' : '🔊'}
      </span>
      <span className="text-sm font-medium">
        {isLoading ? 'Genererer...' : isSpeaking ? 'Afspiller' : 'Læs højt'}
      </span>
    </button>
  );
}