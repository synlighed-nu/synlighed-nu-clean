'use client';

import React from 'react';

export default function Hero() {
  return (
    <div className="pt-24 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
          Synlighed først.
        </h1>
        <p className="text-2xl text-gray-600 mb-10">
          Hurtigere. Bedre. Billigere.
        </p>
        
        {/* Kun én knap nu */}
        <div className="flex justify-center">
          <a 
            href="#afstemning" 
            className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Stem på det vigtigste
          </a>
        </div>
      </div>
    </div>
  );
}