export default function Events() {
  // Beispiel-Daten für die Events
  const events = [
    { id: 1, date: '22.03.', title: 'Neon Night', loc: 'Downtown' },
    { id: 2, date: '15.04.', title: 'Bass Ground', loc: 'Warehouse' },
    { id: 3, date: '01.05.', title: 'Sunrise Rave', loc: 'Open Air' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-5xl font-black uppercase italic mb-12 border-b-4 border-party-yellow inline-block">
        Lineup
      </h2>

      <div className="grid gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="group flex items-center justify-between border-b border-white/10 py-6 hover:bg-party-yellow/5 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-8">
              <span className="text-party-yellow font-black text-2xl">{event.date}</span>
              <div>
                <h3 className="text-3xl font-bold uppercase group-hover:translate-x-2 transition-transform">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{event.loc}</p>
              </div>
            </div>
            <div className="text-party-yellow opacity-0 group-hover:opacity-100 transition-opacity font-black text-xl">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}