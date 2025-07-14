export function calculatePrice(
  baseCost: number,
  addonCosts: number[],
  timelineMultiplier: number
): number {
  if (baseCost < 0) {
    throw new Error('Base cost cannot be negative');
  }
  if (addonCosts.some(cost => cost < 0)) {
    throw new Error('Addon costs cannot be negative');
  }
  if (timelineMultiplier <= 0) {
    throw new Error('Timeline multiplier must be positive');
  }

  const addonsTotal = addonCosts.reduce((sum, cost) => sum + cost, 0);
  const rawTotal = baseCost + addonsTotal;
  const finalPrice = Math.round(rawTotal * timelineMultiplier);

  return finalPrice;
}