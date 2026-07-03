"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import TextReveal from "@/components/TextReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[140px]"
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Internships
            </motion.div>

            {/* Role */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[8px] text-gray-500"
            >
              Electronics & Computer Engineer
            </motion.p>

            {/* Name */}

            <TextReveal className="mt-6">

              <h1 className="text-7xl md:text-[7rem] font-black leading-none">
                ANMOL
                <br />
                <span className="text-white">
                  KAPIL
                </span>
              </h1>

            </TextReveal>

            {/* Tagline */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-6 text-2xl md:text-3xl font-semibold text-cyan-300"
            >
              Software Developer • DevOps • Cloud
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="text-gray-400 text-lg leading-9 mt-8 max-w-2xl"
            >
              Passionate about building scalable software,
              cloud-native applications, AI-powered solutions,
              and IoT systems. I enjoy solving real-world
              engineering problems through clean architecture,
              automation, and modern technologies.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="flex flex-wrap gap-5 mt-12"
            >

              <a
                href="#projects"
                className="group bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:scale-105 transition"
              >
                View Projects

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-white/20 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition"
              >
                <Download size={20} />
                Resume
              </a>

            </motion.div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[120px] opacity-30" />

              <Image
                src="/profile.png"
                alt="Anmol Kapil"
                width={390}
                height={390}
                priority
                className="relative rounded-full border border-white/10 object-cover shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}