import React, { useState } from 'react';

import * as S from './styles';
import { Title } from '../../../generalStyles';
import Status from '../../status/status';

import useRequest from '../../../hooks/request';

const Neo = ({ object }) => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

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
          <p>{object.magnitude}</p>
        </S.NeoSubDataInfo>
        <S.NeoSubDataInfo>
          <p>hazardous</p>
          <S.NeoBoolean bool={object.hazardous}>{String(object.hazardous)}</S.NeoBoolean>
        </S.NeoSubDataInfo>
        <S.NeoSubDataInfo>
          <p>sentry</p>
          <S.NeoBoolean bool={object.sentry}>{String(object.sentry)}</S.NeoBoolean>
        </S.NeoSubDataInfo>
      </S.NeoSubData>
      <S.NeoTable>
        <caption>Estimated diameter</caption>
        <thead>
          <tr>
            <th>unit</th>
            <th>min</th>
            <th>max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kilometers</td>
            <td>{Number(object.diameter.kilometers.min).toFixed(2)} </td>
            <td>{Number(object.diameter.kilometers.max).toFixed(2)} </td>
          </tr>
          <tr>
            <td>meters</td>
            <td>{Number(object.diameter.meters.min).toFixed(2)} </td>
            <td>{Number(object.diameter.meters.max).toFixed(2)} </td>
          </tr>
          <tr>
            <td>miles</td>
            <td>{Number(object.diameter.miles.min).toFixed(2)} </td>
            <td>{Number(object.diameter.miles.max).toFixed(2)} </td>
          </tr>
          <tr>
            <td>feet</td>
            <td>{Number(object.diameter.feet.min).toFixed(2)} </td>
            <td>{Number(object.diameter.feet.max).toFixed(2)} </td>
          </tr>
        </tbody>
      </S.NeoTable>

      <div>
        {/* details will be fetched upon View Details button click */}
        <Status loading={loading} error={error} />
      </div>

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
    </S.NeoContainer>
  );
};

export default Neo;
