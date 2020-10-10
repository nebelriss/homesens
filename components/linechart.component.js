import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  console.log(data.color);
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
        data: data.data,
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} width={400} height={400} />
    </div>
  );
};

export default LineChart;
