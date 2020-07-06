import React, { useState } from 'react';
import { Container, Title, Button } from '../../generalStyles';
import * as S from './styles';

const Search = ({ setQuery }) => {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const queryHandler = () => {
    const query = `feed?start_date=${initialDate}&end_date=${finalDate}`;
    setQuery(query);
  };

  return (
    <Container>
      <Title>Search parameters</Title>
      <S.Inputs>
        <S.InputWrapper>
          <label htmlFor="initialDate">Initial Date</label>
          <input
            type="date"
            name="initialDate"
            defaultValue="2020-07-01"
            onChange={(event) => setInitialDate(event.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="finalDate">Final Date</label>
          <input
            type="date"
            name="finalDate"
            min={initialDate}
            defaultValue="2020-07-01"
            onChange={(event) => setFinalDate(event.target.value)}
          />
        </S.InputWrapper>
        <Button
          type="button"
          onClick={queryHandler}
          // disabled={initialDate.length <= 0 || finalDate.length <= 0}
        >Search
        </Button>

      </S.Inputs>
    </Container>
  );
};

export default Search;
