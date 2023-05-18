import React from 'react';
import { Chart } from 'react-google-charts';

const HistogramChart = ({ data }) => {
  const chartData = [
    ['Word', 'Frequency'],
    ...data.map(({ word, frequency }) => [word, frequency]),
  ];

  return (
    <Chart
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: 'Word Frequency',
        chartArea: { width: '70%' },
        hAxis: { title: 'Word', minValue: 0 },
        vAxis: { title: 'Frequency', minValue: 0 },
      }}
    />
  );
};

export default HistogramChart;
