"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useAuth } from "@/context/AuthContext";

// Current User Profile (Fallback)
const USER_PROFILE = {
  name: "PIXEL_SLAYER",
  role: "UI DRUID",
  skills: ["React", "Framer", "CSS", "UI/UX"],
  aura: "blue",
  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shiva"
};

const GLOBAL_PARTNERS = [
  {
    name: "Arjun Mehta",
    role: "System Architect",
    lvl: 42,
    stars: 4.9,
    reliability: "BATTLE TESTED",
    quote: "Optimizing distributed systems like it's a speedrun.",
    skills: ["Rust Expert", "Kubernetes", "Web3 Guru"],
    image: "https://i.pravatar.cc/300?img=14",
    stats: { won: 12, attended: 45, projects: 88, commits: 2540 },
    reviews: ["Architect of our SIH Finals win.", "Cleanest code in the arena.", "Absolute machine on Rust."]
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Specialist",
    lvl: 24,
    stars: 4.7,
    reliability: "RISING STAR",
    quote: "Design is not what it looks like, it's how it works.",
    skills: ["Figma Pro", "Next.js", "Tailwind"],
    image: "https://i.pravatar.cc/300?img=26",
    stats: { won: 4, attended: 15, projects: 22, commits: 940 },
    reviews: ["Pixels that actually make sense.", "Fastest designer in the North Node.", "Perfect flow mastery."]
  },
  {
    name: "Varun Kapoor",
    role: "Cybersecurity Analyst",
    lvl: 37,
    stars: 4.8,
    reliability: "ELITE PACKET SNIFFER",
    quote: "Securing data packets before the leak starts.",
    skills: ["Pentesting", "Wireshark", "Go"],
    image: "https://i.pravatar.cc/300?img=18",
    stats: { won: 8, attended: 28, projects: 41, commits: 1240 },
    reviews: ["Secured our entire infrastructure in 20min.", "Legendary packet analysis.", "Zero vulnerabilities found."]
  },
  {
    name: "Siddharth Roy",
    role: "Security Architect",
    lvl: 45,
    stars: 4.9,
    reliability: "LEGENDARY",
    quote: "Infiltrating nodes before they even spawn.",
    skills: ["Ethical Hacking", "Metasploit", "Python"],
    image: "https://i.pravatar.cc/300?img=13",
    stats: { won: 14, attended: 40, projects: 62, commits: 2100 },
    reviews: ["Infil mastery like no other.", "Architect of our defense layer.", "Top 1% Global Node."]
  },
  {
    name: "Ishita Malik",
    role: "Cloud Titan",
    lvl: 51,
    stars: 4.9,
    reliability: "BATTLE TESTED",
    quote: "Building uptime that survives any storm.",
    skills: ["AWS", "Terraform", "Docker"],
    image: "https://i.pravatar.cc/300?img=32",
    stats: { won: 15, attended: 52, projects: 104, commits: 3840 },
    reviews: ["99.9% availability during peak traffic.", "Cloud wizardry.", "Built our entire pipeline."]
  }
];

