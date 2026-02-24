import Link from "next/link";
import EstimateCalculator from "@/components/EstimateCalculator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-darkBg text-white">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-neonBlue/40 bg-neonBlue/10 px-3 py-1 text-xs uppercase tracking-wider text-neonBlue">
              M2 Web Agency + Calculadora
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Sitio de agencia y cotizador en un solo proyecto.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Unificamos la web comercial y la calculadora de presupuestos para cotizar rapido, con un estilo visual consistente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="rounded-lg bg-neonGreen px-5 py-3 font-bold text-black transition hover:opacity-90"
              >
                Cotizar ahora
              </a>
              <Link
                href="/pricing"
                className="rounded-lg border border-darkBorder px-5 py-3 font-semibold text-white transition hover:border-neonBlue"
              >
                Ver planes
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-darkBorder bg-darkCard p-6">
            <h2 className="text-2xl font-semibold text-neonBlue">Que incluye esta integracion</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li>Una sola base de codigo con Next.js</li>
              <li>Una sola configuracion de precios y reglas</li>
              <li>Calculadora funcional embebida en la home</li>
              <li>Rutas de soporte: precios, contacto y calculadora</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <EstimateCalculator />
      </section>
    </main>
  );
}
