"use client";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";

// Real data scraped from Apify
const SCRAPED_MISSIONS = [
  {
    title: "SemiXthon",
    link: "https://unstop.com/hackathons/semixthon-dtu-new-delhi-1671396",
    domain: "Hardware & IoT",
    loot: "$2,500",
    lvl: "03",
    classes: ["Arduino", "C++", "Circuit Design"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ed98iNGG-9OkJNTjsa0dCxZH84BW6XQbvzJnh4QZSjMg6ekLU7-himt0E75m7loc8GI6dqRYNyQ4z1cea9hjvNBFgSgn5HEwng6ttizQUFCIP15i7xelaxAS4DEpjgNpjU-SfHL0uuydQ7FqbTC1CBxAeQdmYB3fwwtRgws4E9pndJ_VsAFZEb7R4yxE2-DdyvG7ctWt-pNt2cNuXj9ddRDaEiDxtihPXWR7_BubNDXnpr007QsZyHAzcKQ9-j6tCXLp1_WrLwo",
    icon: "engineering",
    description: "Innovate at the intersection of hardware and software in this high-stakes robotics challenge."
  },
  {
    title: "Code EZ: Master of Agents",
    link: "https://unstop.com/hackathons/code-ez-master-of-agents-httpshackathonezworks-ez-lab-private-limited-1668870",
    domain: "AI Core",
    loot: "$10,000",
    lvl: "07",
    classes: ["LLMs", "LangChain", "Python"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ed98iNGG-9OkJNTjsa0dCxZH84BW6XQbvzJnh4QZSjMg6ekLU7-himt0E75m7loc8GI6dqRYNyQ4z1cea9hjvNBFgSgn5HEwng6ttizQUFCIP15i7xelaxAS4DEpjgNpjU-SfHL0uuydQ7FqbTC1CBxAeQdmYB3fwwtRgws4E9pndJ_VsAFZEb7R4yxE2-DdyvG7ctWt-pNt2cNuXj9ddRDaEiDxtihPXWR7_BubNDXnpr007QsZyHAzcKQ9-j6tCXLp1_WrLwo",
    icon: "psychology",
    description: "Master the art of AI orchestration by building autonomous agents for complex problem solving."
  },
  {
    title: "AI Jailbreak",
    link: "https://unstop.com/hackathons/ai-jailbreak-banjaara-2026-ashoka-university-sonepat-haryana-1669465",
    domain: "Cybersecurity",
    loot: "$5,000",
    lvl: "09",
    classes: ["Prompt Injection", "Red Teaming", "AI Safety"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV5poWqg2MIQT_-c6_TTMGEs08S_PB5yU_Lk5K2vcZJl8ZJl606kWW6dEIra4lg-MElex22WZUDmHJ4DiS3EpgX6Ms834kJgrf3VcRV9SWG5jMuXgNywyxZ8DCOQrUYproivU2-SXVBn54NBk-HArsw-j8mGXzuX92STkPqgUAie3rUuZ7ghO-GFcOYlirnP7cU0HFDKlaI4nq9Ymztn8_eelrEsTBEUAXtAOwFoikufC505cE29UAGPyrWIYGoE8UqXhQEALUsoM",
    icon: "security",
    description: "Challenge the boundaries of LLM safety in this intensive red-teaming arena."
  },
  {
    title: "HackOrbit 2026",
    link: "https://unstop.com/hackathons/hackorbit-2026-droidecks-1670801",
    domain: "Web3",
    loot: "$15,000",
    lvl: "06",
    classes: ["Solidity", "Rust", "EVM"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmKDmmxob1zdeYcAfi9y_hOW93VR1xJs9_J192dscBqWoeV3X0fl-RTJA9HbimHaOeOfrdsUtOgngymSPjmZ-i3_r1yf5FvXXF-UDiwzi7F3gEymOwQ8tF6WcJ3v9Kac-mvrBV51Wft4WdIlg7QcomLUlTRGCyzoHTnHHO-sVL_Lf_lje1YVqDK21Ys8QI8oKjPCEs-GU6wKLRMTAOUcmTH483ekq0QPkYiVf4lOCESMZ7uFYT6Fpc7tf89sQ0MyzEHGgqN4qsx2s",
    icon: "rocket_launch",
    description: "Propel your ideas into the decentralized orbit with high-impact blockchain solutions."
  },
  {
    title: "GameJam 2026",
    link: "https://unstop.com/hackathons/gamejam-geekcamp-x-aparoksha26-indian-institute-of-information-technology-iiit-allahabad-1671000",
    domain: "Game Dev",
    loot: "$3,000",
    lvl: "05",
    classes: ["Unity", "C#", "Blender"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmKDmmxob1zdeYcAfi9y_hOW93VR1xJs9_J192dscBqWoeV3X0fl-RTJA9HbimHaOeOfrdsUtOgngymSPjmZ-i3_r1yf5FvXXF-UDiwzi7F3gEymOwQ8tF6WcJ3v9Kac-mvrBV51Wft4WdIlg7QcomLUlTRGCyzoHTnHHO-sVL_Lf_lje1YVqDK21Ys8QI8oKjPCEs-GU6wKLRMTAOUcmTH483ekq0QPkYiVf4lOCESMZ7uFYT6Fpc7tf89sQ0MyzEHGgqN4qsx2s",
    icon: "joystick",
    description: "Sprint to build the next viral sensation in this 48-hour high-octane game jam."
  },
  {
    title: "AgentX",
    link: "https://unstop.com/hackathons/agentx-kamla-nehru-institute-of-technology-sultanpur-up-1670718",
    domain: "AI Core",
    loot: "$20,000",
    lvl: "10",
    classes: ["AutoGPT", "Neural Nets", "PyTorch"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ed98iNGG-9OkJNTjsa0dCxZH84BW6XQbvzJnh4QZSjMg6ekLU7-himt0E75m7loc8GI6dqRYNyQ4z1cea9hjvNBFgSgn5HEwng6ttizQUFCIP15i7xelaxAS4DEpjgNpjU-SfHL0uuydQ7FqbTC1CBxAeQdmYB3fwwtRgws4E9pndJ_VsAFZEb7R4yxE2-DdyvG7ctWt-pNt2cNuXj9ddRDaEiDxtihPXWR7_BubNDXnpr007QsZyHAzcKQ9-j6tCXLp1_WrLwo",
    icon: "terminal",
    description: "The ultimate test for AI architects. Engineering sentient-like agentic behaviors."
  }
];

export default function MissionsPage() {
  const [missions, setMissions] = useState(SCRAPED_MISSIONS);
  const [filter, setFilter] = useState("All Domains");
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse(prev => !prev), 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredMissions = filter === "All Domains" 
    ? missions 
    : missions.filter(m => m.domain === filter);

  return (
    <>
      <div className="flex pt-20 h-screen overflow-hidden bg-surface">
        <Sidebar />

        <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          {/* Header Section */}
          <section className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${pulse ? 'bg-error shadow-[0_0_12px_rgba(255,0,0,0.8)]' : 'bg-error/40'} transition-all`} />
                  <span className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-error italic">
                    Live Arena Sync: Active
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-headline font-black text-on-surface uppercase tracking-tighter mb-4 italic leading-none">
                  Missions Board
                </h1>
                <p className="text-on-surface-variant font-medium text-lg max-w-lg leading-relaxed">
                  Real-time contracts intercepted from across the digital landscape. Squad up to claim your loot.
                </p>
              </div>

              {/* Filters */}
              <div className="flex gap-4 flex-wrap">
                <div className="relative group">
                  <select 
                    onChange={(e) => setFilter(e.target.value)}
                    className="appearance-none bg-white border-4 border-on-surface rounded-xl px-8 py-4 pr-14 font-headline font-black uppercase text-xs text-on-surface focus:ring-8 focus:ring-primary/10 cursor-pointer shadow-[4px_4px_0_0_rgba(0,25,69,1)] hover:shadow-[6px_6px_0_0_rgba(0,25,69,1)] transition-all"
                  >
                    <option>All Domains</option>
                    <option>AI Core</option>
                    <option>Web3</option>
                    <option>Cybersecurity</option>
                    <option>Game Dev</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    filter_alt
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Missions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredMissions.map((mission, idx) => (
              <div 
                key={mission.title}
                className="group bg-white rounded-2xl overflow-hidden border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] hover:-translate-y-3 hover:shadow-[16px_16px_0_0_rgba(12,83,188,0.4)] transition-all duration-500 flex flex-col animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Card Header/Image */}
                <div className="h-56 relative overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                    src={mission.image}
                    alt={mission.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-lg font-headline font-black uppercase text-[10px] shadow-[4px_4px_0_0_#001945] -rotate-2 inline-block">
                      {mission.domain}
                    </span>
                    {idx < 2 && (
                      <span className="bg-tertiary text-white px-3 py-1 rounded-md font-headline font-black uppercase text-[8px] italic animate-pulse inline-block w-fit">
                        NEW CONTRACT
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-xl transform group-hover:scale-110 transition-transform">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black uppercase text-white/70">
                        LOOT POOL
                      </span>
                      <span className="text-2xl font-headline font-black text-secondary-fixed italic">
                        {mission.loot}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-3xl font-black mt-1">
                        {mission.icon}
                      </span>
                      <h3 className="text-2xl font-headline font-black uppercase leading-[0.9] text-on-surface group-hover:text-primary transition-colors">
                        {mission.title}
                      </h3>
                    </div>
                    <div className="flex flex-col items-center bg-surface-container-high px-3 py-1 rounded-xl">
                      <span className="text-[8px] font-black uppercase text-slate-500">
                        LVL
                      </span>
                      <span className="text-xl font-headline font-black text-on-surface italic">
                        {mission.lvl}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-on-surface-variant leading-relaxed line-clamp-3 mb-8">
                    {mission.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-primary mb-3 tracking-widest">
                        Required Arsenal
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {mission.classes.map(cls => (
                          <span key={cls} className="bg-slate-100 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase border-b-2 border-slate-300">
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={mission.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-secondary text-white rounded-2xl font-headline font-black uppercase text-sm chunky-shadow-secondary active-press flex items-center justify-center gap-3 group/btn hover:bg-secondary/90 transition-all"
                    >
                      Accept Contract
                      <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                        double_arrow
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <MobileNav />
    </>
  );
}
