import React from 'react';
import { useSelector } from 'react-redux';
import Neo from '../../components/neoList/neo/neo';
import { Title, Container, SmallText } from '../../generalStyles';
import * as S from './styles';

const Collection = () => {
  const { collection } = useSelector((state) => state);
  const collectionList = collection.length > 0 ? (
    <S.CollectionsContainer>
      { collection.map((each) => (
        <Neo key={each.id} object={each} mode="collection" />
      ))}
    </S.CollectionsContainer>

  ) : <SmallText>There is nothing to display</SmallText>;

  return (
    <Container>
      <Title>Collections</Title>
      {collectionList}
    </Container>
  );
};

export default Collection;
