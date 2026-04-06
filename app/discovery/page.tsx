"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const MOCK_PARTNERS = [
  {
    name: "Arjun Mehta",
    role: "System Architect",
    lvl: 42,
    sync: 98,
    quote: "Optimizing distributed systems like it's a speedrun. I don't just write code; I orchestrate digital symphonies.",
    skills: ["Rust Expert", "Kubernetes", "Web3 Guru"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhgENMeVVr5iVmQaKNsCwxvuTc9VhkDWg_HimHg-PXaeviLlME7gPjXqzAnQPsVRFGeurnK05S8GhRoe47a2fFPncA5LcVENhJ1LoTPZRAo_axV6vM89B3uiPaITVszKcFc0fQv2kH0iu59eotMrsbxZhyfANn3mm5iH0U1y4Q649vEvqIn5m1ZzoDoV3j5KO7ff3smYxUmOx8MmK2anHeB2LqGIi_WJYsgwpZ0ncF4snu4FSNRvzwqsWn8_EwCb1BRFKopTRwr4E",
    icon: "terminal",
    color: "primary"
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Specialist",
    lvl: 24,
    sync: 85,
    quote: "Design is not what it looks like, it's how it works. I specialize in high-conversion, pixel-perfect interfaces.",
    skills: ["Figma Pro", "Next.js", "Tailwind"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmKDmmxob1zdeYcAfi9y_hOW93VR1xJs9_J192dscBqWoeV3X0fl-RTJA9HbimHaOeOfrdsUtOgngymSPjmZ-i3_r1yf5FvXXF-UDiwzi7F3gEymOwQ8tF6WcJ3v9Kac-mvrBV51Wft4WdIlg7QcomLUlTRGCyzoHTnHHO-sVL_Lf_lje1YVqDK21Ys8QI8oKjPCEs-GU6wKLRMTAOUcmTH483ekq0QPkYiVf4lOCESMZ7uFYT6Fpc7tf89sQ0MyzEHGgqN4qsx2s",
    icon: "palette",
    color: "secondary"
  },
  {
    name: "Ananya Iyer",
    role: "AI Alchemist",
    lvl: 31,
    sync: 89,
    quote: "Data is the new oil, and I'm the refinement plant. Let's build models that change how we interact with the web.",
    skills: ["PyTorch", "NLP", "FastAPI"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLun0w5gb--TPA5ET_Y8weUgjg_pZyo1NAR9URZ_2o59-Du5rkgVCg2Uocs6Uxe44A6JLaZRwXKlQZINIZwlWK7XQtCevExFD5Zt_oO9Zhlvf8vN7qfW_5QKoqLv0O_6Q5XZU-lJboX-uCHZCIxLPY-4ivMlQG5eax0pSW4wKsrWZiG5jQVvRwdha0efXfnFEOdeoJROg5b8gMFRcjTwY62hNVckjVw0p2ESI43wwRgc1hKwCKGSu6KnrEQ5VLtJ8zGdckkYaJrhY",
    icon: "psychology",
    color: "tertiary"
  },
  {
    name: "Ishaan Malhotra",
    role: "Fullstack Wizard",
    lvl: 65,
    sync: 96,
    quote: "Why choose between the front and back when you can master the entire stack? I build unicorns for breakfast.",
    skills: ["T3 Stack", "Postgres", "Deno"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwUsC7kdWgTLlBCLZLz43DWwwXm-iblHD5YFfMwiQWArwhBhiLhb3JojrkyhAsGeZO9Ml1xUPyS_IiFmLE_fwV3OPwuaiooD9bv-BkQ-9TOLIzL6f2V2ENQ13QHrwvgkwn565f7c0pbBhFKF6CT5EraAW6u_SF3oxV1SCxURu0qosEoDNCIMrLJ6XXetEEALtBi9OYtrA8hlB0SsmLyMFleOqUrbBh5XK9ZuO6XMqPo9ex9iI59xAOkPYBZEdakDffa43LhT8j1Qs",
    icon: "auto_fix_high",
    color: "primary"
  },
  {
    name: "Kaveri Das",
    role: "Cloud Titan",
    lvl: 44,
    sync: 91,
    quote: "Uptime is my religion. I scale infrastructures until they're bulletproof and lightning fast.",
    skills: ["AWS", "Terraform", "Docker"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPhKRUhZs1dQrde4WNC2c3lTaBauJv7tfXjZgCghtmKhcxJ1mAXgVjcGVNkCDq1Bm9M-l38ycrjU6RWwk4PJhV1NhAVV25fhC8ZnpmfL2XcKmpRkN7TkeJ2rL99hn6HS4RaK5n-0wB5PMLTDMa_4IIyFQvTQvkr1jVQiEUIFYlzhuS7wDVuYqdPDQN8Skhxzg1JIAlyXRVQWV-0WFflN7PRWap0kS_azxcNfVPxJSmc7nUL2J0UJrYokjUIHASzFPIUIkA1s3B6WM",
    icon: "cloud",
    color: "secondary"
  },
  {
    name: "Siddharth Gupta",
    role: "Security Engineer",
    lvl: 59,
    sync: 94,
    quote: "If it's on the web, it's vulnerable. I build fortresses and find the leaks before the bad actors do.",
    skills: ["Ethical Hacking", "Go", "Solidity"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV5poWqg2MIQT_-c6_TTMGEs08S_PB5yU_Lk5K2vcZJl8ZJl606kWW6dEIra4lg-MElex22WZUDmHJ4DiS3EpgX6Ms834kJgrf3VcRV9SWG5jMuXgNywyxZ8DCOQrUYproivU2-SXVBn54NBk-HArsw-j8mGXzuX92STkPqgUAie3rUuZ7ghO-GFcOYlirnP7cU0HFDKlaI4nq9Ymztn8_eelrEsTBEUAXtAOwFoikufC505cE29UAGPyrWIYGoE8UqXhQEALUsoM",
    icon: "shield_person",
    color: "tertiary"
  }
];

export default function DiscoveryPage() {
  const [currentUserIdx, setCurrentUserIdx] = useState(0);
  const [requestSent, setRequestSent] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const currentUser = MOCK_PARTNERS[currentUserIdx];

  const handleNext = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setCurrentUserIdx((prev) => (prev + 1) % MOCK_PARTNERS.length);
      setAnalyzing(false);
    }, 800);
  };

  const handleRequestTeam = () => {
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
    }, 2500);
  };

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-surface">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 md:px-12 py-8 pb-32">
        <header className="mb-10 text-center md:text-left animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-4xl md:text-5xl font-headline font-black uppercase text-on-surface italic tracking-tighter mb-2">
            Select Your Partner
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className={`w-3 h-3 rounded-full ${analyzing ? 'bg-secondary animate-ping shadow-[0_0_12px_rgba(255,0,0,0.8)]' : 'bg-primary'}`} />
            <p className="font-body font-bold text-primary uppercase tracking-widest text-sm italic">
              {analyzing ? "Analyzing Synergy... DISCOVERING CANDIDATES" : "SQUAD FINDER ACTIVE: SYNCED"}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className={`relative transition-all duration-700 transform ${requestSent ? "scale-90 opacity-0 -translate-y-20 blur-xl" : "scale-100 opacity-100 translate-y-0"}`}>
            <div className={`relative bg-white rounded-2xl overflow-hidden shadow-[24px_24px_0_0_rgba(0,25,69,0.1)] border-4 border-on-surface transition-all duration-500 ${analyzing ? "blur-md opacity-50 scale-95" : "scale-100 opacity-100"}`}>
              <div className="flex flex-col lg:flex-row h-full min-h-[550px]">
                {/* Character Portrait */}
                <div className="w-full lg:w-1/2 relative bg-slate-900 overflow-hidden">
                  <img
                    alt={currentUser.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                    src={currentUser.image}
                  />
                  
                  {/* Sync Percentage Badge */}
                  <div className="absolute top-6 left-6 animate-in slide-in-from-left-4 duration-700 delay-300">
                    <div className="bg-white border-4 border-on-surface p-4 rounded-2xl shadow-xl flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase text-primary leading-none mb-1">
                        Sync Score
                      </span>
                      <span className="text-4xl font-headline font-black text-on-surface italic leading-none">
                        {currentUser.sync}%
                      </span>
                    </div>
                  </div>

                  {/* Level Indicator Overlay */}
                  <div className="absolute bottom-6 left-6 bg-primary text-white px-6 py-2 rounded-full font-headline font-black uppercase text-xs tracking-widest shadow-xl">
                    Level {currentUser.lvl}
                  </div>
                </div>

                {/* Character Details */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-white relative text-on-surface">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h2 className="text-4xl lg:text-5xl font-headline font-black uppercase leading-tight tracking-tighter">
                          {currentUser.name}
                        </h2>
                        <p className={`font-headline font-black text-sm italic uppercase tracking-wider text-primary`}>
                          {currentUser.role}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center text-primary transform rotate-12 border-2 border-on-surface shadow-md">
                        <span className="material-symbols-outlined text-3xl font-black">
                          {currentUser.icon}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl mb-10 border-4 border-on-surface shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
                      <span className="material-symbols-outlined absolute -top-4 -left-2 text-primary font-black scale-150 rotate-12">
                        format_quote
                      </span>
                      <p className="font-bold leading-relaxed italic text-lg">
                        "{currentUser.quote}"
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="font-headline font-black text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Class Expertise
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {currentUser.skills.map((skill, idx) => (
                          <span 
                            key={skill}
                            className={`px-5 py-2 bg-white border-2 border-on-surface rounded-xl font-headline font-black text-[10px] uppercase shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-slate-50 transition-colors transform ${idx % 2 === 0 ? '-rotate-2' : 'rotate-1'}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Controls */}
                  <div className="mt-12 flex gap-4">
                    <button 
                      onClick={handleNext}
                      className="flex-1 py-5 bg-white text-on-surface font-headline font-black rounded-2xl border-4 border-on-surface shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-slate-50 active:translate-y-1 active:shadow-none transition-all uppercase tracking-tighter text-sm flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined font-black">refresh</span>
                      SKIP
                    </button>
                    <button
                      onClick={handleRequestTeam}
                      className="flex-[2] py-5 bg-primary text-white font-headline font-black rounded-2xl border-4 border-on-surface shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:brightness-110 active:translate-y-1 active:shadow-none transition-all uppercase tracking-tighter text-sm flex items-center justify-center gap-3 group"
                    >
                      <span className="material-symbols-outlined font-black group-hover:rotate-12 transition-all">
                        double_arrow
                      </span>
                      REQUEST SYNC
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Stack Effect */}
            <div className="absolute -bottom-4 left-6 right-6 h-12 bg-white border-x-4 border-b-4 border-on-surface -z-10 rounded-2xl opacity-80"></div>
            <div className="absolute -bottom-8 left-12 right-12 h-12 bg-white border-x-4 border-b-4 border-on-surface -z-20 rounded-2xl opacity-40"></div>
          </div>

          {/* Request Sent Toast */}
          {requestSent && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-primary text-white rounded-2xl p-12 transition-all duration-300 animate-in zoom-in-50 border-4 border-on-surface shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl relative">
                <span className="material-symbols-outlined text-7xl text-primary animate-bounce">
                  person_check
                </span>
                <div className="absolute -top-2 -right-2 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-black animate-pulse border-2 border-white">
                  !
                </div>
              </div>
              <h2 className="text-5xl font-headline font-black uppercase text-center italic tracking-tighter mb-4 leading-none">
                SYNC REQUEST<br/>DISPATCHED
              </h2>
              <p className="text-lg font-body font-bold text-center uppercase tracking-widest opacity-80 max-w-sm">
                A link establish request has been sent to {currentUser.name}.
              </p>
              <div className="mt-12 flex gap-4">
                <Link href="/victory" className="bg-white text-primary px-8 py-5 rounded-2xl font-headline font-black uppercase transition-all hover:scale-105 active:scale-95 shadow-[8px_8px_0_0_rgba(0,25,69,1)] flex items-center gap-2">
                  <span className="material-symbols-outlined">forum</span>
                  Go to Comms
                </Link>
                <button 
                  onClick={() => setRequestSent(false)}
                  className="bg-transparent border-4 border-white text-white px-8 py-5 rounded-2xl font-headline font-black uppercase hover:bg-white/10 transition-all shadow-lg"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Global Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] transform hover:-translate-y-2 transition-transform group">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container border-2 border-on-surface shadow-md group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl font-black">trophy</span>
              </div>
              <div>
                <div className="text-[10px] font-headline font-black text-slate-400 uppercase tracking-widest leading-none mb-2">
                  Season Rank
                </div>
                <div className="text-2xl font-headline font-black text-on-surface">
                  Explorer I
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] transform hover:-translate-y-2 transition-transform group">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container border-2 border-on-surface shadow-md group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl font-black">stat_3</span>
              </div>
              <div>
                <div className="text-[10px] font-headline font-black text-slate-400 uppercase tracking-widest leading-none mb-2">
                  Daily Multiplier
                </div>
                <div className="text-2xl font-headline font-black text-on-surface">
                  2.5x XP Active
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] transform hover:-translate-y-2 transition-transform group">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container border-2 border-on-surface shadow-md group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-3xl font-black">wifi_tethering</span>
              </div>
              <div>
                <div className="text-[10px] font-headline font-black text-slate-400 uppercase tracking-widest leading-none mb-2">
                  Matching Status
                </div>
                <div className="text-2xl font-headline font-black text-on-surface group-hover:text-primary transition-colors uppercase">
                  Live Sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
