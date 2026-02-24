"use client";

import type { EstimateResult } from "@/lib/calculateEstimate";
import { downloadEstimatePDF } from "@/lib/pdfGenerator";

type Props = {
  result: EstimateResult;
  projectName: string;
};

export default function ResultActions({ result, projectName }: Props) {
  return (
    <div className="mt-8 flex gap-3">
      <button
        type="button"
        onClick={() => downloadEstimatePDF({ result, projectName })}
        className="rounded-lg bg-neonGreen px-5 py-3 font-bold text-black transition hover:scale-[1.02]"
      >
        Descargar PDF
      </button>
      <a href="/calculator" className="rounded-lg border border-darkBorder px-5 py-3 font-semibold text-white transition hover:border-neonBlue">
        Recalcular
      </a>
      <a href="/contact" className="rounded-lg border border-darkBorder px-5 py-3 font-semibold text-white transition hover:border-neonBlue">
        Contactar
      </a>
    </div>
  );
}
