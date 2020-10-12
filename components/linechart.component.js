import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 30,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: data.color,
        borderColor: data.color,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: data.color,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: data.color,
        pointHoverBorderColor: data.color,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        options: {},
        data: data.data,
      },
    ],
  };
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        {data.name}
      </div>
      <div className="px-4 py-5 sm:p-6">
        <Line height={55} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
