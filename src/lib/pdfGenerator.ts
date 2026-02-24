type QuoteResult = {
  total: number;
  breakdown: {
    uxui: number;
    frontend: number;
    backend: number;
    seo: number;
  };
};

type Html2PdfBuilder = {
  from: (content: string) => Html2PdfBuilder;
  set: (options: Record<string, unknown>) => Html2PdfBuilder;
  save: () => void;
};

type Html2PdfFactory = () => Html2PdfBuilder;

export function generateQuotePDF(result: QuoteResult) {
  if (typeof window === "undefined") return;

  const html2pdfFactory = (window as Window & { html2pdf?: Html2PdfFactory }).html2pdf;
  if (!html2pdfFactory) return;

  const content = `
    <div style="font-family: Inter, sans-serif; padding: 40px; background: #111; color: #eee; max-width: 800px; margin: auto;">
      <h1 style="font-size: 1.8rem; color: #39FF14;">M2 Web Agency</h1>
      <h2 style="color:#00D4FF; margin-bottom: 24px;">Cotizacion personalizada</h2>
      <h3 style="color:#39FF14; font-size: 1.5rem;">Total estimado: USD ${result.total}</h3>
      <ul style="list-style: none; padding-left: 0; margin-top: 16px;">
        <li>UX/UI: USD ${result.breakdown.uxui}</li>
        <li>Frontend: USD ${result.breakdown.frontend}</li>
        <li>Backend: USD ${result.breakdown.backend}</li>
        <li>SEO: USD ${result.breakdown.seo}</li>
      </ul>
    </div>
  `;

  const options = {
    margin: 0,
    filename: `M2-Cotizacion-${Date.now()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
  };

  html2pdfFactory().from(content).set(options).save();
}
