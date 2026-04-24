"use client";

import {
  Brain,
  Smartphone,
  Plug,
  Database,
  GitBranch,
  Users,
} from "lucide-react";

export default function SkillsPage() {
  const otherSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Responsive Design", icon: Smartphone },
    { name: "API Integration", icon: Plug },
    { name: "Database Design", icon: Database },
    { name: "Version Control", icon: GitBranch },
    { name: "Team Collaboration", icon: Users },
  ];

  return (
    <div className="w-full flex justify-center">

      <div className="w-full border-[4px] border-black bg-white p-4 sm:p-6 flex flex-col gap-6">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* HERO PANEL */}
          <div className="
            lg:col-span-7 border-[3px] border-black relative 
            h-[420px] sm:h-[520px] md:h-[600px] 
            overflow-hidden bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          ">

            <img
              src="/images/manga3.jpeg"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-white/10"></div>

            {/* TITLE */}
            <div className="
              absolute 
              top-4 left-1/2 -translate-x-1/2
              sm:left-6 sm:translate-x-0
              z-10 w-[90%] sm:w-[75%] md:w-[60%]
            ">
              <div className="
                bg-white border-[3px] border-black 
                px-6 sm:px-10 py-4 sm:py-5 
                rounded-[55%_45%_60%_40%/45%_55%_40%_60%] 
                shadow-[8px_8px_0px_black] 
                -rotate-1 text-center
              ">
                <h2 className="manga-heading text-xl sm:text-2xl md:text-3xl">
                  SKILLS & POWERS
                </h2>

                <p className="manga-sub text-[10px] sm:text-xs md:text-sm mt-2">
                  THE TOOLS I USE TO BUILD MAGIC
                </p>
              </div>
            </div>
          </div>

          {/* TECH SKILLS */}
          <div className="
            lg:col-span-5 border-[3px] border-black 
            p-5 sm:p-6 flex flex-col bg-white
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">
            <h2 className="manga-heading text-sm mb-5">
              TECH SKILLS
            </h2>

            <div className="flex flex-col gap-4">

              {[
                ["React / Next.js", "95%"],
                ["TypeScript", "90%"],
                ["Node.js", "85%"],
                ["Tailwind CSS", "90%"],
                ["MongoDB", "80%"],
                ["JavaScript", "95%"],
                ["Git / GitHub", "90%"],
                ["UI / UX Design", "85%"],
              ].map(([skill, value], i) => (
                <div key={i}>

                  <div className="flex justify-between text-[11px] manga-body mb-1">
                    <span>{skill}</span>
                    <span className="text-gray-500">{value}</span>
                  </div>

                  <div className="w-full h-[8px] border-[2px] border-black bg-white">
                    <div
                      className="h-full bg-black"
                      style={{ width: value }}
                    />
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* OTHER SKILLS */}
          <div className="
            lg:col-span-8 border-[3px] border-black 
            p-5 sm:p-6 bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          ">

            <h2 className="manga-heading text-sm mb-5">
              OTHER SKILLS
            </h2>

            <div className="
              grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5
            ">

              {otherSkills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={i}
                    className="
                      flex flex-col items-center justify-center
                      border-[2px] border-black 
                      px-3 py-4 sm:px-4 sm:py-5
                      text-center bg-white
                      shadow-[3px_3px_0px_black]
                      rotate-[1deg]
                    "
                  >

                    {/* ICON */}
                    <Icon
                      size={22}
                      strokeWidth={2.8}
                      className="mb-2 text-black drop-shadow-[1px_1px_0px_black]"
                    />

                    <p className="manga-body text-[10px] sm:text-[11px] leading-snug">
                      {skill.name}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

          {/* LEVEL PANEL */}
          <div className="
            lg:col-span-4 border-[3px] border-black 
            flex items-center justify-center 
            relative min-h-[180px] sm:min-h-[220px] bg-white
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">

            <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:12px_12px] opacity-15" />

            <h2 className="manga-title text-3xl sm:text-4xl text-center relative z-10">
              LEVEL UP!
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}