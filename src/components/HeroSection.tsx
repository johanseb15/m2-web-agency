"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headlines = [
  "Tu idea, cuantificada. Cotizá tu proyecto en segundos.",
  "Diseñá con IA, lanzá con estilo. Presencia digital premium.",
  "Precios reales para proyectos reales. Claridad y confianza.",
];

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-darkBg min-h-[70vh] flex items-center justify-center px-6 py-20 text-center">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-radial from-black via-darkBg to-gray-900 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Contenido principal */}
      <motion.div
        key={headlineIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neonGreen mb-6">
          {headlines[headlineIndex]}
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          IA + diseño premium para agencias y emprendedores modernos.
        </p>
        <a
          href="/calculator"
          className="inline-block bg-neonGreen text-black font-bold text-lg px-6 py-3 rounded-lg shadow-[0_0_14px_#39FF14] hover:scale-105 hover:shadow-[0_0_24px_#39FF14] transition"
        >
          {headlineIndex === 1 ? "Iniciar mi proyecto" : "Obtén tu cotización"}
        </a>
      </motion.div>
    </section>
  );
}