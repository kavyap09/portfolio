import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0f19]">

      {/* Left blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right blob */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #1e40af, transparent 70%)",
          bottom: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #0ea5e9, transparent 70%)",
          top: "40%",
          left: "40%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}
