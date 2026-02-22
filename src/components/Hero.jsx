import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20 section"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        className="text-center md:text-left"
      >
        {/* Heading */}
        <h1 className="text-5xl font-bold">
        Hey There, <br />I'm{" "}<span className="400">Kavya!!</span>
        </h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          I am a passionate{" "}
          <span className="text-blue-400 font-semibold">
            <Typewriter
              words={[
                "MERN Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
          <br />
          with a strong interest in building responsive and user-friendly web
          applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex gap-6 justify-center md:justify-start"
        >
          <a href="#projects">
            <button className="btn-primary">View Projects</button>
          </a>

          <a href="#contact">
            <button className="btn-outline">Contact Me</button>
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profile}
          alt="Kavya"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/40 float"
        />
      </motion.div>
    </section>
  );
}
