"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Web Developer Intern",
    company: "InAmigos Foundation",
    year: "May 2026 – Jun 2026",
    description:
      "Improved website responsiveness, enhanced UI, and collaborated on feature development.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech Electronics & Computer Engineering",
    company: "VIT Chennai",
    year: "2023 – 2027",
    description:
      "CGPA: 8.8 | Focused on Cloud Computing, DevOps, AI/ML, Embedded Systems and Software Development.",
  },
  {
    icon: Award,
    title: "IBM Certifications",
    company: "DevOps & Agile",
    year: "2026",
    description:
      "IBM DevOps Fundamentals and IBM DevOps, Agile & Design Thinking.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4 mb-20"
        >
          Experience &
          <br />
          Education
        </motion.h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10" />

          <div className="space-y-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-8"
                >

                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center z-10">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">

                    <div className="flex flex-wrap justify-between gap-2">

                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 mt-1">
                          {item.company}
                        </p>
                      </div>

                      <span className="text-gray-500">
                        {item.year}
                      </span>

                    </div>

                    <p className="mt-6 text-gray-400 leading-8">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}