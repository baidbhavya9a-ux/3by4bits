"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Lobby", href: "/", icon: "sports_esports" },
    { name: "Events", href: "/missions", icon: "event_note" },
    { name: "Team", href: "/discovery", icon: "groups" },
    { name: "Messages", href: "/victory", icon: "forum" },
  ];

  return (
    <aside className="h-screen w-64 border-r-8 border-slate-200 bg-slate-100 hidden md:flex flex-col py-8 space-y-4 px-4 sticky top-20">
      <div className="mb-8 px-4">
        <div className="flex items-center gap-3">
          <img
            alt="Player Profile"
            className="w-12 h-12 rounded-xl bg-primary shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUsC7kdWgTLlBCLZLz43DWwwXm-iblHD5YFfMwiQWArwhBhiLhb3JojrkyhAsGeZO9Ml1xUPyS_IiFmLE_fwV3OPwuaiooD9bv-BkQ-9TOLIzL6f2V2ENQ13QHrwvgkwn565f7c0pbBhFKF6CT5EraAW6u_SF3oxV1SCxURu0qosEoDNCIMrLJ6XXetEEALtBi9OYtrA8hlB0SsmLyMFleOqUrbBh5XK9ZuO6XMqPo9ex9iI59xAOkPYBZEdakDffa43LhT8j1Qs"
          />
          <div>
            <p className="font-headline font-black text-xl text-blue-700 leading-none">
              Level 24
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
              Elite Coder
            </p>
          </div>
        </div>
      </div>
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
              {item.name}
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
