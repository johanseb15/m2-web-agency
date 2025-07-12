"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "portfolio", label: "Proyectos" },
  { id: "slogan", label: "IA" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const sectionOffsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.offsetTop } : { id, top: 0 };
      });

      const current = sectionOffsets.findLast(
        ({ top }) => scrollPos >= top - window.innerHeight / 3
      );
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg bg-opacity-80 backdrop-blur-md border-b border-darkBorder px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#hero" className="text-neonGreen font-bold text-xl tracking-tight">
          M² Agency
        </Link>
        <ul className="flex gap-8 text-sm font-semibold">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors ${
                  activeSection === id
                    ? "text-neonBlue"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}