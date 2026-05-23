'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm opacity-70">
          Synlighed.nu © 2026 – Vi gør det offentlige gennemsigtigt
        </p>
        <p className="text-xs opacity-50 mt-3">
          Hurtigere. Bedre. Billigere. med agil reasoning og fuld synlighed.
        </p>
        
        <div className="mt-8 text-xs opacity-40">
          <a 
            href="https://x.com/SynlighedNu" 
            target="_blank"
            className="hover:text-white transition-colors"
          >
            @SynlighedNu
          </a>
        </div>
      </div>
    </footer>
  );
}