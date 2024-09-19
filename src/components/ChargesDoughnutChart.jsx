import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChargesDoughnutChart() {
  const data = {
    // Charge names as labels
    labels: ['Loyer', 'Courses', 'Voiture', 'Internet', 'Vacances'],
    datasets: [
      {
        label: 'Salary Distribution',
        // Charge cost as data
        data: [1700, 450, 500, 100, 1200],
        // Color for every charges
        backgroundColor: [
          '#36A2EB',
          '#FFCE56',
          '#6dff40',
          '#fd4bc2',
          '#ff3939',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let total = context.dataset.data.reduce((sum, value) => sum + value, 0);
            let percentage = ((context.raw / total) * 100).toFixed(2);
            return `${context.label}: ${context.raw}.- (${percentage}%)`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default ChargesDoughnutChart;