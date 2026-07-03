"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-3 py-2">

        {links.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="relative px-5 py-2 rounded-full text-sm"
          >
            {active === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-white"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}

            <span
              className={`relative z-10 transition ${
                active === item.id
                  ? "text-black font-semibold"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}

      </div>
    </nav>
  );
}