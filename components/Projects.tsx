"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

type Project = {
  title: string;
  image: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  github: string;
  demo?: string;
  ppt?: string;
};

const projects: Project[] = [
  {
    title: "Secure Cloud Storage System",

    image: "/projects/cloud-storage.png",

    description:
      "Secure cloud storage application using React, FastAPI, SQLite, Google Drive API and AES-GCM encryption.",

    problem:
      "Traditional cloud storage stores files in plain form. This project encrypts every file locally using AES-GCM before upload while securely managing metadata with SQLite.",

    features: [
      "AES-GCM File Encryption",
      "OAuth 2.0 Authentication",
      "Google Drive Integration",
      "SQLite Metadata Storage",
      "Secure File Download",
    ],

    tech: [
      "React",
      "FastAPI",
      "SQLite",
      "Google Drive API",
      "AES-GCM",
    ],

    github: "https://github.com/Anmol-Kapil/CipherVault",

    demo: "https://cipher-vault-plum.vercel.app",
  },

  {
    title: "Smart Safety Helmet with Alert and GPS System",

    image: "/projects/smart-helmet.png",

    description:
      "IoT-based smart helmet integrating GPS, MPU6050 IMU, BMP280, DS18B20 sensors and LoRa communication.",

    problem:
      "Improve rider safety by continuously monitoring motion, location and environmental conditions while generating emergency alerts.",

    features: [
      "GPS Tracking",
      "MPU6050 Motion Detection",
      "BMP280 Pressure Sensor",
      "DS18B20 Temperature Sensor",
      "LoRa Communication",
    ],

    tech: [
      "Arduino",
      "GPS",
      "LoRa",
      "IoT",
    ],
    github: "",
    demo: "",
    ppt: "https://docs.google.com/presentation/d/10hqWon4owLVe7KaunhZk56MXdUYVy-iU/edit?usp=sharing",

  },

  {
    title: "Cloud-Native Blog Application Deployment using DevSecOps",

    image: "/projects/devsecops.png",

    description:
      "Built a complete DevSecOps pipeline using Jenkins, SonarQube, Docker, Terraform, Ansible, Kubernetes, Prometheus and Grafana.",

    problem:
      "Automate secure application deployment with continuous integration, infrastructure provisioning, monitoring and vulnerability analysis.",

    features: [
      "CI/CD Pipeline",
      "Docker Containerization",
      "Terraform IaC",
      "Kubernetes Deployment",
      "Prometheus & Grafana Monitoring",
    ],

    tech: [
      "Jenkins",
      "Docker",
      "Terraform",
      "Kubernetes",
      "Grafana",
    ],

    github: "https://github.com/Anmol-Kapil/production-blog-cicd",

    demo: "",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section
      id="projects"
      className="py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4 mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Tilt
              key={project.title}
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
            >

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(6,182,212,.18)] transition-all duration-500"
              >

                <div className="relative overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setOpen(true);
                      }}
                      className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                      View Details
                    </button>

                  </div>

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    {project.description}
                  </p>

<div className="flex flex-wrap gap-4 mt-8">

  {/* GitHub Button */}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-white/20 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
    >
      <GitBranch size={18} />
      GitHub
    </a>
  )}

  {/* Live Demo Button */}
  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full hover:scale-105 transition"
    >
      Live Demo
      <ExternalLink size={18} />
    </a>
  )}

  {/* Presentation Button */}
  {!project.github && !project.demo && project.ppt && (
    <a
      href={project.ppt}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full border border-cyan-400/30 py-3 text-center font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
    >
      View Presentation
    </a>
  )}

</div>
                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        open={open}
        onClose={() => setOpen(false)}
      />

    </section>
  );
}