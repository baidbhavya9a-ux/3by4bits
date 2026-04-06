"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const avatars = [
  { src: "/prof-avatar.png", name: "Elite Coder" },
  { src: "/skin-druid.png", name: "UI Druid" },
  { src: "/skin-ninja.png", name: "Cyber Ninja" },
];

export default function SetupPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const { user, loginWithGoogle } = useAuth();
  const [username, setUsername] = useState("Elite_Coder_99");
  const router = useRouter();

  // Sync username with Google profile name if available
  useEffect(() => {
    if (user && user.displayName) {
      // Create a slugified username from display name
      const suggested = user.displayName.split(' ')[0] + '_' + Math.floor(Math.random() * 100);
      setUsername(suggested);
    }
  }, [user]);

  return (
    <main className="min-h-screen pt-32 pb-12 flex items-center justify-center checker-bg bg-slate-50">
      <div className="w-full max-w-2xl px-4">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,25,69,0.15)] border-2 border-slate-200 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter text-blue-700 leading-none mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Player Registration
            </h1>
            <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">
              Initialize Your Legend in the Arena
            </p>
          </header>

          <div className="space-y-12">
            {/* Character Creator / Avatar Selector */}
            <section>
              <h2 className="text-sm font-headline font-black uppercase text-secondary mb-6 text-center">
                Select Your Skin
              </h2>
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative group cursor-pointer">
                    <div className="w-44 h-44 rounded-full border-4 border-white bg-slate-50 shadow-2xl relative z-10 overflow-hidden outline outline-1 outline-slate-200">
                      <img
                        src={avatars[selectedAvatar].src}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 right-2 bg-blue-600 text-white p-2.5 rounded-full shadow-lg z-20 group-hover:-translate-y-1 transition-transform border-4 border-white">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </div>
                    {/* Decorative orbital ring */}
                    <div className="absolute -inset-4 border border-dashed border-blue-600/20 rounded-full animate-spin-slow"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase text-blue-600 tracking-tighter mt-2">{avatars[selectedAvatar].name}</p>
                </div>

                <div className="flex justify-center gap-4">
                  {avatars.map((avatar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAvatar(idx)}
                      title={avatar.name}
                      className={`w-14 h-14 rounded-2xl border-2 transition-all overflow-hidden bg-white hover:-translate-y-1 active:translate-y-1 ${
                        selectedAvatar === idx
                          ? "border-blue-600 shadow-lg scale-110"
                          : "border-slate-100 opacity-60 grayscale hover:grayscale-0"
                      }`}
                    >
                      <img src={avatar.src} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Class & Arsenal Registration */}
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              <div className="space-y-6">
                {/* Callsign / Username Field */}
                <div className="space-y-2">
                  <label className="block font-black uppercase text-[10px] text-blue-700 tracking-widest ml-1">
                    Callsign (Username)
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      alternate_email
                    </span>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your legend name"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 pl-12 font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-black uppercase text-[10px] text-blue-700 tracking-widest ml-1">
                      Choose Your Class
                    </label>
                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm cursor-pointer appearance-none">
                      <option>Node Ninja (Backend)</option>
                      <option>UI Druid (Frontend)</option>
                      <option>AI Alchemist (ML/Core)</option>
                      <option>Cloud Titan (DevOps)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-black uppercase text-[10px] text-blue-700 tracking-widest ml-1">
                      Primary Arsenal (Skill)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Next.js, Rust, Docker"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 font-bold text-slate-700 outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <button
                  type="submit"
                  className="w-full py-5 bg-blue-700 text-white font-black text-lg uppercase tracking-[0.2em] rounded-2xl shadow-[0_8px_0_0_#1e40af] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4 group"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-180 transition-transform duration-700">
                    token
                  </span>
                  INITIALIZE ACCOUNT
                </button>

                <div className="flex items-center gap-4 pt-4 pb-2">
                  <div className="h-[1px] flex-1 bg-slate-100"></div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">OR SECURE ACCESS VIA</span>
                  <div className="h-[1px] flex-1 bg-slate-100"></div>
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    if (!user) {
                      await loginWithGoogle();
                    }
                    router.push('/victory');
                  }}
                  id="google-btn-setup"
                  className="w-full py-4 bg-white text-slate-700 border-2 border-slate-100 font-black text-xs rounded-2xl uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm active:translate-y-1 active:shadow-none"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
