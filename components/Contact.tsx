"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mt-4"
        >
          Let's Build
          <br />
          Something Amazing.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-10 max-w-2xl leading-8"
        >
          I'm currently looking for internships and full-time opportunities in
          Software Development, DevOps, Cloud Computing, and AI/ML.
          Feel free to reach out through any of the platforms below.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-20 mt-20">

          {/* Left */}

          <div className="space-y-6">

            {/* Email */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anmolkapil8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-6 hover:bg-white hover:text-black transition"
            >
              <div className="flex items-center gap-4">
                <Mail size={22} />

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-70">
                    anmolkapil8@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight />
            </a>

            {/* Phone */}

            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-6 hover:bg-white hover:text-black transition"
            >
              <div className="flex items-center gap-4">
                <Phone size={22} />

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm opacity-70">
                    9897816971
                  </p>
                </div>
              </div>

              <ArrowUpRight />
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/Anmol-Kapil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-6 hover:bg-white hover:text-black transition"
            >
              <div className="flex items-center gap-4">
                <FaGithub size={22} />

                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm opacity-70">
                    github.com/Anmol-Kapil
                  </p>
                </div>
              </div>

              <ArrowUpRight />
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/anmol-kapil-4b4339263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-6 hover:bg-white hover:text-black transition"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin size={22} />

                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm opacity-70">
                    linkedin.com/in/anmol-kapil-4b4339263
                  </p>
                </div>
              </div>

              <ArrowUpRight />
            </a>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col justify-center">

            <h3 className="text-3xl font-bold">
              Download Resume
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              View my projects, technical skills, internship experience,
              certifications, and achievements in one place.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold mt-10 hover:scale-105 transition w-fit"
            >
              <Download size={20} />
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}