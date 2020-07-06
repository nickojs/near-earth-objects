import React from 'react';
import { useSelector } from 'react-redux';
import Neo from '../../components/neoList/neo/neo';
import { Title, Container } from '../../generalStyles';
import * as S from './styles';

const Collection = () => {
  const { collection } = useSelector((state) => state);

  return (
    <Container>
      <Title>Collections</Title>
      <S.CollectionsContainer>
        {collection.map((each) => (
          <Neo key={each.id} object={each} mode="collection" />
        ))}
      </S.CollectionsContainer>
    </Container>
  );
};

export default Collection;
