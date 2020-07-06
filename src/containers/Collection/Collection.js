import React from 'react';
import NeoList from '../../components/neoList/neoList';
import { ExternalTitle } from '../../generalStyles';

const Collection = () => {
  const title = 'my collection';

  return (
    <div>
      <ExternalTitle>Collections</ExternalTitle>
      <NeoList title={title} list={[]} />
    </div>
  );
};

export default Collection;
