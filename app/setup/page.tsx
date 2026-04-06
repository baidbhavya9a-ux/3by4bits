export default function SetupPage() {
  return (
    <>

      <main className="pt-24 pb-32 min-h-screen px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Header */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-on-surface mb-2 italic">
            Character Setup
          </h1>
          <p className="text-lg font-bold text-primary opacity-80 uppercase tracking-widest">
            Select your class and configure your stats
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Avatar & Role Selection */}
          <div className="lg:col-span-5 space-y-8">
            {/* Role Detector */}
            <div className="bg-surface-container-low p-8 rounded-xl chunky-shadow border-4 border-on-surface">
              <h2 className="text-xl font-headline font-black uppercase mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  shield
                </span>{" "}
                Select Your Origin
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center p-6 bg-primary text-white rounded-xl chunky-shadow-primary transform transition-transform active:translate-y-1 active:shadow-none">
                  <span className="material-symbols-outlined text-4xl mb-2">
                    person
                  </span>
                  <span className="font-headline font-bold uppercase text-sm">
                    Individual
                  </span>
                </button>
                <button className="flex flex-col items-center p-6 bg-surface-container-highest text-on-surface rounded-xl hover:bg-surface-variant transition-all">
                  <span className="material-symbols-outlined text-4xl mb-2">
                    groups
                  </span>
                  <span className="font-headline font-bold uppercase text-sm">
                    Team Unit
                  </span>
                </button>
              </div>
            </div>

            {/* Avatar Customizer */}
            <div className="bg-surface-container-low p-8 rounded-xl chunky-shadow border-4 border-on-surface relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-black uppercase tilted-element">
                Custom Skin
              </div>
              <h2 className="text-xl font-headline font-black uppercase mb-6">
                Avatar Selector
              </h2>
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-8 border-primary bg-white shadow-xl flex items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeVJRW8X4g2It217tlFoIZmtMe-ZS67WrCIU9piqXtjQoeE2dXcViJ4M8_dCj82HSXt8jIICYkQb-lr0-jl8wfRPlGVdCVT4alAJaa4-ZIyKzziy0QfWCCd2D8c3yUzYlxVlLTmXuMHfmJ7jxwsleIUCRhKd6DVMalkALDH4sdhLEqy-LDGHBv9MBlpNSeU5QUyWiNtWZxKlqlmQyj7D9zEQTUGjr8SReyLh2xeUV3A6JtR4LAMeEapEeI_vshOG6h6aieW5Zuo1Y"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-secondary text-white p-3 rounded-full chunky-shadow-secondary hover:-translate-y-1 transition-transform">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3 w-full">
                  <div className="aspect-square bg-surface-container-highest rounded-lg border-2 border-primary-container p-1 cursor-pointer">
                    <img
                      className="w-full h-full rounded-md"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5pRldTlqnqMLz10S-N-tMnnTckiMb6eay7kQsPMzFN4RNedZUrXDs24UsY3s7r-bAQjZegcb7hUEO5v0soYCFPzXMzk4thNQRdDl-TDOW4iuJt_o4UcihIwyiQWyj-Ii9icQoBbXMMqj-uiPmQEnZvRvlzs1TsnXWutAWF01iO011swi01h2mdo9K7cbhocBzyfciv8wj0K2Pw-xsI6YwBACX2SYYcqbsC1AVZFSvo7w5dKcXRP9mDIraYm0j_iyP5bSlPOFHxGk"
                    />
                  </div>
                  <div className="aspect-square bg-surface-container-high rounded-lg p-1 cursor-pointer hover:bg-surface-variant">
                    <img
                      className="w-full h-full rounded-md"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAbLmFGhEqFRaaRGyCPyAOydKibe5l1jgQYhZ7vQGXzK1zL1v1rRFxVxkD8pD8G9v4jldhSuMNZ-zLLfdAIZFK2ztwqvPFy3MFI6K8eNvS9DoiqCxqqitKfuWibiMD7GJn18xcGu9SfguFaHjhbh1-XoT__TN-K3zc-WgjQg8c9rwlWSh3HFfcLhVST8-szjO46OQ4Rbfs4uTpECYuPWSUh-TPFAZNcmzA1RDtSOEWJAUK6PAzTINz1srcELx404egkjWziY8p-AQ"
                    />
                  </div>
                  <div className="aspect-square bg-surface-container-high rounded-lg p-1 cursor-pointer hover:bg-surface-variant">
                    <img
                      className="w-full h-full rounded-md"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-_et3lPIN9HQtkr2BscAvTo0cx6UZXRWUvcTvGHzhvJfeoEy3n5wEyG36-4V285OlaavUxo1ntrDxNeJq0Fm4RGXSwb8SvG0kuSwtimr64XEe7oLNBJRVigU4V-mVJSbI614UiSv-0uHyY_wZtkvMj-7W9-xqKCaiSJurt0YzCl3Ap6-nSI0b_u3Yo4AtOorW0K3RDqKdX04KvyVpLBNYmqe1T5Ky13znAHDRLJ6KZZBsx03rkrFJn_ax_E-Ztjr17AxCtjXBQsE"
                    />
                  </div>
                  <div className="aspect-square bg-surface-container-high rounded-lg p-1 cursor-pointer hover:bg-surface-variant">
                    <span className="w-full h-full flex items-center justify-center material-symbols-outlined text-slate-400">
                      add
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Skills */}
          <div className="lg:col-span-7 space-y-8">
            {/* Skill Power Levels (Progress Bars) */}
            <div className="bg-surface-container-low p-8 rounded-xl chunky-shadow border-4 border-on-surface">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-headline font-black uppercase">
                  Power Levels
                </h2>
                <span className="bg-primary-container text-white px-4 py-1 rounded-full text-xs font-black uppercase">
                  Level 12 Stats
                </span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between font-headline font-bold text-sm uppercase">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-500">
                        terminal
                      </span>{" "}
                      Coding Velocity
                    </span>
                    <span>85%</span>
                  </div>
                  <div className="h-6 w-full bg-surface-container-highest rounded-full overflow-hidden border-2 border-on-surface">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-tertiary-container w-[85%] relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-headline font-bold text-sm uppercase">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-500">
                        architecture
                      </span>{" "}
                      System Design
                    </span>
                    <span>62%</span>
                  </div>
                  <div className="h-6 w-full bg-surface-container-highest rounded-full overflow-hidden border-2 border-on-surface">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-container w-[62%] relative"
                    >
                      <div className="absolute inset-0 bg-white/10"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-headline font-bold text-sm uppercase">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-500">
                        forum
                      </span>{" "}
                      Team Synergy
                    </span>
                    <span>94%</span>
                  </div>
                  <div className="h-6 w-full bg-surface-container-highest rounded-full overflow-hidden border-2 border-on-surface">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-orange-400 w-[94%] relative"
                    >
                      <div className="absolute inset-0 bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interest Cards (Collectible Style) */}
            <div className="bg-surface-container-low p-8 rounded-xl chunky-shadow border-4 border-on-surface">
              <h2 className="text-xl font-headline font-black uppercase mb-6 flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inventory_2
                </span>{" "}
                Interest Deck
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Card 1 */}
                <div className="bg-white p-4 rounded-lg border-2 border-outline-variant hover:border-secondary transition-all cursor-pointer group hover:-translate-y-2 tilted-element">
                  <div className="h-24 w-full bg-surface-container-high rounded-md mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-125 transition-transform">
                      rocket_launch
                    </span>
                  </div>
                  <p className="font-headline font-black uppercase text-xs text-center">
                    Startups
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-4 rounded-lg border-2 border-primary group hover:-translate-y-2 -rotate-1 shadow-lg">
                  <div className="h-24 w-full bg-primary-container rounded-md mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white group-hover:scale-125 transition-transform">
                      neurology
                    </span>
                  </div>
                  <p className="font-headline font-black uppercase text-xs text-center text-primary">
                    AI/ML
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-4 rounded-lg border-2 border-outline-variant hover:border-tertiary transition-all cursor-pointer group hover:-translate-y-2 rotate-2">
                  <div className="h-24 w-full bg-surface-container-high rounded-md mb-3 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-tertiary group-hover:scale-125 transition-transform">
                      grid_view
                    </span>
                  </div>
                  <p className="font-headline font-black uppercase text-xs text-center">
                    Web3
                  </p>
                </div>
                {/* Card 4 (Add Button) */}
                <div className="p-4 rounded-lg border-4 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 hover:bg-surface-container-high transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-slate-400 group-hover:scale-110 transition-transform">
                    add_circle
                  </span>
                  <p className="font-headline font-bold uppercase text-[10px] text-slate-400">
                    Add Perk
                  </p>
                </div>
              </div>
            </div>

            {/* Lock In Action */}
            <div className="pt-4">
              <a
                href="/missions"
                className="w-full py-6 bg-secondary text-white font-headline font-black text-2xl uppercase tracking-widest rounded-xl chunky-shadow-secondary hover:-translate-y-2 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4"
              >
                <span className="material-symbols-outlined text-3xl">
                  lock_open
                </span>
                Lock In Profile
              </a>
              <p className="text-center mt-4 text-xs font-bold uppercase text-on-surface-variant opacity-60">
                Wait! You can still respec your stats in the Lobby.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* SideNavBar (Hidden on small screens) */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 h-fit w-20 hidden md:flex flex-col gap-4 px-2 py-8 bg-slate-100 border-r-8 border-slate-200 rounded-r-3xl z-40">
        <div className="flex flex-col items-center gap-8">
          <button className="p-3 bg-blue-600 text-white rounded-xl shadow-[0_4px_0_0_#001945]">
            <span className="material-symbols-outlined">sports_esports</span>
          </button>
          <button className="p-3 text-slate-700 hover:bg-slate-200 rounded-xl transition-all">
            <span className="material-symbols-outlined">event_note</span>
          </button>
          <button className="p-3 text-slate-700 hover:bg-slate-200 rounded-xl transition-all">
            <span className="material-symbols-outlined">groups</span>
          </button>
          <button className="p-3 text-slate-700 hover:bg-slate-200 rounded-xl transition-all">
            <span className="material-symbols-outlined">forum</span>
          </button>
        </div>
      </aside>

      {/* BottomNavBar (Mobile Only) */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 h-20 bg-orange-500 rounded-t-3xl z-[60] border-t-4 border-orange-700 shadow-[0_-8px_20px_rgba(254,118,0,0.3)]">
        <div className="flex flex-col items-center bg-white/20 rounded-full px-6 py-2 scale-110">
          <span className="material-symbols-outlined text-white">
            assignment
          </span>
          <span className="text-white font-headline font-black uppercase text-[10px]">
            Mission Log
          </span>
        </div>
        <div className="flex flex-col items-center text-orange-100">
          <span className="material-symbols-outlined">speed</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Active Boost
          </span>
        </div>
        <div className="flex flex-col items-center text-orange-100">
          <span className="material-symbols-outlined">workspace_premium</span>
          <span className="font-headline font-black uppercase text-[10px]">
            Rewards
          </span>
        </div>
      </footer>
    </>
  );
}
