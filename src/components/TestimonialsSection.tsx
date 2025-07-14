"use client";

// Update the import path below to the correct relative path if needed, for example:
import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const nextTestimonial = () => {
    setIndex(prev => {
      const newIndex = (prev + 1) % total;
      // Batch related state updates
      setImgLoading(true);
      setImgError(false);
      return newIndex;
    });
  };
  const prevTestimonial = () => {
    setIndex(prev => {
      const newIndex = (prev - 1 + total) % total;
      setImgLoading(true);
      setImgError(false);
      return newIndex;
    });
  };

  return (
    <section className="py-16 px-6 bg-darkBg text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-neonGreen mb-4">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-400 mb-10">
          Freelancers, agencias y emprendedores ya confiaron en M² para lanzar sus sitios de forma inteligente.
        </p>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-darkCard border border-darkBorder rounded-xl p-6 shadow-neonGreen"
        >
          <div className="text-lg text-gray-300 mb-4 italic">“{testimonials[index].quote}”</div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 relative flex items-center justify-center">
              {imgLoading && !imgError && (
                <span className="absolute inset-0 flex items-center justify-center animate-spin text-neonBlue">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                </span>
              )}
              <Image
                src={imgError ? '/assets/avatar-fallback.png' : testimonials[index].avatar}
                alt={imgError ? 'Avatar por defecto: imagen de usuario no disponible' : testimonials[index].name}
                width={48}
                height={48}
                className={`w-12 h-12 rounded-full border border-neonBlue object-cover ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImgLoading(false)}
                onError={() => { setImgError(true); setImgLoading(false); }}
                style={{ transition: 'opacity 0.2s' }}
                unoptimized={imgError}
              />
            </div>
            <div className="text-left">
              <p className="text-neonBlue font-semibold">{testimonials[index].name}</p>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Controles */}
        <div className="mt-8 flex justify-center gap-6">
          <button 
            onClick={prevTestimonial} 
            className="text-neonGreen hover:text-white transition focus:outline-none focus:ring-2 focus:ring-neonGreen rounded"
            aria-label="Previous testimonial"
          >
            ← Anterior
          </button>
          <button 
            onClick={nextTestimonial} 
            className="text-neonGreen hover:text-white transition focus:outline-none focus:ring-2 focus:ring-neonGreen rounded"
            aria-label="Next testimonial"
          >
            Siguiente →
          </button>
        </div>      </div>
    </section>
  );
}