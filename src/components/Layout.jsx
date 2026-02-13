import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { navLinks } from '../data/links';

export default function Layout() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  const closeAll = () => {
    setIsHeaderOpen(false);
    setIsFooterOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      
      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ease-in-out border-b border-white/10 overflow-hidden ${
          isHeaderOpen ? 'h-screen bg-black' : 'h-16 bg-black/80 backdrop-blur-md'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6">
          <Link to="/" onClick={closeAll} className="font-black italic text-xl tracking-tighter">
            PARTY<span className="text-yellow-400">PENZBERG</span>
          </Link>
          
          <button onClick={() => setIsHeaderOpen(!isHeaderOpen)} className="flex flex-col gap-1.5 items-end z-[120]">
            <span className={`h-0.5 bg-yellow-400 transition-all ${isHeaderOpen ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isHeaderOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-yellow-400 transition-all ${isHeaderOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </button>
        </div>

        {/* MENÜ-INHALT: Nur sichtbar wenn Header offen ist */}
        <nav className={`flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-8 transition-opacity duration-300 ${isHeaderOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={closeAll}
              className="text-4xl font-black uppercase hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* --- CONTENT --- */}
      <main className="flex-grow pt-20">
        <Outlet /> {/* Hier landet der Inhalt der jeweiligen Seite */}
      </main>

      {/* --- FOOTER --- */}
      <footer className={`fixed bottom-0 left-0 w-full z-[100] transition-all duration-700 ${isFooterOpen ? 'h-64' : 'h-2'}`}>
        <div 
          onClick={() => { setIsFooterOpen(!isFooterOpen); setIsHeaderOpen(false); }}
          className={`h-full w-full cursor-pointer transition-colors ${isFooterOpen ? 'bg-zinc-900 border-t border-yellow-400/30' : 'bg-yellow-400'}`}
        />
        {isFooterOpen && (
          <div className="absolute top-8 left-0 w-full p-8 flex justify-between items-start">
             <div>
                <p className="text-yellow-400 text-xs font-bold uppercase mb-4">Quick Links</p>
                {navLinks.map(l => <Link key={l.name} to={l.href} onClick={closeAll} className="block mb-2 font-bold">{l.name}</Link>)}
             </div>
             <button onClick={() => setIsFooterOpen(false)} className="bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-black uppercase">Close</button>
          </div>
        )}
      </footer>
    </div>
  );
}