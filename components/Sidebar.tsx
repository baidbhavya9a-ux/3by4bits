"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: "sports_esports" },
    { name: "Events", href: "/missions", icon: "event_note", count: 18 },
    { name: "Team", href: "/discovery", icon: "groups" },
    { name: "Messages", href: "/victory", icon: "forum" },
  ];

  return (
    <aside className="h-screen w-64 border-r-8 border-slate-200 bg-slate-100 hidden md:flex flex-col py-8 space-y-4 px-4 sticky top-20">
      <Link href="/profile" className="mb-8 px-4 block group cursor-pointer">
        <div className="flex items-center gap-3 transition-transform group-hover:scale-105 group-hover:translate-x-1">
          <img
            alt="Player Profile"
            className="w-12 h-12 rounded-xl bg-blue-600 shadow-lg border-2 border-white object-cover"
            src={user?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Shiva"}
          />
          <div>
            <p className="font-headline font-black text-xl text-blue-700 leading-none group-hover:text-blue-600">
              Level 54
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
              Code Conqueror
            </p>
          </div>
        </div>
      </Link>
      <nav className="space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 p-4 rounded-xl font-headline font-bold uppercase text-sm transition-all hover:scale-105 ${
                isActive
                  ? "bg-blue-600 text-white shadow-[0_4px_0_0_rgba(0,25,69,1)]"
                  : "text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="flex-1">{item.name}</span>
              {item.count && (
                 <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-md animate-pulse">
                  {item.count} LIVE
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-6">
        <button className="w-full py-4 bg-secondary text-white rounded-xl font-headline font-black uppercase text-sm chunky-shadow-secondary active-press hover:scale-105 transition-transform">
          NEW MISSION
        </button>
      </div>
    </aside>
  );
}
