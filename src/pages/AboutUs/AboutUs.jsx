import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const team = [
    {
      role: 'Founder',
      description: 'Founder bin ich 15, Penzberger und Supercool'
    },
    {
      role: 'Sound Engineer',
      description: 'Bin ich by the way auch...'
    },
    {
      role: 'Community Manager',
      description: 'Ja. Ich kümmere mich auch um die Community. Also um mich...'
    },
    {
      role: 'Event Organizer',
      description: 'Äh... Nein das bin nicht ich das seid ihr! (Also ich schon auch)'
    }
  ];

  return (
    <div className="overflow-hidden">
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
        .animate-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.5s; }
        .delay-4 { animation-delay: 0.7s; }
        .delay-5 { animation-delay: 0.9s; }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 bg-gradient-to-b from-black via-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.1),transparent)]"></div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className={`text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none text-white animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Ich, <br />
            <span className="text-party-yellow">der Entwickler</span>
          </h1>
          
          <p className={`mt-8 text-xl md:text-2xl font-light text-gray-300 max-w-2xl leading-relaxed animate-in-up delay-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Gegründet habe ich PartyPenzberg.de, weil mir sehr langweilig war oder so... Und ich wollte etwas cooles für Penzberg machen. Also hab ich einfach losgelegt, ohne Plan, ohne Ahnung, aber mit viel Kaffee.
          </p>

          <div className={`mt-12 animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="text-party-yellow font-black text-sm uppercase tracking-widest">
                Gegründet 2025
              </span>
              <p className="text-gray-400 text-sm mt-2">Ein Versprechen: Dieser text nich von KI!!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.2),transparent)]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-5xl md:text-6xl font-black italic uppercase tracking-tight text-white mb-16 animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            About ME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`p-8 border-2 border-party-yellow hover:bg-party-yellow hover:bg-opacity-5 transition-all duration-300 animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <h3 className="text-2xl md:text-3xl font-black italic uppercase text-party-yellow mb-4">
                  {member.role}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.15),transparent)]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className={`text-5xl md:text-6xl font-black italic uppercase tracking-tight text-white mb-10 animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Meine Mission
          </h2>

          <div className="space-y-8">
            <div className={`animate-in-up delay-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-black text-party-yellow uppercase mb-3 italic">Support Local Scene</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ich glauben an lokale Talente und lokale Bewegungen. (An mich übrigesns nur ein bisschen...)
              </p>
            </div>

            <div className={`animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-black text-party-yellow uppercase mb-3 italic">Quality Over Everything</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Weiß nichmal was das heißt... hat ChatGPT geschrieben
              </p>
            </div>

            <div className={`animate-in-up delay-3 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-black text-party-yellow uppercase mb-3 italic">Community First</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hört sich voll gut an oder? Hab ich auch von KI... Aber klingt halt nice, oder?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,224,23,0.1),transparent)]"></div>
        
        <div className="max-w-4xl relative z-10">
          <h2 className={`text-4xl md:text-5xl font-black italic uppercase tracking-tight text-white mb-8 animate-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Bereit für <span className="text-party-yellow">die nächste Party?</span>
          </h2>

          <p className={`text-xl text-gray-300 mb-10 animate-in-up delay-1 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Dann nutze gefälligst meine Seite, um immer auf dem Laufenden zu bleiben. Und wenn du selbst was cooles am Start hast, lass es mich wissen! (Aber bitte keine KI-generierten Texte mehr... Das hier ist echt, versprochen!)
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 animate-in-up delay-2 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-party-yellow font-bold text-sm uppercase tracking-widest">
              #SupportYourLocalScene
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}