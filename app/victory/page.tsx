"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useAuth } from "@/context/AuthContext";

// Tactical Operative Database
const PAST_OPERATIVES = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "System Architect",
    image: "https://i.pravatar.cc/300?img=14",
    lastMsg: "The SIH cloud infra is ready for deployment.",
    time: "10:24 AM",
    online: true,
    unread: 2
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UI/UX Specialist",
    image: "https://i.pravatar.cc/300?img=26",
    lastMsg: "Did you check the new wireframes for the dashboard?",
    time: "Yesterday",
    online: false,
    unread: 0
  },
  {
    id: 3,
    name: "Varun Kapoor",
    role: "Cybersecurity Analyst",
    image: "https://i.pravatar.cc/300?img=18",
    lastMsg: "Packet sniffing protocol successfully injected.",
    time: "Mon",
    online: true,
    unread: 0
  },
  {
    id: 4,
    name: "Deepanshu Kumar",
    role: "DevOps Titan",
    image: "https://i.pravatar.cc/300?img=7",
    lastMsg: "Scaling the Kubernetes cluster as we speak.",
    time: "04/05",
    online: false,
    unread: 0
  }
];

export default function VictoryPage() {
  const { user } = useAuth();
  const [selectedOp, setSelectedOp] = useState(PAST_OPERATIVES[0]);
  const [messages, setMessages] = useState([
    { id: 1, sender: "Pixel_Slayer", text: "Yo Operative! Great match score. Ready to build?", time: "10:24 AM", type: "partner" },
    { id: 2, sender: "You", text: "Absolutely. Let's start with the architecture briefing.", time: "10:25 AM", type: "me" },
    { id: 3, sender: "Pixel_Slayer", text: "I've uploaded the node diagrams. Check the sketchpad.", time: "10:26 AM", type: "partner" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const msg = {
      id: Date.now(),
      sender: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "me" as const
    };
    setMessages([...messages, msg]);
    setInput("");
  };

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col md:flex-row h-full">
        
        {/* OPERATIVE SIDEBAR (Comforting Light Mode) */}
        <div className="w-full md:w-80 border-r-8 border-slate-200 bg-white flex flex-col h-full z-10 transition-all">
           <div className="p-6 border-b-2 border-slate-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <h1 className="text-3xl font-headline font-black uppercase text-slate-800 italic tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>MESSAGE LOG</h1>
                 <span className="material-symbols-outlined text-blue-600 animate-pulse font-black">forum</span>
              </div>
              <div className="relative">
                 <input 
                   type="text" 
                   placeholder="SEARCH MISSION LOGS..." 
                   className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-[10px] font-black uppercase focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-300" 
                 />
                 <span className="material-symbols-outlined absolute right-3 top-3 text-slate-300 text-sm">search</span>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar">
              {PAST_OPERATIVES.map((op) => (
                <div 
                  key={op.id} 
                  onClick={() => setSelectedOp(op)}
                  className={`p-5 border-b border-slate-50 cursor-pointer transition-all flex items-center gap-4 group relative ${selectedOp.id === op.id ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}
                >
                   {selectedOp.id === op.id && <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-600 shadow-[2px_0_10px_rgba(37,99,235,0.2)]" />}
                   <div className="relative">
                      <div className={`w-12 h-12 rounded-2xl bg-white border-2 overflow-hidden shadow-sm group-hover:scale-105 transition-transform ${selectedOp.id === op.id ? 'border-blue-500' : 'border-slate-200'}`}>
                        <img src={op.image} className="w-full h-full object-cover" alt={op.name} />
                      </div>
                      {op.online && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                         <h3 className="text-xs font-black uppercase text-slate-800 tracking-tighter truncate leading-none">{op.name}</h3>
                         <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{op.time}</span>
                      </div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 italic leading-none">{op.role}</p>
                      <p className="text-[9px] font-bold text-slate-400 truncate leading-none">{op.lastMsg}</p>
                   </div>
                   {op.unread > 0 && (
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-xl flex items-center justify-center text-[9px] font-black shadow-lg">{op.unread}</div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* STRATEGIC HUB AREA (Clean Tactical Surface) */}
        <div className="flex-1 flex flex-col bg-slate-50 h-full relative overflow-hidden">
           {/* Subtle Grid for tactical branding */}
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

           {/* Chat Header */}
           <div className="p-5 bg-white border-b-8 border-slate-200 flex items-center justify-between z-10 shadow-sm">
              <div className="flex items-center gap-4">
                 <div className="w-11 h-11 rounded-2xl bg-slate-100 border-2 border-blue-100 overflow-hidden shadow-sm">
                    <img src={selectedOp.image} className="w-full h-full object-cover" alt={selectedOp.name} />
                 </div>
                 <div>
                    <h2 className="text-2xl font-headline font-black uppercase text-slate-800 italic leading-none tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>{selectedOp.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                       <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest italic leading-none">{selectedOp.role}</p>
                       <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                       <span className={`text-[8px] font-black uppercase ${selectedOp.online ? "text-green-500" : "text-slate-400"}`}>{selectedOp.online ? "CONNECTION ACTIVE" : "IDLE"}</span>
                    </div>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="w-11 h-11 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:translate-y-0.5">
                    <span className="material-symbols-outlined text-xl font-black">call</span>
                 </button>
                 <button className="w-11 h-11 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:translate-y-0.5">
                    <span className="material-symbols-outlined text-xl font-black">videocam</span>
                 </button>
                 <button className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-all shadow-[4px_4px_0_0_#2563eb]">
                    <span className="material-symbols-outlined text-xl font-black">shield</span>
                 </button>
              </div>
           </div>

           {/* Message history */}
           <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar z-10">
              {messages.map((m, i) => (
                <div key={m.id} className={`flex flex-col ${m.type === 'me' ? 'items-end' : 'items-start'}`}>
                  <div className="max-w-[75%] group">
                     {m.type === 'me' && (
                        <div className="flex items-center gap-2 justify-end mb-2 px-4">
                           <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest italic">OUTBOUND TRANSMISSION</p>
                           <span className="material-symbols-outlined text-[10px] text-blue-500">verified</span>
                        </div>
                     )}
                     {m.type === 'partner' && (
                        <div className="flex items-center gap-2 mb-2 px-4">
                           <span className="material-symbols-outlined text-[10px] text-slate-400">shield</span>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest italic">INBOUND FROM: {selectedOp.name.toUpperCase()}</p>
                        </div>
                     )}
                     <div className={`p-5 rounded-3xl font-bold text-[13px] leading-relaxed shadow-[6px_6px_0_0_#000] border-[3px] border-slate-950 transition-all group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[8px_8px_0_0_#000] ${m.type === 'me' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none'}`}>
                        {m.text}
                     </div>
                     <div className={`flex items-center gap-2 mt-3 px-4 ${m.type === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{m.time}</span>
                        {m.type === 'me' && <span className="material-symbols-outlined text-blue-500 text-xs font-black">done_all</span>}
                     </div>
                  </div>
                </div>
              ))}
           </div>

           {/* Input bar */}
           <div className="p-8 bg-white border-t-8 border-slate-200 z-10">
              <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex gap-5">
                 <button type="button" className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center border-2 border-slate-100 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm">
                    <span className="material-symbols-outlined font-black">attach_file</span>
                 </button>
                 <div className="flex-1 relative">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="ENTER TACTICAL COMMAND..." 
                      className="w-full h-14 bg-slate-50 border-2 border-slate-200 rounded-2xl px-6 font-bold text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner placeholder:text-slate-300 tracking-wide"
                    />
                 </div>
                 <button type="submit" className="w-14 h-14 bg-blue-600 text-white rounded-2xl border-2 border-slate-950 flex items-center justify-center shadow-[6px_6px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:scale-95">
                    <span className="material-symbols-outlined font-black">send</span>
                 </button>
              </form>
           </div>
        </div>
      </main>
      <MobileNav />
      <style jsx global>{`
         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
         .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}
