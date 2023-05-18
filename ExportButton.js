import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ data }) => {
  const csvData = data.map((item) => ({
    Word: item.word,
    Frequency: item.frequency,
  }));

  return (
    <CSVLink data={csvData} filename={'word_frequency.csv'}>
      Export
    </CSVLink>
  );
};

export default ExportButton;
