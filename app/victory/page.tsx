"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function VictoryPage() {
  const [activeView, setActiveView] = useState<"overview" | "chat" | "whiteboard">("overview");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Pixel_Slayer", text: "Yo! Great match score. Ready to build?", time: "10:24 AM" },
    { id: 2, sender: "You", text: "Absolutely. Let's start with the architecture.", time: "10:25 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  
  // Whiteboard State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#2563eb"); // Default blue

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ("touches" in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    setIsDrawing(true);
    (canvas as any)._lastX = x;
    (canvas as any)._lastY = y;
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ("touches" in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    const prevX = (canvas as any)._lastX || x;
    const prevY = (canvas as any)._lastY || y;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.stroke();

    broadcastDraw(prevX, prevY, x, y, brushColor);
    (canvas as any)._lastX = x;
    (canvas as any)._lastY = y;
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    broadcastClear();
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg = { id: Date.now(), sender: "You", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, msg]);
    setNewMessage("");
    
    // Broadcast message
    if (typeof window !== 'undefined') {
      const channel = new BroadcastChannel('devmatch_workspace');
      channel.postMessage({ type: 'CHAT_MSG', payload: { ...msg, sender: 'Teammate' } });
      channel.close();
    }
  };

  // Real-time Sync Listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const channel = new BroadcastChannel('devmatch_workspace');
    
    channel.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === 'CHAT_MSG') {
        setMessages(prev => [...prev, payload]);
      } else if (type === 'DRAW') {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.strokeStyle = payload.color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.moveTo(payload.x1, payload.y1);
        ctx.lineTo(payload.x2, payload.y2);
        ctx.stroke();
      } else if (type === 'CLEAR') {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    return () => channel.close();
  }, [canvasRef]);

  const broadcastDraw = (x1: number, y1: number, x2: number, y2: number, color: string) => {
    if (typeof window !== 'undefined') {
      const channel = new BroadcastChannel('devmatch_workspace');
      channel.postMessage({ type: 'DRAW', payload: { x1, y1, x2, y2, color } });
      channel.close();
    }
  };

  const broadcastClear = () => {
    if (typeof window !== 'undefined') {
      const channel = new BroadcastChannel('devmatch_workspace');
      channel.postMessage({ type: 'CLEAR' });
      channel.close();
    }
  };

  return (
    <>

      <div className="flex pt-20 h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative py-12 flex flex-col items-center justify-center overflow-hidden pb-32">
          {/* Workspace Content */}
          <div className="w-full bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden min-h-[600px] flex flex-col">
            {/* Tab Bar */}
            <div className="bg-slate-50 border-b-2 border-slate-100 p-2 flex gap-2">
              <button 
                onClick={() => setActiveView("overview")}
                className={`flex-1 py-4 px-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${activeView === "overview" ? "bg-blue-700 text-white shadow-lg" : "text-slate-500 hover:bg-slate-200"}`}
              >
                <span className="material-symbols-outlined text-lg">assessment</span>
                Overview
              </button>
              <button 
                onClick={() => setActiveView("chat")}
                className={`flex-1 py-4 px-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${activeView === "chat" ? "bg-blue-700 text-white shadow-lg" : "text-slate-500 hover:bg-slate-200"}`}
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Chat
              </button>
              <button 
                onClick={() => setActiveView("whiteboard")}
                className={`flex-1 py-4 px-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${activeView === "whiteboard" ? "bg-blue-700 text-white shadow-lg" : "text-slate-500 hover:bg-slate-200"}`}
              >
                <span className="material-symbols-outlined text-lg">draw</span>
                Whiteboard
              </button>
            </div>

            <div className="flex-1 relative">
              {/* Overview Tab */}
              {activeView === "overview" && (
                <div className="p-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-3 bg-blue-700 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg mb-4">
                      <span className="material-symbols-outlined text-sm">cycle</span>
                      SYNC ACHIEVED
                    </div>
                    <h1 
                      className="text-5xl md:text-7xl font-black text-slate-800 uppercase tracking-tighter leading-none"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                    >
                      TEAM FORMED!
                    </h1>
                    <p className="text-lg font-medium text-slate-500 max-w-xl mx-auto">
                      The algorithm has computed a perfect match. Your combined skill
                      score is <span className="text-blue-700 font-bold">98.4%</span>.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Simplified Player Cards */}
                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 w-64 text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full border-4 border-white shadow-md overflow-hidden">
                        <img alt="Player 1" src="/skin-druid.png" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-black uppercase text-slate-800">Pixel_Slayer</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase">UI Druid</p>
                    </div>

                    <div className="bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 w-64 text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full border-4 border-white shadow-md overflow-hidden">
                        <img alt="Player 2" src="/skin-ninja.png" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-black uppercase text-slate-800">Node_Ninja</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Node Ninja</p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button className="bg-slate-800 text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-700 transition-all shadow-md flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">radar</span>
                      Search for New Team
                    </button>
                    <button className="bg-white text-slate-400 px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest border-2 border-slate-100 hover:border-slate-300 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">logout</span>
                      Disband Squad
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Tab */}
              {activeView === "chat" && (
                <div className="flex flex-col h-[600px] animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}>
                        <div className={`max-w-[70%] p-4 rounded-3xl font-bold text-sm shadow-sm ${msg.sender === "You" ? "bg-blue-700 text-white rounded-br-none" : "bg-slate-100 text-slate-700 rounded-bl-none"}`}>
                          {msg.text}
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{msg.sender} • {msg.time}</span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={sendMessage} className="p-4 border-t-2 border-slate-100 bg-slate-50 flex gap-3">
                    <input 
                      type="text" 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Transmission text here..."
                      className="flex-1 bg-white border-2 border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:border-blue-700 transition-all shadow-sm"
                    />
                    <button type="submit" className="bg-blue-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </form>
                </div>
              )}

              {/* Whiteboard Tab */}
              {activeView === "whiteboard" && (
                <div className="flex flex-col h-[600px] animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="bg-slate-50 p-3 border-b-2 border-slate-100 flex items-center justify-between">
                    <div className="flex gap-2">
                      {["#000000", "#2563eb", "#ef4444", "#22c55e"].map((color) => (
                        <button 
                          key={color}
                          onClick={() => setBrushColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${brushColor === color ? "scale-125 border-slate-800 shadow-md" : "border-white opacity-60 hover:opacity-100"}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="w-[1px] h-6 bg-slate-300 mx-2" />
                      <button 
                        onClick={() => setBrushColor("#ffffff")}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center bg-white ${brushColor === "#ffffff" ? "scale-125 border-slate-800 shadow-md" : "border-slate-200 opacity-60 hover:opacity-100"}`}
                        title="Eraser"
                      >
                        <span className="material-symbols-outlined text-slate-400 text-sm">ink_eraser</span>
                      </button>
                    </div>
                    <button 
                      onClick={clearCanvas}
                      className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 border-red-100 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                    >
                      Clear Board
                    </button>
                  </div>
                  <div className="flex-1 bg-[#fafafa] relative cursor-crosshair">
                     <canvas 
                      ref={canvasRef}
                      width={1000}
                      height={500}
                      className="w-full h-full block"
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                     />
                     <div className="absolute top-4 left-4 pointer-events-none opacity-30 select-none">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Collaborative Canvas [Alpha]</p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
      <MobileNav />
    </>
  );
}
