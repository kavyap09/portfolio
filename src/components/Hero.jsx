import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import React from "react";

export default function Hero() {
  return (
  <section id="hero" className="min-h-screen flex items-center gap-16 px-10 md:px-20">

      <div>
        <h1 className="text-5xl font-bold">
          Hey There,<br />
          I'm <span className="text-blue-400">Kavya !!</span>
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          I am a passionate MERN Full Stack Developer with a strong interest
          in building responsive and user-friendly web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects"><button className="btn-primary">View Projects</button></a>
          <a href="#contact"><button className="btn-outline">Contact Me</button></a>
        </div>
      </div>

     <motion.img
  src={profile}
  alt="Kavya"
  className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
/>
    </section>
  );
}
