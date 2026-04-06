import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function VictoryPage() {
  return (
    <>

      <div className="flex pt-20 h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative py-12 flex flex-col items-center justify-center overflow-hidden pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 text-secondary transform -rotate-12">
            <span className="material-symbols-outlined text-8xl">
              celebration
            </span>
          </div>
          <div className="absolute bottom-20 right-10 text-tertiary transform rotate-12">
            <span className="material-symbols-outlined text-9xl">
              auto_awesome
            </span>
          </div>
          <div className="absolute top-1/2 left-1/4 text-primary transform -rotate-45">
            <span className="material-symbols-outlined text-6xl">grade</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 bg-secondary-container text-white px-6 py-2 rounded-full font-headline font-black uppercase tracking-widest text-sm shadow-lg mb-4">
              <span className="material-symbols-outlined">volume_up</span>
              SYNC ACHIEVED
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-primary uppercase tracking-tighter italic leading-none drop-shadow-sm">
              TEAM FORMED!
            </h1>
            <p className="text-xl font-medium text-on-surface-variant max-w-2xl mx-auto">
              The algorithm has computed a perfect match. Your combined skill
              score is <span className="text-secondary font-black">98.4%</span>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-container rounded-xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
              <div className="relative bg-white p-8 rounded-xl chunky-shadow-primary border-4 border-primary w-80 text-center overflow-hidden">
                <div className="w-48 h-48 mx-auto mb-6 bg-surface-variant rounded-full border-4 border-on-surface p-2">
                  <img
                    alt="Player 1"
                    className="w-full h-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXd2VGhLGFwfl7n2yD0bazNKXKCINaYkI8YCuZgdhj_OQ4vRJ0KeLzVQYhmnKpyaGVq1j8G1F_cTS2vCSXXLHxkQJIgCqcZFepvYRs94ENdsCYxxD6Ug1JY_vqfoQ9YzLuXqjQxePFSt4tBx6-t8Ib7PvnSiFay77vV3pTQjrVOQT4yxhRxMnseoHUO9MclEty393ynkUr7kcxqEhg2MstrBLHxCrwJar80yi-M5GcqH4Am-QBkp2xaOqKovU07jX2ck7_n2iga8"
                  />
                </div>
                <h3 className="text-2xl font-headline font-black uppercase text-primary mb-1">
                  Pixel_Slayer
                </h3>
                <p className="font-bold text-sm text-on-surface-variant uppercase mb-4">
                  Level 42 Frontend Druid
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold uppercase">
                    React
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold uppercase">
                    WebGL
                  </span>
                </div>
              </div>
            </div>

            <div className="z-20 -my-8 md:-mx-8 md:my-0">
              <div className="bg-secondary-container text-white w-24 h-24 rounded-full flex items-center justify-center border-8 border-surface transform rotate-12 shadow-2xl">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-secondary rounded-xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative bg-white p-8 rounded-xl chunky-shadow-secondary border-4 border-secondary w-80 text-center overflow-hidden">
                <div className="w-48 h-48 mx-auto mb-6 bg-secondary-fixed rounded-full border-4 border-on-surface p-2">
                  <img
                    alt="Player 2"
                    className="w-full h-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvwSLIfA6jVKhEbTlKbIth4Zforqy7sjK_1B032JUYTf207peFQ61CuM_7XSq2WfFyeQ4W_vPGxjSgz4oZdfGNGiyv0Y3cjp4VALLsx3A9mYQBak50LvsnVQxzQKWQJLQQFsOxdXwSeoi8UW1Id0Z5fdkZB6OZPGeQyw4h9frimzgpwrwaFfIaQpxCo1x_aJGpZ4uTW7XA7vvDsF10Z38mBa4Exuh1beuoSsucPZWn2PjUg3fWLkvhczCF_UeCS3s8fK9tJt5L30"
                  />
                </div>
                <h3 className="text-2xl font-headline font-black uppercase text-secondary mb-1">
                  Node_Ninja
                </h3>
                <p className="font-bold text-sm text-on-surface-variant uppercase mb-4">
                  Level 39 Backend Rogue
                </p>
                <div className="flex justify-center gap-2">
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold uppercase">
                    NodeJS
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-4">
            <button className="kinetic-gradient text-white px-12 py-6 rounded-lg font-headline font-black text-2xl uppercase tracking-widest chunky-shadow-primary transform transition-all hover:-translate-y-2 active:translate-y-1 active:shadow-none flex items-center gap-4">
              ENTER COMMAND CENTER
              <span className="material-symbols-outlined text-3xl">
                rocket_launch
              </span>
            </button>
            <div className="flex items-center gap-8 text-on-surface-variant font-bold uppercase text-sm">
              <button className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">share</span> Share
                Match
              </button>
              <button className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined">cancel</span> Keep
                Looking
              </button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-12 right-12 z-50">
          <div className="bg-tertiary-container p-4 rounded-xl transform -rotate-6 chunky-shadow-secondary border-4 border-tertiary max-w-[200px]">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-on-tertiary-container">
                tips_and_updates
              </span>
              <div>
                <p className="text-[10px] font-headline font-black uppercase text-on-tertiary-container leading-tight">
                  Pro Tip
                </p>
                <p className="text-xs font-medium text-on-tertiary-container">
                  Matches with 95%+ sync often complete missions 2x faster!
                </p>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
      <MobileNav />
    </>
  );
}
