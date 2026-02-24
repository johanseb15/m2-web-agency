import type { EstimateResult } from "@/lib/calculateEstimate";

type DownloadPayload = {
  result: EstimateResult;
  projectName: string;
};

export async function downloadEstimatePDF({ result, projectName }: DownloadPayload) {
  const html2pdfModule = await import("html2pdf.js");
  const html2pdfFactory = (html2pdfModule.default ?? html2pdfModule) as {
    (): {
      from: (content: string) => {
        set: (options: Record<string, unknown>) => { save: () => void };
      };
    };
  };

  const content = `
    <div style="font-family: Arial, sans-serif; padding: 32px; color: #111;">
      <h1 style="margin-bottom: 0;">M2 Web Agency</h1>
      <p style="margin-top: 6px; color: #444;">Cotizacion automatica de proyecto web</p>
      <hr style="margin: 20px 0;" />
      <h2 style="margin-bottom: 8px;">Resumen</h2>
      <p style="margin: 0 0 14px 0;">Proyecto: ${projectName}</p>
      <ul style="padding-left: 18px;">
        <li>Base: USD ${result.breakdown.base.toLocaleString()}</li>
        <li>Paginas extra: USD ${result.breakdown.pages.toLocaleString()}</li>
        <li>Extras: USD ${result.breakdown.features.toLocaleString()}</li>
        <li>Complejidad: x${result.breakdown.complexityMultiplier}</li>
        <li>Timeline: x${result.breakdown.timelineMultiplier}</li>
      </ul>
      <h2 style="margin-top: 24px;">Total estimado: USD ${result.total.toLocaleString()}</h2>
    </div>
  `;

  const options = {
    margin: 0.3,
    filename: `M2-Cotizacion-${Date.now()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdfFactory().from(content).set(options).save();
}
