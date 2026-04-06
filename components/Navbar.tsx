"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Lobby", href: "/" },
    { name: "Events", href: "/missions" },
    { name: "Team", href: "/discovery" },
    { name: "Messages", href: "/victory" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50 flex justify-between items-center px-6 py-4 shadow-[0_4px_0_0_#0c53bc]">
      <div className="flex items-center gap-4">
        {pathname !== "/" && (
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-white transition-all chunky-shadow active:translate-y-1 active:shadow-none"
            title="Go Back"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}
        <Link href="/" className="flex items-center gap-2">
          <span 
            className="text-3xl text-blue-700 tracking-tighter uppercase flex items-center"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800 
            }}
          >
            <span>DEVMATCH</span>
            <span className="ml-2">COLLAB</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-600 font-bold"
                : "text-slate-600 font-medium"
            } font-headline tracking-tighter uppercase text-sm hover:-translate-y-1 transition-transform`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4 px-4 py-2 bg-slate-900/5 border border-slate-200 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-blue-600 text-lg font-bold">
              military_tech
            </span>
            <span className="text-xs font-black text-slate-700 tracking-tight">12</span>
          </div>
          <div className="w-[1px] h-4 bg-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-orange-500 text-lg font-bold">
              bolt
            </span>
            <span className="text-xs font-black text-slate-700 tracking-tight">450 XP</span>
          </div>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative group block focus:outline-none"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-11 h-11 rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform overflow-hidden bg-blue-50 flex items-center justify-center">
              <span className="absolute material-symbols-outlined text-blue-600 text-3xl select-none z-0">
                account_circle
              </span>
              <img
                alt="User Rank Avatar"
                className="absolute inset-0 w-full h-full object-cover z-10"
                src="/prof-avatar.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border-2 border-slate-200 rounded-2xl shadow-[0_8px_0_0_#e2e8f0] overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
              <div className="p-3 border-b border-slate-100 bg-slate-50/50">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logged in as</p>
                <p className="text-xs font-bold text-blue-700 truncate">Elite_Coder_99</p>
              </div>
              <div className="p-2">
                <Link 
                  href="/setup" 
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">person</span>
                  <span className="text-xs font-black uppercase tracking-tight">My Profile</span>
                </Link>
                <Link 
                  href="#" 
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:rotate-45 transition-transform">settings</span>
                  <span className="text-xs font-black uppercase tracking-tight">Settings</span>
                </Link>
                <button 
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">logout</span>
                  <span className="text-xs font-black uppercase tracking-tight">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-200 h-[4px] w-full absolute bottom-0 left-0"></div>
    </nav>
  );
}
