"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, loginWithGoogle, loginWithGithub } = useAuth();
  const router = useRouter();

  // If user is already logged in, we can optionally redirect or just let them stay
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
              <div className="pt-6 space-y-4">
                <button
                  className="kinetic-3d-button-dark w-full py-5 bg-primary text-white font-headline font-black text-xl rounded-xl uppercase tracking-widest hover:brightness-110 active:translate-y-1 transition-all"
                  type="submit"
                >
                  INITIALIZE ACCOUNT
                </button>
                
                <div className="flex items-center gap-4 py-2">
                  <div className="h-[1px] flex-1 bg-primary/10"></div>
                  <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">OR SECURE ACCESS VIA</span>
                  <div className="h-[1px] flex-1 bg-primary/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={async () => {
                      await loginWithGoogle();
                      router.push('/setup');
                    }}
                    id="google-btn"
                    className="flex-1 py-4 bg-white text-slate-700 border-2 border-slate-200 font-headline font-black text-xs rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:translate-y-1 active:shadow-none"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    GOOGLE
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      await loginWithGithub();
                      router.push('/setup');
                    }}
                    className="flex-1 py-4 bg-slate-800 text-white border-2 border-slate-700 font-headline font-black text-xs rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-900 transition-all shadow-sm active:translate-y-1 active:shadow-none"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GITHUB
                  </button>
                </div>
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
