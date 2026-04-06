"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DiscoveryPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    // Artificial scanning delay to mimic radar
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestTeam = () => {
    setRequestSent(true);
    // Auto-dismiss or simulate navigation after 2 seconds
    setTimeout(() => {
      setRequestSent(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen px-4 md:px-12 py-8 pt-28 pb-32 bg-surface">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-headline font-black uppercase text-on-surface italic tracking-tighter mb-2">
          Select Your Partner
        </h1>
        <p className="font-body font-bold text-primary flex items-center justify-center md:justify-start gap-3">
          <span className="material-symbols-outlined group-hover:animate-radar-scan">radar</span>
          {isScanning ? "SCANNING FOR ELITE TALENT..." : "TALENT ACQUIRED. INITIALIZING SYNC."}
        </p>
      </header>

      <div className="max-w-4xl mx-auto relative min-h-[500px]">
        {/* Scanning Overlay Animation */}
        {isScanning && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center space-y-8 bg-surface/80 backdrop-blur-md rounded-2xl border-4 border-dashed border-primary/20">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-radar-scan">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-primary to-transparent blur-sm transform origin-bottom"></div>
              </div>
              <span className="material-symbols-outlined text-8xl text-primary animate-pulse">
                radar
              </span>
            </div>
            <div className="text-center">
              <p className="text-2xl font-headline font-black uppercase italic animate-bounce text-primary">
                Acquiring Targets...
              </p>
              <div className="flex gap-2 justify-center mt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Character Card Content */}
        {!isScanning && (
          <div className={`relative transition-all duration-1000 transform ${requestSent ? "scale-90 opacity-0 -translate-y-20 blur-xl" : "scale-100 opacity-100 translate-y-0"}`}>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border-b-[12px] border-primary tilted-left hover:rotate-0 transition-transform duration-500 group">
              <div className="flex flex-col lg:flex-row h-full min-h-[500px]">
                {/* Character Portrait */}
                <div className="w-full lg:w-1/2 relative bg-surface-variant overflow-hidden">
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
                      <p className="text-on-surface-variant font-medium leading-relaxed italic">
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
                    <button className="flex-1 py-5 bg-surface-container-high text-on-surface-variant font-headline font-black rounded-xl border-b-4 border-slate-300 opacity-40 uppercase tracking-tighter cursor-not-allowed">
                      SKIP
                    </button>
                    <button
                      onClick={handleRequestTeam}
                      className="flex-[2] py-5 bg-primary text-white font-headline font-black rounded-xl chunky-shadow-primary active-press uppercase tracking-tighter flex items-center justify-center gap-3 text-lg group"
                    >
                      <span className="material-symbols-outlined group-hover:rotate-12 transition-all">
                        person_add
                      </span>
                      REQUEST TEAM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Stack Effect (Background cards) */}
            <div className="absolute -bottom-4 left-4 right-4 h-12 bg-surface-container-high -z-10 rounded-xl opacity-50 tilted-right"></div>
            <div className="absolute -bottom-8 left-8 right-8 h-12 bg-surface-container-highest -z-20 rounded-xl opacity-20"></div>
          </div>
        )}

        {/* Request Sent Toast/Overlay */}
        {requestSent && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-primary/95 text-white rounded-2xl p-12 transition-all duration-300 animate-in zoom-in-50">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <span className="material-symbols-outlined text-7xl text-primary animate-bounce">
                how_to_reg
              </span>
            </div>
            <h2 className="text-5xl font-headline font-black uppercase text-center italic tracking-tighter mb-4">
              COMMAND RECEIVED
            </h2>
            <p className="text-xl font-body font-bold text-center uppercase tracking-widest opacity-80">
              Your request has been dispatched to Alex.
            </p>
            <div className="mt-12">
              <Link href="/victory" className="bg-white text-primary px-8 py-4 rounded-xl font-headline font-black uppercase transition-all hover:scale-105 active:scale-95 inline-block">
                View Match Status
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Mini-Stats */}
      {!isScanning && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-forwards">
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
                  Explorer I
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
                  Squad Finding
                </div>
                <div className="text-2xl font-headline font-black">
                  ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
