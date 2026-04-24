export default function ExperiencePage() {
  const timelineData = [
    {
      year: "2019",
      title: "THE BEGINNING",
      desc: "Started coding out of curiosity. Watched tutorials and built small projects.",
      img: "/images/joureny4.png",
    },
    {
      year: "2020",
      title: "FIRST PROJECTS",
      desc: "Built my first real projects. Fell in love with web development.",
      img: "/images/joureny1.png",
    },
    {
      year: "2021",
      title: "LEVELING UP",
      desc: "Learned advanced concepts. Contributed to open source and improved skills.",
      img: "/images/joureny3.png",
    },
    {
      year: "2022",
      title: "FREELANCING",
      desc: "Started freelancing and worked with amazing clients around the world.",
      img: "/images/joureny2.png",
    },
    {
      year: "2023+",
      title: "BUILDING & GROWING",
      desc: "Working as a full-time developer. Building products and helping users every day.",
      img: "/images/joureny5.png",
    },
  ];

  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      {/* PAGE */}
      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* ================= HEADER ================= */}
        <div className="
          border-[3px] border-black p-4 bg-white
          rotate-[-1deg] shadow-[6px_6px_0px_black]
        ">
          <h2 className="manga-heading text-lg sm:text-xl">
            MY JOURNEY
          </h2>
          <p className="manga-sub text-xs mt-1">
            EVERY STEP MADE ME BETTER
          </p>
        </div>

        {/* ================= TIMELINE GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {timelineData.map((item, i) => (
            <div key={i} className="contents">

              {/* ================= IMAGE ================= */}
              <div
                className={`
                  relative border-[3px] border-black overflow-hidden bg-white
                  shadow-[6px_6px_0px_black]
                  ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
                `}
              >
                <img
                  src={item.img}
                  className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover"
                  alt=""
                />

                {/* subtle manga overlay */}
                <div className="absolute inset-0 bg-white/5"></div>
              </div>

              {/* ================= TEXT ================= */}
              <div
                className={`
                  relative border-[3px] border-black bg-white
                  p-4 md:p-5 flex flex-col justify-center
                  shadow-[6px_6px_0px_black]
                  ${i % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]"}
                `}
              >
                {/* timeline dot (desktop only) */}
                <div className="hidden lg:block absolute -left-3 top-6 w-3 h-3 bg-white border-[2px] border-black rounded-full"></div>

                <h3 className="manga-heading text-sm">
                  {item.year}
                </h3>

                <p className="manga-sub text-xs mt-1">
                  {item.title}
                </p>

                <p className="manga-body text-[11px] mt-2 leading-snug">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}