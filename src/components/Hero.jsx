
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full text-white overflow-hidden py-20 px-6"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* MAIN CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          
          {/* LEFT */}
          <div className="flex-1">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Hello, I’m{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Kashish
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-4 max-w-md"
            >
              MERN Stack Developer | Exploring Data & Machine Learning | Writer
            </motion.p>

            {/* CODE STYLE TAG */}
            <div className="mt-4 font-mono text-sm text-gray-300">
              <span className="text-green-400">&lt;developer</span>{" "}
              role=<span className="text-green-300">"full-stack"</span>{" "}
              <span className="text-green-400">/&gt;</span>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-6">
              
             
              <a
                href="/cv.pdf"
                download="Kashish-CV.pdf"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-black font-medium hover:scale-105 transition inline-block"
              >
                  Download CV
              </a>
{/* 
              <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                Download CV
              </button> */}

            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">

              {/* glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

              <Image
                src="/avatar.png"
                alt="avatar"
                width={280}
                height={280}
                className="relative z-10 rounded-full border border-white/10"
              />

            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            ["10+", "Projects"],
            ["5+", "Clients"],
            ["2+", "Awards"],
            ["2+", "Years Learning"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-green-400">
                {item[0]}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}