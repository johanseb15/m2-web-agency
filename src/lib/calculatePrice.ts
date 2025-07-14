export interface PriceBreakdown {
  total: number;
  breakdown: {
    uxui: number;
    frontend: number;
    backend: number;
    seo: number;
  };
}

export function calculatePrice(responses: Record<number, string>): PriceBreakdown {
  const basePrices = {
    landing: 1000,
    ecommerce: 1800,
    app: 2200,
  };

  const complexityMultiplier = {
    low: 1,
    medium: 1.3,
    high: 1.6,
  };

  const timelinePenalty = {
    "1w": 1.3,
    "3w": 1,
    flex: 0.9,
  };

  const requiresBackend = responses[3] === "yes";

  const base = basePrices[responses[0]] || 1000;
  const complexity = complexityMultiplier[responses[1]] || 1;
  const timeline = timelinePenalty[responses[2]] || 1;
  const backendFee = requiresBackend ? 400 : 0;

  const total = Math.round(base * complexity * timeline + backendFee);

  const breakdown = {
    uxui: Math.round(total * 0.4),
    frontend: Math.round(total * 0.35),
    backend: Math.round(total * (requiresBackend ? 0.15 : 0.05)),
    seo: Math.round(total * 0.1),
  };

  return { total, breakdown };
}