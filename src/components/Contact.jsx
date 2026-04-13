
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvfnnwh",
        "template_ych93uo",
        form.current,
        "epVaG0rvqrLIoxuKL"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Let’s{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4">
          Have an idea? Let’s turn it into reality 🚀
        </p>

        {/* INFO CARDS */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* LOCATION */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-left"
          >
            <MapPin className="text-green-400 mb-3" />
            <p className="text-gray-400">Location</p>
            <h3 className="text-lg font-semibold">Delhi, India</h3>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-left"
          >
            <Mail className="text-green-400 mb-3" />
            <p className="text-gray-400">Email</p>
            <h3 className="text-lg font-semibold">siddiquekashish654@gmail.com</h3>
          </motion.div>

          {/* LINKEDIN */}
          
          <motion.a
            href="https://www.linkedin.com/in/kashish-parween-b77457288/" // 👈 apna link daalna
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-left block hover:shadow-lg hover:shadow-green-500/20 transition duration-300"
          >
            <FaLinkedin className="text-green-400 text-2xl mb-3" />

            <p className="text-gray-400">LinkedIn</p>
            
            <h3 className="text-lg font-semibold break-all">
             kashish-parween
            </h3>

            </motion.a>
        </div>


        {/* FORM */}
        <br></br>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7}}
          className="mt-20 bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Let's Connect ✉️
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            {/* INPUTS */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-black/60 border border-white/10 focus:border-green-400 outline-none transition"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-black/60 border border-white/10 focus:border-green-400 outline-none transition"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-black/60 border border-white/10 focus:border-green-400 outline-none transition"
              required
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold shadow-lg shadow-green-500/30 hover:scale-105 transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}