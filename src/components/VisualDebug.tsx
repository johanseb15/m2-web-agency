export default function VisualDebug() {
  return (
    <section className="min-h-screen bg-darkBg text-white p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">Visual Debug: Paleta & Glass</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-neonGreen text-darkBg font-semibold rounded-lg shadow-lg">
          neonGreen
        </div>
        <div className="p-6 bg-neonBlue text-white font-semibold rounded-lg shadow-lg">
          neonBlue
        </div>
        <div className="p-6 bg-neonPink text-white font-semibold rounded-lg shadow-lg">
          neonPink
        </div>
      </div>

      <div className="glass-card p-6 rounded-xl border border-darkBorder backdrop-blur-lg bg-darkCard">
        <h3 className="text-neonGreen font-bold text-xl mb-2">Glass Card</h3>
        <p className="text-gray-400">
          Este es un ejemplo de tarjeta con fondo `darkCard`, blur y borde `darkBorder`.
        </p>
      </div>

      <div className="bg-gradient-to-r from-neonGreen via-neonBlue to-neonPink text-center py-4 rounded-lg font-bold">
        Gradiente combinada
      </div>
    </section>
  );
}