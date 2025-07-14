"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./ProgressBar";
import OptionCard from "./OptionCard";

const options = [
  { icon: "🖥️", label: "Landing Page", value: "landing" },
  { icon: "🛒", label: "E-commerce", value: "ecommerce" },
  { icon: "📱", label: "Aplicación Web", value: "app" },
];

export default function CalculatorStep() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setSelected(null); // reset selection for next step
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <ProgressBar currentStep={step} totalSteps={totalSteps} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Pregunta */}
          <h2 className="text-2xl font-semibold text-neonGreen text-center">
            {step === 1 && "¿Qué tipo de proyecto querés cotizar?"}
            {step === 2 && "¿Qué nivel de complejidad necesitas?"}
            {step === 3 && "¿En qué plazo lo necesitás?"}
            {step === 4 && "¿Requiere integración de pagos o backend?"}
          </h2>

          {/* Opciones visuales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {options.map((opt) => (
              <OptionCard
                key={opt.value}
                icon={opt.icon}
                label={opt.label}
                selected={selected === opt.value}
                onClick={() => setSelected(opt.value)}
              />
            ))}
          </div>

          {/* Botón siguiente */}
          <div className="text-center pt-6">
            <button
              onClick={handleNext}
              disabled={!selected}
              className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition disabled:opacity-40 disabled:pointer-events-none"
            >
              Siguiente
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}