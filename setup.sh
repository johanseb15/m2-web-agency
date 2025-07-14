#!/bin/bash
set -e  # Exit on any error

# Create missing pages
mkdir -p src/app/{calculator,about,pricing,contact}
touch src/app/calculator/page.tsx
touch src/app/about/page.tsx
touch src/app/pricing/page.tsx
touch src/app/contact/page.tsx

# Remove unused components
rm -f src/components/ProjectCalculator.tsx
rm -f src/components/CallToAction.tsx

# Move Contact.tsx to ContactForm.tsx if it's just a form
if [ -f "src/components/Contact.tsx" ]; then
  mv src/components/Contact.tsx src/components/ContactForm.tsx
fi

# Create lib with utilities and modular logic
mkdir -p src/lib
touch src/lib/{calculatePrice.ts,validateLead.ts,generatePDF.ts,embedHelpers.ts}

# Create utils for general helpers
mkdir -p src/utils
touch src/utils/{formatCurrency.ts,leadScoring.ts,fetchClients.ts}

# Create testimonials data directory
mkdir -p src/data
touch src/data/testimonials.ts

# Confirm base styles
mkdir -p src/styles
touch src/styles/{globals.css,layout.css}

echo "✅ Optimized structure and files prepared."