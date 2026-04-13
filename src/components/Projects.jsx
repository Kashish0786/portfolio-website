
"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio with premium UI & smooth interactions.",
    tech: "Next.js, Tailwind, Framer Motion",
    link: "https://github.com/Kashish0786",
  },
  {
    title: "Customer Segmentation",
    desc: "ML-based clustering to segment customers for better targeting.",
    tech: "Python, Scikit-learn, Pandas",
    link: "https://github.com/Kashish0786",
  },
  {
    title: "Movie Recommendation",
    desc: "Recommender system suggesting movies based on user preferences.",
    tech: "Python, NLP, ML",
    link: "https://github.com/Kashish0786",
  },
  {
    title: "Task Manager",
    desc: "Full-stack task manager with CRUD, auth & clean UI.",
    tech: "React & Tailwind CSS",
    link: "https://github.com/Kashish0786",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          My{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4">
          Some things I’ve built recently 🚀
        </p>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-left hover:shadow-lg hover:shadow-green-500/20 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                <p className="text-xs text-gray-500">
                  ⚡ {project.tech}
                </p>
              </div>

              {/* GITHUB ICON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-green-400 hover:text-white transition"
              >
                <FaGithub />
                <span className="text-sm">View Code</span>
              </a>
            </motion.div>
          ))}

        </div>

        {/* GLOBAL GITHUB BUTTON */}
        <div className="mt-16 flex flex-col items-center gap-4"></div>
        <motion.a
          href="https://github.com/Kashish0786"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="mt-16 inline-flex items-center 
          gap-3 px-8 py-3 rounded-full 
          bg-gradient-to-r from-white/10 to-white/5 
          border border-white/10 
          backdrop-blur-xl 
          text-white font-medium"
        >
<br></br>
          <span className="leading-none">View All Projects</span>
        </motion.a>

 
    </div>
    </section>
  );
}
