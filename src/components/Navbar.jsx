

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">

      {/* DOT BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-bg"></div>
      </div>


        {/* RIGHT SIDE */}
        <div className="flex justify-end w-full px-6 py-4">

          {/* HAMBURGER */}
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex flex-col gap-1"
          >
            <span
              className={`w-6 h-[2px] bg-green-500 transition ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-[2px] bg-green-500 transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-[2px] bg-green-500 transition ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </div>

        </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* MENU */}
      {open && (
         <motion.div
          initial={{ x: "100%" }}   // 👉 right se start
          animate={{ x: 0 }}        // 👉 screen pe aayega
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-screen 
          w-64 bg-black/95 backdrop-blur-lg p-6 
          flex flex-col gap-6 text-white z-50
          flex flex-col justify-center"
        >
          <div className="flex flex-col items-center 
          gap-8 mt-10">

          {/* <a href="#about" onClick={() => setOpen(false)} 
              className="text-xl hover:text-white 
              hover:scale-110 transition">About</a> */}
          <a href="#projects" onClick={() => setOpen(false)}
             className="text-xl mt-6 hover:text-white 
             hover:scale-110 transition">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}
             className="text-xl mt-6
             hover:scale-110 transition">Contact</a>
        </div>
        </motion.div>
      )}
    </nav>
  );
}
