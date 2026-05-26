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
        
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs opacity-70">
          <a 
            href="/bliv-frivillig" 
            className="hover:text-white transition-colors underline"
          >
            Bliv frivillig
          </a>
          <a 
            href="https://opencollective.com/synlighed-nu" 
            target="_blank"
            className="hover:text-white transition-colors underline"
          >
            Støt projektet
          </a>
        </div>

        <p className="text-white/40 text-xs mt-10">
          @SynlighedNu
        </p>
      </div>
    </footer>
  );
}