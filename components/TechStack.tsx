"use client";

import Marquee from "react-fast-marquee";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiLinux,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";

const tech = [
  {
    icon: SiReact,
    name: "React",
    color: "#61DAFB",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#FFFFFF",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: SiPython,
    name: "Python",
    color: "#3776AB",
  },
  {
    icon: FaJava,
    name: "Java",
    color: "#F89820",
  },
  {
    icon: SiCplusplus,
    name: "C++",
    color: "#00599C",
  },
  {
    icon: SiFastapi,
    name: "FastAPI",
    color: "#009688",
  },
  {
    icon: SiDocker,
    name: "Docker",
    color: "#2496ED",
  },
  {
    icon: SiKubernetes,
    name: "Kubernetes",
    color: "#326CE5",
  },
  {
    icon: SiTerraform,
    name: "Terraform",
    color: "#7B42BC",
  },
  {
    icon: SiJenkins,
    name: "Jenkins",
    color: "#D24939",
  },
  {
    icon: FaAws,
    name: "AWS",
    color: "#FF9900",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    color: "#4479A1",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    icon: SiLinux,
    name: "Linux",
    color: "#FCC624",
  },
  {
    icon: SiGit,
    name: "Git",
    color: "#F05032",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    color: "#FFFFFF",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <p className="uppercase tracking-[8px] text-gray-500">
            Technologies
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">
            Tech Stack
          </h2>
        </div>

        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
        >
          {tech.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group mx-4 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(6,182,212,.25)]"
              >
                <Icon
                  size={28}
                  style={{ color: item.color }}
                />

                <span className="whitespace-nowrap text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </Marquee>

      </div>
    </section>
  );
}