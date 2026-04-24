import type { Metadata } from "next";
import "./globals.css";
import { Bangers, Comic_Neue, Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

// Google Fonts
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-comic",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Local Manga Font
const animeAce = localFont({
  src: [
    { path: "../fonts/anime-ace-regular.otf", weight: "400" },
    { path: "../fonts/anime-ace-bold.otf", weight: "700" },
    { path: "../fonts/anime-ace-italic.otf", weight: "400", style: "italic" },
  ],
  variable: "--font-anime",
});

export const metadata: Metadata = {
  title: "MANGA.PORTFOLIO",
  description: "A manga-inspired developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${bangers.variable}
        ${comicNeue.variable}
        ${inter.variable}
        ${animeAce.variable}
        h-full antialiased
      `}
    >
    <body className="min-h-full text-[#111] selection:bg-[#111] selection:text-white">

  {/* PAGE CENTER WRAPPER */}
  <div className="w-full flex justify-center px-4 py-8 md:px-10">

    {/* OUTER MANGA FRAME */}
    <div className="w-full max-w-[1440px] border-[4px] border-black bg-[#f8f8f8] shadow-[8px_8px_0px_black] p-6 md:p-8">

      <Navbar />

      {/* CONTENT AREA */}
      <div className="flex flex-col gap-8 mt-6 w-full">
        {children}

        {/* 🔥 MANGA TOASTER */}
     <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    className: "manga-toast", // ✅ use your global class
  }}
/>
      </div>

    </div>

  </div>

</body>
    </html>
  );
}