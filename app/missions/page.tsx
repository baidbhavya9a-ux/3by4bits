export default function MissionsPage() {
  return (
    <>

      <div className="flex pt-20 h-screen overflow-hidden">
        <aside className="h-screen w-64 border-r-8 border-slate-200 bg-slate-100 hidden md:flex flex-col py-8 space-y-4 px-4">
          <div className="mb-8 px-4">
            <div className="flex items-center gap-3">
              <img
                alt="Player Profile"
                className="w-12 h-12 rounded-xl bg-primary shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUsC7kdWgTLlBCLZLz43DWwwXm-iblHD5YFfMwiQWArwhBhiLhb3JojrkyhAsGeZO9Ml1xUPyS_IiFmLE_fwV3OPwuaiooD9bv-BkQ-9TOLIzL6f2V2ENQ13QHrwvgkwn565f7c0pbBhFKF6CT5EraAW6u_SF3oxV1SCxURu0qosEoDNCIMrLJ6XXetEEALtBi9OYtrA8hlB0SsmLyMFleOqUrbBh5XK9ZuO6XMqPo9ex9iI59xAOkPYBZEdakDffa43LhT8j1Qs"
              />
              <div>
                <p className="font-headline font-black text-xl text-blue-700">
                  Level 24
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Elite Coder
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl font-headline font-bold uppercase text-sm hover:scale-105 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">sports_esports</span>
              Lobby
            </a>
            <a
              className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-xl shadow-[0_4px_0_0_rgba(0,25,69,1)] font-headline font-bold uppercase text-sm hover:scale-105 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">event_note</span>
              Events
            </a>
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl font-headline font-bold uppercase text-sm hover:scale-105 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">groups</span>
              Team
            </a>
            <a
              className="flex items-center gap-3 p-4 text-slate-700 hover:bg-slate-200 rounded-xl font-headline font-bold uppercase text-sm hover:scale-105 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">forum</span>
              Messages
            </a>
          </div>
          <div className="mt-auto pt-6">
            <button className="w-full py-4 bg-secondary text-white rounded-xl font-headline font-black uppercase text-sm chunky-shadow-secondary active-press hover:scale-105 transition-transform">
              NEW MISSION
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          <section className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-headline font-black text-on-surface uppercase tracking-tighter mb-2 italic">
                  Missions Board
                </h1>
                <p className="text-on-surface-variant font-medium">
                  Select your contract. Higher levels grant legendary loot and
                  XP multipliers. Squad up or go solo.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="relative">
                  <select className="appearance-none bg-surface-container-high border-none rounded-full px-6 py-3 pr-12 font-headline font-bold uppercase text-xs text-on-surface focus:ring-4 focus:ring-primary/20 cursor-pointer">
                    <option>All Domains</option>
                    <option>Web3</option>
                    <option>AI Core</option>
                    <option>Game Dev</option>
                    <option>Cybersecurity</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    expand_more
                  </span>
                </div>
                <div className="relative">
                  <select className="appearance-none bg-surface-container-high border-none rounded-full px-6 py-3 pr-12 font-headline font-bold uppercase text-xs text-on-surface focus:ring-4 focus:ring-primary/20 cursor-pointer">
                    <option>Difficulty: Any</option>
                    <option>LVL 1-3 (Noob)</option>
                    <option>LVL 4-7 (Pro)</option>
                    <option>LVL 8-10 (Elite)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    filter_list
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="group bg-white rounded-lg overflow-hidden border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,25,69,1)] transition-all flex flex-col perspective-card">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ed98iNGG-9OkJNTjsa0dCxZH84BW6XQbvzJnh4QZSjMg6ekLU7-himt0E75m7loc8GI6dqRYNyQ4z1cea9hjvNBFgSgn5HEwng6ttizQUFCIP15i7xelaxAS4DEpjgNpjU-SfHL0uuydQ7FqbTC1CBxAeQdmYB3fwwtRgws4E9pndJ_VsAFZEb7R4yxE2-DdyvG7ctWt-pNt2cNuXj9ddRDaEiDxtihPXWR7_BubNDXnpr007QsZyHAzcKQ9-j6tCXLp1_WrLwo"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-headline font-black uppercase text-[10px] shadow-[2px_2px_0_0_#4c3f00] -rotate-3 inline-block">
                    AI Core
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-xl border border-white/30">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase text-on-surface opacity-60">
                      Loot
                    </span>
                    <span className="text-xl font-black text-secondary">
                      $25,000
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-headline font-black uppercase leading-none text-primary">
                    Neural Nexus 2024
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase text-on-surface-variant">
                      LVL
                    </span>
                    <span className="text-2xl font-headline font-black text-on-surface italic">
                      08
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-on-surface-variant line-clamp-2">
                    Build a decentralized neural network optimization protocol
                    for real-time edge computing.
                  </p>
                </div>
                <div className="mt-auto space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase text-on-surface-variant mb-2">
                      Required Classes
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Python
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        PyTorch
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Rust
                      </span>
                    </div>
                  </div>
                  <a
                    href="/discovery"
                    className="w-full py-4 bg-primary text-white rounded-xl font-headline font-black uppercase text-sm chunky-shadow-primary active-press flex items-center justify-center gap-2"
                  >
                    Accept Mission
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mission Card 2 */}
            <div className="group bg-white rounded-lg overflow-hidden border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,25,69,1)] transition-all flex flex-col perspective-card">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmKDmmxob1zdeYcAfi9y_hOW93VR1xJs9_J192dscBqWoeV3X0fl-RTJA9HbimHaOeOfrdsUtOgngymSPjmZ-i3_r1yf5FvXXF-UDiwzi7F3gEymOwQ8tF6WcJ3v9Kac-mvrBV51Wft4WdIlg7QcomLUlTRGCyzoHTnHHO-sVL_Lf_lje1YVqDK21Ys8QI8oKjPCEs-GU6wKLRMTAOUcmTH483ekq0QPkYiVf4lOCESMZ7uFYT6Fpc7tf89sQ0MyzEHGgqN4qsx2s"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-headline font-black uppercase text-[10px] shadow-[2px_2px_0_0_#4c3f00] rotate-3 inline-block">
                    Game Dev
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-xl border border-white/30">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase text-on-surface opacity-60">
                      Loot
                    </span>
                    <span className="text-xl font-black text-secondary">
                      $12,500
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-headline font-black uppercase leading-none text-primary">
                    Retro Jam: Reborn
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase text-on-surface-variant">
                      LVL
                    </span>
                    <span className="text-2xl font-headline font-black text-on-surface italic">
                      04
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-on-surface-variant line-clamp-2">
                    Reimagine a classic 8-bit arcade mechanic using modern
                    physics engines and ray-tracing.
                  </p>
                </div>
                <div className="mt-auto space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase text-on-surface-variant mb-2">
                      Required Classes
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        C++
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Unreal 5
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        DirectX
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-headline font-black uppercase text-sm chunky-shadow-primary active-press flex items-center justify-center gap-2">
                    Accept Mission
                    <span className="material-symbols-outlined">joystick</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mission Card 3 */}
            <div className="group bg-white rounded-lg overflow-hidden border-4 border-on-surface shadow-[8px_8px_0_0_rgba(0,25,69,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,25,69,1)] transition-all flex flex-col perspective-card">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV5poWqg2MIQT_-c6_TTMGEs08S_PB5yU_Lk5K2vcZJl8ZJl606kWW6dEIra4lg-MElex22WZUDmHJ4DiS3EpgX6Ms834kJgrf3VcRV9SWG5jMuXgNywyxZ8DCOQrUYproivU2-SXVBn54NBk-HArsw-j8mGXzuX92STkPqgUAie3rUuZ7ghO-GFcOYlirnP7cU0HFDKlaI4nq9Ymztn8_eelrEsTBEUAXtAOwFoikufC505cE29UAGPyrWIYGoE8UqXhQEALUsoM"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-headline font-black uppercase text-[10px] shadow-[2px_2px_0_0_#4c3f00] -rotate-2 inline-block">
                    Web3
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-xl border border-white/30">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase text-on-surface opacity-60">
                      Loot
                    </span>
                    <span className="text-xl font-black text-secondary">
                      $50,000
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-headline font-black uppercase leading-none text-primary">
                    Ghost Protocol
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase text-on-surface-variant">
                      LVL
                    </span>
                    <span className="text-2xl font-headline font-black text-on-surface italic">
                      10
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-on-surface-variant line-clamp-2">
                    Develop a zero-knowledge proof authentication system for
                    cross-chain governance voting.
                  </p>
                </div>
                <div className="mt-auto space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase text-on-surface-variant mb-2">
                      Required Classes
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Solidity
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Zk-SNARKs
                      </span>
                      <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        Go
                      </span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-headline font-black uppercase text-sm chunky-shadow-primary active-press flex items-center justify-center gap-2">
                    Accept Mission
                    <span className="material-symbols-outlined">
                      shield_lock
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-orange-500 rounded-t-3xl z-[60] border-t-4 border-orange-700 shadow-[0_-8px_20px_rgba(254,118,0,0.3)]">
        <div className="flex flex-col items-center text-orange-100 font-headline font-black uppercase text-[10px] hover:brightness-110 active:translate-y-1 transition-all">
          <span className="material-symbols-outlined">assignment</span>
          <span>Mission Log</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 rounded-full px-6 py-2 scale-110 text-white font-headline font-black uppercase text-[10px] hover:brightness-110 active:translate-y-1 transition-all">
          <span className="material-symbols-outlined">speed</span>
          <span>Active Boost</span>
        </div>
        <div className="flex flex-col items-center text-orange-100 font-headline font-black uppercase text-[10px] hover:brightness-110 active:translate-y-1 transition-all">
          <span className="material-symbols-outlined">workspace_premium</span>
          <span>Rewards</span>
        </div>
      </nav>
    </>
  );
}
