import { projectTypes } from "@/data/projectTypes";

export type ComplexityId = "low" | "medium" | "high" | "enterprise";
export type TimelineId = "rush" | "standard" | "relaxed";

export const complexityConfig: Record<
  ComplexityId,
  { label: string; multiplier: number; description: string }
> = {
  low: { label: "Basico", multiplier: 0.8, description: "Funcionalidades estandar" },
  medium: { label: "Intermedio", multiplier: 1, description: "Personalizacion moderada" },
  high: { label: "Avanzado", multiplier: 1.4, description: "Flujos complejos e integraciones" },
  enterprise: { label: "Enterprise", multiplier: 1.9, description: "Arquitectura robusta y escalable" },
};

export const timelineConfig: Record<
  TimelineId,
  { label: string; multiplier: number; weeks: string }
> = {
  rush: { label: "Urgente", multiplier: 1.25, weeks: "2-4" },
  standard: { label: "Estandar", multiplier: 1, weeks: "4-8" },
  relaxed: { label: "Flexible", multiplier: 0.9, weeks: "8+" },
};

export const extraFeatures = [
  { id: "seo", name: "SEO avanzado", price: 600 },
  { id: "blog", name: "Blog y contenido", price: 450 },
  { id: "multilang", name: "Multi idioma", price: 700 },
  { id: "integrations", name: "Integraciones externas", price: 1000 },
  { id: "automation", name: "Automatizacion de leads", price: 800 },
  { id: "support", name: "Soporte extendido", price: 500 },
];

export type EstimateInput = {
  projectType: string;
  complexity: ComplexityId;
  timeline: TimelineId;
  pages: number;
  selectedFeatures: string[];
};

export type EstimateResult = {
  total: number;
  breakdown: {
    base: number;
    pages: number;
    features: number;
    complexityMultiplier: number;
    timelineMultiplier: number;
  };
};

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const project = projectTypes.find((item) => item.id === input.projectType);
  const base = project?.baseCost ?? 1200;
  const pages = Math.max(1, input.pages);
  const pagesCost = (pages - 1) * 120;

  const featuresCost = input.selectedFeatures.reduce((acc, id) => {
    const feature = extraFeatures.find((item) => item.id === id);
    return acc + (feature?.price ?? 0);
  }, 0);

  const complexityMultiplier = complexityConfig[input.complexity].multiplier;
  const timelineMultiplier = timelineConfig[input.timeline].multiplier;

  const subtotal = base + pagesCost + featuresCost;
  const total = Math.round(subtotal * complexityMultiplier * timelineMultiplier);

  return {
    total,
    breakdown: {
      base,
      pages: pagesCost,
      features: featuresCost,
      complexityMultiplier,
      timelineMultiplier,
    },
  };
}
