"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({ icon, label, selected, onClick }: OptionCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={clsx(
        "cursor-pointer p-4 rounded-xl border transition-colors text-center",
        selected
          ? "border-neonGreen bg-darkCard text-white shadow-neonGreen"
          : "border-darkBorder bg-darkBg text-gray-300"
      )}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-md font-medium">{label}</p>
    </motion.div>
  );
}