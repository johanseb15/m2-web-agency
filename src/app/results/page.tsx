"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { calculatePrice } from "@/lib/calculatePrice";
import { generateQuotePDF } from "@/lib/pdfGenerator";
import TestimonialsSection from "@/components/TestimonialsSection";
import EmailInput from "@/components/EmailInput";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-chartjs-2").then((mod) => mod.Doughnut), {
  ssr: false,
});

export default function ResultsPage() {
  const [total, setTotal] = useState(0);
  const [priceDetails, setPriceDetails] = useState(null);

  useEffect(() => {
    const responses = {
      0: "app",
      1: "high",
      2: "1w",
      3: "yes",
    };
    const { total, breakdown } = calculatePrice(responses);
    setPriceDetails(breakdown);

    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(total / 30);
      if (count >= total) {
        clearInterval(interval);
        setTotal(total);
      } else {
        setTotal(count);
      }
    }, 40);
  }, []);

  return (
    <main className="min-h-screen bg-darkBg text-white px-4 py-20">
      <section className="max-w-2xl mx-auto text-center space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-neonGreen"
        >
          ¡Cotización generada!
        </motion.h1>

        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-neonGreen"
        >
          ${total}
        </motion.p>

        <p className="text-gray-400">Estimación basada en tu selección de proyecto y servicios</p>

        {/* Gráfico Donut */}
        {priceDetails && (
          <Chart
            data={{
              labels: ["UX/UI", "Frontend", "Backend", "SEO"],
              datasets: [
                {
                  data: Object.values(priceDetails),
                  backgroundColor: ["#39FF14", "#00d4ff", "#ff00c8", "#888"],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: { color: "#eaeaea" },
                },
              },
            }}
          />
        )}

        {/* CTA doble */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Agenda una llamada
          </a>
          <button
            onClick={() =>
              priceDetails &&
              generateQuotePDF({
                total,
                breakdown: priceDetails,
              })
            }
            className="border border-neonGreen text-neonGreen font-medium px-6 py-3 rounded-lg hover:bg-neonGreen hover:text-black transition"
          >
            Recibir PDF por email
          </button>
        </div>

        {/* Mini lead form */}
        <EmailInput />

        {/* Contador social */}
        <p className="text-gray-500 mt-6">+1400 cotizaciones generadas este mes 🚀</p>
      </section>

      {/* Testimonios */}
      <section className="mt-20">
        <TestimonialsSection />
      </section>
    </main>
  );
}