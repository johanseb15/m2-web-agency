#!/bin/bash

echo "🚀 Iniciando migración de archivos desde CalculadoraProyectos..."

# Crear carpetas destino si no existen
mkdir -p src/components src/hooks src/data public/assets

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
mover_si_existe CalculadoraProyectos/src/data/projectTypes.ts src/data/
mover_si_existe CalculadoraProyectos/src/data/features.ts src/data/
mover_si_existe CalculadoraProyectos/src/data/timelines.ts src/data/

# --- ESTILOS / ASSETS ---
echo -e "\n🎨 Estilos / Assets:"
if [ -d CalculadoraProyectos/public/assets ]; then
  mv CalculadoraProyectos/public/assets/* public/assets/
  echo "✅ Assets movidos a public/assets/"
else
  echo "⚠️  Carpeta assets no encontrada"
fi

# --- ACTUALIZACIÓN DE IMPORTS ---
echo -e "\n🔧 Actualizando imports relativos a alias '@/':"

# Detect OS for portable sed -i usage
if [[ "$(uname)" == "Darwin" ]]; then
  # macOS (BSD sed)
  find src -type f \( -name "*.ts" -o -name "*.tsx" \) \
    -exec sed -E -i '' 's|^(\.\./)+|@/|' {} \;
else
  # Linux (GNU sed)
  find src -type f \( -name "*.ts" -o -name "*.tsx" \) \
    -exec sed -E -i 's|^(\.\./)+|@/|' {} \;
fi
echo "✅ Imports actualizados"

echo -e "\n✅ Migración completa."
