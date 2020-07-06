import React from 'react';
import NeoList from '../../components/neoList/neoList';

const Collection = () => {
  const title = 'my collection';

  return (
    <div>
      <h1>Collections</h1>
      <NeoList title={title} list={[]} />
    </div>
  );
};

export default Collection;
