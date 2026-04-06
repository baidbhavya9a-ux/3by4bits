import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-24 checker-bg">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-tertiary-container text-tertiary-fixed-variant font-headline font-black uppercase text-xs rounded-full mb-6 -rotate-2">
                Season 01: The Great Compile
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Assemble Your <span className="text-primary italic">Dream Team.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 font-medium">
                Ditch the solo queue. Join the elite arena where developers
                clash, collaborate, and conquer massive technical milestones
                together.
              </p>
              <a href="/setup" className="kinetic-3d-button px-10 py-5 bg-secondary text-white font-headline font-black text-2xl rounded-xl uppercase tracking-wider flex items-center gap-4 group mx-auto md:mx-0">
                PLAY NOW
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  sports_esports
                </span>
              </a>
            </div>
            <div className="relative">
              <div className="hero-skew bg-primary rounded-xl overflow-hidden shadow-2xl rotate-3">
                <img
                  alt="Gamified developers"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLun0w5gb--TPA5ET_Y8weUgjg_pZyo1NAR9URZ_2o59-Du5rkgVCg2Uocs6Uxe44A6JLaZRwXKlQZINIZwlWK7XQtCevExFD5Zt_oO9Zhlvf8vN7qfW_5QKoqLv0O_6Q5XZU-lJboX-uCHZCIxLPY-4ivMlQG5eax0pSW4wKsrWZiG5jQVvRwdha0efXfnFEOdeoJROg5b8gMFRcjTwY62hNVckjVw0p2ESI43wwRgc1hKwCKGSu6KnrEQ5VLtJ8zGdckkYaJrhY"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>
              {/* Floating Stat UI */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-highest/90 backdrop-blur-md p-6 rounded-lg shadow-xl border-b-8 border-primary -rotate-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
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
        <section className="py-20 px-6 bg-surface-container-low">
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
              <div className="group bg-white p-8 rounded-lg shadow-[0_8px_0_0_#d9e2ff] hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden">
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
              <div className="group bg-white p-8 rounded-lg shadow-[0_8px_0_0_#d9e2ff] hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden">
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
              <div className="group bg-white p-8 rounded-lg shadow-[0_8px_0_0_#d9e2ff] hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden border-4 border-tertiary">
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

        {/* Live Arena Status & Team Hub */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              
              {/* Live Player Counter */}
              <div className="flex-1 bg-surface-container-highest rounded-3xl p-10 relative overflow-hidden border-4 border-primary chunky-shadow-primary">
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-error/10 text-error px-4 py-2 rounded-full border-2 border-error animate-pulse">
                  <span className="w-3 h-3 bg-error rounded-full block"></span>
                  <span className="font-headline font-black uppercase text-xs">LIVE</span>
                </div>
                
                <h2 className="text-xl font-headline font-black uppercase text-primary mb-2">Arena Status</h2>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-on-surface">12,482</span>
                  <span className="text-2xl font-headline font-black uppercase text-on-surface-variant">Players Online</span>
                </div>
                <p className="text-on-surface-variant max-w-md font-medium text-lg leading-relaxed mb-6">
                  The grid is buzzing. Developers from across the globe are forming teams and shipping code in real-time. Join the surge.
                </p>
                <div className="flex -space-x-4 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-surface-variant overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Active User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white font-black text-sm">
                    +2k
                  </div>
                </div>
              </div>

              {/* Team Hub / Messages Card */}
              <div className="md:w-1/3 bg-secondary-container rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group border-4 border-secondary chunky-shadow-secondary">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 rotate-3 group-hover:rotate-12 transition-transform shadow-lg backdrop-blur-md">
                    <span className="material-symbols-outlined text-4xl">forum</span>
                  </div>
                  <h3 className="text-3xl font-headline font-black text-white uppercase leading-none mb-4">Messages</h3>
                  <p className="text-white/80 font-medium text-sm leading-relaxed mb-8">
                    Your direct connection to your matched squads and pending mission invites.
                  </p>
                </div>

                <Link href="/messages" className="relative z-10 w-full kinetic-3d-button py-4 bg-white text-secondary font-headline font-black uppercase text-center rounded-xl tracking-widest shadow-[0_4px_0_0_#d9e2ff] group-hover:-translate-y-1 transition-all active:translate-y-1 active:shadow-none block">
                  JOIN ROOM
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Join the Arena */}
        <section className="py-24 px-6 checker-bg">
          <div className="max-w-4xl mx-auto bg-surface-container-lowest p-8 md:p-16 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,25,69,0.3)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-4">
                Join the <span className="italic text-primary">Arena</span>
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
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-4 focus:ring-primary/20 transition-all font-bold"
                    placeholder="Gamer_Dev_99"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-headline font-black uppercase text-xs text-primary">
                    Specialization
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-4 focus:ring-primary/20 transition-all font-bold">
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
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-4 focus:ring-primary/20 transition-all font-bold"
                  placeholder="you@arena.com"
                  type="email"
                />
              </div>
              <div className="pt-6">
                <button
                  className="kinetic-3d-button w-full py-5 bg-primary text-white font-headline font-black text-xl rounded-xl uppercase tracking-widest shadow-[0_6px_0_0_#001945]"
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
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-orange-500 z-[60] rounded-t-3xl border-t-4 border-orange-700 shadow-[0_-8px_20px_rgba(254,118,0,0.3)]">
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
          <span 
            className="text-3xl font-black italic font-headline tracking-tighter uppercase block mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
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
