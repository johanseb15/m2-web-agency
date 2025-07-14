
"use client";
import { useState } from 'react';

// Página principal con calculadora de proyectos
export default function Page() {
  const [projectType, setProjectType] = useState<string>('');
  const [complexity, setComplexity] = useState<number>(3);
  const [timeline, setTimeline] = useState<number>(3);
  const [showResult, setShowResult] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);

  const calculateCost = () => {
    let baseCost = 0;
    switch (projectType) {
      case 'landing':
        baseCost = 800;
        break;
      case 'ecommerce':
        baseCost = 2500;
        break;
      case 'webapp':
        baseCost = 4000;
        break;
      case 'corporate':
        baseCost = 1500;
        break;
      default:
        baseCost = 1000;
    }
    // Multiplicador de complejidad (1-5, base 3)
    const complexityMultiplier = complexity / 3;
    // Multiplicador de timeline (1-12, menos semanas = más caro)
    let timelineMultiplier = 1;
    if (timeline <= 2) timelineMultiplier = 1.5;
    else if (timeline <= 4) timelineMultiplier = 1.2;
    // Calcular total
    const total = Math.round(baseCost * (1 + complexityMultiplier) * timelineMultiplier);
    setEstimatedCost(total);
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">
            <span className="text-emerald-400">M</span>
            <span className="text-xs align-super text-emerald-400">2</span>
          </div>
        </div>
        
        <nav className="flex gap-8 text-lg">
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">Calculator</a>
          <a href="#generator" className="hover:text-emerald-400 transition-colors">Generator</a>
          <a href="#automation" className="hover:text-emerald-400 transition-colors">Automation</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build your website with<br />
            <span className="text-emerald-400">the power of AI.</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Use our intuitive calculator to estimate web development costs
            and instantly generate landing pages tailored to your needs.
          </p>
          
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get started
          </button>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Project Calculator */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Project Calculator</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Choose an option</option>
                    <option value="landing">Landing Page</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Web App</option>
                    <option value="corporate">Corporate Site</option>
                  </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Complexity (1-5)</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={complexity}
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline (weeks)</label>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={timeline}
                    onChange={(e) => setTimeline(Number(e.target.value))}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                onClick={calculateCost}
                disabled={!projectType}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-black font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Calculate
              </button>

              {showResult && (
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      ${estimatedCost.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-300">
                      Estimated project cost
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Estimate costs</h3>
              <p className="text-gray-300 mb-4">
                Quickly calculate<br />
                your project expenses
              </p>
            </div>
          </div>

          {/* Ready to bring your ideas to life */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Ready to bring<br />
                your ideas to life?
              </h2>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Launch your<br />
                online presence
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get online
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}