const CU_PARTNERS = [
  {
    name: "Gaurav Guragain",
    role: "Frontend Architect",
    lvl: 38,
    stars: 4.8,
    reliability: "CU ELITE",
    quote: "Scaling UIs with zero friction. Ready to dominate.",
    skills: ["React", "Framer", "Typescript"],
    image: "https://i.pravatar.cc/300?img=60",
    stats: { won: 9, attended: 31, projects: 48, commits: 1450 },
    reviews: ["Animation king of CU.", "Typescript legend.", "Flawless UI execution."]
  },
  {
    name: "Prachi Rajput",
    role: "Fullstack Ninja",
    lvl: 29,
    stars: 4.9,
    reliability: "BATTLE TESTED",
    quote: "Backends that don't break.",
    skills: ["Next.js", "Postgres", "AWS"],
    image: "https://i.pravatar.cc/300?img=41",
    stats: { won: 11, attended: 24, projects: 33, commits: 1280 },
    reviews: ["Carried our group in the hackathon.", "End-to-end expertise.", "Absolute beast on Auth logic."]
  },
  {
    name: "Deepanshu Kumar",
    role: "DevOps Titan",
    lvl: 52,
    stars: 5.0,
    reliability: "CU LEGEND",
    quote: "Infrastructure as code is my mantra. Scaling dreams.",
    skills: ["Docker", "Kubernetes", "Azure"],
    image: "https://i.pravatar.cc/300?img=7",
    stats: { won: 18, attended: 60, projects: 112, commits: 4520 },
    reviews: ["Scaling master.", "K8s expertise at 100%.", "Unstoppable DevOps engine."]
  },
  {
    name: "Arpit Sharma",
    role: "Backend Wizard",
    lvl: 45,
    stars: 4.8,
    reliability: "SQUAD LEADER",
    skills: ["Node.js", "Express", "MongoDB"],
    image: "https://i.pravatar.cc/300?img=68",
    stats: { won: 14, attended: 38, projects: 65, commits: 2140 },
    reviews: ["Backend lord of our node.", "Secure APIs for 10k users.", "The ultimate leader."]
  }
];

