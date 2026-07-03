"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="py-32 bg-gradient-to-b from-black to-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Coding Profiles
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4 mb-16"
        >
          Competitive
          <br />
          Programming
        </motion.h2>

        {/* LeetCode Card */}

        <motion.a
          href="https://leetcode.com/u/anmolkapil8/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <SiLeetcode
              size={34}
              className="text-yellow-500"
            />

            <div>
              <h3 className="text-3xl font-bold">
                LeetCode
              </h3>

              <p className="text-gray-500">
                Problem Solving
              </p>
            </div>
          </div>

          <img
            src="https://leetcard.jacoblin.cool/anmolkapil8?theme=dark&font=Nunito&ext=heatmap"
            alt="LeetCode Stats"
            className="w-full rounded-2xl"
          />
        </motion.a>

        {/* GitHub Streak */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
>
  <div className="flex items-center gap-4 mb-8">
    <FaGithub size={34} />

    <div>
      <h3 className="text-3xl font-bold">
        GitHub Streak
      </h3>

      <p className="text-gray-500">
        Consistent coding activity
      </p>
    </div>
  </div>

  <img
    src="https://streak-stats.demolab.com?user=Anmol-Kapil&theme=tokyonight&hide_border=true"
    alt="GitHub Streak"
    className="w-full rounded-2xl"
  />
</motion.div>

      </div>
    </section>
  );
}