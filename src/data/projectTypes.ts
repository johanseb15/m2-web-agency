export type ProjectType = {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  features: string[];
};

export const projectTypes: ProjectType[] = [
  {
    id: "landing",
    name: "Landing Page",
    description: "Pagina de conversion optimizada para una oferta puntual.",
    baseCost: 1500,
    features: ["Diseno responsive", "SEO tecnico", "Formulario de contacto", "Analytics"],
  },
  {
    id: "corporate",
    name: "Sitio Corporativo",
    description: "Sitio institucional multipagina para posicionar marca y servicios.",
    baseCost: 3500,
    features: ["Arquitectura multipagina", "CMS basico", "Blog", "Formulario avanzado"],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Tienda online con catalogo, carrito y pasarela de pago.",
    baseCost: 8000,
    features: ["Catalogo administrable", "Checkout", "Pagos online", "Integracion logistica"],
  },
  {
    id: "webapp",
    name: "Aplicacion Web",
    description: "Plataforma a medida con flujos de negocio y panel administrativo.",
    baseCost: 15000,
    features: ["Autenticacion", "Panel admin", "Roles y permisos", "Integraciones API"],
  },
  {
    id: "custom",
    name: "Proyecto Personalizado",
    description: "Solucion a medida para necesidades especificas de negocio.",
    baseCost: 5000,
    features: ["Discovery tecnico", "Roadmap", "Arquitectura modular", "Escalabilidad"],
  },
];
