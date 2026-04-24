export default function Home() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full px-3 sm:px-4">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* HERO PANEL */}
          <div className="relative h-[360px] sm:h-[480px] md:h-[560px] bg-white 
            border-[4px] border-black 
            rotate-[-1.5deg] shadow-[10px_10px_0px_black] overflow-hidden">

            <img
              src="/images/manga4.jpeg"
              alt="Hero Character"
              className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
            />

            <div className="absolute inset-0 halftone-light opacity-30"></div>

            {/* SPEECH */}
           <div className="
  absolute 
  bottom-4 sm:bottom-auto sm:top-[55%] 
  right-3 sm:right-6 
  translate-y-0 sm:-translate-y-1/2
  flex flex-col items-end 
  gap-5 sm:gap-8 
  z-10
">

  {/* ================= MAIN BUBBLE ================= */}
  <div className="
    relative bg-white border-[3px] border-black 
    px-5 py-3 sm:px-6 sm:py-4
    rounded-[45%_55%_50%_50%/55%_45%_55%_45%] 
    shadow-[6px_6px_0px_black] 
    max-w-[160px] sm:max-w-[220px] 
    -rotate-3
  ">

    <p className="manga-heading text-center text-[10px] sm:text-xs leading-tight">
      WELCOME TO MY <br /> PORTFOLIO!
    </p>

    {/* Tail */}
    <div className="
      absolute -bottom-3 right-6
      w-4 h-4 bg-white 
      border-r-[3px] border-b-[3px] border-black 
      rotate-45
    "></div>
  </div>


  {/* ================= SECOND BUBBLE ================= */}
  <div className="
    relative bg-white border-[3px] border-black 
    px-4 py-3 sm:px-5 sm:py-3
    rounded-[35%_65%_60%_40%/50%_60%_40%_50%] 
    shadow-[5px_5px_0px_black] 
    max-w-[170px] sm:max-w-[240px] 
    rotate-2
  ">

    <p className="manga-body text-[10px] sm:text-[11px] text-center leading-tight">
      BUILDING PROJECTS THAT BLEND
      <br />
      DESIGN, LOGIC & REAL-WORLD IMPACT.
    </p>
  </div>

</div>
          </div>

          {/* FEATURE PANEL */}
          <div className="relative bg-white border-[4px] border-black 
            shadow-[10px_10px_0px black] flex flex-col md:flex-row overflow-hidden
            -mt-6 sm:-mt-8 rotate-[1deg]">

            {/* LEFT */}
            <div className="flex-[1.2] p-5 sm:p-6 flex flex-col justify-center z-10">

              <h2 className="manga-heading text-[10px] text-gray-500 tracking-[0.2em] mb-1">
                FEATURED WORK
              </h2>

              <h3 className="manga-title text-xl sm:text-2xl mb-2">
                MY PROJECT UNIVERSE
              </h3>

              <p className="manga-body text-xs mb-6 leading-relaxed">
                A collection of real-world projects where design meets functionality —
                built with performance, scalability, and user experience in mind.
              </p>

              {/* 💥 BURST DOWNLOAD */}
              <div className="relative w-fit">

                {/* BURST */}
                <div className="absolute -inset-3 rotate-[-6deg]">
                  <div
                    className="w-full h-full bg-white border-[3px] border-black 
                    shadow-[4px_4px_0px_black]"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 60% 15%, 75% 5%, 80% 20%, 95% 15%, 85% 35%, 100% 50%, 85% 65%, 95% 85%, 80% 80%, 75% 95%, 60% 85%, 50% 100%, 40% 85%, 25% 95%, 20% 80%, 5% 85%, 15% 65%, 0% 50%, 15% 35%, 5% 15%, 20% 20%, 25% 5%, 40% 15%)",
                    }}
                  />
                </div>

                <a
                  href="/arun_kumar_cv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 manga-heading text-[10px] px-4 py-2 
                  bg-black text-white border-[3px] border-black 
                  shadow-[3px_3px_0px_black] rotate-[2deg]"
                >
                  DOWNLOAD!
                </a>

              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 relative">

              <img
                src="/images/img5.jpg"
                alt="Projects"
                className="w-full h-full object-cover scale-[1.05]"
              />

              <div className="absolute inset-0 bg-black/10"></div>

              {/* LABEL */}
              <div className="hidden sm:block absolute bottom-4 left-4 bg-white border-[2px] border-black  
  px-3 py-2 text-[10px] manga-body shadow-[3px_3px_0px_black] rotate-[-2deg]">

  REAL PROJECTS ⚡ <br />
  CODE • DESIGN • EXPERIENCE

</div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* UPDATES */}
          <div className="bg-white border-[4px] border-black p-5 sm:p-6 
            shadow-[10px_10px_0px_black] rotate-[0.5deg]">

            <h2 className="manga-heading text-xs border-b-2 border-black pb-1 mb-4 uppercase">
              Latest Update
            </h2>

            <ul className="space-y-3">
              <li className="flex justify-between manga-body text-[10px]">
                <span>• Added new full-stack projects</span>
                <span className="text-gray-400 font-bold">RECENT</span>
              </li>
              <li className="flex justify-between manga-body text-[10px]">
                <span>• Improved UI/UX design system</span>
                <span className="text-gray-400 font-bold">1 WEEK AGO</span>
              </li>
              <li className="flex justify-between manga-body text-[10px]">
                <span>• Optimized performance</span>
                <span className="text-gray-400 font-bold">2 WEEKS AGO</span>
              </li>
            </ul>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white border-[4px] border-black flex flex-col sm:flex-row 
            shadow-[10px_10px_0px_black] overflow-hidden rotate-[-1deg]">

            <div className="flex-1 p-5 sm:p-6">
              <h2 className="manga-heading text-xs mb-3">RECENT ACTIVITY</h2>

              <p className="manga-body text-[10px]">
                Building scalable web apps and refining UI interactions.
              </p>

              <p className="manga-body text-[10px] mt-2 italic text-gray-500">
                Code. Design. Repeat.
              </p>
            </div>

            <div className="w-full sm:w-[40%] h-[160px] sm:h-auto">
              <img
                src="/images/img4.png"
                className="w-full h-full object-cover"
                alt="Chibi"
              />
            </div>
          </div>

          {/* AD PANEL */}
          <div className="relative h-[260px] sm:h-[300px] bg-white border-[4px] border-black 
            shadow-[10px_10px_0px_black] overflow-hidden rotate-[1deg]">

            <img
              src="/images/img2.jpg"
              alt="Visual"
              className="w-full h-full object-cover scale-[1.05]"
            />

            <div className="absolute inset-0 halftone opacity-20"></div>
          </div>

        </div>
      </div>
    </div>
  );
}