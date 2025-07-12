import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "M2 Web Agency",
  description: "Cotizá y lanzá tu sitio con IA y diseño inteligente",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="bg-darkBg text-white font-sans scroll-smooth">{children}</body>
    </html>
  );
}