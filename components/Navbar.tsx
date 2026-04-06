"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loginWithGoogle, logout } = useAuth();

  const navLinks = [
    { name: "Lobby", href: "/" },
    { name: "Events", href: "/missions" },
    { name: "Team", href: "/discovery" },
    { name: "Messages", href: "/victory" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStat, setActiveStat] = useState<"xp" | "medals" | null>(null);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (statsRef.current && !statsRef.current.contains(event.target as Node)) {
        setActiveStat(null);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="relative" ref={statsRef}>
          <div className="hidden sm:flex items-center gap-1 bg-slate-900/5 border border-slate-200 rounded-2xl backdrop-blur-sm overflow-hidden">
            <button 
              onClick={() => setActiveStat(activeStat === "medals" ? null : "medals")}
              className={`flex items-center gap-1.5 px-3 py-2 transition-all hover:bg-blue-50 active:scale-95 ${activeStat === "medals" ? "bg-blue-50 shadow-inner" : ""}`}
              title="Rank Details"
            >
              <span className="material-symbols-outlined text-blue-600 text-lg font-bold">
                military_tech
              </span>
              <span className="text-xs font-black text-slate-700 tracking-tight">12</span>
            </button>
            <div className="w-[1px] h-4 bg-slate-300"></div>
            <button 
              onClick={() => setActiveStat(activeStat === "xp" ? null : "xp")}
              className={`flex items-center gap-1.5 px-3 py-2 transition-all hover:bg-orange-50 active:scale-95 ${activeStat === "xp" ? "bg-orange-50 shadow-inner" : ""}`}
              title="XP Details"
            >
              <span className="material-symbols-outlined text-orange-500 text-lg font-bold">
                bolt
              </span>
              <span className="text-xs font-black text-slate-700 tracking-tight">450 XP</span>
            </button>
          </div>

          {/* Stats Popovers */}
          {activeStat === "medals" && (
            <div className="absolute top-12 left-0 w-64 bg-white/95 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-[0_12px_40px_-5px_rgba(0,0,0,0.15)] z-[60] p-4 animate-in fade-in zoom-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className="material-symbols-outlined text-blue-600">military_tech</span>
                <h3 className="font-black text-xs uppercase tracking-widest text-slate-700">Trophy Room</h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center bg-slate-50 p-2 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-600 uppercase">Season 01 Elite</span>
                  <span className="text-[10px] font-black text-blue-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">First Commit</span>
                  <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                </div>
              </div>
              <div className="bg-blue-600/5 p-3 rounded-xl border border-blue-600/10">
                <p className="text-[9px] font-black text-blue-700 uppercase mb-1">Growth Tip</p>
                <p className="text-[11px] font-medium text-slate-600 leading-tight">Win a weekly challenge to unlock the <span className="font-bold text-blue-700">Grandmaster</span> badge!</p>
              </div>
            </div>
          )}

          {activeStat === "xp" && (
            <div className="absolute top-12 right-0 w-64 bg-white/95 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-[0_12px_40px_-5px_rgba(0,0,0,0.15)] z-[60] p-4 animate-in fade-in zoom-in slide-in-from-top-2 duration-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className="material-symbols-outlined text-orange-500">bolt</span>
                <h3 className="font-black text-xs uppercase tracking-widest text-slate-700">XP History</h3>
              </div>
              <div className="space-y-2 mb-4 max-h-32 overflow-y-auto pr-1">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-50">
                  <div>
                    <p className="text-[10px] font-bold text-slate-700 uppercase leading-none">Setup Complete</p>
                    <p className="text-[8px] text-slate-400 font-medium">Just now</p>
                  </div>
                  <span className="text-[10px] font-black text-green-600">+100</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-50">
                  <div>
                    <p className="text-[10px] font-bold text-slate-700 uppercase leading-none">Joined Team</p>
                    <p className="text-[8px] text-slate-400 font-medium">2 hours ago</p>
                  </div>
                  <span className="text-[10px] font-black text-green-600">+50</span>
                </div>
              </div>
              <div className="bg-orange-500/5 p-3 rounded-xl border border-orange-500/10">
                <p className="text-[9px] font-black text-orange-700 uppercase mb-1">Level Up Fast</p>
                <p className="text-[11px] font-medium text-slate-600 leading-tight">Review a peer's code on the <span className="font-bold text-orange-700">Collab</span> board for +200 XP!</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative" ref={profileRef}>
          {user ? (
            <>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative group block focus:outline-none"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-11 h-11 rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform overflow-hidden bg-blue-50 flex items-center justify-center">
                  {user.photoURL ? (
                    <img
                      alt="User Avatar"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      src={user.photoURL}
                    />
                  ) : (
                    <span className="absolute material-symbols-outlined text-blue-600 text-3xl select-none z-0">
                      account_circle
                    </span>
                  )}
                </div>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border-2 border-slate-200 rounded-2xl shadow-[0_8px_0_0_#e2e8f0] overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
                  <div className="p-3 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logged in as</p>
                    <p className="text-xs font-bold text-blue-700 truncate">{user.displayName || user.email}</p>
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
                      onClick={async () => {
                        await logout();
                        setMenuOpen(false);
                        router.push("/");
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors group"
                    >
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">logout</span>
                      <span className="text-xs font-black uppercase tracking-tight">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className="bg-blue-700 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-800 transition-all flex items-center gap-2 shadow-md active:translate-y-0.5 active:shadow-none"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="bg-slate-200 h-[4px] w-full absolute bottom-0 left-0"></div>
    </nav>
  );
}
