/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-45" id="whatsapp-float-container">
      <a
        href="https://wa.me/918626092350"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-green relative group"
      >
        {/* SVG/Lucide Icon */}
        <MessageCircle className="w-7 h-7" />

        {/* Hover label */}
        <span className="absolute right-16 bg-slate-900/95 font-sans text-xs font-bold text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-md border border-slate-700/50">
          Enquire on WhatsApp
        </span>
      </a>
    </div>
  );
}
