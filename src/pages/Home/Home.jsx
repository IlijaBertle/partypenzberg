import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="space-y-0">
      {/* Intro Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 overflow-hidden">
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse-glow {
            0%, 100% {
              filter: drop-shadow(0 0 15px rgba(255, 224, 23, 0.3));
            }
            50% {
              filter: drop-shadow(0 0 25px rgba(255, 224, 23, 0.6));
            }
          }
          .animate-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-in-down {
            animation: slideInDown 0.8s ease-out forwards;
          }
          .animate-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .delay-1 { animation-delay: 0.1s; }
          .delay-2 { animation-delay: 0.3s; }
          .delay-3 { animation-delay: 0.5s; }
        `}</style>
        
        <div className="max-w-4xl">
          <h1 className={`text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Party <br />
            <span className="text-party-yellow shadow-party animate-glow">Penzberg</span>
          </h1>
          
          <p className={`mt-8 text-xl md:text-2xl font-light text-gray-300 max-w-xl leading-relaxed animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Die exklusivsten Events der Stadt. Keine Kompromisse, nur Bass und gute Energie für Penzberg und Umland!! 
            <span className="block mt-4 text-party-yellow font-bold uppercase tracking-widest text-sm">
              #SupportYourLocalScene
            </span>
          </p>

          <div className={`mt-12 animate-in-up delay-3 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/lineup')}
              className="bg-party-yellow text-black px-10 py-4 font-black uppercase italic hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out active:scale-95"
            >
              Nächste Events checken
            </button>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.1),transparent)]"></div>
        <div className="max-w-4xl relative z-10">
          <h2 className={`text-5xl md:text-7xl font-black italic uppercase tracking-tight text-white animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Du bist <span className="text-party-yellow">Creator?</span>
          </h2>
          
          <p className={`mt-6 text-lg md:text-xl font-light text-gray-300 max-w-2xl leading-relaxed animate-in-up delay-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Du Veranstaltest Events oder Partys?? Hier kannst du deine Events Hochladen und Penzberg und Umland erreichen!
          </p>

          <div className={`mt-10 animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/push')}
              className="bg-party-yellow text-black px-12 py-4 font-black uppercase italic hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out active:scale-95 inline-block"
            >
              Submit deine Playlist
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.2),transparent)]"></div>
        <div className="max-w-4xl relative z-10">
          <h2 className={`text-5xl md:text-6xl font-black italic uppercase tracking-tight text-white animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Wer sind wir?
          </h2>
          
          <p className={`mt-6 text-lg md:text-xl font-light text-gray-300 max-w-2xl leading-relaxed animate-in-up delay-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Lerne unsere Story kennen. Die Crew hinter den besten Events in Penzberg.
          </p>

          <div className={`mt-10 animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/aboutus')}
              className="text-party-yellow border-2 border-party-yellow px-12 py-4 font-black uppercase italic hover:bg-party-yellow hover:text-black hover:scale-110 transition-all duration-300 ease-out active:scale-95 inline-block"
            >
              Unsere Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}