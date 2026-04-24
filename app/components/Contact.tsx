"use client";

import { link } from "fs";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    // 🔥 VALIDATION
    if (!form.name || !form.email || !form.message) {
      toast.error("FILL ALL FIELDS!",{
        className: "manga-toast",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
       toast.success("MESSAGE SENT! ", {
  className: `
    manga-toast
  `,
});

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("FAILED TO SEND!",{
          className: "manga-toast",
        });
      }
    } catch (err) {
      toast.error("ERROR! TRY AGAIN",{
        className: "manga-toast",
      });
    }

    setLoading(false);
  };

  return (
    <div className="w-full mx-auto border-[4px] border-black bg-white">

      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT PANEL */}
         <div className="border-[3px] border-black relative overflow-hidden bg-white rotate-[-1deg] shadow-[6px_6px_0px_black]">

  {/* IMAGE */}
  <img
    src="/images/manga1.jpeg"
    className="w-full h-[360px] sm:h-[360px] object-cover"
  />

  {/* HALFTONE */}
  <div className="absolute inset-0 halftone-light pointer-events-none"></div>


  {/* ================= BIG SPEECH BUBBLE ================= */}
  <div className="
    absolute top-6 left-4 z-20
    bg-white border-[3px] border-black
    px-5 py-4
    max-w-[240px]
    shadow-[6px_6px_0px_black]
    rotate-[-2deg]
    rounded-[40%_60%_55%_45%/55%_45%_60%_40%]
  ">

    <h2 className="manga-heading text-base leading-tight">
      LET’S CONNECT!
    </h2>

    <p className="manga-sub text-[10px] mt-1 leading-tight">
      I’D LOVE TO HEAR <br /> FROM YOU.
    </p>

    {/* Tail */}
    <div className="
      absolute -bottom-3 left-10
      w-4 h-4 bg-white
      border-r-[3px] border-b-[3px] border-black
      rotate-45
    "></div>

  </div>


  {/* ================= SMALL SPEECH BUBBLE ================= */}
  <div className="
    absolute bottom-6 left-6 z-20
    bg-white border-[3px] border-black
    px-4 py-2
    max-w-[170px]
    shadow-[5px_5px_0px_black]
    rotate-[2deg]
    rounded-[35%_65%_60%_40%/50%_60%_40%_50%]
  ">

    <p className="manga-body text-[10px] leading-tight text-center">
      HAVE A PROJECT?
      <br />
      LET’S TALK!
    </p>

    {/* Tail */}
    <div className="
      absolute -bottom-3 left-6
      w-3 h-3 bg-white
      border-r-[3px] border-b-[3px] border-black
      rotate-45
    "></div>

  </div>

</div>
          {/* RIGHT PANEL */}
          <div className="border-[3px] border-black p-5 relative bg-white rotate-[1deg] shadow-[6px_6px_0px_black]">
            <h3 className="manga-heading text-sm mb-4">
              CONTACT INFO
            </h3>

            <div className="flex flex-col gap-3">
  {[
    { label: "EMAIL", link: "mailto:arunkumar283512@gmail.com" },
    { label: "LINKEDIN", link: "https://www.linkedin.com/in/arun-dasari-78b330363/" },
    { label: "GITHUB", link: "https://github.com/Arunkumar-512" },
    { label: "PORTFOLIO", link: "https://www.aruns-portfolio.tech/" }
  ].map((item, i) => (
    <div
      key={i}
      className="border-[2px] border-black px-4 py-3 bg-white shadow-[4px_4px_0px_black]"
    >
      <p className="manga-sub text-[10px]">
        {item.label}
      </p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="manga-body text-xs underline break-all"
      >
        {item.label === "EMAIL"
          ? "arunkumar283512@gmail.com"
          : item.link}
      </a>
    </div>
  ))}
</div>
          </div>
        </div>

        {/* ================= FORM ================= */}
      <div className="border-[3px] border-black p-5 bg-white rotate-[1deg] shadow-[6px_6px_0px_black]">

  <h3 className="manga-heading text-sm mb-4">
    SEND A MESSAGE
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">

    {/* LEFT INPUTS */}
    <div className="flex flex-col gap-3">

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="
          border-[2px] border-black 
          px-3 py-2 
          text-[11px]
          bg-white
          manga-body
          tracking-wide
          placeholder:text-gray-500
          placeholder:tracking-wider
          focus:outline-none
          focus:translate-x-[1px] focus:translate-y-[1px]
          rotate-[-1deg]
          shadow-[3px_3px_0px_black]
          caret-black
        "
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="
          border-[2px] border-black 
          px-3 py-2 
          text-[11px]
          bg-white
          manga-sub
          tracking-wide
          placeholder:text-gray-500
          placeholder:tracking-wider
          focus:outline-none
          focus:translate-x-[1px] focus:translate-y-[1px]
          rotate-[1deg]
          shadow-[3px_3px_0px_black]
          caret-black
        "
      />

    </div>

    {/* TEXTAREA */}
    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Write your message here..."
      className="
        border-[2px] border-black 
        px-3 py-2 
        text-[11px]
        h-[130px] 
        resize-none 
        bg-white
        manga-sub
        tracking-wide
        leading-relaxed
        placeholder:text-gray-500
        placeholder:tracking-wider
        focus:outline-none
        focus:translate-x-[1px] focus:translate-y-[1px]
        rotate-[-1deg]
        shadow-[3px_3px_0px_black]
        caret-black
      "
    />

  </div>

  {/* 🔥 SEND BUTTON */}
  <div className="mt-5 flex flex-col items-start gap-2">

    <button
      onClick={handleSend}
      className="
        manga-btn px-6 py-2 text-xs 
        shadow-[4px_4px_0px_black] 
        border-[2px] border-black 
        bg-black text-white
        hover:translate-x-[2px] hover:translate-y-[2px]
        active:translate-x-[3px] active:translate-y-[3px]
        transition-all
      "
    >
      {loading ? "SENDING..." : "SEND MESSAGE"}
    </button>

  </div>

</div>  

      </div>
    </div>
  );
}