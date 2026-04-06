"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const USER_STATS = {
   name: "PIXEL_SLAYER",
   role: "UI DRUID",
   lvl: 57,
   rank: "HEROIC",
   honor: 100,
   likeCount: 2226,
   uid: "6460614180",
   arsenal: [
      { name: "React Console", mastery: "Advanced", score: 1375, success: "98.2%", commits: 25, img: "terminal" },
      { name: "Node.js Core", mastery: "Master", score: 2540, success: "92.0%", commits: 42, img: "schema" },
      { name: "Framer Magic", mastery: "Advanced", score: 1120, success: "100%", commits: 15, img: "animation" },
      { name: "Tailwind Blade", mastery: "Pro", score: 3840, success: "95.5%", commits: 88, img: "css" }
   ],
   history: [
      { mode: "CLASH SQUAD", rank: "ACE 5", stars: 536 },
      { mode: "RANKED BATTLE", rank: "CONQUEROR", stars: 1240 }
   ]
};

export default function ProfilePage() {
   const [activeTab, setActiveTab] = useState("GALLERY");
   const [rotation, setRotation] = useState(0);

   // Continuous 3D rotation for the character
   useEffect(() => {
      const interval = setInterval(() => {
         setRotation(prev => (prev + 0.5) % 360);
      }, 30)
      return () => clearInterval(interval);
   }, []);

   const tabs = ["GALLERY", "OVERVIEW", "ROLE", "HISTORY", "WEAPON", "ALBUM", "HONOR SCORE", "WISHLIST"];

   return (
      <div className="flex pt-20 h-screen overflow-hidden bg-slate-950 text-white font-headline selection:bg-amber-500">
         <Sidebar />
         
         <main className="flex-1 flex overflow-hidden relative">
            {/* TACTICAL BG */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1e293b_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            {/* LEFT SIDEBAR (TAB SWITCHER) */}
            <div className="w-48 bg-black/40 border-r border-white/5 flex flex-col pt-10 z-20 backdrop-blur-md">
               {tabs.map((tab) => (
                  <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`w-full py-4 px-6 text-left text-[11px] font-black tracking-[0.2em] transition-all flex items-center justify-between group ${activeTab === tab ? 'bg-amber-500 text-black border-r-4 border-white' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}
                  >
                     {tab}
                     {activeTab === tab && <div className="w-1.5 h-1.5 bg-black rotate-45"></div>}
                  </button>
               ))}
            </div>

            {/* CENTRAL HERO PANEL */}
            <div className="flex-1 relative flex items-center justify-center z-10 overflow-hidden">
               {/* HERO PLATFORM */}
               <div className="absolute bottom-20 w-[600px] h-[150px] bg-white/5 rounded-[100%] blur-3xl"></div>
               
               <motion.div 
                  className="flex flex-col items-center"
                  style={{ perspective: 1200 }}
               >
                  {/* HERO CHARACTER (rotateY effect) */}
                  <motion.div 
                     style={{ rotateY: rotation }}
                     className="w-80 h-[500px] relative flex items-center justify-center"
                  >
                     <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shiva" 
                        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(245,158,11,0.3)]"
                        alt="Hero"
                     />
                     <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-slate-950 to-transparent"></div>
                  </motion.div>

                  {/* Character Shadows/Lights */}
                  <div className="mt-[-40px] w-48 h-10 bg-black/60 rounded-[100%] blur-xl"></div>
               </motion.div>

               {/* FLOATING QUICK STATS (LEFT OF HERO) */}
               <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                  {[1,2,3].map(i => (
                     <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative group">
                        <span className="material-symbols-outlined text-amber-500 text-xl font-black italic">military_tech</span>
                        <div className="absolute left-16 bg-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-black uppercase whitespace-nowrap">Tier Achievement {i}</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* RIGHT DETAILS PANEL (DYNAMIC CONTENT) */}
            <div className="w-[450px] bg-black/40 border-l border-white/5 p-8 z-20 backdrop-blur-md flex flex-col gap-6 overflow-y-auto">
               
               <AnimatePresence mode="wait">
                  {activeTab === 'GALLERY' && (
                     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-6">
                        {/* HEADER PROFILE BOX */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white/10 rounded-2xl p-6 shadow-2xl relative">
                           <div className="absolute top-2 right-2 opacity-20"><span className="material-symbols-outlined text-6xl">verified</span></div>
                           <div className="flex gap-4">
                              <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-inner"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil" className="w-full h-full object-cover" /></div>
                              <div>
                                 <h2 className="text-2xl font-black italic tracking-tighter leading-none mb-1">Nikhil.2804</h2>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">English • Elite Coder</p>
                                 <div className="flex gap-4">
                                    <span className="flex items-center gap-1 text-[9px] font-black text-amber-500"><span className="material-symbols-outlined text-xs">calendar_today</span> 1 Year+</span>
                                    <span className="flex items-center gap-1 text-[9px] font-black text-blue-400"><span className="material-symbols-outlined text-xs">thumb_up</span> {USER_STATS.likeCount}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-amber-500 text-black flex items-center justify-center font-black text-[10px]">Lv.{USER_STATS.lvl}</div><div className="w-24 h-1.5 bg-black rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[60%]"></div></div></div>
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">UID: {USER_STATS.uid}</p>
                           </div>
                        </div>

                        {/* CLASH SQUAD RANK */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 flex items-center justify-between group hover:bg-white/5 transition-all">
                           <div className="flex items-center gap-4">
                              <span className="material-symbols-outlined text-4xl text-purple-500 font-black italic">military_tech</span>
                              <div>
                                 <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">CLASH SQUAD</p>
                                 <h4 className="text-xl font-black italic text-purple-400 leading-none">ACE V</h4>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-[8px] font-black text-slate-600 uppercase">HEROIC EMBLEM</p>
                              <p className="text-xl font-black italic text-white flex items-center justify-end">13 <span className="material-symbols-outlined text-sm text-amber-500">star</span></p>
                           </div>
                        </div>

                        {/* SKILL CHIP GRID */}
                        <div className="grid grid-cols-4 gap-3">
                           {['RUSHER', 'SNIPER', 'IGL', 'SUPPORT'].map((role, i) => (
                              <div key={role} className={`p-2 rounded-xl text-center border transition-all ${i === 0 ? 'bg-amber-500/20 border-amber-500 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-white/5 border-white/5 text-slate-500 opacity-60'}`}>
                                 <p className="text-[8px] font-black">{role}</p>
                              </div>
                           ))}
                        </div>

                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                           <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">BIO STATUS</p>
                           <p className="text-xs font-bold text-slate-300 italic leading-relaxed">"System Infiltrator ready for Global Missions. Every line of code is a tactical deployment."</p>
                        </div>
                     </motion.div>
                  )}

                  {activeTab === 'WEAPON' && (
                     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
                        <div className="flex gap-4 mb-6">
                           <button className="bg-amber-500 text-black px-6 py-2 rounded-lg font-black text-[10px] tracking-widest uppercase">FRONTEND</button>
                           <button className="bg-white/5 text-slate-400 px-6 py-2 rounded-lg font-black text-[10px] tracking-widest uppercase">BACKEND</button>
                        </div>
                        {USER_STATS.arsenal.map((wpn) => (
                           <div key={wpn.name} className="bg-slate-900 border border-white/10 rounded-2xl p-4 flex gap-4 hover:border-amber-500 transition-all group">
                              <div className="w-20 h-20 bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5 shadow-inner">
                                 <span className="material-symbols-outlined text-4xl text-amber-500/40 group-hover:text-amber-500 group-hover:scale-110 transition-all">{wpn.img}</span>
                              </div>
                              <div className="flex-1">
                                 <div className="flex justify-between items-start mb-2">
                                    <div>
                                       <h5 className="text-[11px] font-black text-white uppercase tracking-tighter leading-none">{wpn.name}</h5>
                                       <p className="text-[8px] font-black text-amber-500 uppercase mt-1">LV.{wpn.commits}</p>
                                    </div>
                                    <span className="bg-white/10 px-2 py-0.5 rounded text-[8px] font-black text-slate-400">{wpn.mastery}</span>
                                 </div>
                                 <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <div className="flex justify-between text-[8px] font-bold text-slate-500"><span className="uppercase">Mastery Score</span> <span className="text-amber-500">+{wpn.score}</span></div>
                                    <div className="flex justify-between text-[8px] font-bold text-slate-500"><span className="uppercase">Deploy Rate</span> <span className="text-white">{wpn.success}</span></div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </motion.div>
                  )}

                  {activeTab === 'HONOR SCORE' && (
                     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="flex flex-col items-center">
                        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                           <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                           <div className="relative w-48 h-48 border-[10px] border-blue-600/20 rounded-full flex flex-col items-center justify-center">
                              <h3 className="text-7xl font-black italic tracking-tighter text-blue-500">{USER_STATS.honor}</h3>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-[-8px]">Perfect Score</p>
                           </div>
                        </div>
                        <div className="w-full space-y-4">
                           <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                              <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4 italic">BEHAVIOR RATING</h4>
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] border-b-4 border-green-800"><span className="material-symbols-outlined text-white text-2xl font-black">verified_user</span></div>
                                 <div>
                                    <p className="text-xl font-black italic text-green-400 leading-none">GOOD</p>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter mt-1">STAY FRIENDLY FOR HIGHER RATINGS AND EXTRA REWARDS</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>

            </div>

            {/* OVERLAY BUTTONS (CAMERA/PHOTO STUFF) */}
            <div className="absolute right-4 bottom-24 flex flex-col gap-3 z-30">
               {['photo_camera', 'person', 'qr_code', 'share'].map((icon) => (
                  <button key={icon} className="w-10 h-10 bg-black/60 border border-white/10 rounded-lg flex items-center justify-center group hover:bg-amber-500 transition-all">
                     <span className="material-symbols-outlined text-white group-hover:text-black font-black">{icon}</span>
                  </button>
               ))}
               <div className="bg-amber-500 text-black px-2 py-1 rounded text-[8px] font-black text-center">+8</div>
            </div>

         </main>
         <MobileNav />
      </div>
   );
}
