"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slogans = [
  "Launch smarter. Build faster. Dream bigger.",
  "Your digital journey starts here.",
  "Intelligence meets design.",
  "Cotizá con IA. Creá sin límites.",
  "From idea to interface in seconds.",
];

export default function SloganGenerator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="slogan"
      className="min-h-screen flex items-center justify-center text-center px-6 snap-start bg-darkBg"
    >
      <motion.h2
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-black text-neonPink max-w-3xl"
      >
        {slogans[index]}
      </motion.h2>
    </section>
  );
}