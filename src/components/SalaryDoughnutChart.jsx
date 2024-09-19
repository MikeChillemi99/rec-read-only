import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SalaryDoughnutChart() {
  const data = {
    // User names as labels
    labels: ['Jean', 'Anne', 'Pierre'],
    datasets: [
      {
        label: 'Salary Distribution',
        // User salaries as data
        data: [3500, 4200, 5300],
        // Color for every users
        backgroundColor: [
          '#9966FF',
          '#4BC0C0',
          '#FF9F40',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
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

export default SalaryDoughnutChart;