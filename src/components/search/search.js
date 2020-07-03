import React, { useState } from 'react';
import * as S from './styles';

const Search = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  return (
    <div>
      <h1>Search parameters</h1>
      <input
        type="date"
        name="initialDate"
        onChange={(event) => setInitialDate(event.target.value)}
      />
      <input
        type="date"
        name="endDate"
        min={initialDate}
        onChange={(event) => setFinalDate(event.target.value)}
      />
      <button
        type="button"
        disabled={initialDate.length <= 0 || finalDate.length <= 0}
      >Go
      </button>
    </div>
  );
};

export default Search;
