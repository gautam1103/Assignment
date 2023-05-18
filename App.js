import React, { useState } from 'react';
import SubmitButton from './components/SubmitButton';
import HistogramChart from './components/HistogramChart';
import ExportButton from './components/ExportButton';
import './styles/App.css';

const App = () => {
  const [wordData, setWordData] = useState([]);

  const handleDataFetch = (data) => {
    const wordMap = {};
    const words = data
      .toLowerCase()
      .match(/\b(\w+)\b/g)
      .map((word) => word.trim());

    words.forEach((word) => {
      wordMap[word] = wordMap[word] ? wordMap[word] + 1 : 1;
    });

    const sortedWords = Object.entries(wordMap).sort(
      ([, freqA], [, freqB]) => freqB - freqA
    );

    const top20Words = sortedWords.slice(0, 20).map(([word, frequency]) => ({
      word,
      frequency,
    }));

    setWordData(top20Words);
  };

  return (
    <div className="container">
      <SubmitButton onDataFetch={handleDataFetch} />
      {wordData.length > 0 && (
        <>
          <div className="chart-container">
            <HistogramChart data={wordData} />
          </div>
          <ExportButton data={wordData} />
        </>
      )}
    </div>
  );
};

export default App;
