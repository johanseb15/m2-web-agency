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
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
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
        throw new Error("No se pudo enviar el mensaje. Intenta nuevamente más tarde.");
      }
      // setSubmitted(true); // Remove or implement if needed
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
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-3 bg-red-900 border border-red-600 rounded-lg text-red-200">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="mb-4 p-3 bg-green-900 border border-green-600 rounded-lg text-green-200">
              {successMsg}
            </div>
          )}
          <input
            type="text"
            name="name"
            id="name"
            aria-label="Your name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonGreen"
          />
          <input
            type="email"
            name="email"
            id="email"
            aria-label="Your email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonBlue"
          />
          <textarea
            name="message"
            id="message"
            aria-label="Your message"
            placeholder="¿Cómo podemos ayudarte?"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonPink"
          />
          <button
            type="submit"
            className="w-full bg-neonGreen text-darkBg font-bold py-4 px-6 rounded-lg hover:shadow-neonGreen transition-shadow duration-300"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}