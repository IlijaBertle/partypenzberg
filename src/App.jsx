// src/pages/BlankPage.jsx (oder deine App.jsx)
import React from 'react';

const BlankPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      {/* Ein stylischer Platzhalter mit Neon-Effekt */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-party-pink to-party-purple rounded-full blur opacity-25"></div>
        <div className="relative px-8 py-4 bg-black rounded-full border border-white/10">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
            Coming <span className="text-party-pink">Soon</span>
          </h2>
        </div>
      </div>
      
      <h1 className="mt-8 text-5xl font-black italic tracking-tighter">
        HIER ENTSTEHT <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          ETWAS GROSSES
        </span>
      </h1>
      
      <p className="mt-4 text-gray-500 max-w-xs text-sm leading-relaxed">
        Der Inhalt dieser Seite wird gerade noch im Backstage vorbereitet. Schau später wieder vorbei!
      </p>
    </div>
  );
};

export default BlankPage;