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

          <div>
            <h2 className="manga-heading text-xl sm:text-2xl">
              MY PROJECTS
            </h2>
            <p className="manga-sub text-xs mt-1">
              SOME THINGS I’VE BUILT
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">

            {/* SPEECH */}
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
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-[3px] border-b-[3px] border-black rotate-45"></div>
            </div>

            {/* CHARACTER */}
            <div className="
              w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]
              rotate-[2deg] shadow-[4px_4px_0px_black]
              overflow-hidden 
            ">
              <img src="/images/ig3.jpg" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {[
            {
              title: "HOTEL OPS SYSTEM ",
              img: "/images/bw1.jpeg",
              desc: "Full-stack hotel booking platform with real-time availability and secure checkout.",
              tech: "NEXT.JS • TAILWIND • MONGODB • NODE.JS • EXPRESS",
              code: "https://github.com/Arunkumar-512/Hotel-booking-mangement",
              live: "",
            },
            {
              title: "BAKERY'S POINT ",
              img: "/images/bw3.jpeg",
              desc: "E-commerce bakery platform with product catalog, cart system, and smooth checkout.",
              tech: "NEXT.JS • TYPESCRIPT • TAILWIND • STRIPE • FIREBASE",
              code: "https://github.com/Arunkumar-512/bakery-point-Ecommerce",
              live: "https://bakerys-point.netlify.app/",
            },
            {
              title: "GYM CORE SYSTEM ",
              img: "/images/bw4.jpeg",
              desc: "Modern fitness website with programs, trainers, and responsive UI design.",
              tech: "REACT • TAILWIND • GSAP • FRAMER MOTION",
              code: "https://github.com/Arunkumar-512/GymFlow-website#",
              live: "https://gym-flow-website.vercel.app/",
            },
            {
              title: "SNAPFORGE AI  ",
              img: "/images/bw2.jpeg",
              desc: "AI-powered thumbnail generator for creating high-quality visuals instantly.",
              tech: "NEXT.JS • NODE.JS • GEMINI API • CLOUDINARY",
              code: "https://github.com/Arunkumar-512/ForgeSnap",
              live: "https://snapforge-ai.netlify.app/",
            },
            {     
              title: "GSAP Examples ",
              img: "/images/bw7.jpg",
              desc: "Collection of GSAP animations and scroll-based effects for web development.",
              tech: "REACT • GSAP • TAILWIND",
              code: "https://github.com/Arunkumar-512/GSAP-examples",
              live: "https://gsap-examples-two.vercel.app/",
            },
            {
              title: "MACOS UI LAB ",
              img: "/images/bw6.jpg",
              desc: "macOS-style portfolio with window-based UI and smooth interactive experience.",
              tech: "NEXT.JS • TAILWIND • FRAMER MOTION • CONTEXT API",
              code: "https://github.com/Arunkumar-512/Macs-portfolio",
              live: "",
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
              {/* IMAGE */}
              <div className="h-[180px] border-[2px] border-black overflow-hidden relative">
                <img src={project.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/5"></div>
              </div>

              {/* TEXT */}
              <h3 className="manga-heading text-sm">
                {project.title}
              </h3>

              <p className="manga-body text-[11px] leading-snug">
                {project.desc}
              </p>

              <p className="manga-body text-[10px] text-gray-600">
                {project.tech}
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="flex gap-2 mt-2">

                {/* CODE */}
                <a
                  href={project.code}
                  target="_blank"
                  className="
                    flex-1 flex items-center justify-center gap-1
                    border-[2px] border-black 
                    bg-white text-black
                    text-[10px] py-1
                    shadow-[3px_3px_0px_black]
                    active:translate-x-[2px] active:translate-y-[2px] 
                    active:shadow-none
                  "
                >
                  <span>⚙️</span>
                  CODE
                </a>

                {/* LIVE */}
                <a
                  href={project.live || "#"}
                  target="_blank"
                  className={`
                    flex-1 flex items-center justify-center gap-1
                    border-[2px] border-black 
                    text-[10px] py-1
                    shadow-[3px_3px_0px_black]
                    active:translate-x-[2px] active:translate-y-[2px] 
                    active:shadow-none
                    ${project.live 
                      ? "bg-black text-white" 
                      : "bg-gray-300 text-gray-500 pointer-events-none"}
                  `}
                >
                  <span>↗</span>
                  LIVE
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}