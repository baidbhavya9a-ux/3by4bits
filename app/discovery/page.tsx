export default function DiscoveryPage() {
  return (
    <>

      <div className="flex min-h-screen pt-20">
        {/* Side Navigation (Web) */}
        <aside className="h-screen w-64 border-r-8 border-slate-200 hidden md:flex flex-col py-8 bg-slate-100 sticky top-20">
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white chunky-shadow-primary">
                <span className="material-symbols-outlined">sports_esports</span>
              </div>
              <div>
                <div className="font-headline font-black text-sm uppercase text-primary">
                  Level 24
                </div>
                <div className="text-xs uppercase font-bold text-slate-500">
                  Elite Coder
                </div>
              </div>
            </div>
          </div>
          <nav className="space-y-4 px-4">
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl transition-transform hover:scale-105"
              href="#"
            >
              <span className="material-symbols-outlined">sports_esports</span>
              <span className="font-headline font-bold uppercase text-sm">
                Lobby
              </span>
            </a>
            <a
              className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl shadow-[0_4px_0_0_rgba(0,25,69,1)] transition-transform hover:scale-105"
              href="#"
            >
              <span className="material-symbols-outlined">groups</span>
              <span className="font-headline font-bold uppercase text-sm">
                Team Finder
              </span>
            </a>
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl transition-transform hover:scale-105"
              href="#"
            >
              <span className="material-symbols-outlined">event_note</span>
              <span className="font-headline font-bold uppercase text-sm">
                Events
              </span>
            </a>
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl transition-transform hover:scale-105"
              href="#"
            >
              <span className="material-symbols-outlined">forum</span>
              <span className="font-headline font-bold uppercase text-sm">
                Messages
              </span>
            </a>
          </nav>
          <div className="mt-auto px-4 pb-12">
            <button className="w-full py-4 bg-secondary text-white font-headline font-black rounded-xl chunky-shadow-secondary active-press uppercase tracking-widest text-sm">
              NEW MISSION
            </button>
          </div>
        </aside>

        {/* Main Character Select Canvas */}
        <main className="flex-1 px-4 md:px-12 py-8 pb-32">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-headline font-black uppercase text-on-surface italic tracking-tighter mb-2">
              Select Your Partner
            </h1>
            <p className="font-body font-bold text-primary flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-outlined">radar</span>
              SCANNING FOR ELITE TALENT...
            </p>
          </header>

          <div className="max-w-4xl mx-auto relative">
            {/* Swipe Indicators */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 opacity-30">
              <span className="material-symbols-outlined text-4xl">
                keyboard_double_arrow_left
              </span>
              <span className="font-headline font-black text-xs uppercase">
                SKIP
              </span>
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 opacity-30 text-primary">
              <span className="material-symbols-outlined text-4xl">
                keyboard_double_arrow_right
              </span>
              <span className="font-headline font-black text-xs uppercase">
                SELECT
              </span>
            </div>

            {/* Character Card */}
            <div className="relative bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border-b-[12px] border-primary tilted-left hover:rotate-0 transition-transform duration-500 group">
              <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
                {/* Character Portrait */}
                <div className="w-full lg:w-1/2 relative bg-surface-container-highest overflow-hidden">
                  <img
                    alt="Full stack developer candidate"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhgENMeVVr5iVmQaKNsCwxvuTc9VhkDWg_HimHg-PXaeviLlME7gPjXqzAnQPsVRFGeurnK05S8GhRoe47a2fFPncA5LcVENhJ1LoTPZRAo_axV6vM89B3uiPaITVszKcFc0fQv2kH0iu59eotMrsbxZhyfANn3mm5iH0U1y4Q649vEvqIn5m1ZzoDoV3j5KO7ff3smYxUmOx8MmK2anHeB2LqGIi_WJYsgwpZ0ncF4snu4FSNRvzwqsWn8_EwCb1BRFKopTRwr4E"
                  />
                  {/* Overlay Stats */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    <div className="bg-tertiary text-white px-4 py-2 rounded-full font-headline font-black text-xl italic chunky-shadow-secondary flex items-center gap-2">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        bolt
                      </span>
                      98% MATCH
                    </div>
                  </div>
                </div>

                {/* Character Details */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-4xl font-headline font-black uppercase text-on-surface">
                          Alex Rivera
                        </h2>
                        <p className="text-primary font-headline font-black text-sm italic">
                          SYSTEM ARCHITECT | LVL 42
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center text-primary transform rotate-12">
                        <span className="material-symbols-outlined text-3xl">
                          terminal
                        </span>
                      </div>
                    </div>

                    <div className="glass-panel p-6 rounded-lg mb-8 border-l-4 border-primary">
                      <p className="text-on-surface-variant font-medium leading-relaxed">
                        "Optimizing distributed systems like it's a speedrun. I
                        don't just write code; I orchestrate digital
                        symphonies. Looking for a duo to crush the upcoming
                        Global Hackathon."
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-headline font-black text-xs uppercase tracking-widest text-slate-400">
                        Special Skills
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-headline font-black text-xs uppercase transform -rotate-2">
                          Rust Expert
                        </span>
                        <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-headline font-black text-xs uppercase transform rotate-1">
                          Kubernetes
                        </span>
                        <span className="px-4 py-2 bg-tertiary-container text-on-tertiary-container rounded-lg font-headline font-black text-xs uppercase transform -rotate-1">
                          Web3 Guru
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Controls */}
                  <div className="mt-12 flex gap-4">
                    <button className="flex-1 py-5 bg-surface-container-high text-on-surface-variant font-headline font-black rounded-xl border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-tighter">
                      SKIP
                    </button>
                    <a
                      href="/victory"
                      className="flex-[2] py-5 bg-primary text-white font-headline font-black rounded-xl chunky-shadow-primary active-press uppercase tracking-tighter flex items-center justify-center gap-3 text-lg"
                    >
                      <span className="material-symbols-outlined">
                        person_add
                      </span>
                      REQUEST TEAM
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Stack Effect (Background cards) */}
            <div className="absolute -bottom-4 left-4 right-4 h-12 bg-surface-container-high -z-10 rounded-xl opacity-50 tilted-right"></div>
            <div className="absolute -bottom-8 left-8 right-8 h-12 bg-surface-container-highest -z-20 rounded-xl opacity-20"></div>
          </div>

          {/* Dashboard Mini-Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-tertiary transform hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <div>
                  <div className="text-xs font-headline font-black text-slate-400 uppercase">
                    Season Rank
                  </div>
                  <div className="text-2xl font-headline font-black">
                    Diamond Tier
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-secondary transform hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-secondary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  speed
                </span>
                <div>
                  <div className="text-xs font-headline font-black text-slate-400 uppercase">
                    Daily Boost
                  </div>
                  <div className="text-2xl font-headline font-black">
                    2.5x XP Active
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-primary transform hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  group
                </span>
                <div>
                  <div className="text-xs font-headline font-black text-slate-400 uppercase">
                    Squad Invites
                  </div>
                  <div className="text-2xl font-headline font-black">
                    12 Requests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-orange-500 rounded-t-3xl z-[60] shadow-[0_-8px_20px_rgba(254,118,0,0.3)] border-t-4 border-orange-700">
        <a
          className="flex flex-col items-center text-orange-100 hover:brightness-110 active:translate-y-1 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">assignment</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Mission Log
          </span>
        </a>
        <a
          className="flex flex-col items-center bg-white/20 rounded-full px-6 py-2 scale-110 text-white hover:brightness-110 active:translate-y-1 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">speed</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Active Boost
          </span>
        </a>
        <a
          className="flex flex-col items-center text-orange-100 hover:brightness-110 active:translate-y-1 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">workspace_premium</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Rewards
          </span>
        </a>
      </nav>
    </>
  );
}
