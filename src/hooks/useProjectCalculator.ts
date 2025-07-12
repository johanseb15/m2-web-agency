import { useState } from "react";

export const useProjectCalculator = () => {
  const [projectType, setProjectType] = useState("");
  const [complexity, setComplexity] = useState("3");
  const [timeline, setTimeline] = useState("3");
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const calculateCost = () => {
    const baseMap = {
      landing: 800,
      ecommerce: 2500,
      webapp: 4000,
      corporate: 1500,
    };
    const complexityMultiplier = {
      1: 0, 2: 0.25, 3: 0.5, 4: 0.75, 5: 1,
    };
    const timelineValue = parseInt(timeline);
    const timelineMultiplier = timelineValue === 1 ? 1.5 : timelineValue === 2 ? 1.2 : 1;

    const baseCost = baseMap[projectType] ?? 1000;
    const comp = complexityMultiplier[parseInt(complexity)] ?? 0.5;

    const total = Math.round(baseCost * (1 + comp) * timelineMultiplier);
    setEstimatedCost(total);
    setShowResult(true);
  };

  return {
    projectType, setProjectType,
    complexity, setComplexity,
    timeline, setTimeline,
    estimatedCost, showResult,
    calculateCost,
  };
};