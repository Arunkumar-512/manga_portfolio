export default function ProjectsPage() {
  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      {/* INNER PAGE */}
      <div className="p-3 sm:p-4 flex flex-col gap-4">

        {/* ================= HEADER ================= */}
        <div className="
          border-[3px] border-black 
          flex flex-col sm:flex-row 
          items-start sm:items-center 
          justify-between gap-4 
          p-4 bg-white
          rotate-[-1deg] shadow-[6px_6px_0px_black]
        ">

          {/* LEFT TEXT */}
          <div>
            <h2 className="manga-heading text-xl sm:text-2xl">
              MY PROJECTS
            </h2>
            <p className="manga-sub text-xs mt-1">
              SOME THINGS I’VE BUILT
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">

            {/* SPEECH CLOUD */}
            <div className="
              relative bg-white border-[3px] border-black 
              px-5 py-3 
              w-[160px] sm:w-[200px] md:w-[240px] 
              rounded-full 
              text-[10px] sm:text-[11px] manga-body text-center 
              shadow-[5px_5px_0px_black]
              -rotate-2
            ">
              CHECK OUT MY <br /> LATEST WORK!

              {/* Tail */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-[3px] border-b-[3px] border-black rotate-45"></div>
            </div>

            {/* CHARACTER */}
            <div className="
              w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]
              rotate-[2deg] shadow-[4px_4px_0px_black]
              overflow-hidden border-[2px] border-black bg-white
            ">
              <img
                src="/images/ig3.jpg"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4
        ">

          {[
            {
              title: "SENPAI STREAM",
              img: "/images/bw1.jpeg",
              desc: "Anime streaming platform with watchlists & reviews.",
              tech: "NEXT.JS • TAILWIND • MYSQL",
            },
            {
              title: "TASKARA",
              img: "/images/bw8.jpg",
              desc: "Task management app to boost your productivity.",
              tech: "NEXT.JS • TYPESCRIPT • MONGODB",
            },
            {
              title: "PIXELS ART",
              img: "/images/bw2.jpeg",
              desc: "AI-powered art generator for pixel artworks.",
              tech: "REACT • NODE.JS • GEMINI API",
            },
            {
              title: "DEV CONNECT",
              img: "/images/bw3.jpeg",
              desc: "Developer community platform to connect & share.",
              tech: "NEXT.JS • SOCKET.IO • MONGODB",
            },
            {
              title: "MANGA BLOG",
              img: "/images/bw4.jpeg",
              desc: "Manga blog with custom CMS and archive.",
              tech: "NEXT.JS • MDX • TAILWIND",
            },
            {
              title: "WEATHERIFY",
              img: "/images/bw5.jpg",
              desc: "Weather app with anime background themes.",
              tech: "REACT • WEATHER API • CHARTS",
            },
          ].map((project, i) => (
            <div
              key={i}
              className={`
                border-[3px] border-black p-3 flex flex-col gap-2 bg-white
                shadow-[6px_6px_0px_black]
                ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
              `}
            >
              {/* IMAGE PANEL */}
              <div className="
                h-[160px] sm:h-[170px] 
                border-[2px] border-black overflow-hidden
                relative
              ">
                <img
                  src={project.img}
                  className="w-full h-full object-cover"
                />

                {/* subtle overlay for manga feel */}
                <div className="absolute inset-0 bg-white/5"></div>
              </div>

              {/* TEXT */}
              <h3 className="manga-heading text-sm">
                {project.title}
              </h3>

              <p className="manga-body text-[11px] leading-snug">
                {project.desc}
              </p>

              <p className="manga-body text-[10px] mt-auto text-gray-600">
                {project.tech}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}