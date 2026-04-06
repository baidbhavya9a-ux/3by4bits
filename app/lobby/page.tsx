"use client";

import Link from "next/link";

export default function LobbyPage() {
  return (
    <main className="min-h-screen pt-24 px-6 pb-20 checker-bg bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Level 1 Explorer Dashboard Header */}
        <header className="w-full flex flex-col md:flex-row justify-between items-center mb-16 gap-8 bg-white p-8 rounded-2xl border-b-8 border-primary chunky-shadow">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full border-4 border-primary p-1 bg-surface-container-high overflow-hidden shadow-lg relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXd2VGhLGFwfl7n2yD0bazNKXKCINaYkI8YCuZgdhj_OQ4vRJ0KeLzVQYhmnKpyaGVq1j8G1F_cTS2vCSXXLHxkQJIgCqcZFepvYRs94ENdsCYxxD6Ug1JY_vqfoQ9YzLuXqjQxePFSt4tBx6-t8Ib7PvnSiFay77vV3pTQjrVOQT4yxhRxMnseoHUO9MclEty393ynkUr7kcxqEhg2MstrBLHxCrwJar80yi-M5GcqH4Am-QBkp2xaOqKovU07jX2ck7_n2iga8"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-white text-[10px] font-black p-2 rounded-full chunky-shadow-secondary leading-none">
                LVL 1
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-headline font-black uppercase text-on-surface">
                Explorer_Dev
              </h1>
              <p className="text-sm font-bold text-primary italic uppercase tracking-widest">
                Level 1 Explorer — Initializing Story
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="px-6 py-3 bg-surface-container-high rounded-xl border-l-4 border-secondary text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">
                ARENA XP
              </p>
              <p className="text-xl font-headline font-black text-secondary">
                0 / 100
              </p>
            </div>
            <div className="px-6 py-3 bg-surface-container-high rounded-xl border-l-4 border-primary text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase">
                BADGES
              </p>
              <p className="text-xl font-headline font-black text-primary">0</p>
            </div>
          </div>
        </header>

        {/* Action Center: Glowing Pulse Button */}
        <section className="flex flex-col items-center justify-center p-12 md:p-24 bg-white/40 backdrop-blur-xl rounded-[3rem] border-4 border-dashed border-primary/20 relative overflow-hidden w-full text-center">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter italic text-center drop-shadow-sm leading-tight">
              ARENA IS <span className="text-primary">LIVE.</span> <br />
              <span className="text-secondary">READY FOR DEPLOYMENT?</span>
            </h2>

            <div className="relative group mx-auto w-fit">
              {/* Animated Glowing Ring Effect */}
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all scale-150 group-hover:scale-175 duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-ring"></div>

              <Link
                href="/discovery"
                className="relative flex flex-col items-center justify-center w-80 h-80 bg-primary text-white rounded-full chunky-shadow-primary border-4 border-on-surface active-press transition-all hover:scale-105"
              >
                <span className="material-symbols-outlined text-7xl mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  radar
                </span>
                <span className="text-2xl font-headline font-black uppercase tracking-widest text-center px-12 leading-none">
                  SEARCHING FOR ELITE TALENT...
                </span>
              </Link>
            </div>

            <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm animate-pulse">
              Join a Team to start your mission.
            </p>
          </div>

          {/* Decorative background scans */}
          <div className="absolute top-0 right-0 w-64 h-64 border-r-4 border-t-4 border-primary/10 rounded-tr-[3rem]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border-l-4 border-b-4 border-secondary/10 rounded-bl-[3rem]"></div>
        </section>

        {/* Task Log (Empty State) */}
        <div className="w-full mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/60 p-6 rounded-2xl border-l-8 border-tertiary shadow-lg opacity-60">
            <p className="text-[10px] font-black uppercase text-slate-400">
              Active Quest
            </p>
            <p className="font-bold text-on-surface italic mt-1">
              "First Impressions" — [COMPLETE ONBOARDING]
            </p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl border-l-8 border-slate-300 shadow-lg opacity-40">
            <p className="text-[10px] font-black uppercase text-slate-400">
              Locked Mission
            </p>
            <p className="font-bold text-on-surface italic mt-1 font-mono">
              [LOCKED]
            </p>
          </div>
          <div className="bg-white/60 p-6 rounded-2xl border-l-8 border-slate-300 shadow-lg opacity-40">
            <p className="text-[10px] font-black uppercase text-slate-400">
              Locked Mission
            </p>
            <p className="font-bold text-on-surface italic mt-1 font-mono">
              [LOCKED]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
