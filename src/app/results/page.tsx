import { calculateEstimate } from "@/lib/calculateEstimate";
import { parseEstimateQuery } from "@/lib/estimateParams";
import { projectTypes } from "@/data/projectTypes";
import EstimateBreakdownChart from "@/components/EstimateBreakdownChart";
import ResultActions from "@/components/ResultActions";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResultsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const input = parseEstimateQuery(resolvedSearchParams);
  const result = calculateEstimate(input);
  const projectName =
    projectTypes.find((item) => item.id === input.projectType)?.name ?? "Proyecto personalizado";

  return (
    <main className="min-h-screen bg-darkBg px-6 py-16 text-white">
      <section className="mx-auto max-w-4xl rounded-xl border border-darkBorder bg-darkCard p-8">
        <h1 className="text-4xl font-bold text-neonGreen">Resultado estimado</h1>
        <p className="mt-3 text-gray-300">Proyecto: {projectName}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex justify-between"><span>Base</span><span>USD {result.breakdown.base.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Paginas extra</span><span>USD {result.breakdown.pages.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Extras</span><span>USD {result.breakdown.features.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Complejidad</span><span>x{result.breakdown.complexityMultiplier}</span></div>
            <div className="flex justify-between"><span>Timeline</span><span>x{result.breakdown.timelineMultiplier}</span></div>
            <div className="mt-6 rounded-lg bg-neonGreen/10 p-5 text-center">
              <p className="text-sm text-gray-300">Total estimado</p>
              <p className="text-5xl font-black text-neonGreen">USD {result.total.toLocaleString()}</p>
            </div>
          </div>
          <div className="rounded-lg border border-darkBorder bg-darkBg p-4">
            <EstimateBreakdownChart
              base={result.breakdown.base}
              pages={result.breakdown.pages}
              features={result.breakdown.features}
            />
          </div>
        </div>

        <ResultActions result={result} projectName={projectName} />
      </section>
    </main>
  );
}
