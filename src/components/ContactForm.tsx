"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { message?: string };
        throw new Error(payload.message ?? "No se pudo enviar el mensaje");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error inesperado");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-gray-300">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-darkBorder bg-darkBg px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-darkBorder bg-darkBg px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-darkBorder bg-darkBg px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-neonGreen px-5 py-3 font-bold text-black disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && <p className="text-sm text-green-400">Mensaje enviado correctamente.</p>}
      {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
    </form>
  );
}
