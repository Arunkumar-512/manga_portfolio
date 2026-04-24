"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "PROJECTS", id: "projects" },
  { name: "SKILLS", id: "skills" },
  { name: "ABOUT", id: "about" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "CONTACT", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // 🔥 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    setActive(id);
    setOpen(false); // close menu on click

    const yOffset = -100;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full border-[4px] border-black bg-white sticky top-0 z-50 shadow-[6px_6px_0px_black]">

      <div className="flex items-center justify-between px-4 md:px-6 py-3">

        {/* LOGO */}
        <h1 className="manga-title text-xl md:text-3xl">
          MANGA<span className="text-gray-400">.</span>PORTFOLIO
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex border-l-[3px] border-black">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                manga-heading text-sm md:text-base px-6 py-2
                border-y-[3px] border-r-[3px] border-black
                ${active === item.id ? "bg-black text-white" : "bg-white"}
              `}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden 
            border-[3px] border-black 
            px-3 py-2 
            bg-white 
            shadow-[4px_4px_0px_black]
          "
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="
          md:hidden 
          flex flex-col 
          border-t-[3px] border-black 
          bg-white
        ">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                manga-heading text-sm px-4 py-3 text-left
                border-b-[3px] border-black
                shadow-[4px_4px_0px_black]
                ${active === item.id ? "bg-black text-white" : "bg-white"}
                ${i % 2 === 0 ? "rotate-[1deg]" : "-rotate-[1deg]"}
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}