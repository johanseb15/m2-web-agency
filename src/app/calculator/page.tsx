import EstimateCalculator from "@/components/EstimateCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-darkBg px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-4xl font-bold text-neonGreen">Calculadora de proyectos</h1>
        <p className="mb-10 text-gray-300">
          Misma logica de estimacion, misma interfaz visual. Usa esta vista si quieres compartir el cotizador directo.
        </p>
        <EstimateCalculator />
      </div>
    </main>
  );
}
