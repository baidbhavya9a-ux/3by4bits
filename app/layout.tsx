import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "DevMatch Collab",
  description: "Assemble Your Dream Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
