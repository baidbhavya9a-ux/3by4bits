import Image from "next/image";

export default function Home() {
  return (
    <>

      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-24 checker-bg">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-primary/20 text-primary border border-primary/30 font-headline font-black uppercase text-xs rounded-full mb-6 -rotate-2 backdrop-blur-md">
                Protocol 01: The Great Compile
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] mb-8">
                ASSEMBLE YOUR <br/> <span className="text-primary italic">DREAM TEAM.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 font-medium border-l-2 border-primary/40 pl-6">
                Termination of solo queue imminent. Access the elite arena where developers
                clash, sync, and dominate the digital landscape together.
              </p>
              <a href="/setup" className="kinetic-3d-button !border-0 px-8 py-5 bg-secondary text-white font-headline font-black text-2xl rounded-xl uppercase tracking-wider inline-flex w-fit items-center gap-4 group mx-auto md:mx-0">
                TEAM UP
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  sports_esports
                </span>
              </a>
            </div>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(77,143,240,0.3)] border-2 border-primary/30">
                <img
                  alt="Gamified developers"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLun0w5gb--TPA5ET_Y8weUgjg_pZyo1NAR9URZ_2o59-Du5rkgVCg2Uocs6Uxe44A6JLaZRwXKlQZINIZwlWK7XQtCevExFD5Zt_oO9Zhlvf8vN7qfW_5QKoqLv0O_6Q5XZU-lJboX-uCHZCIxLPY-4ivMlQG5eax0pSW4wKsrWZiG5jQVvRwdha0efXfnFEOdeoJROg5b8gMFRcjTwY62hNVckjVw0p2ESI43wwRgc1hKwCKGSu6KnrEQ5VLtJ8zGdckkYaJrhY"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] animate-scan"></div>
              </div>
              {/* Floating Stat UI */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-high/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-primary/30 animate-float -rotate-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white shadow-glow-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-headline font-black uppercase text-primary">
                      Active Arena
                    </div>
                    <div className="text-2xl font-headline font-black">
                      12,482 PLAYERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Class */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter">
                  Choose Your <span className="text-primary">Class</span>
                </h2>
                <div className="w-32 h-2 bg-secondary mt-2 rounded-full"></div>
              </div>
              <p className="text-on-surface-variant max-w-md font-medium">
                Select your specialized path to unlock unique mission bonuses
                and arena perks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="group p-8 rounded-2xl glass-card hover-tilt cursor-pointer relative overflow-hidden border border-primary/20">
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-xl"></div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">
                    html
                  </span>
                </div>
                <div className="w-16 h-16 bg-primary-container rounded-lg mb-6 flex items-center justify-center text-white rotate-3 group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    brush
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-black uppercase mb-4">
                  Frontend Knight
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Master the visual realm. Deploy high-fidelity interfaces and
                  pixel-perfect responsiveness.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    Tailwind
                  </span>
                </div>
              </div>
              {/* Backend */}
              <div className="group p-8 rounded-2xl glass-card hover-tilt cursor-pointer relative overflow-hidden border border-secondary/20">
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-secondary/40 rounded-tr-xl"></div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">
                    database
                  </span>
                </div>
                <div className="w-16 h-16 bg-secondary rounded-lg mb-6 flex items-center justify-center text-white -rotate-3 group-hover:-rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    terminal
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-black uppercase mb-4">
                  Backend Titan
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  The architecture of the arena. Scale databases and orchestrate
                  cloud infrastructure.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    Postgres
                  </span>
                </div>
              </div>
              {/* AI */}
              <div className="group p-8 rounded-2xl glass-card hover-tilt cursor-pointer relative overflow-hidden border-2 border-tertiary/20">
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-tertiary/40 rounded-tr-xl"></div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">
                    neurology
                  </span>
                </div>
                <div className="w-16 h-16 bg-tertiary rounded-lg mb-6 flex items-center justify-center text-white rotate-6 group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    psychology
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-black uppercase mb-4">
                  AI Alchemist
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  The future-shaper. Build LLM integrations and predictive
                  models to dominate the leaderboard.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase rounded-full">
                    PyTorch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Missions (Bento Grid) */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter inline-block relative">
                Protocol Missions
                <span className="absolute -top-6 -right-12 bg-primary text-white text-[10px] px-3 py-1 rounded-sm italic animate-pulse">
                  SYSTEM ACTIVE
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
              {/* Big Mission */}
              <div className="md:col-span-2 md:row-span-2 bg-inverse-surface rounded-2xl p-8 relative overflow-hidden group chunky-border hover:shadow-glow-primary transition-all">
                <img
                  alt="Cyberpunk Arena"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvVkDYEJ6aX84scUi5hEO84aGZkA7c2YgSy5Bo_z3cu7vZ3jVjdzWWd92l8pJIFeiF31yKDRpLjhS8BLRGzQjXJu7i7iQSRDTDTEk95cXbQ_YXFVS1ojNQr7PUOEOvK99UUprzJ8Npsjg7NpY57Qs69YAwrZ6T7x7Pwcrm9kOI0RoErakmMX2p0t7CJEss_jq0QdiQp9DGgE_Xxwjrck6e83LRfvSPDb-gzxPhsYIvzDKL6KG0d9hoMsqUd49Hg3bDCNBGrxno68k"
                />
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary px-3 py-1 rounded text-white text-[10px] font-black uppercase">
                      GLOBAL BOSS
                    </span>
                    <span className="text-primary-container font-headline font-bold">
                      ENDS IN 12H
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-4 leading-none">
                    The Distributed Ledger Raid
                  </h3>
                  <p className="text-surface-variant mb-8 text-sm max-w-sm">
                    Synchronize 1,000 nodes across 5 continents to unlock the
                    'Genesis Block' trophy.
                  </p>
                  <button className="kinetic-3d-button-dark self-start px-6 py-3 bg-white text-primary font-headline font-black uppercase text-sm rounded-lg">
                    JOIN RAID
                  </button>
                </div>
              </div>
              {/* Small Mission 1 */}
              <div className="md:col-span-2 bg-secondary-container rounded-2xl p-6 relative overflow-hidden chunky-border hover:shadow-glow-secondary transition-all">
                <div className="flex justify-between items-start">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-headline font-black text-white uppercase mb-2">
                      CSS Speedrun
                    </h4>
                    <p className="text-on-secondary-container text-xs font-bold uppercase mb-4">
                      Reward: +500 XP
                    </p>
                    <button className="kinetic-3d-button-dark px-4 py-2 bg-on-secondary-container text-white rounded-lg text-[10px] font-black uppercase">
                      ENTER QUALIFIERS
                    </button>
                  </div>
                  <span className="material-symbols-outlined text-white/20 text-7xl -rotate-12">
                    bolt
                  </span>
                </div>
              </div>
              {/* Small Mission 2 */}
              <div className="bg-surface-container-high/40 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover-tilt group">
                <span
                  className="material-symbols-outlined text-primary text-4xl group-hover:animate-pulse"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <div>
                  <h4 className="font-headline font-black uppercase text-primary leading-tight">
                    Bug Bounty Blitz
                  </h4>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase mt-1">
                    12 Slots Remaining
                  </p>
                </div>
              </div>
              {/* Small Mission 3 */}
              <div className="bg-tertiary-container/30 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between border-b-8 border-on-tertiary-container chunky-border hover-tilt">
                <span className="material-symbols-outlined text-on-tertiary-container text-4xl">
                  event_note
                </span>
                <div>
                  <h4 className="font-headline font-black uppercase text-on-tertiary-container leading-tight">
                    AI Hack Night
                  </h4>
                  <p className="text-[10px] font-bold text-on-tertiary-container/70 uppercase mt-1">
                    Starts Tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Arena */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto bg-surface-container-high/30 backdrop-blur-2xl p-8 md:p-16 rounded-3xl border border-primary/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-4">
                Join the <span className="text-primary">Arena</span>
              </h2>
              <p className="text-on-surface-variant font-medium">
                Claim your handle and start your climb to legendary status.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-headline font-black uppercase text-xs text-primary">
                    Callsign (Username)
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-2 border-primary/20 rounded-xl p-4 focus:border-primary transition-all font-bold outline-none text-foreground"
                    placeholder="Gamer_Dev_99"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-headline font-black uppercase text-xs text-primary">
                    Specialization
                  </label>
                  <select className="w-full bg-surface-container-low border-2 border-primary/20 rounded-xl p-4 focus:border-primary transition-all font-bold outline-none text-foreground appearance-none">
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>AI/ML</option>
                    <option>DevOps</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-headline font-black uppercase text-xs text-primary">
                  Email Link
                </label>
                <input
                  className="w-full bg-surface-container-low border-2 border-primary/20 rounded-xl p-4 focus:border-primary transition-all font-bold outline-none text-foreground"
                  placeholder="you@arena.com"
                  type="email"
                />
              </div>
              <div className="pt-6">
                <button
                  className="kinetic-3d-button-dark w-full py-5 bg-primary text-white font-headline font-black text-xl rounded-xl uppercase tracking-widest"
                  type="submit"
                >
                  INITIALIZE ACCOUNT
                </button>
              </div>
            </form>
            <p className="mt-8 text-center text-xs font-bold text-on-surface-variant/60 uppercase">
              By entering, you agree to the Arena Rules of Engagement.
            </p>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-surface-container-highest/95 backdrop-blur-xl z-[60] rounded-t-3xl border-t border-primary/30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a
          className="flex flex-col items-center bg-white/20 rounded-full px-6 py-2 scale-110"
          href="#"
        >
          <span className="material-symbols-outlined text-white">
            assignment
          </span>
          <span className="font-headline font-black uppercase text-[10px] text-white">
            Mission Log
          </span>
        </a>
        <a className="flex flex-col items-center text-orange-100" href="#">
          <span className="material-symbols-outlined">speed</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Active Boost
          </span>
        </a>
        <a className="flex flex-col items-center text-orange-100" href="#">
          <span className="material-symbols-outlined">workspace_premium</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Rewards
          </span>
        </a>
      </nav>

      {/* Footer */}
      <footer className="bg-on-surface py-12 px-6 text-white text-center pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-3xl font-black italic font-headline tracking-tighter uppercase block mb-6">
            DevMatch Collab
          </span>
          <div className="flex justify-center gap-8 mb-8">
            <a
              className="text-surface-variant hover:text-white transition-colors uppercase font-headline font-black text-xs"
              href="#"
            >
              Discord
            </a>
            <a
              className="text-surface-variant hover:text-white transition-colors uppercase font-headline font-black text-xs"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-surface-variant hover:text-white transition-colors uppercase font-headline font-black text-xs"
              href="#"
            >
              Twitch
            </a>
          </div>
          <p className="text-surface-variant/40 text-[10px] font-bold uppercase tracking-widest">
            © 2024 DevMatch Arena. All Rights Reserved. Stay High-Octane.
          </p>
        </div>
      </footer>
    </>
  );
}
