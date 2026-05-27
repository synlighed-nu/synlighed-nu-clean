'use client';

import React from 'react';

export default function BigMoves() {
  return (
    <div id="de-store-greb" className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="text-[#E30613] font-semibold tracking-[2px] text-sm mb-2">DE STORE GREB</div>
        <h2 className="text-4xl font-bold tracking-tight">De fundamentale problemer</h2>
        <p className="text-gray-600 mt-3">Mange problemer har de samme rodårsager. Her er de store greb, der går igen.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { title: "Incitamenter", desc: "Systemet belønner ofte proces og administration frem for resultater." },
          { title: "Centralisering", desc: "Store centrale løsninger skaber afhængighed og høje omkostninger." },
          { title: "Forebyggelse vs. behandling", desc: "Vi bruger langt flere penge på at reparere end på at undgå problemer." },
          { title: "Mangel på synlighed", desc: "Uden klar indsigt i omkostninger og konsekvenser kan vi ikke træffe gode beslutninger." }
        ].map((item, i) => (
          <div key={i} className="bg-white border rounded-2xl p-6">
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}