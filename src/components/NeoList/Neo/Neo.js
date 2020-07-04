import React, { useState } from 'react';
import { Title } from '../../../generalStyles';
import * as S from './styles';
import useRequest from '../../../hooks/request';

const Neo = ({ object }) => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);

  const requestDetails = () => {
    setOptions({
      method: 'GET',
      url: `https://api.nasa.gov/neo/rest/v1/neo/${object.id}?api_key=${process.env.REACT_APP_API_KEY}`
    });
  };

  return (
    <S.NeoContainer>
      <Title>
        {object.name} || {object.id}
        {/* <a href={object.nasa_jpl_url}>
        </a> */}
      </Title>
      <S.NeoSubData>
        <S.NeoSubDataInfo>
          <p>magnitude</p>
          <p>{object.absolute_magnitude_h}</p>
        </S.NeoSubDataInfo>
        <S.NeoSubDataInfo>
          <p>hazardous</p>
          <p>{object.is_potentially_hazardous_asteroid.toString()}</p>
        </S.NeoSubDataInfo>
        <S.NeoSubDataInfo>
          <p>sentry</p>
          <p>{object.is_sentry_object.toString()}</p>
        </S.NeoSubDataInfo>
      </S.NeoSubData>
      <S.NeoBtn
        type="button"
        onClick={requestDetails}
      >
        View details
      </S.NeoBtn>
      <S.NeoBtn
        type="button"
        onClick={() => console.log('saved :', object)}
      >
        Save to collection
      </S.NeoBtn>
      {/* details will be fetched upon View Details button click */}
    </S.NeoContainer>
  );
};

export default Neo;
