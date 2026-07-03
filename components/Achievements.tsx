"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  BrainCircuit,
  Code2,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "220+ LeetCode Problems",
    subtitle: "Data Structures & Algorithms",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "IBM DevOps Certifications",
    subtitle: "DevOps • Agile • Design Thinking",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BrainCircuit,
    title: "AI Club Member",
    subtitle: "VIT Chennai",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Multiple Real-World Projects",
    subtitle: "Cloud • AI • IoT • DevOps",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-32 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4 mb-16"
        >
          Beyond
          <br />
          Academics
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 overflow-hidden relative"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`}
                />

                <div className="relative">

                  <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {item.subtitle}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}