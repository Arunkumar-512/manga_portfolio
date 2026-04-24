export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-8">

      {/* ================= HERO PANEL ================= */}
      <div className="border-[4px] border-black bg-white overflow-hidden">

        <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">

          {/* IMAGE */}
          <img
            src="/images/manga2.jpeg"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* LIGHT OVERLAY (FIXES BLACK ISSUE) */}
          <div className="absolute inset-0 bg-white/10 z-0"></div>

          {/* ================= HEADER BUBBLE ================= */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-[92%] md:w-1/2 z-10">
            <div className="relative bg-white border-[3px] border-black px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] shadow-[6px_6px_0px_black] -rotate-1">

              <h2 className="manga-heading text-lg sm:text-xl md:text-2xl leading-tight">
                ABOUT ME
              </h2>

              <p className="manga-sub text-[10px] sm:text-xs mt-1">
                GET TO KNOW THE DEVELOPER BEHIND THE SCREEN.
              </p>

              {/* Tail */}
              <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white border-r-[3px] border-b-[3px] border-black rotate-45"></div>
            </div>
          </div>

          {/* ================= MAIN SPEECH ================= */}
          <div className="
            absolute 
            bottom-4 sm:bottom-[80px] 
            left-1/2 sm:left-8 
            -translate-x-1/2 sm:translate-x-0
            flex flex-col items-center sm:items-start 
            gap-6 z-10 w-[90%] sm:w-auto
          ">

            {/* MAIN BUBBLE */}
            <div className="
              relative bg-white border-[3px] border-black 
              px-6 py-5 
              rounded-[60%_40%_55%_45%/50%_60%_40%_50%] 
              shadow-[6px_6px_0px_black] 
              max-w-[320px] sm:max-w-[340px]
              text-center sm:text-left
              -rotate-2
            ">
              <p className="manga-body text-[11px] leading-[1.5]">
  Hey! I’m a Computer Science student and self-taught developer who turned curiosity into a passion for building real-world, user-friendly apps.
</p>
            </div>

            {/* SECOND BUBBLE (HIDDEN ON MOBILE) */}
            <div className="
              hidden sm:block
              relative bg-white border-[3px] border-black 
              px-5 py-3 
              rounded-[40%] 
              shadow-[5px_5px_0px_black] 
              max-w-[240px] rotate-2
            ">
              <p className="manga-body text-[11px] leading-[1.4] text-center">
                I’m constantly learning, improving my skills, and exploring
                new technologies to grow as a developer every day.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ================= JOURNEY ================= */}
      <div className="border-[4px] border-black bg-white p-6 sm:p-8">

        <h2 className="manga-heading text-lg mb-6">
          MY JOURNEY
        </h2>

        <div className="relative overflow-x-auto">

          {/* LINE (desktop only) */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-black hidden md:block" />

          <div className="flex md:grid md:grid-cols-5 gap-6 md:gap-4 min-w-[600px] md:min-w-0">

            {[
              { text: "Started coding", year: "2019", img: "/images/icon5.png" },
              { text: "First project", year: "2020", img: "/images/icon1.png" },
              { text: "Web dev", year: "2021", img: "/images/icon2.png" },
              { text: "Freelancing", year: "2022", img: "/images/icon3.png" },
              { text: "Full-time", year: "2025+", img: "/images/icon4.png" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">

                <div className="
                  z-10 w-20 h-20 border-[3px] border-black rounded-full 
                  bg-white flex items-center justify-center mb-3 overflow-hidden
                  shadow-[3px_3px_0px_black]
                ">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[11px]">{item.text}</p>
                <p className="text-[10px] text-gray-500">{item.year}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= BOTTOM PANELS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {[
          {
            title: "WHAT DRIVES ME",
            text: "I enjoy solving problems through code and turning ideas into working products that people can actually use.",
            img: "/images/manga19.jpeg",
          },
          {
            title: "CREATIVE IDEAS",
            text: "I love combining creativity with logic to design clean, interactive, and engaging user experiences.",
            img: "/images/img1.jpg",
          },
          {
            title: "USER FIRST",
            text: "I focus on building applications that are simple, intuitive, and designed with real users in mind.",
            img: "/images/user_first.png",
          },
        ].map((item, i) => (
          <div className="
            border-[4px] border-black bg-white p-5 sm:p-6 
            flex flex-col gap-4 
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          " key={i}>

            <h3 className="manga-heading text-sm">
              {item.title}
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

              <p className="manga-body text-[11px] leading-relaxed sm:max-w-[60%] text-center sm:text-left">
                {item.text}
              </p>

              <img
                src={item.img}
                className="w-[100px] h-[140px] object-cover border-[2px] border-black"
              />

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}