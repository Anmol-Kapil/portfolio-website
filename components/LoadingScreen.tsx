"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counter);

          setTimeout(() => {
            setLoading(false);
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 25);

    return () => clearInterval(counter);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: {
              duration: 1,
            },
          }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-widest"
          >
            ANMOL
          </motion.h1>

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="text-gray-500 mt-8 text-2xl"
          >
            {count}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}