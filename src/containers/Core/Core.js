import React, { useState } from 'react';
import Search from '../../components/search/search';
import NeoList from '../../components/NeoList/NeoList';
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

  const nearEarthObjects = data?.near_earth_objects;
  const neoList = nearEarthObjects && 
    Object
    .keys(nearEarthObjects)
    .map(key => 
      (<NeoList 
          key={key} 
          title={key}
          list={nearEarthObjects[key]} />));

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
      {neoList}
    </div>
  );
};

export default Core;
