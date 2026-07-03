"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Jenkins",
      "Git",
      "GitHub",
      "Linux",
      "AWS EC2",
      "Maven",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "Scikit-Learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Core CS",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Compiler Design",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4 mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-gray-300 hover:bg-white hover:text-black transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}