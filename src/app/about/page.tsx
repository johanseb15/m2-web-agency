import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-darkBg text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-neonGreen mb-6">
          Nuestra Filosofía
        </h1>

        {/* Misión */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neonBlue mb-2">¿Por qué M²?</h2>
          <p className="text-gray-400 leading-relaxed">
            En M² Web Agency creemos que el desarrollo web debe ser eficiente, transparente y centrado en el usuario.
            Combinamos automatización, IA y diseño premium para acelerar el proceso de creación digital sin perder calidad.
          </p>
        </div>

        {/* Enfoque Tecnológico */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neonBlue mb-2">Tecnología que impulsa la experiencia</h2>
          <ul className="space-y-3 text-gray-300">
            <li><span className="text-neonGreen">✓</span> Next.js 15 para velocidad y SEO</li>
            <li><span className="text-neonGreen">✓</span> React 19 con interfaces conversacionales</li>
            <li><span className="text-neonGreen">✓</span> Tailwind CSS 4 para diseño minimalista y responsivo</li>
            <li><span className="text-neonGreen">✓</span> IA personalizada para generación de contenido y diseño</li>
          </ul>
        </div>

        {/* Principios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neonBlue mb-2">Lo que creemos</h2>
          <p className="text-gray-400 leading-relaxed">
            Nuestro objetivo es empoderar freelancers, agencias y emprendedores para lanzar sitios funcionales y hermosos sin fricción. Creemos en:
          </p>
          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>Transparencia en precios y tiempos</li>
            <li>Diseño centrado en la experiencia, no en la vanidad</li>
            <li>Automatización inteligente que no sacrifica la personalización</li>
            <li>Procesos conversacionales que guían, no complican</li>
          </ul>
        </div>

        {/* Cierre */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
...
          </p>
          <Link
            href="/calculator"
            className="bg-neonGreen text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition inline-block"
          >
            Empezar mi proyecto
          </Link>        </div>
      </div>
    </section>
  );
}