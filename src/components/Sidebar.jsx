

"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const DATA = {
  name: "Kashish",
  role: "MERN Stack Developer | Data & ML Enthusiast",

  details: {
    Residence: "India",
    City: "Delhi",
  },

  languages: [
    { name: "English", level: 88 },
    { name: "Hindi", level: 99 },
    { name: "Urdu", level: 80 },
  ],

  skills: [
    { title: "MERN Stack", level: "75%" },
    { title: "React Developer", level: "90%" },
    { title: "Backend Developer", level: "60%" },
    { title: "Data & ML", level: "80%" },
  ],

  social: {
    github: "https://github.com/Kashish0786",
    linkedin: "https://www.linkedin.com/in/kashish-parween-b77457288/",
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* VERTICAL DOT ICON */}
      <div
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-[100] cursor-pointer md:hidden"
      >
        <BsThreeDotsVertical
          size={20}
          className="text-white  hover:scale-110 transition"
        />
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-black text-white p-6 border-r border-white/20 z-[60]
        overflow-y-auto no-scrollbar transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* CLOSE BUTTON */}
         <button
          onClick={() => setOpen(false)}
          className="md:hidden mt-7 mb-6 text-gray-400 text-lg"
        >
          ✕
        </button> 

        {/* NAME */}
        <h1 className="text-xl font-bold mt-2 tracking-wide">
          {DATA.name}
        </h1>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          {DATA.role}
        </p>

        <hr className="my-5 border-white/20" />

        {/* DETAILS */}
        <div className="space-y-2 text-sm">
          {Object.entries(DATA.details).map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-gray-400">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

        <hr className="my-5 border-white/20" />

        {/* LANGUAGES */}
        <div>
          <p className="mb-4 text-white font-bold ">Languages</p>

          <div className="flex justify-between">
            {DATA.languages.map((lang, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>

                  <div
                    className="absolute inset-0 rounded-full border-4 border-green-500"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% ${lang.level}%, 0 ${lang.level}%)`,
                    }}
                  ></div>

                  <div className="absolute inset-0 flex items-center justify-center text-xs text-white">
                    {lang.level}%
                  </div>
                </div>

                <p className="text-xs mt-2 text-gray-400">
                  {lang.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-5 border-white/20" />

        {/* SKILLS */}
        <div>
          <p className="mb-3 text-white font-bold ">Skills</p>

          {DATA.skills.map((s, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs mt-5 text-gray-400">
                <span>{s.title}</span>
                <span>{s.level}</span>
              </div>

              <div className="w-full bg-green-400/20 h-1.5 rounded mt-1">
                <div
                  className="bg-green-500 h-1.5 rounded"
                  style={{ width: s.level }}
                />
              </div>
            </div>
          ))}
        </div>

        <hr className="my-6 border-white/20" />

        {/* TECH STACK */}
        <div>
          <p className="mb-4 text-white font-bold ">Tech Stack</p>

          {[
            {
              title: "Frontend",
              items: ["ReactJS", "NextJS", "HTML", "CSS", "Tailwind CSS"],
            },
            {
              title: "Backend",
              items: ["NodeJS", "Express", "MongoDB"],
            },
            {
              title: "Tools",
              items: ["Git", "GitHub", "VS Code"],
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-xs text-gray-500 mb-2">
                {section.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.items.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white hover:text-black transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="sticky bottom-0 left-0 bg-black pt-4 mt-6 border-t border-white/20">
          <div className="flex justify-center gap-6">
            <a href={DATA.social.github} target="_blank">
              <FaGithub size={25} className="hover:scale-110 transition" />
            </a>

            <a href={DATA.social.linkedin} target="_blank">
              <FaLinkedin size={25} className="hover:scale-110 transition" />
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              <FaEnvelope size={25} className="hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
