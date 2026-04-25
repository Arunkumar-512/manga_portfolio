export default function ResumePage() {
  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">

          {/* ========= EDUCATION ========= */}
          <div className="
            border-[3px] border-black p-4 bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
            flex flex-col gap-4 max-h-[420px] overflow-y-auto
          ">

            <h2 className="manga-heading text-sm">MY EDUCATION</h2>

            {[
              {
                year: "2025",
                title: "Full-Stack Web Development Bootcamp",
                place: "JSM Mastery",
              },
              {
                year: "2024",
                title: "React Native Mobile Development Course",
                place: "Online Platform",
              },
              {
                year: "2022 – 2024",
                title: "B.Tech in Computer Science",
                place: "JB Group of Institution and Engineering College",
              },
              {
                year: "2024",
                title: "Frontend Development Bootcamp",
                place: "FreeCodeCamp",
              },
              {
                year: "2019 – 2021",
                title: "Diploma in Mechanical Engineering",
                place: "TRR College Of Engineering",
              },
              {
                year: "2006 – 2018",
                title: "High School",
                place: "Gateway International High School",
              },
            ].map((edu, i) => (
              <div
                key={i}
                className="border-[2px] border-black bg-white px-3 py-3 shadow-[4px_4px_0px_black]"
              >
                <p className="manga-heading text-[11px]">{edu.year}</p>
                <p className="manga-body text-xs mt-1 font-semibold">
                  {edu.title}
                </p>
                <p className="manga-body text-[10px] text-gray-600">
                  {edu.place}
                </p>
              </div>
            ))}
          </div>

          {/* ========= STATS ========= */}
<div className="
  border-[3px] border-black p-5 relative overflow-hidden bg-white
  rotate-[1deg] shadow-[6px_6px_0px_black]
  flex flex-col min-h-[420px]
">

  <h2 className="manga-heading text-sm mb-4 relative z-10">
    STATS
  </h2>

  {/* CHARACTER (unchanged position) */}
  <img
    src="/images/manga81.png"
    className="
      absolute right-0 top-0 
      w-[120px] sm:w-[160px] md:w-[200px]
      opacity-90 z-0
    "
  />

  {/* BACKGROUND DOTS */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:12px_12px] opacity-10"></div>

  {/* 🔥 PUSHED DOWN STATS */}
  <div className="
    relative z-10 
    mt-10 sm:mt-10 md:mt-14
    grid grid-cols-2 sm:grid-cols-4 gap-4
  ">

    {[
      ["1", "Experience"],
      ["15+", "Projects"],
      ["8+", "Technologies"],
      ["100+", "Code commits"],
    ].map(([num, label], i) => (
     <div
  key={i}
  className={`
    bg-white border-[3px] border-black text-center
    px-2 sm:px-3 py-3 sm:py-4
    shadow-[4px_4px_0px_black]
    w-full min-w-0   
    flex flex-col items-center justify-center
    ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
  `}
>
  <p className="
    manga-heading 
    text-sm sm:text-lg md:text-xl 
    leading-none
  ">
    {num}
  </p>

  <p className="
    manga-body 
    text-[8px] sm:text-[10px] md:text-[11px]
    mt-1 
    leading-tight 
    break-words text-center
  ">
    {label}
  </p>
</div>
    ))}

  </div>

  {/* 🔥 BOTTOM SECTION (ALIGNED PROPERLY) */}
  <div className="
    relative z-10 
    mt-auto pt-6   /* ← pushes this to bottom cleanly */
    grid grid-cols-1 sm:grid-cols-2 gap-4
  ">

    {/* CODING PROFILES */}
    <div className="border-[2px] border-black p-3 bg-white shadow-[3px_3px_0px_black]">
      <h3 className="manga-heading text-[11px] mb-2">
        CODING PROFILES
      </h3>
      <ul className="manga-body text-[10px] space-y-1">
        <li>• CodeChef</li>
        <li>• LeetCode</li>
      </ul>
    </div>

    {/* CERTIFICATIONS */}
    <div className="border-[2px] border-black p-3 bg-white shadow-[3px_3px_0px_black]">
      <h3 className="manga-heading text-[11px] mb-2">
        CERTIFICATIONS
      </h3>
      <ul className="manga-body text-[10px] space-y-1">
        <li>• Fundamentals of Python</li>
        <li>• Core Java Concepts</li>
        <li>• Python for Data Science (Merit)</li>
        <li>• Frontend Development Training (Merit)</li>
        <li>• Deepfake Detection Research Paper</li>
        <li>• GRE & Duolingo (Competitive Scores)</li>
      </ul>
    </div>

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

            <img
              src="/images/manga13.jpeg"
              className="
                w-[100px] h-[100px]
                object-cover border-[2px] border-black
                shadow-[4px_4px_0px_black]
              "
            />

            <div>
              <h2 className="manga-heading text-sm mb-2">
                ACHIEVEMENTS
              </h2>

              <ul className="manga-body text-xs space-y-1">
                <li>Published Research Paper (Deepfake Detection)</li>
                <li>Python for Data Science – Merit Certification</li>
                <li>GRE & Duolingo – Competitive Scores</li>
                <li>Frontend Training – Merit Completion</li>
              </ul>
            </div>
          </div>

          {/* ========= CERT BADGE ========= */}
          <div className="
            border-[3px] border-black p-4 relative bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
            flex items-center justify-center
          ">

            <h2 className="manga-heading text-sm absolute top-3 left-3">
              VERIFIED
            </h2>

            <img
              src="/images/certified.png"
              className="w-[120px] opacity-90 rotate-[10deg]"
            />
          </div>

        </div>

      </div>
    </div>
  );
}