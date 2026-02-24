"use client";

import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  base: number;
  pages: number;
  features: number;
};

export default function EstimateBreakdownChart({ base, pages, features }: Props) {
  const data: ChartData<"doughnut"> = {
    labels: ["Base", "Paginas", "Extras"],
    datasets: [
      {
        data: [base, pages, features],
        backgroundColor: ["#39FF14", "#00d4ff", "#ff0099"],
        borderColor: "#1c1c1e",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
