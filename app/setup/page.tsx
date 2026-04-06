"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDCXd2VGhLGFwfl7n2yD0bazNKXKCINaYkI8YCuZgdhj_OQ4vRJ0KeLzVQYhmnKpyaGVq1j8G1F_cTS2vCSXXLHxkQJIgCqcZFepvYRs94ENdsCYxxD6Ug1JY_vqfoQ9YzLuXqjQxePFSt4tBx6-t8Ib7PvnSiFay77vV3pTQjrVOQT4yxhRxMnseoHUO9MclEty393ynkUr7kcxqEhg2MstrBLHxCrwJar80yi-M5GcqH4Am-QBkp2xaOqKovU07jX2ck7_n2iga8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlvwSLIfA6jVKhEbTlKbIth4Zforqy7sjK_1B032JUYTf207peFQ61CuM_7XSq2WfFyeQ4W_vPGxjSgz4oZdfGNGiyv0Y3cjp4VALLsx3A9mYQBak50LvsnVQxzQKWQJLQQFsOxdXwSeoi8UW1Id0Z5fdkZB6OZPGeQyw4h9frimzgpwrwaFfIaQpxCo1x_aJGpZ4uTW7XA7vvDsF10Z38mBa4Exuh1beuoSsucPZWn2PjUg3fWLkvhczCF_UeCS3s8fK9tJt5L30",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeVJRW8X4g2It217tlFoIZmtMe-ZS67WrCIU9piqXtjQoeE2dXcViJ4M8_dCj82HSXt8jIICYkQb-lr0-jl8wfRPlGVdCVT4alAJaa4-ZIyKzziy0QfWCCd2D8c3yUzYlxVlLTmXuMHfmJ7jxwsleIUCRhKd6DVMalkALDH4sdhLEqy-LDGHBv9MBlpNSeU5QUyWiNtWZxKlqlmQyj7D9zEQTUGjr8SReyLh2xeUV3A6JtR4LAMeEapEeI_vshOG6h6aieW5Zuo1Y",
];

export default function SetupPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const router = useRouter();

  return (
    <main className="min-h-screen pt-24 pb-12 flex items-center justify-center checker-bg bg-surface">
      <div className="w-full max-w-2xl px-4">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,25,69,0.3)] border-4 border-on-surface p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>

          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter italic text-primary leading-none mb-2">
              Player Registration
            </h1>
            <p className="text-on-surface-variant font-bold uppercase tracking-widest text-xs">
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
                <div className="relative group cursor-pointer">
                  <div className="w-48 h-48 rounded-full border-8 border-primary bg-surface-container-high shadow-xl p-2 relative z-10 overflow-hidden">
                    <img
                      src={avatars[selectedAvatar]}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 right-2 bg-secondary text-white p-3 rounded-full chunky-shadow-secondary z-20 group-hover:-translate-y-1 transition-transform">
                    <span className="material-symbols-outlined">edit</span>
                  </div>
                  {/* Decorative orbital ring */}
                  <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"></div>
                </div>

                <div className="flex justify-center gap-6">
                  {avatars.map((avatar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedAvatar(idx)}
                      className={`w-16 h-16 rounded-xl border-4 transition-all overflow-hidden bg-white shadow-sm hover:-translate-y-1 active:translate-y-1 ${
                        selectedAvatar === idx
                          ? "border-primary scale-110 shadow-lg"
                          : "border-transparent opacity-60 grayscale hover:grayscale-0"
                      }`}
                    >
                      <img src={avatar} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Class & Arsenal Registration */}
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/lobby");
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-headline font-black uppercase text-xs text-primary">
                    Select Your Class
                  </label>
                  <select className="w-full bg-surface-container-low border-2 border-slate-200 rounded-lg p-4 font-bold outline-none focus:border-primary transition-colors cursor-pointer">
                    <option>Node Ninja (Backend)</option>
                    <option>UI Druid (Frontend)</option>
                    <option>AI Alchemist (ML/Core)</option>
                    <option>Cloud Titan (DevOps)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-headline font-black uppercase text-xs text-primary">
                    Primary Arsenal (Skill)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Next.js, Rust, Docker"
                    className="w-full bg-surface-container-low border-2 border-slate-200 rounded-lg p-4 font-bold outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full py-6 bg-secondary text-white font-headline font-black text-2xl uppercase tracking-widest rounded-xl chunky-shadow-secondary hover:-translate-y-2 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4 group"
                >
                  <span className="material-symbols-outlined text-3xl group-hover:rotate-180 transition-transform duration-500">
                    settings
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
