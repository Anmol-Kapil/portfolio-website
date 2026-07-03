"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 text-center px-6"
      >

        <p className="text-cyan-400 tracking-[8px] uppercase">
          Error 404
        </p>

        <h1 className="mt-6 text-8xl md:text-9xl font-black">
          404
        </h1>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/"
            className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

      </motion.div>

    </main>
  );
}