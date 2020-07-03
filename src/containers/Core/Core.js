import React, { useState, useEffect } from 'react';
import Search from '../../components/search/search';
import useRequest from '../../hooks/request';

const Core = () => {
  const [options, setOptions] = useState(null);
  const { data, loading, error } = useRequest(options);

  const optionsHandler = (query) => {
    const values = {
      method: 'GET',
      url: `https://api.nasa.gov/neo/rest/v1/${query}&api_key=API_KEY`
    };
    setOptions(values);
  };

  useEffect(() => {
    // demo to check for request values
    console.log('data: ', data);
    console.log('loading: ', loading);
    console.log('error: ', error);
  }, [data, loading, error]);

  return (
    <div>
      <Search setQuery={optionsHandler} />
    </div>
  );
};

export default Core;
