export function generateQuotePDF(result: {
  total: number;
  breakdown: {
    uxui: number;
    frontend: number;
    backend: number;
    seo: number;
  };
}) {
  const content = `
    <div style="font-family: Inter, sans-serif; padding: 40px; background: #111; color: #eee; max-width: 800px; margin: auto;">
      <!-- LOGO -->
      <div style="display: flex; align-items: center; margin-bottom: 24px;">
        <img src="/img/logo-m2.png" alt="Logo M²" style="height: 40px; margin-right: 16px;" />
        <h1 style="font-size: 1.8rem; color: #39FF14;">M² Web Agency</h1>
      </div>

      <!-- COTIZACIÓN -->
      <h2 style="color:#00D4FF; margin-bottom: 24px;">Cotización personalizada</h2>
      <p>Este documento fue generado automáticamente por nuestra calculadora conversacional.</p>

      <div style="margin-top: 32px; border-top: 1px solid #333; padding-top: 16px;">
        <h3 style="color:#39FF14; font-size: 1.5rem;">Total estimado: $${result.total}</h3>
        <ul style="list-style: none; padding-left: 0; margin-top: 16px;">
          <li>🔹 UX/UI: $${result.breakdown.uxui}</li>
          <li>🔹 Frontend: $${result.breakdown.frontend}</li>
          <li>🔹 Backend: $${result.breakdown.backend}</li>
          <li>🔹 SEO Básico: $${result.breakdown.seo}</li>
        </ul>
      </div>

      <!-- FIRMA -->
      <div style="margin-top: 40px;">
        <p>Confirmación de recepción:</p>
        <table style="width: 100%; margin-top: 16px;">
          <tr>
            <td style="border-bottom: 1px solid #666; padding: 8px;">Firma Cliente</td>
            <td style="border-bottom: 1px solid #666; padding: 8px;">Firma Agencia</td>
          </tr>
        </table>
      </div>

      <!-- FOOTER -->
      <div style="margin-top: 60px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #333; padding-top: 16px;">
        M² Web Agency · www.m2.agency · contacto@m2.agency · Argentina · © 2025
      </div>
    </div>
  `;

  const opt = {
    margin: 0,
    filename: `M2-Cotizacion-${Date.now()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: "a4", orientation: "portrait" },
  };

  // @ts-ignore
  window.html2pdf().from(content).set(opt).save();
}