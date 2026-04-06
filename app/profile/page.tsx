"use client";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { 
  Trophy, Code2, Rocket, Swords, 
  Terminal, Shield, Zap, Layout, 
  Settings, Copy, Share2
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

// THE "LEGION OPERATIVE" DATA SCHEMA
const USER_STATS = {
  level: 57,
  xp: 82, // Percentage
  rank: "CONQUEROR ACE",
  uid: "460614180",
  stats: [
    { label: "BATTLES WON", value: "24", icon: Trophy, color: "text-amber-500" },
    { label: "PROJECTS", value: "42", icon: Layout, color: "text-blue-500" },
    { label: "COMMITS", value: "1.2K", icon: Code2, color: "text-purple-500" },
    { label: "SYNERGY", value: "98%", icon: Zap, color: "text-cyan-500" }
  ],
  skills: [
    { name: "JavaScript", level: "Lvl 8", progress: 95, tier: "LEGENDARY", color: "bg-amber-400" },
    { name: "React Fusion", level: "Lvl 7", progress: 88, tier: "ELITE", color: "bg-blue-400" },
    { name: "Node.js Core", level: "Lvl 6", progress: 75, tier: "MASTER", color: "bg-purple-400" },
    { name: "Python Script", level: "Lvl 5", progress: 60, tier: "PRO", color: "bg-green-400" }
  ]
};

export default function DynamicProfilePage() {
  const { user } = useAuth(); // Using your primary Firebase Auth Context

  // Get the actual Google/Firebase image or fall back to the professional photo we mapped
  const pfpSource = user?.photoURL || "/user-pfp.png";
  const displayName = user?.displayName || "NIKHIL_VASHISHTHA";
  const displayEmail = user?.email || "@nikhil_2804";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-blue-600 flex pt-20">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* HEADER HERO CARD - DYNAMIC FIREBASE GMAIL IDENTITY */}
          <section className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -rotate-12 translate-x-10 -translate-y-10 border-4 border-black/5"></div>
             
             <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="relative group">
                   <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-black bg-slate-100 overflow-hidden shadow-[4px_4px_0_0_#000] transition-transform duration-500">
                      <img 
                        src={pfpSource} 
                        className="w-full h-full object-cover" 
                        alt={displayName} 
                        onError={(e) => {
                          e.currentTarget.src = "/user-pfp.png"; // Dynamic Fallback to your professional photo
                        }}
                      />
                   </div>
                   <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-1 font-black italic text-xs border-2 border-white shadow-lg">
                      LV.{USER_STATS.level}
                   </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                   <div className="space-y-1">
                      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                         <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {displayName}
                         </h1>
                         <div className="bg-amber-400 border-2 border-black px-3 py-0.5 text-[10px] font-black tracking-widest uppercase italic shadow-[2px_2px_0_0_#000]">
                            {USER_STATS.rank}
                         </div>
                      </div>
                      <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">{displayEmail} • UID: {USER_STATS.uid}</p>
                   </div>

                   {/* XP PROGRESS BAR */}
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <p className="text-[10px] font-black text-slate-400 tracking-widest italic uppercase">PROGRESS TO LEVEL {USER_STATS.level + 1}</p>
                         <p className="text-[10px] font-black text-blue-600 italic">{USER_STATS.xp}%</p>
                      </div>
                      <div className="w-full h-4 bg-slate-100 border-2 border-black overflow-hidden shadow-inner">
                         <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${USER_STATS.xp}%` }}
                            className="h-full bg-blue-600 border-r-2 border-black"
                         ></motion.div>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4">
                   <button className="p-3 border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all bg-white"><Settings className="w-5 h-5" /></button>
                   <button className="p-3 border-2 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all bg-white"><Share2 className="w-5 h-5" /></button>
                </div>
             </div>
          </section>

          {/* COMBAT STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {USER_STATS.stats.map((stat) => (
                <div key={stat.label} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_#000] hover:bg-slate-50 transition-colors cursor-pointer">
                   <stat.icon className={`w-6 h-6 mb-3 ${stat.color}`} />
                   <p className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.value}</p>
                   <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase italic">{stat.label}</p>
                </div>
             ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* SKILL MASTERY */}
             <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-3 border-l-8 border-blue-600 pl-4 py-1">
                   <Terminal className="w-6 h-6 text-blue-600" />
                   <h3 className="text-xl font-black italic tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Technical Loadout</h3>
                </div>
                <div className="grid gap-4">
                   {USER_STATS.skills.map((skill) => (
                      <div key={skill.name} className="bg-white border-4 border-black p-5 shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer">
                         <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                               <div className={`w-8 h-8 ${skill.color} border-2 border-black flex items-center justify-center`}><Code2 className="w-4 h-4 text-white" /></div>
                               <span className="font-black italic tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>{skill.name}</span>
                            </div>
                            <div className="text-right">
                               <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 italic">{skill.tier}</span>
                               <p className="text-[10px] font-black text-slate-400 mt-1 uppercase italic tracking-widest">{skill.level}</p>
                            </div>
                         </div>
                         <div className="w-full h-2 bg-slate-100 border-2 border-black overflow-hidden shadow-inner">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${skill.progress}%` }} className={`h-full ${skill.color} border-r-2 border-black`}></motion.div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* RECENT MISSION LOG */}
             <div className="space-y-6">
                <div className="flex items-center gap-3 border-l-8 border-amber-500 pl-4 py-1">
                   <Shield className="w-6 h-6 text-amber-500" />
                   <h3 className="text-xl font-black italic tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Mission History</h3>
                </div>
                <div className="space-y-4">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white border-2 border-black p-4 flex gap-4 items-start shadow-[4px_4px_0_0_#000] group cursor-pointer hover:bg-slate-50">
                         <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-black flex items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                            <Swords className="w-4 h-4 text-slate-500 group-hover:text-white" />
                         </div>
                         <div className="space-y-1">
                            <p className="text-xs font-black italic tracking-tight uppercase">MISSION #{i+24} SUCCESS</p>
                            <p className="text-[10px] font-bold text-slate-500 italic leading-tight">Infiltrated System Node 0{i}. Conduct rating: 100%.</p>
                            <p className="text-[8px] font-black text-blue-600 uppercase mt-2 tracking-widest">+250 XP • +12 HONOR</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
      <MobileNav />
    </div>
  );
}
