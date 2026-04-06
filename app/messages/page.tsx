"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function MessagesPage() {
  return (
    <>
      <div className="flex pt-20 h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-hidden flex flex-col px-6 py-8 pb-32 md:pb-8">
          <header className="mb-6">
            <h1 className="text-4xl font-headline font-black text-on-surface uppercase tracking-tighter italic">
              Team Communications
            </h1>
            <p className="text-on-surface-variant font-medium">
              Secure channel for squad coordination and strategy.
            </p>
          </header>

          <div className="flex-1 bg-white rounded-3xl border-4 border-secondary chunky-shadow-secondary overflow-hidden flex flex-col relative">
            {/* Chat Header */}
            <div className="bg-surface-container-high border-b-4 border-secondary p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black uppercase shadow-inner">
                  S1
                </div>
                <div>
                  <h2 className="text-xl font-headline font-black text-on-surface uppercase">
                    Squad Alpha
                  </h2>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase">
                    Active Mission: Neural Nexus
                  </p>
                </div>
              </div>
              <div className="flex gap-2 text-on-surface-variant">
                <button className="p-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </button>
                <button className="p-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">videocam</span>
                </button>
                <button className="p-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">info</span>
                </button>
              </div>
            </div>

            {/* Chat Area (Placeholder) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface relative checker-bg">
              <div className="text-center">
                <span className="bg-surface-container-highest px-4 py-1 rounded-full text-[10px] font-black uppercase text-on-surface-variant">
                  SECURE CONNECTION ESTABLISHED
                </span>
              </div>
              
              {/* Incoming Message */}
              <div className="flex items-start gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXd2VGhLGFwfl7n2yD0bazNKXKCINaYkI8YCuZgdhj_OQ4vRJ0KeLzVQYhmnKpyaGVq1j8G1F_cTS2vCSXXLHxkQJIgCqcZFepvYRs94ENdsCYxxD6Ug1JY_vqfoQ9YzLuXqjQxePFSt4tBx6-t8Ib7PvnSiFay77vV3pTQjrVOQT4yxhRxMnseoHUO9MclEty393ynkUr7kcxqEhg2MstrBLHxCrwJar80yi-M5GcqH4Am-QBkp2xaOqKovU07jX2ck7_n2iga8"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  alt="User"
                />
                <div className="bg-white border-2 border-primary p-4 rounded-2xl rounded-tl-sm chunky-shadow-sm max-w-lg">
                  <p className="text-[10px] font-black uppercase text-primary mb-1">Pixel_Slayer</p>
                  <p className="font-medium text-sm text-on-surface">
                    I just pushed the initial React scaffolding to the repo. Have we decided on the state management yet?
                  </p>
                </div>
              </div>

              {/* Outgoing Message */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="w-10 h-10 rounded-full border-2 border-secondary bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">person</span>
                </div>
                <div className="bg-secondary-container text-on-secondary-container border-2 border-secondary p-4 rounded-2xl rounded-tr-sm chunky-shadow-sm max-w-lg">
                  <p className="text-[10px] font-black uppercase text-secondary mb-1 text-right">You</p>
                  <p className="font-medium text-sm">
                    Awesome, checking it out now. Let's stick with Redux Toolkit since the data model might get complex.
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t-4 border-secondary z-10">
              <form className="flex gap-4">
                <button type="button" className="p-3 text-secondary hover:text-primary transition-colors bg-surface-container-low rounded-xl">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
                <input
                  type="text"
                  placeholder="TRANSMIT MESSAGE..."
                  className="flex-1 bg-surface-container-low border-2 border-transparent focus:border-secondary transition-colors rounded-xl px-4 font-bold font-mono text-sm"
                />
                <button type="submit" className="px-6 py-3 bg-secondary text-white font-headline font-black uppercase rounded-xl flex items-center gap-2 hover:bg-primary transition-colors">
                  Send
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      <MobileNav />
    </>
  );
}
