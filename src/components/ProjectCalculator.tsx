import { useProjectCalculator } from "@/hooks/useProjectCalculator";

const ProjectCalculator = () => {
  const {
    projectType, setProjectType,
    complexity, setComplexity,
    timeline, setTimeline,
    estimatedCost, showResult,
    calculateCost,
  } = useProjectCalculator();

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Project Calculator</h2>
      <div className="space-y-6">
        {/* Selects and Inputs */}
        <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="...">...</select>
        {/* Inputs for complexity & timeline */}
        {/* Botón y resultado */}
        <button onClick={calculateCost} className="...">Calculate</button>
        {showResult && (
          <div className="...">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              ${estimatedCost.toLocaleString()}
            </div>
            <div className="text-sm text-gray-300">Estimated project cost</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCalculator;