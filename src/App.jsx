import { useRef } from 'react';
import './App.css';

function App() {
  const containerRef = useRef(null);

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fester Hintergrund - bleibt beim Scrollen */}
      <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none">
        {/* Raster */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        
        {/* Dynamische Formen */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Scrollbarer Content */}
      <div 
        ref={containerRef}
        className="relative w-screen h-screen overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory no-scrollbar text-white"
      >
        
        {/* SCREEN 1: User */}
        <section className="w-screen h-screen flex-shrink-0 snap-center flex items-center justify-center">
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <div className="glass-card p-10 rounded-2xl border-t-4 border-yellow-400">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                PARTY<span className="text-yellow-400">PENZBERG</span>
              </h1>
              <p className="text-slate-400 text-xl mb-8">
                Wo geht heute was? Alle Events auf einen Blick.
              </p>
              
              <button className="btn-neon w-full py-4 rounded-xl text-lg mb-4 flex items-center justify-center gap-2 group">
                Zu den Events
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <div className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2 animate-bounce cursor-pointer" onClick={scrollNext}>
                <span>Veranstalter? Wisch nach links</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 2: Veranstalter */}
        <section className="w-screen h-screen flex-shrink-0 snap-center flex items-center justify-center">
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <div className="glass-card p-10 rounded-2xl border-r-4 border-yellow-400">
              <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">
                Für <span className="text-yellow-400">Veranstalter</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Deine Party verdient ein volles Haus. 
                Trag dein Event kostenlos ein und erreiche ganz Penzberg.
              </p>

              <div className="grid gap-4">
                <button className="btn-neon w-full py-4 rounded-xl text-lg">
                  Event eintragen
                </button>
                <button className="btn-ghost w-full py-3 rounded-xl">
                  Login für Partner
                </button>
              </div>
              
              <div className="text-sm text-slate-500 mt-6 flex items-center justify-center gap-2 cursor-pointer" onClick={scrollNext}>
                <span>Wer steckt dahinter?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 3: About */}
        <section className="w-screen h-screen flex-shrink-0 snap-center flex items-center justify-center">
          <div className="relative z-10 px-4 max-w-4xl w-full">
            <div className="glass-card p-8 md:p-14 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center gap-10">
              
              <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-gradient-to-tr from-yellow-400 via-yellow-500 to-amber-600 rounded-full p-1 shadow-2xl shadow-yellow-900/40">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-4xl">👋</span>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  ABOUT <span className="text-yellow-400">US</span>
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Wir sind ein kleines Team aus Penzberg. Wir lieben gute Partys, aber hassen es, nicht zu wissen, wo sie steigen. Deshalb gibt es jetzt diese Plattform.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-sm">Community First</span>
                  <span className="px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-sm">Non-Profit</span>
                  <span className="px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-sm">Penzberg Only</span>
                </div>

                <button className="btn-ghost w-full md:w-auto px-8 py-3 rounded-xl mt-2">
                  Kontakt aufnehmen
                </button>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App