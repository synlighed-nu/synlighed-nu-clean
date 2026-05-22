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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#afstemning" 
            className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-9 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Stem på det vigtigste
          </a>
          <a 
            href="#de-store-greb" 
            className="border border-[#002B5B] hover:bg-gray-50 px-9 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Se de store greb
          </a>
        </div>
      </div>
    </div>
  );
}