import React, { useState } from 'react';
import * as S from './styles';

const Search = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  return (
    <S.Container>
      <S.Title>Search parameters</S.Title>
      <S.Inputs>
        <S.InputWrapper>
          <label htmlFor="initialDate">Initial Date</label>
          <input
            type="date"
            name="initialDate"
            onChange={(event) => setInitialDate(event.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="finalDate">Final Date</label>
          <input
            type="date"
            name="finalDate"
            min={initialDate}
            onChange={(event) => setFinalDate(event.target.value)}
          />
        </S.InputWrapper>
        <S.SearchButton
          type="button"
          disabled={initialDate.length <= 0 || finalDate.length <= 0}
        >Search
        </S.SearchButton>

      </S.Inputs>
    </S.Container>
  );
};

export default Search;
