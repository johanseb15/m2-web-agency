 Nuevo README.md
# 💡 CalculadoraProyectos

> Estimador inteligente de costos para agencias digitales  
> Producto MVP desarrollado por [M² Web Agency](https://m2.agency)

Una aplicación fullstack que permite calcular presupuestos de desarrollo web de forma conversacional, intuitiva y automatizada. Combina IA, diseño premium y funcionalidad exportable para mejorar la experiencia de cotización.

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green?logo=mongodb)

---

## 🎯 Características Principales

- 🔢 **Cotización Conversacional**: Calculadora con flujo progresivo y lógica de negocio aplicada
- 🎨 **UI Premium**: Estética dark + neón con Framer Motion
- 📄 **Exportación PDF**: Cotizaciones con firma y branding personalizado
- 📊 **Gráfico Donut**: Desglose visual por área técnica
- 📬 **Captura de Leads**: Email + registro en base de datos
- 💾 **Persistencia**: MongoDB con autenticación JWT
- 📈 **Optimizado para Conversión**: CTA doble, testimonios, contador social

---

## 📁 Estructura del Proyecto


CalculadoraProyectos/ ├── src/ │   ├── app/ │   │   ├── calculator/      # Flujo conversacional │   │   ├── results/         # Página de cotización final │   ├── components/          # UI: Hero, Form, ProgressBar, etc. │   ├── lib/                 # Lógica: calculatePrice, pdfGenerator │   ├── data/                # Contenido fijo ├── server/                  # Express + MongoDB │   ├── routes/              # Estimaciones, autenticación │   ├── models/              # Usuario, Cotización │   ├── controllers/         # Lógica de backend └── README.md

---

## 🚀 Instalación

```bash
git clone https://github.com/johanseb15/CalculadoraProyectos.git
cd CalculadoraProyectos


Instalar frontend:
npm install


Instalar backend:
cd server
npm install


Variables de entorno:
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Backend
MONGODB_URI=mongodb://localhost:27017/calculadora
JWT_SECRET=tu_clave_secreta



📦 Scripts
Frontend:
npm run dev         # Desarrollo
npm run build       # Producción


Backend:
npm run dev         # Nodemon
npm run start       # Producción



🧠 Flujo Conversacional
- Usuario interactúa con preguntas tipo proyecto → complejidad → tiempo → integración
- Cada paso usa tarjetas visuales + animaciones
- Resultado incluye desglose técnico + gráfico donut
- Se puede exportar PDF, agenda llamada o enviar email
- Se registra lead si es necesario

📄 Cálculo de Precio
total = base × complejidad × tiempo + backendFee


Desglose:
- UX/UI: 40%
- Frontend: 35%
- Backend: variable según integración
- SEO: 10%

✨ Visual y UX
- Estética: Dark + Neón
- Animaciones: Framer Motion (AnimatePresence, motion.div)
- Accesibilidad: focus-visible, contrastes revisados

📄 Exportación PDF
- Branding M² Agency
- Cotización + desglose
- Firma digital y pie legal
- Usando html2pdf.js

📬 Lead & Email
- Componente EmailInput.tsx permite ingresar correo
- PDF se puede enviar por email y guardar en DB (opcional)

🔮 Futuro SaaS
- Generación automática de landing
- Contratos legales basados en respuestas
- Dashboard con historial, rentabilidad y analytics

🧪 Testing
npm run test             # Unit
npm run test:coverage    # Cobertura



🆘 Soporte
- GitHub: johanseb15
- Web: https://m2.agency
- Email: contacto@m2.agency

📄 Licencia
MIT — ver LICENSE

⭐ Si esta herramienta te sirve o inspira, considerá dejar una estrella en GitHub ✨
