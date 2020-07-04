import React from 'react';
import Neo from './Neo/Neo';
import { Title, Container } from '../../generalStyles';
import * as S from './styles';
import example from './Neo/example.json';

const NeoList = ({ title, list }) => {
  // 'NEO' stands for 'Near Earth Objects'
  // 'list' is a set of NEOs for a given date, i.e:
  const neos = example.map((each) => <Neo key={each.id} object={each} />);

  return (
    <Container>
      <Title>{title}</Title>
      <S.NeoListContainer>
        {neos}
      </S.NeoListContainer>
    </Container>
  );
};

export default NeoList;
