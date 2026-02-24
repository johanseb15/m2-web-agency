# M2 Web Agency + Calculadora

Proyecto unificado en Next.js que integra:
- Sitio web comercial de agencia
- Calculadora de presupuestos web
- Flujo paso a paso (wizard)
- Resultados con desglose visual
- Exportacion a PDF

Repositorio: `m2-web-agency`

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Chart.js + react-chartjs-2
- html2pdf.js

## Estado actual

Integracion completada de dos repositorios en una sola base:
- Base principal: `m2-web-agency`
- Logica funcional de calculadora consolidada desde `CalculadoraProyectos`
- Eliminacion de duplicados y codigo roto
- Build de produccion validado

## Funcionalidades

- Home con CTA y calculadora embebida
- Modo `Rapido` y modo `Paso a paso` en `/calculator`
- Calculo de costos con:
  - tipo de proyecto
  - complejidad
  - timeline
  - paginas
  - extras
- Resultado detallado en `/results` (via query params)
- Grafico donut de desglose (Base / Paginas / Extras)
- Descarga de cotizacion en PDF
- Paginas adicionales: `/pricing`, `/contact`, `/about`
- Endpoint `POST /api/contact` para formulario de contacto

## Reglas de estimacion

La logica vive en:
- `src/lib/calculateEstimate.ts`

Modelo de calculo:
1. Se toma costo base por tipo de proyecto
2. Se suma costo por paginas extra
3. Se suma costo de extras seleccionados
4. Se aplica multiplicador por complejidad
5. Se aplica multiplicador por timeline

Formula:

`total = (base + pages + extras) * complexityMultiplier * timelineMultiplier`

## Estructura relevante

```txt
src/
  app/
    page.tsx
    calculator/page.tsx
    results/page.tsx
    pricing/page.tsx
    contact/page.tsx
    about/page.tsx
    api/contact/route.ts
  components/
    EstimateCalculator.tsx
    EstimateBreakdownChart.tsx
    ResultActions.tsx
    ContactForm.tsx
  data/
    projectTypes.ts
  lib/
    calculateEstimate.ts
    estimateParams.ts
    pdfGenerator.ts
  types/
    html2pdf.d.ts
```

## Requisitos

- Node.js 18+
- npm 9+

## Instalacion

```bash
git clone https://github.com/johanseb15/m2-web-agency.git
cd m2-web-agency
npm install
```

## Desarrollo

```bash
npm run dev
```

Abrir en:
- `http://localhost:3000`

## Build de produccion

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev`: servidor de desarrollo
- `npm run build`: compilacion de produccion + typecheck/lint
- `npm run start`: ejecutar build en produccion
- `npm run lint`: lint

## Notas tecnicas

- Se agrego `suppressHydrationWarning` en `<body>` para tolerar extensiones del navegador que inyectan atributos (ej. `cz-shortcut-listen`) y evitar warnings falsos de hidratacion.
- Si aparece `EPERM` en `.next/trace`, cerrar el proceso `dev` antes de correr `npm run build`.

## Commits de integracion

- `361a858` feat: unify agency site and project calculator in one Next.js app
- `74ba941` feat: add step-by-step estimator flow, results chart, and PDF export
- `7dfd45f` style: enhance unified UX with animated background and glass UI

## Roadmap corto

- Persistir estimaciones en DB
- Envio de PDF por email
- Dashboard de leads y cotizaciones
- Tests E2E de flujo completo

## Licencia

MIT
