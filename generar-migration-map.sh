#!/bin/bash

echo "🗺️ Generando nuevo migration-map.txt..."

# Archivo de salida
MAP="migration-map.txt"
echo "🔍 Explorando estructura migrada en src/..." > $MAP

# Componentes visuales
echo -e "\n📦 Componentes visuales (.tsx):" >> $MAP
find src/components -type f -name "*.tsx" | grep -iE "form|view|card|section|hero|quote|contact|slogan|navbar|debug" >> $MAP

# Hooks personalizados
echo -e "\n🧩 Hooks (.ts):" >> $MAP
find src/hooks -type f -name "*.ts" >> $MAP

# Datos estáticos
echo -e "\n📁 Datos estáticos (.ts):" >> $MAP
find src/data -type f -name "*.ts" >> $MAP

# Estilos
echo -e "\n🎨 Estilos (.css):" >> $MAP
find src -type f -name "*.css" >> $MAP

# Assets (opcional)
echo -e "\n🖼️ Archivos en public/assets/:" >> $MAP
find public/assets -type f >> $MAP

echo "✅ Archivo actualizado: $MAP"
