"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  github: string;
  demo?: string;
  ppt?: string;
}

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
}: Props) {
  if (!open || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950"
        >
          {/* Header */}

          <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="h-80 w-full rounded-t-3xl object-cover"
            />

            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-black/50 p-3 transition hover:bg-black"
            >
              <X />
            </button>
          </div>

          <div className="p-10">
            <h2 className="text-5xl font-black">{project.title}</h2>

            <p className="mt-6 leading-8 text-gray-400">
              {project.description}
            </p>

            {/* Problem */}

            <h3 className="mt-12 text-2xl font-bold">Problem</h3>

            <p className="mt-4 text-gray-400">{project.problem}</p>

            {/* Features */}

            <h3 className="mt-10 text-2xl font-bold">Features</h3>

            <ul className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            {/* Tech Stack */}

            <h3 className="mt-10 text-2xl font-bold">
              Tech Stack
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-6">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
                >
                  Live Demo
                  <ExternalLink size={20} />
                </a>
              )}

              {!project.github && !project.demo && project.ppt && (
                <a
                  href={project.ppt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full border border-cyan-400/30 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                >
                  <ExternalLink size={20} />
                  View Presentation
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}