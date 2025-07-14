import Link from "next/link";
import { projectTypes } from "@/data/projectTypes";
import { formatCurrency } from "@/utils/formatCurrency";

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-darkBg text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-neonGreen mb-6">Planes y Precios</h1>
        <p className="text-gray-400 mb-12 text-lg">
          Explorá nuestros paquetes diseñados para distintos objetivos digitales. Elegí el que se adapta a tu marca y avanzá al instante.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(projectTypes) && projectTypes.length > 0 ? (
            projectTypes.map((type) => (
              <div
                key={type.id}
                className="bg-darkCard border border-darkBorder rounded-xl p-6 hover:border-neonBlue transition"
              >
                <h2 className="text-xl font-semibold text-neonBlue mb-2">{type.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <div className="text-3xl font-bold text-neonGreen mb-4">
                  {formatCurrency(type.baseCost)}
                </div>
                <ul className="text-sm space-y-2 mb-6">
                  {type.features.slice(0, 4).map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-neonGreen">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {type.features.length > 4 && (
                    <li className="flex items-center gap-2 text-gray-400 italic">
                      <span className="text-neonGreen">…</span>
                      <span>and more...</span>
                    </li>
                  )}
                </ul>
                <Link
                  href="/calculator"
                  className="inline-block bg-neonGreen text-black text-sm font-bold px-4 py-2 rounded-md hover:scale-105 transition"
                >
                  Cotizar este paquete
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-12">
              No hay paquetes disponibles en este momento.
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">¿No estás seguro cuál elegir?</p>
          <Link
            href="/calculator"
            className="text-neonBlue underline text-sm hover:text-neonGreen"
          >
            Usá nuestra calculadora inteligente
          </Link>
        </div>
      </div>
    </section>
  );
}

/* 
  The ProjectType interface and projectTypes array have been removed from this file.
  They should be defined and exported in "@/data/projectTypes" only.
*/