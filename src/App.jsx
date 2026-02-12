// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col">
      
      {/* 1. FULLSCREEN INTRODUCTION AREA */}
      <section className="h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Multi-Layer Hintergrund-Deko für mehr Tiefe */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-party-pink/20 blur-[140px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-party-purple/15 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-party-yellow/10 blur-[80px] rounded-full -z-10"></div>
        
        <div className="space-y-3 mb-10">
          <p className="text-party-yellow font-black tracking-[0.3em] text-[10px] uppercase animate-pulse">
            Welcome to the Vibe
          </p>
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter leading-[0.85]">
            WILLKOMMEN AUF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-party-pink to-party-purple animate-gradient">
              PARTYPENZBERG.DE
            </span>
          </h1>
        </div>

        <p className="text-gray-400 text-sm max-w-[320px] mb-12 leading-relaxed font-medium">
          Deine Zentrale für die exklusivsten Nächte und die krassesten Beats der Stadt.
        </p>

        {/* Upgraded Action Button zu "Upcoming Events" */}
        <a 
          href="/lineup"
          className="group relative inline-flex items-center justify-center mb-4"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-party-pink via-party-purple to-party-yellow rounded-full blur-lg opacity-40 group-hover:opacity-70 group-active:opacity-90 transition-all duration-300"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-party-pink to-party-purple text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl group-hover:shadow-party-pink/50 transition-all duration-300 group-hover:scale-105 group-active:scale-95">
            <span className="flex items-center gap-3">
              Upcoming Events
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </a>

        {/* Kleiner Scroll-Indikator unten mit Animation */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. FEATURE GRID - Kompakte Boxen */}
      <section className="px-6 py-12 grid grid-cols-2 gap-4">
        
        {/* Box: Veranstalter - Kompakt */}
        <div className="relative group overflow-hidden rounded-2xl aspect-square flex flex-col justify-end p-5 border border-white/10 bg-gradient-to-br from-party-purple/20 via-black to-black hover:border-party-purple/40 transition-all duration-500">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-party-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-party-purple/20 backdrop-blur-sm border border-party-purple/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <svg className="w-5 h-5 text-party-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          
          <div className="relative z-10 space-y-2">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white group-hover:text-party-purple transition-colors">
              Veranstalter?
            </h3>
            <a 
              href="/push" 
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-party-purple uppercase tracking-widest group-hover:gap-2 transition-all"
            >
              Event pushen
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        {/* Box: About Us - Kompakt */}
        <div className="relative group overflow-hidden rounded-2xl aspect-square flex flex-col justify-end p-5 border border-white/10 bg-gradient-to-br from-party-pink/20 via-black to-black hover:border-party-pink/40 transition-all duration-500">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-party-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-party-pink/20 backdrop-blur-sm border border-party-pink/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
            <svg className="w-5 h-5 text-party-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          
          <div className="relative z-10 space-y-2">
            <h3 className="text-lg font-black italic uppercase tracking-tighter text-white group-hover:text-party-pink transition-colors">
              Our Story
            </h3>
            <a 
              href="/aboutus" 
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-party-pink uppercase tracking-widest group-hover:gap-2 transition-all"
            >
              Mehr erfahren
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;