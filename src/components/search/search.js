import React, { useState } from 'react';
import { Container, Title, Button } from '../../generalStyles';
import * as S from './styles';

const Search = () => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  return (
    <Container>
      <Title>Search parameters</Title>
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
        <Button
          type="button"
          disabled={initialDate.length <= 0 || finalDate.length <= 0}
        >Search
        </Button>

      </S.Inputs>
    </Container>
  );
};

export default Search;
