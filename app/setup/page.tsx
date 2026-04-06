"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const avatars = [
  { src: "/prof-avatar.png", name: "Elite Coder" },
  { src: "/skin-druid.png", name: "UI Druid" },
  { src: "/skin-ninja.png", name: "Cyber Ninja" },
];

export default function SetupPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [username, setUsername] = useState("Elite_Coder_99");
  const router = useRouter();

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

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-5 bg-blue-700 text-white font-black text-lg uppercase tracking-[0.2em] rounded-2xl shadow-[0_8px_0_0_#1e40af] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4 group"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-180 transition-transform duration-700">
                    token
                  </span>
                  INITIALIZE ACCOUNT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
