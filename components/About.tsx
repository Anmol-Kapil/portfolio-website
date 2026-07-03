"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
} from "lucide-react";
import TextReveal from "@/components/TextReveal";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech ECM",
    desc: "CGPA 8.8",
  },
  {
    icon: Briefcase,
    title: "Experience",
    value: "Web Developer",
    desc: "InAmigos Foundation",
  },
  {
    icon: Code2,
    title: "Projects",
    value: "5+ Projects",
    desc: "Cloud • AI • DevOps",
  },
  {
    icon: Trophy,
    title: "Achievements",
    value: "220+ LeetCode",
    desc: "Problem Solving",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-36 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          About Me
        </motion.p>

        <TextReveal className="mt-6">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Passion Meets
            <br />
            Engineering.
          </h2>
        </TextReveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 mt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="text-2xl leading-10 text-gray-300">

              I'm{" "}
              <span className="font-bold text-white">
                Anmol Kapil
              </span>
              , an Electronics & Computer Engineering student passionate
              about creating software that solves real-world problems.

            </p>

            <p className="mt-10 text-lg leading-9 text-gray-500">

              My interests span Software Development, DevOps,
              Cloud Computing,Full Stack Development,
              and IoT Systems.

            </p>

            <p className="mt-10 text-lg leading-9 text-gray-500">

              I enjoy building secure cloud platforms,
              automation pipelines, scalable backend systems,
              and modern web applications with a focus on
              performance, clean architecture, and great user experience.

            </p>

            <div className="mt-14 flex flex-wrap gap-3">

              {[
                "C++",
                "Java",
                "Python",
                "React",
                "Next.js",
                "Docker",
                "Kubernetes",
                "AWS",
                "FastAPI",
                "Terraform",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            {cards.map((card, index) => {

              const Icon = card.icon;

              return (

                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition"

                >

                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">

                    <Icon size={28} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">

                    {card.title}

                  </h3>

                  <p className="mt-3 text-lg text-white">

                    {card.value}

                  </p>

                  <p className="text-gray-500 mt-2">

                    {card.desc}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}