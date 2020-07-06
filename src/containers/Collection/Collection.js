import React from 'react';
import { useSelector } from 'react-redux';
import NeoList from '../../components/neoList/neoList';
import { ExternalTitle } from '../../generalStyles';

const Collection = () => {
  const { collection } = useSelector((state) => state);
  const title = 'my collection';

  return (
    <div>
      <ExternalTitle>Collections</ExternalTitle>
      <NeoList title={title} list={collection} />
    </div>
  );
};

export default Collection;
