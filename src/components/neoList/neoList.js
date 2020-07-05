import React from 'react';
import Neo from './neo/neo';
import { Title, Container } from '../../generalStyles';
import * as S from './styles';
import example from './neo/example.json';
import { preview } from '../../helpers/NEOparser';

const NeoList = ({ title, list }) => {
  // 'NEO' stands for 'Near Earth Objects'
  // 'list' is a set of NEOs for a given date, i.e:

  const neos = example.map((each) => {
    const parsedObj = preview(each);
    return <Neo key={each.id} object={parsedObj} />;
  });

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
