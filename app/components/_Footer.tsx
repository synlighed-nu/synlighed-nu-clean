'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm opacity-70">
          Synlighed.nu © 2026 – Vi gør det offentlige gennemsigtigt
        </p>
        <p className="text-xs opacity-50 mt-1">
          Hurtigere. Bedre. Billigere. med agil reasoning og fuld synlighed.
        </p>
        
        <div className="mt-6 text-xs opacity-60">
          <a 
            href="/bliv-frivillig" 
            className="hover:text-white transition-colors underline"
          >
            Bliv frivillig →
          </a>
        </div>
      </div>
    </footer>
  );
}