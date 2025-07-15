// src/components/EmailInput.tsx
"use client";

import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  return (
    <div className="mt-6">
      <label className="text-sm text-gray-400 block mb-2">Recibí esta cotización por email:</label>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="bg-gray-800 px-4 py-2 rounded-md text-white flex-1"
        />
        <button
          onClick={() => alert(`Cotización enviada a ${email}`)}
          className="bg-neonGreen text-black font-bold px-4 py-2 rounded-md"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}