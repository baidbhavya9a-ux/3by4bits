"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function WarRoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;
  
  // Tactical Module State: 'whiteboard' | 'editor'
  const [activeModule, setActiveModule] = useState<'whiteboard' | 'editor'>('whiteboard');
  
  // Chat States
  const [messages, setMessages] = useState<any[]>([
    { role: "system", text: "CONNECTION SECURED. ROOM: " + roomId, time: "09:00" },
    { role: "partner", text: "I'm in. Let's look at the mission brief.", time: "09:01" }
  ]);
  const [input, setInput] = useState("");
  
  // Whiteboard States
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState("#2563eb");
  const [brushSize, setBrushSize] = useState(5);

  // Editor States
  const [code, setCode] = useState(`// TACTICAL ARSENAL COMPILER v1.0
function infiltrate(target) {
  console.log("Analyzing Node: " + target);
  return { status: "ACTIVE", access: "GRANTED" };
}

const missionResult = infiltrate("GLOBAL_CORE_01");`);
  const [output, setOutput] = useState<string[]>(["[SYSTEM] Arsenal Initialized. Ready for command..."]);
  const [executing, setExecuting] = useState(false);

  // Initialize Canvas
  useEffect(() => {
    if (activeModule !== 'whiteboard') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [activeModule]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => { setIsDrawing(true); draw(e); };
  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) { canvas.getContext("2d")?.beginPath(); }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || activeModule !== 'whiteboard') return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    let x, y;
    if ("touches" in e) {
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: "me", text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput("");
  };

  const runCode = () => {
    setExecuting(true);
    setTimeout(() => {
      setOutput(prev => [...prev, `[EXECUTING] node tactical_script.js`, `[LOG] Mission payload delivered successfully.`, `[SUCCESS] Protocol complete.`]);
      setExecuting(false);
    }, 1500);
  };

  return (
    <div className="flex pt-20 h-screen overflow-hidden bg-slate-50 text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col p-4 md:p-6 lg:flex-row gap-8">
        
        {/* Left Section: Matching Hub & Comms */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          {/* Briefing Module - Reskinned */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-[8px_8px_0_0_#e2e8f0] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-blue-600/10 animate-pulse text-5xl">shield</span>
             </div>
             <h1 className="text-3xl font-headline font-black uppercase text-slate-800 tracking-tighter italic mb-1">Combat Briefing</h1>
             <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-6">ROOM ID: <span className="text-blue-600">{roomId}</span></p>
             
             <div className="flex gap-2 relative z-10">
                <button 
                  onClick={() => setActiveModule('whiteboard')}
                  className={`flex-1 py-3 rounded-xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 ${activeModule === 'whiteboard' ? 'bg-blue-700 text-white border-blue-900 shadow-[0_4px_0_0_#1e3a8a]' : 'bg-white text-slate-400 border-slate-200 hover:border-blue-600 shadow-sm'}`}
                >
                   <span className="material-symbols-outlined text-sm font-black">draw</span>
                   Sketchpad
                </button>
                <button 
                  onClick={() => setActiveModule('editor')}
                  className={`flex-1 py-3 rounded-xl font-headline font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 ${activeModule === 'editor' ? 'bg-blue-700 text-white border-blue-900 shadow-[0_4px_0_0_#1e3a8a]' : 'bg-white text-slate-400 border-slate-200 hover:border-blue-600 shadow-sm'}`}
                >
                   <span className="material-symbols-outlined text-sm font-black">terminal</span>
                   Arsenal
                </button>
             </div>
          </div>

          {/* Tactical Chat - Reskinned */}
          <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-[8px_8px_0_0_#e2e8f0]">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <h3 className="font-headline font-black uppercase text-[10px] tracking-[0.2em] text-blue-700 italic">Tactical Comms</h3>
               <div className="flex items-center gap-2">
                  <span className="text-[8px] font-black text-slate-400 uppercase">Partner Online</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-body bg-white">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'me' ? 'items-end' : m.role === 'system' ? 'items-center py-2' : 'items-start'}`}>
                  {m.role === 'system' ? (
                     <p className="text-[8px] font-black uppercase text-blue-600/60 tracking-widest bg-blue-50 px-3 py-1 rounded-full">{m.text}</p>
                  ) : (
                    <div className="max-w-[85%]">
                       <p className={`p-4 rounded-2xl text-[12px] font-bold leading-relaxed shadow-sm ${m.role === 'me' ? 'bg-blue-700 text-white rounded-tr-none border-b-4 border-blue-900' : 'bg-slate-100 text-slate-700 rounded-tl-none border-b-4 border-slate-200'}`}>
                         {m.text}
                       </p>
                       <p className="text-[8px] font-black text-slate-400 mt-1 uppercase tracking-widest px-2">{m.time} • {m.role === 'me' ? 'OPERATIVE (YOU)' : 'PARTNER'}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Submit tactical data..." 
                className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-300 shadow-sm"
              />
              <button type="submit" className="bg-blue-700 text-white px-5 py-3 rounded-xl font-black shadow-[0_4px_0_0_#1e3a8a] active:translate-y-1 active:shadow-none hover:brightness-110 transition-all">
                <span className="material-symbols-outlined text-sm font-black">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Section: Strategic Module Surface - Reskinned */}
        <div className="flex-1 bg-white border-2 border-slate-200 rounded-3xl flex flex-col shadow-[12px_12px_0_0_#e2e8f0] relative">
          
          <div className="p-5 bg-white flex flex-col md:flex-row justify-between items-center gap-4 z-10 border-b border-slate-100 rounded-t-3xl">
             <div className="flex items-center gap-3">
                <h3 className="font-headline font-black uppercase text-xl text-slate-800 tracking-tighter italic">
                   {activeModule === 'whiteboard' ? 'Tactical Sketchpad' : 'Arsenal Code Engine'}
                </h3>
                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md text-white ${activeModule === 'whiteboard' ? 'bg-blue-600' : 'bg-orange-600'}`}>
                   {activeModule === 'whiteboard' ? 'Alpha Visual' : 'Combat Console'}
                </span>
             </div>
             
             <div className="flex items-center gap-4">
                {activeModule === 'whiteboard' ? (
                   <>
                      <div className="flex gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100 shadow-inner">
                         {['#2563eb', '#ef4444', '#1e293b'].map(color => (
                           <button key={color} onClick={() => setBrushColor(color)} className={`w-7 h-7 rounded-lg transition-all ${brushColor === color ? 'scale-110 ring-2 ring-blue-500 shadow-lg' : 'opacity-40 hover:opacity-100'}`} style={{ backgroundColor: color }} />
                         ))}
                      </div>
                      <button onClick={clearCanvas} className="bg-white text-red-600 border-2 border-red-100 px-5 py-2.5 rounded-xl font-black text-[10px] hover:bg-red-50 hover:border-red-500 active:translate-y-0.5 transition-all uppercase tracking-widest shadow-sm">
                         Clear Surface
                      </button>
                   </>
                ) : (
                   <button 
                     onClick={runCode}
                     disabled={executing}
                     className={`bg-green-600 text-white border-b-4 border-green-800 px-8 py-3 rounded-xl font-black text-[10px] transition-all uppercase tracking-widest flex items-center gap-3 hover:brightness-110 active:translate-y-1 active:border-b-0 shadow-lg ${executing ? 'animate-pulse opacity-50' : ''}`}
                   >
                     <span className="material-symbols-outlined text-sm font-black">{executing ? 'sync' : 'play_arrow'}</span>
                     {executing ? 'Executing Commands...' : 'Execute Protocol'}
                   </button>
                )}
             </div>
          </div>

          <div className="flex-1 w-full relative overflow-hidden bg-white">
             {activeModule === 'whiteboard' ? (
                <>
                   <canvas
                      ref={canvasRef}
                      onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseOut={stopDrawing} onMouseMove={draw}
                      onTouchStart={startDrawing} onTouchEnd={stopDrawing} onTouchMove={draw}
                      className="w-full h-full cursor-crosshair touch-none"
                   />
                   <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </>
             ) : (
                <div className="h-full flex flex-col">
                   <textarea
                     value={code}
                     onChange={(e) => setCode(e.target.value)}
                     className="flex-1 w-full bg-slate-900 text-slate-100 p-10 font-mono text-[14px] focus:outline-none resize-none leading-relaxed selection:bg-blue-600 shadow-inner"
                     spellCheck={false}
                   />
                   <div className="h-44 bg-slate-950 border-t-4 border-blue-600 p-5 font-mono text-[11px] overflow-y-auto shadow-2xl">
                      <p className="text-blue-500 font-black mb-3 uppercase tracking-[0.2em] italic">[MISSION_CONTROL_TERMINAL]</p>
                      {output.map((line, i) => (
                        <p key={i} className={`mb-1.5 ${line.includes('[SUCCESS]') ? 'text-green-400' : line.includes('[LOG]') ? 'text-blue-400' : 'text-slate-500'}`}>
                           {line}
                        </p>
                      ))}
                      {executing && (
                        <p className="text-orange-400 animate-pulse font-black uppercase mt-1">{" > "} ANALYZING_TACKTICAL_PAYLOAD . . .</p>
                      )}
                   </div>
                </div>
             )}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase text-slate-400 tracking-[0.3em] rounded-b-3xl">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Operations Sync Active
             </div>
             <div className="italic">Strategic Command Center v1.5</div>
          </div>
        </div>
      </main>
    </div>
  );
}
