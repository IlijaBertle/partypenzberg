import { useState } from 'react';
import { navLinks } from './links';

export default function Layout({ children }) {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  // Hilfsfunktion zum Schließen beider Menüs (z.B. beim Klick auf einen Link)
  const closeAll = () => {
    setIsHeaderOpen(false);
    setIsFooterOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white overflow-x-hidden">
      
      {/* --- HEADER NAVIGATION --- */}
      <header 
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ease-in-out glass-ui border-b border-white/10 overflow-hidden ${
          isHeaderOpen ? 'h-screen bg-black/95' : 'h-16'
        }`}
      >
        <div 
          onClick={() => setIsHeaderOpen(!isHeaderOpen)}
          className="h-16 flex items-center justify-between px-6 cursor-pointer"
        >
          <div className="font-black italic text-xl tracking-tighter">
            PARTY<span className="text-party-pink">PENZBERG</span>
          </div>
          
          {/* Burger Icon Animation */}
          <div className="flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-party-pink transition-all ${isHeaderOpen ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isHeaderOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-party-pink transition-all ${isHeaderOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </div>
        </div>

        {/* Header Menü Inhalt */}
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-8 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={closeAll}
              className="text-4xl font-black uppercase tracking-tighter hover:text-party-pink transition-colors active:scale-90"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* --- PAGE CONTENT --- */}
      <main className="flex-grow pt-20 pb-10">
        {children}
      </main>

      {/* --- INTERACTIVE FOOTER --- */}
      <footer 
        className={`fixed bottom-0 left-0 w-full z-[120] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
          isFooterOpen ? 'h-80' : 'h-2'
        }`}
      >
        {/* Gelber Trigger Balken */}
        <div 
          onClick={() => {
            setIsFooterOpen(!isFooterOpen);
            setIsHeaderOpen(false); // Header schließen, wenn Footer öffnet
          }}
          className={`h-full w-full cursor-pointer transition-colors shadow-[0_-5px_20px_rgba(250,204,21,0.2)] ${
            isFooterOpen ? 'bg-black border-t border-party-yellow/30' : 'bg-party-yellow'
          }`}
        />

        {/* Footer Inhalt */}
        <div className="absolute top-6 left-0 w-full p-10 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="text-party-yellow text-[10px] font-bold uppercase tracking-widest">Quick Access</p>
            {navLinks.slice(0, 3).map(link => (
              <a key={link.name} href={link.href} onClick={closeAll} className="block text-lg font-bold">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="text-right">
              <p className="text-gray-500 text-[10px] uppercase">Location</p>
              <p className="text-xs font-medium">Penzberg, DE</p>
            </div>
            <button 
              onClick={() => setIsFooterOpen(false)}
              className="px-6 py-2 bg-party-yellow text-black text-[10px] font-black rounded-full uppercase"
            >
              Close
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}