<<<<<<< HEAD
<<<<<<< HEAD
import HeroSection from "@/components/HeroSection";
import ProjectCalculator from "@/components/ProjectCalculator";
import CallToAction from "@/components/CallToAction";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <HeroSection />
      <div className="grid md:grid-cols-2 gap-8 items-start px-6 py-12 max-w-7xl mx-auto">
        <ProjectCalculator />
        <CallToAction />
      </div>
    </div>
=======
import Hero from @/components/Hero';
=======
import HeroSection from "@/components/HeroSection";
import ProjectCalculator from "@/components/ProjectCalculator";
import CallToAction from "@/components/CallToAction";
>>>>>>> 7c91d85 (Integracion calculadora con landing page IA)

export default function Hero() {
  return (
<<<<<<< HEAD
    <main>
      <Hero />
    </main>
>>>>>>> b97dc48 (Integracion calculadora pagina web)
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <HeroSection />
      <div className="grid md:grid-cols-2 gap-8 items-start px-6 py-12 max-w-7xl mx-auto">
        <ProjectCalculator />
        <CallToAction />
      </div>
    </div>
>>>>>>> 7c91d85 (Integracion calculadora con landing page IA)
  );
}