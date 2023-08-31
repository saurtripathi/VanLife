import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
    },
  },
}

const labels = ['Ju', 'Au', 'Se', 'Oc', 'No', 'De']

export const data = {
  labels,
  datasets: [
    {
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      data: labels.map(() => faker.datatype.number({ min: 1, max:6  })),
      backgroundColor: '#FFEAD0',
    }
  ]
}

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
