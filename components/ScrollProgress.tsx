"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9999]"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg,#06b6d4,#3b82f6,#8b5cf6,#ec4899)",
      }}
    />
  );
}