export default function DiscoveryPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [partners, setPartners] = useState<any[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [cuFilter, setCuFilter] = useState(false);
  
  // Transition States
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [showDetail, setShowDetail] = useState<any>(null);
  const [showClash, setShowClash] = useState(false);
  const [clashStage, setClashStage] = useState(0); 

  useEffect(() => {
    setAnalyzing(true);
    setTimeout(() => {
      const data = cuFilter ? CU_PARTNERS : GLOBAL_PARTNERS;
      setPartners(data.map(p => ({ ...p, syncScore: 85 + Math.floor(Math.random() * 15) })));
      setAnalyzing(false);
    }, 600);
  }, [cuFilter]);

  const handleRequestTeam = (partner: any) => {
    setShowDetail(null);
    setSelectedPartner(partner);
    setShowClash(true);
    setTimeout(() => setClashStage(1), 1000);  
    setTimeout(() => setClashStage(2), 2400); 
  };

  const handleInfiltration = () => {
    const generatedRoomId = "WAR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/room/${generatedRoomId}`);
  };

  const handleAbort = () => {
    setShowClash(false);
    setClashStage(0);
    setSelectedPartner(null);
  };

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 md:px-8 py-8 pb-32">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-headline font-black uppercase text-slate-800 italic tracking-tighter mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Partner Radar
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className={`material-symbols-outlined text-blue-600 ${analyzing ? 'animate-spin' : 'animate-pulse'} font-black`}>radar</span>
              <p className="font-body font-black text-blue-600 uppercase tracking-widest text-[10px] italic">
                {analyzing ? "Synthesizing Network Bonds..." : cuFilter ? "CU EXCLUSIVE ARENA ACTIVE" : "GLOBAL ARENA: RANKED BY SYNERGY"}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
             <button 
              onClick={() => setCuFilter(!cuFilter)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 transition-all font-black uppercase text-[10px] tracking-widest ${cuFilter ? 'bg-blue-700 text-white border-blue-700 shadow-[0_4px_0_0_#1e3a8a]' : 'bg-white text-slate-400 border-slate-200 hover:border-blue-600 shadow-[0_4px_0_0_#e2e8f0]'}`}
             >
               <span className="material-symbols-outlined text-lg font-black">school</span>
               CU Filter: {cuFilter ? 'ONLINE' : 'OFFLINE'}
             </button>
          </div>
        </header>

        {/* Discovery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-500 ${analyzing || showClash ? 'opacity-30 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
          {partners.map((partner) => (
            <div key={partner.name} onClick={() => setShowDetail(partner)} className="group bg-white rounded-2xl border-2 border-slate-200 p-4 shadow-[6px_6px_0_0_#e2e8f0] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#cbd5e1] transition-all relative overflow-hidden flex flex-col justify-between h-full cursor-pointer">
              <div className="absolute top-0 right-0 p-3 z-30 flex flex-col items-end gap-1">
                <span className="text-[11px] font-black italic tracking-tighter text-blue-600">{partner.syncScore}% SYNC</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 flex items-center justify-center relative shadow-inner">
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover transition-all grayscale group-hover:grayscale-0 duration-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline font-black text-xs uppercase leading-none tracking-tighter truncate text-slate-900">{partner.name}</h3>
                    <div className="flex items-center gap-1 mt-1"><span className="material-symbols-outlined text-blue-600 text-[10px] font-black">star</span><span className="font-black text-[10px] text-slate-700">{partner.stars}</span></div>
                  </div>
                </div>
                <div className="mb-3">
                   <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">{partner.role}</p>
                   <div className="flex flex-wrap gap-1 mt-2">
                      <span className="bg-slate-100 text-[6px] font-black uppercase px-1.5 py-0.5 rounded border border-slate-200 text-slate-500">PROJECTS: {partner.stats?.projects || 20}+</span>
                      <span className="bg-blue-50 text-[6px] font-black uppercase px-1.5 py-0.5 rounded border border-blue-100 text-blue-600">WON: {partner.stats?.won || 5}</span>
                   </div>
                </div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleRequestTeam(partner); }} className={`w-full py-2.5 rounded-xl font-headline font-black text-[8px] uppercase tracking-tighter transition-all flex items-center justify-center gap-2 ${cuFilter ? 'bg-orange-600 text-white shadow-[0_4px_0_0_#9a3412]' : 'bg-blue-700 text-white shadow-[0_4px_0_0_#1e40af]'}`}>
                <span className="material-symbols-outlined text-sm font-black">add_link</span> ESTABLISH LINK
              </button>
            </div>
          ))}
        </div>

        {/* USP AUDIT MODAL */}
        {showDetail && (
           <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300">
              <div className="bg-white rounded-4xl w-full max-w-2xl overflow-hidden shadow-[32px_32px_0_0_rgba(255,255,255,0.1)] border-4 border-slate-800 animate-in zoom-in-95 font-sans">
                 <div className="relative h-40 bg-slate-900 flex items-end p-8 overflow-hidden">
                    <button onClick={() => setShowDetail(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"><span className="material-symbols-outlined font-black">close</span></button>
                    <div className="absolute top-6 left-6 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-lg animate-pulse">DEVMATCH VERIFIED AUDIT</div>
                    <div className="relative z-10 flex items-center gap-6"><div className="w-20 h-20 rounded-2xl bg-white border-4 border-blue-600 shadow-2xl overflow-hidden shadow-inner"><img src={showDetail.image} className="w-full h-full object-cover" /></div><div><h2 className="text-3xl font-headline font-black text-white uppercase italic leading-none tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>{showDetail.name}</h2><p className="text-blue-400 font-black text-xs uppercase tracking-widest mt-2">{showDetail.role}</p></div></div>
                 </div>
                 <div className="p-8">
                    <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 mb-8 flex items-center justify-between shadow-inner">
                       <div className="text-center">
                          <p className="text-3xl font-headline font-black text-slate-900 leading-none">{showDetail.syncScore}%</p>
                          <p className="text-[7px] font-black text-blue-600 uppercase tracking-widest mt-1 italic">Synergy Insight</p>
                       </div>
                       <div className="w-px h-10 bg-slate-200"></div>
                       <div className="text-center">
                          <p className="text-3xl font-headline font-black text-slate-900 leading-none">{showDetail.stats?.won}</p>
                          <p className="text-[7px] font-black text-green-600 uppercase tracking-widest mt-1 italic">Hackathons Won</p>
                       </div>
                       <div className="w-px h-10 bg-slate-200"></div>
                       <div className="text-center">
                          <p className="text-3xl font-headline font-black text-slate-900 leading-none">{showDetail.stats?.attended}</p>
                          <p className="text-[7px] font-black text-amber-500 uppercase tracking-widest mt-1 italic">Events Attended</p>
                       </div>
                       <div className="w-px h-10 bg-slate-200"></div>
                       <div className="text-center">
                          <p className="text-3xl font-headline font-black text-slate-900 leading-none">{showDetail.stats?.projects}</p>
                          <p className="text-[7px] font-black text-purple-600 uppercase tracking-widest mt-1 italic">Live Projects</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                       <div className="space-y-4">
                          <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Synergy Rationale</h4>
                          <div className="space-y-2">
                             <div className="flex gap-2 text-[10px] font-bold text-slate-700 italic">
                                <span className="material-symbols-outlined text-blue-600 text-xs font-black">verified</span>
                                Zero Role Overlap with {user?.displayName || "PIXEL_SLAYER"}.
                             </div>
                             <div className="flex gap-2 text-[10px] font-bold text-slate-700 italic">
                                <span className="material-symbols-outlined text-blue-600 text-xs font-black">verified</span>
                                Consistent GitHub Deployment Record.
                             </div>
                          </div>
                       </div>
                       <div>
                          <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Recent Commits</h4>
                          <div className="space-y-2">
                             {showDetail.reviews?.slice(0, 2).map((review: string, i: number) => (
                                <div key={i} className="bg-slate-50 border-l-2 border-blue-500 p-2 text-[9px] font-bold text-slate-600 italic leading-tight">"{review}"</div>
                             ))}
                          </div>
                       </div>
                    </div>

                    <button onClick={() => handleRequestTeam(showDetail)} className="w-full py-4 bg-blue-700 text-white rounded-2xl font-headline font-black uppercase text-xs shadow-[0_4px_0_0_#1e3a8a] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>START MISSION WITH {showDetail.name.split(' ')[0]}</button>
                 </div>
              </div>
           </div>
        )}

        {/* CLASH ANIMATION WITH COMMAND CONSENT */}
        {showClash && selectedPartner && (
           <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-50/95 backdrop-blur-xl overflow-hidden animate-in fade-in duration-700 font-headline italic uppercase tracking-tighter">
              <div className="absolute inset-0 z-0">
                 <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-600/5 ${clashStage === 2 ? 'opacity-100 scale-150' : 'opacity-30'} transition-all duration-[2000ms]`}></div>
                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              </div>
              <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
                 <div className={`mb-12 text-center transition-all duration-700 ${clashStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full shadow-[0_4px_0_0_#1e3a8a] animate-pulse italic">SYNC_ESTABLISHED</span>
                    <h2 className="text-6xl md:text-9xl font-headline font-black text-slate-900 mt-6 leading-none tracking-tighter drop-shadow-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>TEAM FORMED!</h2>
                 </div>
                 <div className="w-full flex items-center justify-center gap-4 md:gap-16 relative h-[400px]">
                    <div className={`transition-all duration-[1000ms] ease-out-back ${clashStage >= 1 ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-[200%] opacity-0 scale-50'}`}>
                       <div className="bg-white border-4 border-black rounded-4xl p-10 shadow-[20px_20px_0_0_#000] perspective-1000 rotate-y-12 relative overflow-hidden">
                          <div className="absolute -top-4 -left-4 bg-blue-600 text-white text-[8px] font-black px-3 py-1 border-2 border-black rounded-lg">OPERATIVE {(user?.displayName || USER_PROFILE.name).toUpperCase()}</div>
                          <div className="w-48 h-48 rounded-3xl bg-slate-100 border-4 border-black overflow-hidden mb-8 relative shadow-inner"><img src={user?.photoURL || USER_PROFILE.image} className="w-full h-full object-cover" /></div>
                          <div className="text-center">
                            <h4 className="text-3xl font-black text-slate-800 tracking-tighter italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>{user?.displayName || USER_PROFILE.name}</h4>
                            <p className="text-[10px] font-black text-blue-600 tracking-widest mt-2">{user?.email ? "SYSTEM ARCHITECT" : "UI DRUID"}</p>
                          </div>
                       </div>
                    </div>
                    <div className={`relative z-20 flex items-center justify-center w-32 md:w-48 transition-all duration-500 ${clashStage === 2 ? 'scale-150 rotate-[360deg]' : 'scale-100'}`}>
                       <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-[0_12px_24px_rgba(37,99,235,0.4)] border-4 border-black ${clashStage === 2 ? 'animate-ping' : ''}`}><span className="material-symbols-outlined text-4xl md:text-6xl font-black italic">sync_alt</span></div>
                    </div>
                    <div className={`transition-all duration-[1000ms] ease-out-back ${clashStage >= 1 ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-[200%] opacity-0 scale-50'}`}>
                       <div className="bg-white border-4 border-black rounded-4xl p-10 shadow-[20px_20px_0_0_#000] perspective-1000 -rotate-y-12 relative">
                          <div className="absolute -top-4 -right-4 bg-orange-600 text-white text-[8px] font-black px-3 py-1 border-2 border-black rounded-lg">OPERATIVE {selectedPartner.name.split(' ')[0].toUpperCase()}</div>
                          <div className="w-48 h-48 rounded-3xl bg-slate-100 border-4 border-black overflow-hidden mb-8 relative shadow-inner"><img src={selectedPartner.image} className="w-full h-full object-cover" alt="Partner" /></div>
                          <div className="text-center"><h4 className="text-3xl font-black text-slate-800 tracking-tighter italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>{selectedPartner.name}</h4><p className="text-[10px] font-black text-orange-600 tracking-widest mt-2">{selectedPartner.role}</p></div>
                       </div>
                    </div>
                 </div>
                 <div className={`mt-16 transition-all duration-700 delay-500 flex flex-col items-center gap-8 ${clashStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="flex items-center gap-4 px-8 py-3 bg-white border-2 border-blue-600/20 rounded-2xl shadow-[0_8px_16px_rgba(37,99,235,0.1)] animate-in slide-in-from-bottom-4">
                       <span className="text-[12px] font-black text-blue-700 uppercase tracking-[0.2em] italic leading-none">OPERATIVE {(user?.displayName || USER_PROFILE.name).toUpperCase()} JOINED THE ROOM</span>
                    </div>

                    {/* COMMAND DECISION MODULE */}
                    <div className={`flex items-center gap-6 transition-all duration-1000 ${clashStage === 2 ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}>
                        <button 
                           onClick={handleInfiltration}
                           className="px-10 py-5 bg-blue-700 text-white border-2 border-slate-950 rounded-2xl shadow-[8px_8px_0_0_#000] font-headline font-black uppercase text-sm tracking-widest italic hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3"
                        >
                           <span className="material-symbols-outlined font-black">verified</span>
                           ESTABLISH LINK
                        </button>
                        <button 
                           onClick={handleAbort}
                           className="px-10 py-5 bg-white text-red-600 border-2 border-slate-950 rounded-2xl shadow-[8px_8px_0_0_#000] font-headline font-black uppercase text-sm tracking-widest italic hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3"
                        >
                           <span className="material-symbols-outlined font-black">cancel</span>
                           ABORT PROTOCOL
                        </button>
                    </div>

                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] text-center italic mt-2">
                       {clashStage === 2 ? "Awaiting Command Confirmation..." : "Finalizing Infiltration Protocol..."}
                    </p>
                 </div>
              </div>
           </div>
        )}
      </main>
      <MobileNav />
      <style jsx global>{`
         @keyframes progress-fast { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
         .animate-progress-fast { animation: progress-fast 2s infinite linear; }
         .perspective-1000 { perspective: 1000px; }
         .rotate-y-12 { transform: rotateY(12deg); }
         .-rotate-y-12 { transform: rotateY(-12deg); }
         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
         .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}
