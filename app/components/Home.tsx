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

            {/* HALFTONE */}
            <div className="absolute inset-0 halftone-light opacity-30"></div>

            {/* SPEECH BUBBLES */}
            <div className="absolute right-3 sm:right-6 top-10 sm:top-14 flex flex-col items-end gap-6 sm:gap-10 z-10">

              <div className="relative bg-white border-[3px] border-black px-6 py-4 
                rounded-[50%] shadow-[6px_6px_0px_black] max-w-[180px] sm:max-w-[220px] -rotate-3">

                <p className="manga-heading text-center text-[11px] sm:text-xs leading-tight">
                  WELCOME TO MY PORTFOLIO!
                </p>

                <div className="absolute -bottom-3 right-8 w-4 h-4 bg-white 
                  border-r-[3px] border-b-[3px] border-black rotate-45"></div>
              </div>

              <div className="relative bg-white border-[3px] border-black px-5 py-3 
                rounded-[30px] shadow-[5px_5px_0px_black] max-w-[200px] sm:max-w-[240px] rotate-2">

                <p className="manga-body text-[10px] sm:text-[11px] text-center leading-snug">
                  I build digital experiences and bring ideas to life with code.
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE PANEL (OVERLAP) */}
          <div className="relative bg-white border-[4px] border-black 
            shadow-[10px_10px_0px_black] flex flex-col md:flex-row overflow-hidden
            -mt-6 sm:-mt-8 rotate-[1deg]">

            <div className="flex-[1.2] p-5 sm:p-6 flex flex-col justify-center z-10">
              <h2 className="manga-heading text-[10px] text-gray-500 tracking-[0.2em] mb-1">
                FEATURED PROJECT
              </h2>

              <h3 className="manga-title text-xl sm:text-2xl mb-2">
                SENPAI STREAM
              </h3>

              <p className="manga-body text-xs mb-4">
                Anime streaming platform with modern UI/UX.
              </p>

              <button className="manga-btn text-[10px] px-4 py-1 w-fit">
                VIEW PROJECT
              </button>
            </div>

            <div className="flex-1 relative">
              <img
                src="/images/img5.jpg"
                alt="Featured"
                className="w-full h-full object-cover scale-[1.05]"
              />

              <div className="absolute inset-0 bg-black/5"></div>
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
                <span>• Added 2 new projects</span>
                <span className="text-gray-400 font-bold">2 DAYS AGO</span>
              </li>
              <li className="flex justify-between manga-body text-[10px]">
                <span>• Updated about section</span>
                <span className="text-gray-400 font-bold">1 WEEK AGO</span>
              </li>
              <li className="flex justify-between manga-body text-[10px]">
                <span>• New blog post</span>
                <span className="text-gray-400 font-bold">2 WEEKS AGO</span>
              </li>
            </ul>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white border-[4px] border-black flex flex-col sm:flex-row 
            shadow-[10px_10px_0px_black] overflow-hidden rotate-[-1deg]">

            <div className="flex-1 p-5 sm:p-6">
              <h2 className="manga-heading text-xs mb-3">RECENT ACTIVITY</h2>

              <p className="manga-body text-[10px] leading-relaxed">
                Working on a new anime streaming platform UI.
              </p>

              <p className="manga-body text-[10px] mt-2 italic text-gray-500">
                Designing, coding and listening to lo-fi beats.
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
              alt="Ad"
              className="w-full h-full object-cover scale-[1.05]"
            />

            <div className="absolute inset-0 halftone opacity-20"></div>
          </div>

        </div>
      </div>
    </div>
  );
}