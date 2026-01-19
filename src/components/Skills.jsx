import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    tech: "React, Tailwind, CSS",
    icon: <FaReact size={36} className="text-cyan-400" />,
  },
  {
    title: "Backend",
    tech: "Node.js, Express",
    icon: <FaNodeJs size={36} className="text-green-500" />,
  },
  {
    title: "Database",
    tech: "MongoDB",
    icon: <FaDatabase size={36} className="text-emerald-400" />,
  },
  {
    title: "Tools",
    tech: "GitHub, Postman",
    icon: <FaGithub size={36} className="text-gray-300" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>

      <div className="grid md:grid-cols-4 gap-10 perspective-1000">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="relative card flex flex-col items-center text-center"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Orbit System */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">

              {/* Rotating Ring */}
              <motion.div
                className="absolute w-full h-full rounded-full border border-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Icon in Center */}
              <div className="z-10 bg-[#0b0f19] p-3 rounded-full shadow-lg shadow-blue-500/20">
                {skill.icon}
              </div>

            </div>

            <h3 className="text-xl font-semibold">{skill.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{skill.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
