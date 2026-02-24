import EstimateCalculator from "@/components/EstimateCalculator";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-darkBg px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-4xl font-bold text-neonGreen">Calculadora de proyectos</h1>
        <p className="mb-10 text-gray-300">
          Vista dedicada para cotizar con flujo paso a paso y generar un resultado detallado.
        </p>
        <EstimateCalculator defaultMode="wizard" />
      </div>
    </main>
  );
}
