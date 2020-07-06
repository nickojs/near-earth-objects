/* eslint-disable camelcase */
import React, { useState } from 'react';
import Search from '../../components/search/search';
import NeoList from '../../components/neoList/neoList';
import Status from '../../components/UI/status/status';
import * as S from './styles';

import useRequest from '../../hooks/request';

const Core = () => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  const optionsHandler = (query) => {
    const values = {
      method: 'GET',
      url: `https://api.nasa.gov/neo/rest/v1/${query}&api_key=${process.env.REACT_APP_API_KEY}`
    };
    setOptions(values);
  };

  const nearEarthObjects = data?.near_earth_objects;
  const neoList = nearEarthObjects
    && Object
      .keys(nearEarthObjects)
      .sort()
      .map((key) => (
        <NeoList
          key={key}
          title={key}
          list={nearEarthObjects[key]}
        />
      ));

  return (
    <>
      <Search setQuery={optionsHandler} />
      <S.Results>
        {neoList}
      </S.Results>
      <Status loading={loading} error={error} />
    </>
  );
};

export default Core;
