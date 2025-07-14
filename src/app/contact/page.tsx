"use client";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-darkBg text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-neonGreen mb-4">Contacto</h1>
        <p className="text-gray-400 mb-8 text-lg">
          ¿Tenés un proyecto en mente o querés hacer una consulta rápida? 
          Escribinos y te respondemos lo antes posible.
        </p>

        {/* Formulario */}
        <div className="bg-darkCard border border-darkBorder rounded-xl p-6 shadow-neonGreen">
          <ContactForm />
        </div>

        {/* Cierre emocional */}
        <div className="mt-10 text-center text-gray-500">
          <p>
            Preferimos construir relaciones, no solo sitios web. 
            <span className="text-neonBlue"> ¿Charlamos?</span>
          </p>
        </div>
      </div>
    </section>
  );
}