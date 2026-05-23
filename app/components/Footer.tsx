'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t py-8 text-center text-xs text-gray-500 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        Synlighed.nu — Hurtigere. Bedre. Billigere.<br />
        Initiativ til agil reasoning og fuld offentlig synlighed i Danmark.
        <div className="mt-4 text-[10px] text-gray-400">
         Version: 22. maj 2025 – v2.5 (med komponent-struktur)
        </div>
      </div>
    </footer>
  );
}