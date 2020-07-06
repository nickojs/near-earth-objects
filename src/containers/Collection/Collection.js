import React from 'react';
import { useSelector } from 'react-redux';
import Neo from '../../components/neoList/neo/neo';
import { ExternalTitle, Container } from '../../generalStyles';

const Collection = () => {
  const { collection } = useSelector((state) => state);
  const title = 'my collection';

  return (
    <div>
      <ExternalTitle>Collections</ExternalTitle>
      <Container>
        {collection.map((each) => <Neo object={each} />)}
      </Container>
    </div>
  );
};

export default Collection;
