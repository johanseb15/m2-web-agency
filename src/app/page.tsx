import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import SloganGenerator from '@/components/SloganGenerator';
import Navbar from '@/components/Navbar';
import VisualDebug from "@/components/VisualDebug";


export default function Home() {
  return (
    <main className="snap-container">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="slogan">
        <SloganGenerator />
      </section>
      <section id="visual-debug">
        <VisualDebug />
      </section>
    </main>
  );
}