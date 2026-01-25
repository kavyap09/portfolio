import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaChartLine, FaUserGraduate } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      key={window.location.hash}
      id="about"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      {/* Heading Block */}
      <div className="flex items-center gap-4 mb-6">
           <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl leading-relaxed">
        I'm Kavya Pendyala, an aspiring MERN Full Stack Developer currently
        pursuing my B.Tech in Information Technology. I enjoy creating clean,
        user-friendly and scalable web applications using modern technologies.
        My goal is to build products that are both visually appealing and
        technically strong.
      </p>

      {/* Stats Grid */}
      <div className="mt-14 grid md:grid-cols-3 gap-8">

        {/* Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="card flex items-center gap-5 group"
        >
          <div
            className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center
                       group-hover:bg-blue-500/25 transition"
          >
            <FaCode className="text-2xl text-blue-400 group-hover:scale-110 transition" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">6+</h3>
            <p className="text-gray-400">Projects Built</p>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="card flex items-center gap-5 group"
        >
          <div
            className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center
                       group-hover:bg-blue-500/25 transition"
          >
            <FaChartLine className="text-2xl text-blue-400 group-hover:scale-110 transition" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">9.18</h3>
            <p className="text-gray-400">Current CGPA</p>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="card flex items-center gap-5 group"
        >
          <div
            className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center
                       group-hover:bg-blue-500/25 transition"
          >
            <FaUserGraduate className="text-2xl text-blue-400 group-hover:scale-110 transition" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">2027</h3>
            <p className="text-gray-400">Graduation Year</p>
          </div>
        </motion.div>

      </div>

    </motion.section>
  );
}
