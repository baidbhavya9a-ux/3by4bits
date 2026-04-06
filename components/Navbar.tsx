"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/missions" },
    { name: "Team", href: "/discovery" },
    { name: "Messages", href: "/victory" },
  ];

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
<<<<<<< HEAD
            className="text-3xl text-blue-700 tracking-tighter uppercase flex items-center"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800 
            }}
          >
            <span>DEVMATCH</span>
            <span className="italic ml-2">COLLAB</span>
=======
            className="text-2xl font-black text-blue-700 italic font-headline tracking-tighter uppercase"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            DevMatch Collab
>>>>>>> 7ea482f2aef1956b0d644539f0380658e3769241
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

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
          <span className="material-symbols-outlined text-primary text-xl">
            military_tech
          </span>
          <span className="material-symbols-outlined text-secondary text-xl">
            bolt
          </span>
        </div>
        <Link href="/setup">
          <img
            alt="User Rank Avatar"
            className="w-10 h-10 rounded-full border-2 border-primary hover:scale-110 transition-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhKRUhZs1dQrde4WNC2c3lTaBauJv7tfXjZgCghtmKhcxJ1mAXgVjcGVNkCDq1Bm9M-l38ycrjU6RWwk4PJhV1NhAVV25fhC8ZnpmfL2XcKmpRkN7TkeJ2rL99hn6HS4RaK5n-0wB5PMLTDMa_4IIyFQvTQvkr1jVQiEUIFYlzhuS7wDVuYqdPDQN8Skhxzg1JIAlyXRVQWV-0WFflN7PRWap0kS_azxcNfVPxJSmc7nUL2J0UJrYokjUIHASzFPIUIkA1s3B6WM"
          />
        </Link>
      </div>
      <div className="bg-slate-200 h-[4px] w-full absolute bottom-0 left-0"></div>
    </nav>
  );
}
