import React from 'react';
import axios from 'axios';

const SubmitButton = ({ onDataFetch }) => {
  const handleButtonClick = async () => {
    try {
      const response = await axios.get(
        'https://www.terriblytinytales.com/test.txt'
      );
      onDataFetch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleButtonClick} className="submit-button">
      Submit
    </button>
  );
};

export default SubmitButton;
