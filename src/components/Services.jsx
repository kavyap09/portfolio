import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, modern user interfaces using React and Tailwind CSS.",
    icon: <FaCode size={26} className="text-blue-400" />,
  },
  {
    title: "Backend Development",
    desc: "Creating APIs, authentication systems, and databases using Node.js and MongoDB.",
    icon: <FaServer size={26} className="text-green-400" />,
  },
  {
    title: "Full Stack Solutions",
    desc: "End-to-end web applications with frontend, backend, and deployment support.",
    icon: <FaLayerGroup size={26} className="text-purple-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="text-4xl font-bold mb-12">What I Can Do For You</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="relative card text-center flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* Orbit system */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-6">

              {/* Rotating ring */}
              <motion.div
                className="absolute w-full h-full rounded-full border-2 border-blue-400"
                style={{
                  boxShadow: "0 0 25px rgba(59,130,246,0.6)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Icon */}
              <div className="z-10 w-12 h-12 rounded-full bg-[#0b0f19] flex items-center justify-center shadow-lg shadow-blue-500/30">
                {s.icon}
              </div>

            </div>

            <h3 className="text-xl mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>

           
          </motion.div>
        ))}
      </div>
    </section>
  );
}
