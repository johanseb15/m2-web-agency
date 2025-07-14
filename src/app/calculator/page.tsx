"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import OptionCard from "@/components/OptionCard";

const steps = [
  {
    question: "¿Qué tipo de proyecto querés cotizar?",
    options: [
      { icon: "🖥️", label: "Landing Page", value: "landing" },
      { icon: "🛒", label: "E-commerce", value: "ecommerce" },
      { icon: "📱", label: "Aplicación Web", value: "app" },
    ],
    microcopy: "Elegí el formato que mejor represente tu idea.",
  },
  {
    question: "¿Qué nivel de complejidad necesitás?",
    options: [
      { icon: "⚙️", label: "Básica", value: "low" },
      { icon: "⚡", label: "Media", value: "medium" },
      { icon: "🔥", label: "Alta", value: "high" },
    ],
    microcopy: "Gran elección. Ya entendemos tu nivel de detalle.",
  },
  {
    question: "¿En qué plazo lo necesitás?",
    options: [
      { icon: "📆", label: "1 semana", value: "1w" },
      { icon: "🗓️", label: "2–3 semanas", value: "3w" },
      { icon: "⏳", label: "Flexible", value: "flex" },
    ],
    microcopy: "Ya casi estamos. El tiempo define mucho.",
  },
  {
    question: "¿Requiere integración de pagos o backend?",
    options: [
      { icon: "💳", label: "Sí", value: "yes" },
      { icon: "❌", label: "No", value: "no" },
    ],
    microcopy: "Último paso. Esto afecta el desarrollo técnico.",
  },
];

export default function CalculatorPage() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});

  const current = steps[step];
  const totalSteps = steps.length;

  const handleSelect = (value: string) => {
    setResponses({ ...responses, [step]: value });
  };

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else {
      // Podés redirigir o calcular precio real
      console.log("Calculando con:", responses);
    }
  };

  return (
    <main className="min-h-screen bg-darkBg text-white px-4 py-10">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <ProgressBar currentStep={step + 1} totalSteps={totalSteps} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-neonGreen">{current.question}</h2>
            <p className="text-gray-400">{current.microcopy}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {current.options.map((opt) => (
                <OptionCard
                  key={opt.value}
                  icon={opt.icon}
                  label={opt.label}
                  selected={responses[step] === opt.value}
                  onClick={() => handleSelect(opt.value)}
                />
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={handleNext}
                disabled={!responses[step]}
                className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition disabled:opacity-40"
              >
                {step < totalSteps - 1 ? "Siguiente" : "Ver Cotización"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}