import { motion } from "framer-motion";
import { scrollTo } from "@/lib/scrollUtils";

type HeroSectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function HeroSection({
  title = "Tu idea, cuantificada",
  description = "Transformá tu visión en una cotización clara en menos de un minuto.",
  buttonLabel = "Calcular ahora",
}: HeroSectionProps) {
  return (
    <section className="py-32 px-6 text-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-gray-400 max-w-xl mx-auto"
      >
        {description}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        onClick={() => scrollTo("#calculator")}
        className="mt-10 bg-neonGreen text-black px-6 py-3 font-semibold rounded-lg hover:scale-105 transition neon-glow"
      >
        {buttonLabel}
      </motion.button>
    </section>
  );
}