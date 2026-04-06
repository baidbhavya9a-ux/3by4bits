"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Lobby", href: "/", icon: "sports_esports" },
    { name: "Events", href: "/missions", icon: "assignment", count: 18 },
    { name: "Boost", href: "#", icon: "speed", special: true },
    { name: "Rewards", href: "#", icon: "workspace_premium" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-orange-500 rounded-t-3xl z-[60] border-t-4 border-orange-700 shadow-[0_-8px_20px_rgba(254,118,0,0.3)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        if (item.special) {
          return (
            <div
              key={item.name}
              className="flex flex-col items-center bg-white/20 rounded-full px-6 py-2 scale-110 text-white font-headline font-black uppercase text-[10px] hover:brightness-110 active:translate-y-1 transition-all"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          );
        }
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center font-headline font-black uppercase text-[10px] hover:brightness-110 active:translate-y-1 transition-all relative ${
                isActive ? "text-white" : "text-orange-100"
            }`}
          >
            {item.count && (
              <span className="absolute -top-1 -right-4 bg-white text-orange-600 text-[8px] px-1.5 py-0.5 rounded-full animate-bounce shadow-lg">
                {item.count}
              </span>
            )}
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
