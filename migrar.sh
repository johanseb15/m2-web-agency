#!/bin/bash

echo "🚀 Iniciando migración de archivos desde CalculadoraProyectos..."

# Crear carpetas destino si no existen
mkdir -p src/components src/hooks src/data public/assets

# Validar que existe el directorio fuente
if [ ! -d "CalculadoraProyectos" ]; then
  echo "❌ Error: Directorio CalculadoraProyectos no encontrado"
  exit 1
fi

# Función para mover archivo si existe
mover_si_existe() {
  origen="$1"
  destino="$2"
  if [ -f "$origen" ]; then
    mv "$origen" "$destino"
    echo "✅ Movido: $origen → $destino"
  else
    echo "⚠️  No encontrado: $origen"
  fi
}

# --- COMPONENTES VISUALES ---
echo -e "\n📦 Componentes visuales:"
mover_si_existe CalculadoraProyectos/src/components/CalculatorForm.tsx src/components/
mover_si_existe CalculadoraProyectos/src/components/QuoteView.tsx src/components/QuotePreview.tsx
mover_si_existe CalculadoraProyectos/src/components/SloganGenerator.tsx src/components/
mover_si_existe CalculadoraProyectos/src/components/ContactForm.tsx src/components/

# --- HOOKS ---
echo -e "\n🧩 Hooks:"
mover_si_existe CalculadoraProyectos/src/hooks/useSlogan.ts src/hooks/
mover_si_existe CalculadoraProyectos/src/hooks/useEstimate.ts src/hooks/
mover_si_existe CalculadoraProyectos/src/hooks/useLead.ts src/hooks/

# --- DATOS ESTÁTICOS ---
echo -e "\n📁 Datos estáticos:"
if [ -d "CalculadoraProyectos/public/assets" ] && [ "$(ls -A CalculadoraProyectos/public/assets)" ]; then
  cp -r CalculadoraProyectos/public/assets/* public/assets/ 2>/dev/null && \
  rm -rf CalculadoraProyectos/public/assets/* && \
  echo "✅ Assets movidos a public/assets/"
elif [ -d "CalculadoraProyectos/public/assets" ]; then
  echo "⚠️  Carpeta assets está vacía"
else
  echo "⚠️  Carpeta assets no encontrada"
fi
if [ -d CalculadoraProyectos/public/assets ]; then
  mv CalculadoraProyectos/public/assets/* public/assets/
  echo "✅ Assets movidos a public/assets/"
else
  echo "⚠️  Carpeta assets no encontrada"
fi

# --- ACTUALIZACIÓN DE IMPORTS ---
echo -e "\n🔧 Actualizando imports relativos a alias '@/':"
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i.bak 's|\.\./|@/|g' {} \; && \
find src -type f -name "*.bak" -delete
echo "✅ Imports actualizados"

echo -e "\n✅ Migración completa."
