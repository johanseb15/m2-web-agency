import Link from "next/link";
import { projectTypes } from "@/data/projectTypes";
import { formatCurrency } from "@/utils/formatCurrency";

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-darkBg px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-neonGreen">Planes y precios</h1>
        <p className="mt-3 max-w-3xl text-gray-300">
          Base de precios unificada con la calculadora. Cada plan puede ampliarse con extras y ajustes de complejidad.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectTypes.map((type) => (
            <article key={type.id} className="rounded-xl border border-darkBorder bg-darkCard p-6">
              <h2 className="text-xl font-semibold text-neonBlue">{type.name}</h2>
              <p className="mt-2 text-sm text-gray-300">{type.description}</p>
              <p className="mt-4 text-3xl font-black text-neonGreen">{formatCurrency(type.baseCost, "es-AR", "USD")}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {type.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/calculator" className="rounded-lg bg-neonGreen px-5 py-3 font-bold text-black">
            Ir a la calculadora completa
          </Link>
        </div>
      </div>
    </section>
  );
}
