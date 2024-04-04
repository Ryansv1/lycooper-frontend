"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);linke

export default function ChartComponent(
  { className }: { className: string },
  { sensorId }: { sensorId: string }
) {
  function getData(sensorId: string) {
    //Request API
    return {
      //Return data API
      labels: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
      datasets: [
        {
          label: "Temperatura",
          data: [22, 23, 21, 24, 25, 26, 29],
          fill: false,
          backgroundColor: "#000000",
          borderColor: "#000000",
        },
      ],
    };
  }

  return (
    <Line
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        elements: {
          point: {
            pointStyle: "rectRot",
            backgroundColor: "#FFFFFF",
          },
        },
        color: "#000000",
        plugins: {
          colors: {
            enabled: true,
          },
          legend: {
            display: true,
            labels: {
              color: "#000000",
            },
          },
        },
      }}
      data={getData(sensorId)}
      className={className}
    />
  );
}
