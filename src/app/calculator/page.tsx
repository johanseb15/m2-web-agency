"use client";
import { useState } from "react";

type ProjectType = {
  id: string;
  name: string;
  description: string;
  baseCost: number;
};
type Feature = {
  id: string;
  name: string;
  cost: number;
};
type Timeline = {
  id: string;
  name: string;
  description: string;
  multiplier: number;
};

// Mock Data
const projectTypes: ProjectType[] = [
  { id: 'landing', name: 'Landing Page', description: 'Sitio de una sola página', baseCost: 800 },
  { id: 'ecommerce', name: 'E-commerce', description: 'Tienda online', baseCost: 2500 },
  { id: 'webapp', name: 'Web App', description: 'Aplicación web personalizada', baseCost: 4000 },
  { id: 'corporate', name: 'Corporate Site', description: 'Sitio institucional', baseCost: 1500 },
];
const features: Feature[] = [
  { id: 'blog', name: 'Blog', cost: 300 },
  { id: 'chat', name: 'Chat en vivo', cost: 500 },
  { id: 'analytics', name: 'Analytics', cost: 200 },
  { id: 'seo', name: 'SEO avanzado', cost: 400 },
];
const timelines: Timeline[] = [
  { id: '1', name: '1 semana', description: 'Entrega express', multiplier: 1.5 },
  { id: '2', name: '2 semanas', description: 'Entrega rápida', multiplier: 1.2 },
  { id: '3', name: '3 semanas', description: 'Entrega estándar', multiplier: 1 },
  { id: '4', name: '4 semanas', description: 'Entrega flexible', multiplier: 0.9 },
];

function calculatePrice(base: number, addons: number[], multiplier: number) {
  return Math.round((base + addons.reduce((a, b) => a + b, 0)) * multiplier);
}
function formatCurrency(value: number) {
  return value.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}

export default function CalculatorPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    if (!selectedProject || !selectedTimeline) return;
    setError(null);
    setLoading(true);
    try {
      const projectType = projectTypes.find((p) => p.id === selectedProject);
      const timeline = timelines.find((t) => t.id === selectedTimeline);
      if (!projectType || !timeline) {
        setError('Configuración inválida. Por favor, selecciona un proyecto y timeline válidos.');
        setLoading(false);
        return;
      }
      const base = projectType.baseCost;
      const addons = selectedFeatures.map((id) => {
        const feature = features.find((f) => f.id === id);
        return feature ? feature.cost : 0;
      });
      const timelineMultiplier = timeline.multiplier;
      const total = calculatePrice(base, addons, timelineMultiplier);
      setResult(total);
    } catch {
      setError('Error al calcular la cotización. Por favor, intenta nuevamente.');
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
            {projectTypes.map((pt) => (
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
            {features.map((f) => (
              <label key={f.id} className="p-4 bg-darkCard rounded-xl border border-darkBorder">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(f.id)}
                  onChange={() => {
                    setSelectedFeatures((prev) =>
                      prev.includes(f.id)
                        ? prev.filter((id) => id !== f.id)
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
            {timelines.map((t) => (
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
            aria-disabled={!selectedProject || !selectedTimeline || loading}
            aria-busy={loading}
            className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span aria-live="polite" className="sr-only">Calculando...</span>
                Calculando...
              </>
            ) : (
              'Calcular Cotización'
            )}
          </button>

          {error && (
            <div className="mt-4 text-red-400">{error}</div>
          )}

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