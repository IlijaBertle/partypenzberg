import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center relative">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orb 1 */}
        <div className="absolute top-20 left-10 floating">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Floating Orb 2 */}
        <div className="absolute bottom-20 right-10 floating-delayed">
          <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl opacity-25"></div>
        </div>

        {/* Floating Orb 3 */}
        <div className="absolute top-1/2 right-1/4 floating-slow">
          <div className="w-72 h-72 bg-gradient-to-br from-violet-500 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
      </div>

      {/* Main Content - Liquid Glass Card */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <div className="glass-card p-12 rounded-3xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent animate-fade-in">
                Welcome
              </h1>
              <p className="text-xl text-slate-300/80 animate-fade-in-delayed">
                Explore the possibilities with modern web design
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <button className="glass-button group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="glass-button-secondary">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-slate-400">Custom</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-slate-400">Creative</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-teal-400">⚡</div>
                <div className="text-sm text-slate-400">Fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom floating accent */}
      <div className="absolute bottom-8 left-8 floating-slow opacity-50 pointer-events-none">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl opacity-20"></div>
      </div>
    </div>
  )
}

export default App
