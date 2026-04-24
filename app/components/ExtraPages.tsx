export default function ExtraPage() {
  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      {/* PAGE */}
      <div className="p-4 md:p-6 flex flex-col gap-5">

        {/* ================= HEADER ================= */}
        <div className="
          border-[3px] border-black px-4 py-3 bg-white
          rotate-[-1deg] shadow-[6px_6px_0px_black]
        ">
          <h2 className="manga-heading text-lg sm:text-xl">
            BEYOND CODE
          </h2>
          <p className="manga-sub text-xs">
            THINGS I LOVE
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">

          {/* ================= LEFT PANELS ================= */}
          <div className="flex flex-col gap-6">

            {/* TOP ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {[
                {
                  title: "ANIME",
                  img: "/images/manga171.png",
                  text: "Fuel for imagination!",
                },
                {
                  title: "GAMING",
                  img: "/images/manga14.jpeg",
                  text: "Let’s level up!",
                },
                {
                  title: "MANGA",
                  img: "/images/manga18.jpeg",
                  text: "Sketching ideas on paper.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
                    relative border-[3px] border-black overflow-hidden bg-white
                    shadow-[6px_6px_0px_black]
                    ${i === 0 ? "rotate-[-2deg]" : i === 1 ? "rotate-[1deg]" : "rotate-[-1deg]"}
                  `}
                >

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />

                  {/* CAPTION BUBBLE */}
                  <div className="
                    absolute top-2 left-2 bg-white border-[2px] border-black 
                    px-3 py-2 
                    rounded-[30%] 
                    shadow-[3px_3px_0px_black] 
                    max-w-[120px]
                  ">
                    <p className="manga-heading text-[10px]">
                      {item.title}
                    </p>
                    <p className="manga-body text-[9px] mt-1">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {[
                {
                  title: "MUSIC",
                  img: "/images/manga20.jpg",
                  text: "Lo-fi beats on repeat.",
                },
                {
                  title: "TRAVEL",
                  img: "/images/manga16.jpeg",
                  text: "Exploring new places.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
                    relative border-[3px] border-black overflow-hidden bg-white
                    shadow-[6px_6px_0px_black]
                    ${i === 0 ? "rotate-[2deg]" : "-rotate-[2deg]"}
                  `}
                >

                  <img
                    src={item.img}
                    className="w-full h-[180px] sm:h-[200px] object-cover"
                  />

                  <div className="
                    absolute top-2 left-2 bg-white border-[2px] border-black 
                    px-3 py-2 
                    rounded-[30%] 
                    shadow-[3px_3px_0px_black] 
                    max-w-[120px]
                  ">
                    <p className="manga-heading text-[10px]">
                      {item.title}
                    </p>
                    <p className="manga-body text-[9px] mt-1">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

              {/* WIDE PANEL */}
              <div className="
                relative border-[3px] border-black overflow-hidden bg-white
                shadow-[6px_6px_0px_black]
                rotate-[1deg]
              ">
                <img
                  src="/images/manga15.jpeg"
                  className="w-full h-[180px] sm:h-[200px] object-cover"
                />
              </div>

            </div>
          </div>

          {/* ================= RIGHT CHARACTER ================= */}
          <div className="
            relative flex items-end justify-center
            lg:justify-end
          ">

            <div className="
              relative w-full sm:w-[80%] lg:w-full
              rotate-[1deg] shadow-[6px_6px_0px_black]
            ">

              <img
                src="/images/manga9.jpeg"
                className="w-full h-[380px] sm:h-[420px] object-cover border-[3px] border-black"
              />

              {/* SPEECH CLOUD */}
              <div className="
                absolute top-4 left-4 z-10 
                bg-white border-[3px] border-black 
                px-4 py-3 
                rounded-[45%] 
                shadow-[5px_5px_0px_black] 
                max-w-[170px] text-center
                -rotate-2
              ">

                <p className="manga-body text-[10px] leading-snug">
                  LIFE IS A SIDE QUEST!
                  <br />
                  ENJOY THE JOURNEY!
                </p>

                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r-[3px] border-b-[3px] border-black rotate-45"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}