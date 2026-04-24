export default function ContactPage() {
  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ================= LEFT PANEL ================= */}
          <div className="
            border-[3px] border-black relative overflow-hidden bg-white
            rotate-[-1deg] shadow-[6px_6px_0px_black]
          ">

            {/* IMAGE */}
            <img
              src="/images/manga1.jpeg"
              className="w-full h-[260px] sm:h-[320px] object-cover"
            />

            {/* HALFTONE */}
            <div className="absolute inset-0 halftone-light pointer-events-none"></div>

            {/* HEADER */}
            <div className="absolute top-4 left-4 z-10">
              <h2 className="manga-heading text-lg sm:text-xl">
                LET’S CONNECT!
              </h2>
              <p className="manga-sub text-[10px] sm:text-xs">
                I’D LOVE TO HEAR FROM YOU.
              </p>
            </div>

            {/* SPEECH BUBBLE */}
            <div className="
              absolute 
              bottom-4 sm:top-20 sm:bottom-auto 
              left-1/2 sm:left-4 
              -translate-x-1/2 sm:translate-x-0
              z-20
              bg-white border-[3px] border-black
              px-4 sm:px-5 py-3 sm:py-4
              rounded-[50%_40%_55%_45%/45%_55%_40%_60%]
              shadow-[6px_6px_0px_black]
              max-w-[260px]
              text-center
            ">

              <p className="manga-body text-[10px] leading-snug">
                HAVE A PROJECT IN MIND?
                <br />
                DROP ME A MESSAGE!
              </p>

              {/* Tail */}
              <div className="
                absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0
                w-4 h-4 bg-white
                border-r-[3px] border-b-[3px] border-black
                rotate-45
              "></div>
            </div>

          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="
            border-[3px] border-black p-5 relative overflow-hidden bg-white
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">

            <div className="absolute inset-0 halftone-light"></div>

            <div className="relative z-10">
              <h3 className="manga-heading text-sm mb-4">
                CONTACT INFO
              </h3>

              <div className="flex flex-col gap-3">

                {[
                  { label: "EMAIL", value: "hello@manga.dev" },
                  { label: "LINKEDIN", value: "linkedin.com/in/manga-dev" },
                  { label: "GITHUB", value: "github.com/manga-dev" },
                  { label: "TWITTER", value: "@manga_dev" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`
                      border-[2px] border-black px-4 py-3 bg-white
                      shadow-[4px_4px_0px_black]
                      ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
                    `}
                  >
                    <p className="manga-heading text-[10px]">
                      {item.label}
                    </p>
                    <p className="manga-body text-xs">
                      {item.value}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">

          {/* ================= FORM ================= */}
          <div className="
            border-[3px] border-black p-5 bg-white
            rotate-[1deg] shadow-[6px_6px_0px_black]
          ">

            <h3 className="manga-heading text-sm mb-4">
              SEND A MESSAGE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">

              {/* LEFT INPUTS */}
              <div className="flex flex-col gap-3">
                <input
                  placeholder="Your Name"
                  className="
                    border-[2px] border-black px-3 py-2 text-xs bg-white
                    rotate-[-1deg] shadow-[3px_3px_0px_black]
                  "
                />
                <input
                  placeholder="Your Email"
                  className="
                    border-[2px] border-black px-3 py-2 text-xs bg-white
                    rotate-[1deg] shadow-[3px_3px_0px_black]
                  "
                />
              </div>

              {/* MESSAGE */}
              <textarea
                placeholder="Your Message..."
                className="
                  border-[2px] border-black px-3 py-2 text-xs h-[120px] resize-none bg-white
                  rotate-[-1deg] shadow-[3px_3px_0px_black]
                "
              />
            </div>
          </div>

          {/* ================= SEND PANEL ================= */}
          <div className="
            border-[3px] border-black relative flex items-center justify-center overflow-hidden bg-white
            rotate-[-2deg] shadow-[6px_6px_0px_black]
          ">

            {/* HALFTONE */}
            <div className="absolute inset-0 halftone"></div>

            {/* SPEED LINES */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#000_0px,#000_2px,transparent_2px,transparent_16px)] opacity-10"></div>

            <div className="relative z-10 text-center">
              <h2 className="manga-heading text-3xl sm:text-4xl -rotate-6">
                SEND!
              </h2>
              <div className="mt-2 text-xl">✉️</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}