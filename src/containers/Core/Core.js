import React, { useState } from 'react';
import Search from '../../components/search/search';
import Loading from '../../components/loading/loading';
import Dialog from '../../components/dialog/dialog';

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
      {loading && (
        <Dialog>
          <p>loading...</p>
          <Loading />
        </Dialog>
      )}
      {error && (
        <Dialog type="danger">
          <p>Oops, something went wrong!</p>
          <br />
          <p>{error.error.code}</p>
        </Dialog>
      )}

    </div>
  );
};

export default Core;
