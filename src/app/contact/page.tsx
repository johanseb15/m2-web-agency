import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-darkBg px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-xl border border-darkBorder bg-darkCard p-8">
        <h1 className="text-4xl font-bold text-neonGreen">Contacto</h1>
        <p className="mb-8 mt-3 text-gray-300">
          Cuentanos tu proyecto y te respondemos con una propuesta detallada.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
