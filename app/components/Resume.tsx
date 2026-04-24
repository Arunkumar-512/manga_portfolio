export default function ResumePage() {
  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">

          {/* ========= EDUCATION ========= */}
          <div className="
            border-[3px] border-black p-4 flex flex-col justify-between bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          ">
            <div>
              <h2 className="manga-heading text-sm">EDUCATION</h2>

              <p className="manga-body text-xs mt-2 leading-relaxed">
                B.Sc in Computer Science <br />
                XYZ University <br />
                2019 – 2023
              </p>

              <div className="manga-body text-xs mt-3">
                <p className="font-bold">Relevant Coursework:</p>
                <ul className="ml-4 mt-1 space-y-[2px] list-disc">
                  <li>Data Structures</li>
                  <li>Web Development</li>
                  <li>Database Systems</li>
                  <li>Algorithms</li>
                </ul>
              </div>
            </div>

            <div className="text-right text-xl mt-4">🎓</div>
          </div>

          {/* ========= STATS ========= */}
          <div className="
            border-[3px] border-black p-4 relative overflow-hidden bg-white
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">

            <h2 className="manga-heading text-sm mb-4 relative z-10">
              STATS
            </h2>

            {/* CHARACTER (responsive) */}
            <img
              src="/images/manga81.png"
              className="
                absolute right-0 top-0 
                w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]
                object-cover opacity-90 z-0
              "
            />

            {/* BACKGROUND DOTS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:12px_12px] opacity-10"></div>

           {/* STATS GRID */}
<div className="relative z-10 mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">

  {[
    ["20+", "PROJECTS"],
    ["15+", "CLIENTS"],
    ["2+", "YEARS"],
    ["∞", "COFFEE"],
  ].map(([num, label], i) => (
    <div
      key={i}
      className={`
        bg-white border-[3px] border-black text-center
        px-3 py-4
        shadow-[4px_4px_0px_black]
        ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
      `}
    >
      <p className="manga-heading text-lg sm:text-xl">{num}</p>
      <p className="manga-body text-[10px] mt-1">
        {label}
      </p>
    </div>
  ))}

</div>
          </div>
        </div>

        {/* ================= BOTTOM GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">

          {/* ========= ACHIEVEMENTS ========= */}
          <div className="
            border-[3px] border-black p-4 bg-white
            flex flex-col sm:flex-row items-center gap-4
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">

            {/* IMAGE */}
            <img
              src="/images/manga13.jpeg"
              className="
                w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]
                object-cover border-[2px] border-black
                rotate-[-2deg] shadow-[4px_4px_0px_black]
              "
            />

            {/* TEXT */}
            <div className="text-center sm:text-left">
              <h2 className="manga-heading text-sm mb-2">
                ACHIEVEMENTS
              </h2>

              <ul className="manga-body text-xs space-y-1">
                <li>🏆 Winner – Hackathon 2022</li>
                <li>⭐ Open Source Contributor</li>
                <li>📦 5★ GitHub Repositories</li>
              </ul>
            </div>
          </div>

          {/* ========= CERTIFICATIONS ========= */}
          <div className="
            border-[3px] border-black p-4 relative bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          ">

            <h2 className="manga-heading text-sm mb-3">
              CERTIFICATIONS
            </h2>

            <ul className="manga-body text-xs space-y-1">
              <li>Meta Front-End Developer</li>
              <li>MongoDB Developer</li>
              <li>AWS Cloud Practitioner</li>
            </ul>

            {/* STAMP (responsive + tilted) */}
            <img
              src="/images/certified.png"
              className="
                absolute 
                right-3 bottom-3 
                w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]
                rotate-[12deg] opacity-90
              "
            />
          </div>

        </div>

      </div>
    </div>
  );
}