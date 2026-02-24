import Link from "next/link";
import { calculateEstimate } from "@/lib/calculateEstimate";

export default function ResultsPage() {
  const demo = calculateEstimate({
    projectType: "corporate",
    complexity: "medium",
    timeline: "standard",
    pages: 6,
    selectedFeatures: ["seo", "automation"],
  });

  return (
    <main className="min-h-screen bg-darkBg px-6 py-16 text-white">
      <section className="mx-auto max-w-3xl rounded-xl border border-darkBorder bg-darkCard p-8">
        <h1 className="text-4xl font-bold text-neonGreen">Resultado estimado</h1>
        <p className="mt-3 text-gray-300">
          Ejemplo de salida de la calculadora unificada. Puedes personalizarlo desde la ruta /calculator.
        </p>

        <div className="mt-8 space-y-3 text-sm text-gray-300">
          <div className="flex justify-between"><span>Base</span><span>USD {demo.breakdown.base.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Paginas extra</span><span>USD {demo.breakdown.pages.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Extras</span><span>USD {demo.breakdown.features.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Complejidad</span><span>x{demo.breakdown.complexityMultiplier}</span></div>
          <div className="flex justify-between"><span>Timeline</span><span>x{demo.breakdown.timelineMultiplier}</span></div>
        </div>

        <div className="mt-8 rounded-lg bg-neonGreen/10 p-5 text-center">
          <p className="text-sm text-gray-300">Total estimado</p>
          <p className="text-5xl font-black text-neonGreen">USD {demo.total.toLocaleString()}</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/calculator" className="rounded-lg bg-neonGreen px-5 py-3 font-bold text-black">
            Recalcular
          </Link>
          <Link href="/contact" className="rounded-lg border border-darkBorder px-5 py-3 font-semibold text-white">
            Contactar
          </Link>
        </div>
      </section>
    </main>
  );
}
