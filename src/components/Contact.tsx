"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add proper validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('All fields are required');
      }
      
      // TODO: Connect with backend API
      console.log('Form submitted:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error state
    }
  };
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-darkBg px-6 py-20 snap-start">
      <div className="max-w-3xl w-full glass-card rounded-xl p-8">
        <h2 className="text-4xl font-bold text-center text-neonBlue mb-6">Contáctanos</h2>
        <p className="text-center text-gray-400 mb-8">
          ¿Listo para lanzar tu idea? Escribinos y te respondemos en menos de 24hs.
        </p>

        {submitted ? (
          <div className="text-center text-neonGreen font-semibold text-xl">
            ¡Gracias por tu mensaje! Te responderemos pronto 🚀
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonGreen"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border border-darkBorder rounded-lg px-4 py-3 focus:outline-none focus:border-neonBlue"
            />
            <textarea
              name="message"
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
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}