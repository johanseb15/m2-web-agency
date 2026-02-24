"use client";

import Link from "next/link";
import { useState } from "react";
import {
  calculateEstimate,
  complexityConfig,
  extraFeatures,
  timelineConfig,
  type ComplexityId,
  type EstimateInput,
  type TimelineId,
} from "@/lib/calculateEstimate";
import { projectTypes } from "@/data/projectTypes";
import { buildEstimateQuery } from "@/lib/estimateParams";

type Mode = "quick" | "wizard";

type Props = {
  defaultMode?: Mode;
};

export default function EstimateCalculator({ defaultMode = "quick" }: Props) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string>(projectTypes[0].id);
  const [complexity, setComplexity] = useState<ComplexityId>("medium");
  const [timeline, setTimeline] = useState<TimelineId>("standard");
  const [pages, setPages] = useState<number>(4);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const input: EstimateInput = { projectType, complexity, timeline, pages, selectedFeatures };

  const result = calculateEstimate(input);

  const href = `/results?${buildEstimateQuery(input)}`;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section id="calculator" className="glass-panel rounded-2xl p-6 md:p-8">
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => {
            setMode("quick");
            setStep(1);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            mode === "quick" ? "bg-neonBlue text-black" : "border border-darkBorder text-gray-300"
          }`}
        >
          Rapido
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("wizard");
            setStep(1);
          }}
          className={`rounded-lg px-4 py-2 text-sm font-semibold ${
            mode === "wizard" ? "bg-neonBlue text-black" : "border border-darkBorder text-gray-300"
          }`}
        >
          Paso a paso
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-neonGreen">Calculadora de proyectos</h2>
            <p className="mt-2 text-gray-300">Cotiza en tiempo real con la misma logica de precios usada por la agencia.</p>
          </div>

          {(mode === "quick" || step === 1) && (
            <label className="block text-sm text-gray-300">
              Tipo de proyecto
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-2 w-full rounded-lg border border-darkBorder bg-darkBg/80 px-3 py-2 transition focus:border-neonBlue focus:outline-none"
              >
                {projectTypes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          )}

          {(mode === "quick" || step === 2) && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-gray-300">
                Complejidad
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value as ComplexityId)}
                  className="mt-2 w-full rounded-lg border border-darkBorder bg-darkBg/80 px-3 py-2 transition focus:border-neonBlue focus:outline-none"
                >
                  {Object.entries(complexityConfig).map(([id, item]) => (
                    <option key={id} value={id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-gray-300">
                Timeline
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value as TimelineId)}
                  className="mt-2 w-full rounded-lg border border-darkBorder bg-darkBg/80 px-3 py-2 transition focus:border-neonBlue focus:outline-none"
                >
                  {Object.entries(timelineConfig).map(([id, item]) => (
                    <option key={id} value={id}>
                      {item.label} ({item.weeks} semanas)
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {(mode === "quick" || step === 3) && (
            <label className="block text-sm text-gray-300">
              Cantidad de paginas
              <input
                type="number"
                min={1}
                max={30}
                value={pages}
                onChange={(e) => setPages(Math.max(1, Number(e.target.value) || 1))}
                className="mt-2 w-full rounded-lg border border-darkBorder bg-darkBg/80 px-3 py-2 transition focus:border-neonBlue focus:outline-none"
              />
            </label>
          )}

          {(mode === "quick" || step === 4) && (
            <div>
              <p className="mb-2 text-sm text-gray-300">Extras</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {extraFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => toggleFeature(feature.id)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                      selectedFeatures.includes(feature.id)
                        ? "border-neonGreen bg-neonGreen/10 text-white"
                        : "border-darkBorder bg-darkBg text-gray-300"
                    }`}
                  >
                    <span className="block font-semibold">{feature.name}</span>
                    <span className="text-xs text-gray-400">+USD {feature.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {mode === "wizard" && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                className="rounded-lg border border-darkBorder px-4 py-2 text-sm"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setStep((prev) => Math.min(4, prev + 1))}
                className="rounded-lg bg-neonBlue px-4 py-2 text-sm font-semibold text-black"
              >
                Siguiente
              </button>
              <p className="my-auto text-xs text-gray-400">Paso {step}/4</p>
            </div>
          )}
        </div>

        <aside className="rounded-xl border border-neonBlue/40 bg-darkBg p-6">
          <h3 className="text-xl font-semibold text-neonBlue">Resumen estimado</h3>
          <div className="mt-5 space-y-3 text-sm text-gray-300">
            <div className="flex justify-between"><span>Base</span><span>USD {result.breakdown.base.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Paginas extra</span><span>USD {result.breakdown.pages.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Extras</span><span>USD {result.breakdown.features.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Multiplicador complejidad</span><span>x{result.breakdown.complexityMultiplier}</span></div>
            <div className="flex justify-between"><span>Multiplicador timeline</span><span>x{result.breakdown.timelineMultiplier}</span></div>
          </div>
          <div className="mt-6 rounded-lg bg-neonGreen/10 p-4 text-center">
            <p className="text-sm text-gray-300">Costo estimado</p>
            <p className="text-4xl font-black text-neonGreen">USD {result.total.toLocaleString()}</p>
          </div>
          <Link href={href} className="mt-6 block rounded-lg bg-neonGreen px-5 py-3 text-center font-bold text-black transition hover:scale-[1.02]">
            Ver resultado detallado
          </Link>
        </aside>
      </div>
    </section>
  );
}

