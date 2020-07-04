import React from 'react';
import Neo from './Neo';

const NeoList = ({ title, list }) => {
  // 'NEO' stands for 'Near Earth Objects'
  // 'list' is a set of NEOs for a given date, i.e:
  const neos = list.map((each) => <Neo key={each.id} object={each} />);

  return (
    <div>
      <h1>{title}</h1>
      {neos}
    </div>
  );
};

export default NeoList;
