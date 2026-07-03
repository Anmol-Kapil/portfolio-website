"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -120, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px] -top-40 -left-40"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -180, 0],
          y: [0, 120, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[140px] bottom-0 right-0"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          y: [0, -80, 0],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[120px] top-1/2 left-1/2 -translate-x-1/2"
      />

    </div>
  );
}