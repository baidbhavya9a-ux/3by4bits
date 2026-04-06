"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useAuth } from "@/context/AuthContext";

// --- CU ELITE OPERATIVES ---
const CU_PARTNERS = [
  {
    name: "AMAN RAJ",
    role: "SYSTEM ARCHITECT",
    image: "https://github.com/amanr11314.png",
    stars: 4.9,
    sync: 98,
    projects: 88,
    won: 12,
    attended: 45,
    github: "https://github.com/amanr11314",
    reviews: [
      { user: "Nikhil", rating: 5, comment: "God-tier architect. Built our backend in 2 hours." },
      { user: "Priya", rating: 4, comment: "Insane logic skills. A bit quiet but 100% reliable." }
    ]
  },
  {
    name: "YASH ARORA",
    role: "FULL STACK OPS",
    image: "https://github.com/KodeYash.png",
    stars: 4.8,
    sync: 96,
    projects: 45,
    won: 9,
    attended: 31,
    github: "https://github.com/KodeYash",
    reviews: [
      { user: "Arjun", rating: 5, comment: "Best Next.js expertise I've seen in the north arena." }
    ]
  },
  {
    name: "PRAJWAL RAI",
    role: "UI/UX SPECIALIST",
    image: "https://github.com/prajwal-5.png",
    stars: 4.7,
    sync: 94,
    projects: 32,
    won: 4,
    attended: 28,
    github: "https://github.com/prajwal-5",
    reviews: [
      { user: "Saloni", rating: 5, comment: "Pixels are perfect. Every. Single. Time." }
    ]
  },
  {
    name: "RISHABH KUMAR SINGH",
    role: "SECURITY STRATEGIST",
    image: "https://github.com/rishabhkumar812.png",
    stars: 4.9,
    sync: 97,
    projects: 64,
    won: 15,
    attended: 52,
    github: "https://github.com/rishabhkumar812",
    reviews: [
      { user: "Tanishka", rating: 5, comment: "Security logic is watertight. Zero leaks." }
    ]
  }
];

const GLOBAL_PARTNERS = [
  ...CU_PARTNERS,
  {
    name: "ARJUN MEHTA",
    role: "SYSTEM ARCHITECT",
    image: "https://i.pravatar.cc/300?img=14",
    stars: 4.9,
    sync: 89,
    projects: 88,
    won: 12,
    attended: 40,
    github: "#",
    reviews: [{ user: "Admin", rating: 5, comment: "Legacy operative." }]
  }
];

