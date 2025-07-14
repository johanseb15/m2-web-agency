"use client";

import { useState } from "react";
import { projectTypes } from "@/data/projectTypes";
import { features } from "@/data/features";
import { timelines } from "@/data/timelines";
import { calculatePrice } from "@/lib/calculatePrice";
import { formatCurrency } from "@/utils/formatCurrency";

// your projectTypes definition here, for example:
// (removed duplicate local export of projectTypes)

export default function CalculatorPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async () => {
    if (!selectedProject || !selectedTimeline) return;
    setLoading(true);
    try {
      // Simulate async calculation (remove setTimeout if not needed)
      await new Promise(res => setTimeout(res, 600));
      const projectType = projectTypes.find((p: { id: string }) => p.id === selectedProject);
      const timeline = timelines.find((t: { id: string; name: string; description: string; multiplier: number }) => t.id === selectedTimeline);
      if (!projectType || !timeline) {
        console.error('Invalid project type or timeline selected');
        setLoading(false);
        return;
      }
      const base = projectType.baseCost;
      const addons = selectedFeatures.map(id => {
        const feature = features.find((f: { id: string; cost: number; name: string }) => f.id === id);
        if (!feature) {
          console.warn(`Feature ${id} not found`);
          return 0;
        }
        return feature.cost;
      });
      const timelineMultiplier = timeline.multiplier;
      const total = calculatePrice(base, addons, timelineMultiplier);
      setResult(total);
    } catch (error) {
      console.error('Calculation failed:', error);
      // Consider showing a user-friendly error message here
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen bg-darkBg text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-neonGreen">Calculadora Inteligente</h1>

        {/* Proyecto */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tipo de Proyecto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectTypes.map(pt => (
              <button
                key={pt.id}
                onClick={() => setSelectedProject(pt.id)}
                className={`p-4 rounded-xl border transition ${
                  selectedProject === pt.id ? "border-neonPink bg-darkCard" : "border-darkBorder"
                }`}
              >
                <h3 className="font-bold">{pt.name}</h3>
                <p className="text-sm text-gray-400">{pt.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Funcionalidades Extras */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Funcionalidades Extras</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map(f => (
              <label key={f.id} className="p-4 bg-darkCard rounded-xl border border-darkBorder">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(f.id)}
                  onChange={() => {
                    setSelectedFeatures(prev =>
                      prev.includes(f.id)
                        ? prev.filter(id => id !== f.id)
                        : [...prev, f.id]
                    );
                  }}
                  className="mr-2 accent-neonGreen"
                />
                {f.name} — {formatCurrency(f.cost)}
              </label>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tiempo de Entrega</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timelines.map((t: { id: string; name: string; description: string; multiplier: number }) => (
              <button
                key={t.id}
                onClick={() => setSelectedTimeline(t.id)}
                className={`p-4 rounded-xl border transition ${
                  selectedTimeline === t.id ? "border-neonPink bg-darkCard" : "border-darkBorder"
                }`}
              >
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Resultado */}
        <div className="text-center">
          <button
            onClick={handleCalculate}
            disabled={!selectedProject || !selectedTimeline || loading}
            className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {loading ? 'Calculando...' : 'Calcular Cotización'}
          </button>

          {result !== null && (
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-neonBlue">Estimado: {formatCurrency(result)}</h2>
              <p className="text-sm text-gray-400">Basado en tu configuración actual</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}