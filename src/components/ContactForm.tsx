"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);
    try {
      // Validación básica
      const sanitizedName = formData.name.trim().replace(/[<>]/g, '');
      const sanitizedMessage = formData.message.trim().replace(/[<>]/g, '');

      if (!sanitizedName || !formData.email.trim() || !sanitizedMessage) {
        throw new Error("Todos los campos son obligatorios");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Correo electrónico inválido");
      }

      // Enviar datos al backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage || "No se pudo enviar el mensaje. Intenta nuevamente más tarde.");
      }
      setSuccessMsg("¡Mensaje enviado correctamente! Pronto nos pondremos en contacto.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Ocurrió un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-darkBg px-6 py-20 snap-start">
      <div className="max-w-3xl w-full glass-card rounded-xl p-8">
        <h2 className="text-4xl font-bold text-center text-neonBlue mb-6">Contáctanos</h2>
        <p className="text-center text-gray-400 mb-8">
          ¿Listo para lanzar tu idea? Escribinos y te respondemos en menos de 24hs.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          {successMsg && (
            <div className="mb-4 p-3 bg-green-900 border border-green-600 rounded-lg text-green-200">
              {successMsg}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-neonGreen">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonGreen"
              aria-invalid={!!(error && error.toLowerCase().includes('nombre'))}
              aria-describedby="name-error"
            />
            {error && error.toLowerCase().includes('nombre') && (
              <span id="name-error" className="text-red-400 text-xs mt-1 block">{error}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-neonBlue">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonBlue"
              aria-invalid={!!(error && error.toLowerCase().includes('correo'))}
              aria-describedby="email-error"
            />
            {error && error.toLowerCase().includes('correo') && (
              <span id="email-error" className="text-red-400 text-xs mt-1 block">{error}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-neonPink">Mensaje</label>
            <textarea
              name="message"
              id="message"
              placeholder="¿Cómo podemos ayudarte?"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonPink"
              aria-invalid={!!(error && error.toLowerCase().includes('mensaje'))}
              aria-describedby="message-error"
            />
            {error && error.toLowerCase().includes('mensaje') && (
              <span id="message-error" className="text-red-400 text-xs mt-1 block">{error}</span>
            )}
          </div>
          {/* Mensaje de error general si no es específico de un campo */}
          {error && !['nombre', 'correo', 'mensaje'].some(f => error.toLowerCase().includes(f)) && (
            <div className="mb-4 text-red-400 text-xs">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-neonGreen text-darkBg font-bold py-4 px-6 rounded-lg hover:shadow-neonGreen transition-shadow duration-300"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span aria-live="polite" className="sr-only">Enviando...</span>
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}