export default function DiscoveryPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [partners, setPartners] = useState(GLOBAL_PARTNERS);
  const [cuFilter, setCuFilter] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [clashStage, setClashStage] = useState(0); 
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [showDetail, setShowDetail] = useState<any>(null);

  useEffect(() => {
    setAnalyzing(true);
    setTimeout(() => {
      setPartners(cuFilter ? CU_PARTNERS : GLOBAL_PARTNERS);
      setAnalyzing(false);
    }, 400);
  }, [cuFilter]);

  const handleTriggerClash = (partner: any) => {
    setShowDetail(null);
    setSelectedPartner(partner);
    setClashStage(1);                            
    setTimeout(() => setClashStage(2), 800);     
    setTimeout(() => setClashStage(3), 1300);    
  };

  const handleInfiltration = () => {
    const generatedRoomId = "WAR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/room/${generatedRoomId}`);
  };

  const handleAbort = () => {
    setClashStage(0);
    setSelectedPartner(null);
  };

  const userImage = user?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Shiva";
  const userName = user?.displayName || "PIXEL_SLAYER";

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-6 md:px-12 py-10 pb-32 relative">
        
        {/* Header Section */}
        <header className="mb-14 flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900 leading-none mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              PARTNER RADAR
            </h1>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-blue-600 font-black text-xl animate-pulse">radar</span>
               <p className="font-bold text-blue-600 uppercase tracking-widest text-[11px] italic">
                 {cuFilter ? "CU EXCLUSIVE ARENA — TARGETING_ENABLED" : "GLOBAL ARENA: RANKED BY SYNERGY"}
               </p>
            </div>
          </div>
          
          <button 
            onClick={() => setCuFilter(!cuFilter)}
            className={`flex items-center gap-3 px-8 py-5 rounded-[1.5rem] border transition-all font-black uppercase text-[10px] tracking-[0.2em] group ${cuFilter ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-[0_15px_30px_rgba(249,115,22,0.15)]' : 'border-slate-100 bg-white text-slate-400 shadow-[0_15px_35px_rgba(0,0,0,0.03)]'}`}
          >
            <span className={`material-symbols-outlined text-lg ${cuFilter ? 'text-orange-600' : 'group-hover:text-blue-600'}`}>school</span>
            CU FILTER: {cuFilter ? 'ONLINE' : 'OFFLINE'}
          </button>
        </header>

        {/* Discovery Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 transition-all duration-500 ${clashStage > 0 || analyzing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-[2rem] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-slate-50 transition-all flex flex-col justify-between hover:shadow-[0_25px_60px_rgba(37,99,235,0.08)] group h-full cursor-pointer relative" onClick={() => setShowDetail(partner)}>
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50 shadow-sm">
                    <img src={partner.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-black text-[13px] uppercase tracking-tighter text-slate-900 leading-none">{partner.name}</h3>
                    <p className="text-blue-600 font-black text-[10px] italic mt-1">{partner.sync}% SYNC</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">star</span>
                  <span className="font-black text-[11px] text-slate-800">{partner.stars}</span>
                </div>

                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">{partner.role}</p>

                <div className="flex gap-2 max-w-full">
                  <span className="bg-slate-50 text-[7px] font-black text-slate-500 px-2 py-1.5 rounded-lg border border-slate-100 whitespace-nowrap">PROJECTS: {partner.projects}+</span>
                  <span className="bg-blue-50 text-[7px] font-black text-blue-600 px-2 py-1.5 rounded-lg border border-blue-100 whitespace-nowrap">WON: {partner.won}</span>
                </div>
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); handleTriggerClash(partner); }}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-[0_10px_25px_rgba(37,99,235,0.2)] mt-6 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                 <span className="material-symbols-outlined text-base">add_link</span> ESTABLISH LINK
              </button>
            </div>
          ))}
        </div>

        {/* --- STRATEGIC INTEL DOSSIER (Modal) --- */}
        {showDetail && (
            <div className="fixed inset-0 z-[210] flex items-center justify-center p-6 bg-white/95 backdrop-blur-xl animate-in fade-in duration-300">
               <div className="bg-white rounded-[3rem] w-full max-w-4xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 animate-in zoom-in-95 font-sans overflow-y-auto max-h-[90vh] custom-scrollbar">
                  
                  {/* Header Bar */}
                  <div className="p-8 flex items-center justify-between border-b border-slate-50">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-50 shadow-inner">
                           <img src={showDetail.image} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{showDetail.name}</h2>
                           <p className="text-blue-600 font-black text-[10px] tracking-widest mt-2">{showDetail.role}</p>
                        </div>
                     </div>
                     <button onClick={() => setShowDetail(null)} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all"><span className="material-symbols-outlined">close</span></button>
                  </div>

                  <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* Left: Stats Cluster */}
                     <div>
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Mission History</h4>
                        <div className="grid grid-cols-2 gap-4 mb-10">
                           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center shadow-inner">
                              <p className="text-4xl font-black text-slate-900">{showDetail.won}</p>
                              <p className="text-[9px] font-black text-green-600 uppercase mt-2">Hackathons Won</p>
                           </div>
                           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center shadow-inner">
                              <p className="text-4xl font-black text-slate-900">{showDetail.attended}</p>
                              <p className="text-[9px] font-black text-blue-600 uppercase mt-2">Events Attended</p>
                           </div>
                           <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center shadow-inner">
                              <p className="text-4xl font-black text-slate-900">{showDetail.projects}</p>
                              <p className="text-[9px] font-black text-purple-600 uppercase mt-2">Projects Made</p>
                           </div>
                           <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
                              <p className="text-4xl font-black text-blue-900">{showDetail.stars}</p>
                              <p className="text-[9px] font-black text-blue-600 uppercase mt-2">Field Rating</p>
                           </div>
                        </div>

                        {/* Git Asset Link */}
                        <a href={showDetail.github} target="_blank" className="w-full py-6 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center gap-4 group hover:bg-black transition-all">
                           <span className="material-symbols-outlined text-white font-black">terminal</span>
                           <span className="font-black uppercase tracking-widest text-xs">VIEW SOURCE REPOSITORY</span>
                           <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </a>
                     </div>

                     {/* Right: Authenticity Audit */}
                     <div>
                        <div className="flex items-center justify-between mb-8">
                           <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Authenticity Audit</h4>
                           <button className="text-[9px] font-black text-blue-600 border-b-2 border-blue-100 pb-0.5">SUBMIT LOG</button>
                        </div>
                        
                        <div className="space-y-4">
                           {showDetail.reviews?.map((review: any, i: number) => (
                              <div key={i} className="bg-white p-5 rounded-3xl border border-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all">
                                 <div className="flex items-center justify-between mb-3">
                                    <span className="font-black text-[10px] text-slate-900 uppercase">OPERATIVE_{review.user.toUpperCase()}</span>
                                    <div className="flex gap-0.5"><span className="material-symbols-outlined text-blue-600 text-xs font-black">verified</span></div>
                                 </div>
                                 <p className="text-[13px] font-bold text-slate-600 italic leading-relaxed">"{review.comment}"</p>
                              </div>
                           ))}
                        </div>

                        <div className="mt-10 p-6 bg-yellow-50/50 rounded-3xl border border-yellow-100">
                           <p className="text-[10px] font-black text-yellow-700 uppercase tracking-widest mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-base">emergency</span> AUTHENTICITY NOTE</p>
                           <p className="text-[11px] font-bold text-yellow-800 leading-normal opacity-70">Operative identity has been verified through CU Blockchain Registry. Skill points are reflective of real hackathon deployment stats.</p>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 pt-0">
                     <button onClick={() => handleTriggerClash(showDetail)} className="w-full py-7 bg-blue-600 text-white rounded-[2.5rem] font-black uppercase text-sm tracking-widest shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-blue-700 transition-all flex items-center justify-center gap-4">
                        <span className="material-symbols-outlined font-black">bolt</span> INFILTRATE AS PARTNER
                     </button>
                  </div>
               </div>
            </div>
        )}

        {/* --- PRECISION MINIMALIST CLASH --- */}
        {clashStage > 0 && selectedPartner && (
            <div className="fixed inset-0 z-[250] flex flex-col items-center justify-center bg-white/98 backdrop-blur-3xl overflow-hidden font-headline italic uppercase tracking-tighter">
               <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

               <div className={`mb-12 text-center z-30 transition-all duration-700 ${clashStage >= 1 ? "translate-y-0 opacity-100 scale-100" : "-translate-y-20 opacity-0 scale-50"}`}>
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter">TEAM FORMED!</h2>
               </div>

               <div className="w-full flex items-center justify-center gap-4 md:gap-16 relative px-10 h-auto">
                  {/* Left Plate */}
                  <div className={`clash-animate-left`}>
                     <div className="relative group">
                        <div className="absolute -top-4 left-4 bg-blue-600 text-white text-[8px] font-black px-4 py-1.5 rounded-lg z-30 whitespace-nowrap shadow-lg">OPERATIVE {userName.toUpperCase()}</div>
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col items-center w-52 md:w-64">
                           <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-slate-100 border border-slate-100 overflow-hidden mb-6 relative shadow-inner"><img src={userImage} className="w-full h-full object-cover" /></div>
                           <div className="text-center">
                              <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter italic leading-none">{userName}</h4>
                              <p className="text-[11px] font-black text-blue-600 tracking-widest mt-2">SYSTEM_ARCHITECT</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Sync Node */}
                  <div className={`z-50 transition-all duration-700 delay-500 ${clashStage >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                     <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-blue-100/50 backdrop-blur-md border-[6px] border-white flex items-center justify-center shadow-inner relative animate-pulse">
                        <span className="material-symbols-outlined text-blue-400 text-4xl md:text-6xl font-black">sync_alt</span>
                     </div>
                  </div>

                  {/* Right Plate */}
                  <div className={`clash-animate-right`}>
                     <div className="relative group">
                        <div className="absolute -top-4 right-4 bg-orange-600 text-white text-[8px] font-black px-4 py-1.5 rounded-lg z-30 whitespace-nowrap shadow-lg">OPERATIVE {selectedPartner.name.split(' ')[0].toUpperCase()}</div>
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col items-center w-52 md:w-64">
                           <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-slate-100 border border-slate-100 overflow-hidden mb-6 relative shadow-inner"><img src={selectedPartner.image} className="w-full h-full object-cover" /></div>
                           <div className="text-center">
                              <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter italic leading-none">{selectedPartner.name}</h4>
                              <p className="text-[11px] font-black text-orange-600 tracking-widest mt-2">{selectedPartner.role.toUpperCase()}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Buttons */}
               <div className={`mt-16 flex flex-col items-center gap-10 transition-all duration-700 delay-700 ${clashStage >= 2 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
                   <div className="flex items-center gap-4 px-10 py-3 bg-white border border-slate-100 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.05)] text-[12px] font-black text-slate-800 tracking-[0.3em] uppercase italic leading-none">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                      <span>OPERATIVE {userName.split(' ')[0]} ESTABLISHED LINK</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <button onClick={handleInfiltration} className="px-16 py-6 bg-blue-600 text-white rounded-[2rem] shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:bg-blue-700 hover:-translate-y-1 transition-all text-sm font-black uppercase tracking-widest italic flex items-center gap-3">
                         <span className="material-symbols-outlined font-black">verified</span> ESTABLISH LINK
                      </button>
                      <button onClick={handleAbort} className="px-12 py-6 bg-white text-red-600 border border-slate-200 rounded-[2rem] hover:bg-slate-50 transition-all text-xs font-black uppercase tracking-widest italic">ABORT</button>
                   </div>
               </div>
            </div>
        )}

      </main>
      <MobileNav />
      {/* Absolute Keyframes */}
      <style jsx global>{`
        @keyframes slideFromLeft { 
          0% { transform: translateX(-150vw); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideFromRight { 
          0% { transform: translateX(150vw); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .clash-animate-left { animation: slideFromLeft 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
        .clash-animate-right { animation: slideFromRight 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}
