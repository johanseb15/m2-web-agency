"use client";

import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollUtils";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-black text-white leading-tight max-w-3xl"
      >
        Tu idea, <span className="text-neonGreen">cuantificada</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl"
      >
        Convertí tu visión en una cotización clara en segundos. Ideal para agencias, freelancers y clientes exigentes.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        onClick={() => scrollTo("#calculator")}
        className="mt-10 bg-neonGreen text-black font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform neon-glow"
      >
        Empezar cotización
      </motion.button>

      <p className="text-gray-500 mt-4 text-sm">Es gratis y sin compromiso</p>
    </section>
  );
}