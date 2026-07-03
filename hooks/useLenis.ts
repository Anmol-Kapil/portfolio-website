"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}