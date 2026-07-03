"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "150+",
    label: "Github commits",
  },
  {
    value: "220+",
    label: "DSA Problems",
  },
  {
    value: "8.8",
    label: "CGPA",
  },
  {
    value: "15+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-black border-y border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >

              <h2 className="text-5xl font-black text-white">
                {stat.value}
              </h2>

              <p className="text-gray-500 mt-3 uppercase tracking-[3px] text-sm">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}