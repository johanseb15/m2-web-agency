import type { EstimateInput } from "@/lib/calculateEstimate";
import { complexityConfig, timelineConfig } from "@/lib/calculateEstimate";
import { projectTypes } from "@/data/projectTypes";

export function buildEstimateQuery(input: EstimateInput): string {
  const params = new URLSearchParams();
  params.set("projectType", input.projectType);
  params.set("complexity", input.complexity);
  params.set("timeline", input.timeline);
  params.set("pages", String(input.pages));
  params.set("features", input.selectedFeatures.join(","));
  return params.toString();
}

export function parseEstimateQuery(
  searchParams: Record<string, string | string[] | undefined>,
): EstimateInput {
  const projectTypeRaw = normalizeSingle(searchParams.projectType);
  const complexityRaw = normalizeSingle(searchParams.complexity);
  const timelineRaw = normalizeSingle(searchParams.timeline);
  const pagesRaw = Number(normalizeSingle(searchParams.pages) ?? "4");
  const featuresRaw = normalizeSingle(searchParams.features) ?? "";

  const projectType =
    projectTypes.find((item) => item.id === projectTypeRaw)?.id ?? projectTypes[0].id;
  const complexity = complexityRaw && complexityRaw in complexityConfig ? complexityRaw : "medium";
  const timeline = timelineRaw && timelineRaw in timelineConfig ? timelineRaw : "standard";
  const pages = Number.isFinite(pagesRaw) ? Math.max(1, Math.min(30, pagesRaw)) : 4;
  const selectedFeatures = featuresRaw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    projectType,
    complexity,
    timeline,
    pages,
    selectedFeatures,
  } as EstimateInput;
}

function normalizeSingle(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}
