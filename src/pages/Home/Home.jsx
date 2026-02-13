export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6">
      <div className="max-w-4xl">
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">
          Party <br />
          <span className="text-party-yellow shadow-party">Penzberg</span>
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl font-light text-gray-300 max-w-xl leading-relaxed">
          Die exklusivsten Events der Stadt. Keine Kompromisse, nur Bass und gute Energie. 
          <span className="block mt-4 text-party-yellow font-bold uppercase tracking-widest text-sm">
            #SupportYourLocalScene
          </span>
        </p>

        <div className="mt-12">
          <button className="bg-party-yellow text-black px-10 py-4 font-black uppercase italic hover:scale-105 transition-transform">
            Nächstes Event checken
          </button>
        </div>
      </div>
    </div>
  );
}