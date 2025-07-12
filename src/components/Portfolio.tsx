"use client";

import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  description: string;
  color: 'neonGreen' | 'neonBlue' | 'neonPink';
}

const items: PortfolioItem[] = [
  {
    title: "Landing Page",
    description: "Diseño moderno y optimizado para conversión.",
    color: "neonGreen",
  },
  {
    title: "E-commerce",
    description: "Carrito, pagos, gestión de productos, todo listo.",
    color: "neonBlue",
  },
  {
    title: "SaaS / Web App",
    description: "Aplicaciones dinámicas, paneles admin y más.",
    color: "neonPink",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-darkBg text-white snap-start"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        ¿Qué podemos crear juntos?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`glass-card p-6 rounded-xl border ${
              item.color === 'neonGreen' ? 'border-neonGreen' :
              item.color === 'neonBlue' ? 'border-neonBlue' :
              'border-neonPink'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-2 ${
              item.color === 'neonGreen' ? 'text-neonGreen' :
              item.color === 'neonBlue' ? 'text-neonBlue' :
              'text-neonPink'
            }`}>              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}