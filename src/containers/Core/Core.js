import React, { useState } from 'react';
import Search from '../../components/search/search';
import useRequest from '../../hooks/request';

const API_KEY = process.env.REACT_APP_API_KEY;

const Core = () => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  const optionsHandler = (query) => {
    const values = {
      method: 'GET',
      url: `https://api.nasa.gov/neo/rest/v1/${query}&api_key=${API_KEY}`
    };
    setOptions(values);
  };

  return (
    <div>
      <Search setQuery={optionsHandler} />
      {loading && <p>loading...</p>}
      {error && <p>error: code: {error.error.code} message: {error.error.code} </p>}
    </div>
  );
};

export default Core;
