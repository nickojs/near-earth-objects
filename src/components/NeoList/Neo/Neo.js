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
          <p>{object.hazardous}</p>
        </S.NeoSubDataInfo>
        <S.NeoSubDataInfo>
          <p>sentry</p>
          <p>{object.sentry}</p>
        </S.NeoSubDataInfo>
      </S.NeoSubData>
      <table>
        <thead>
          <tr>
            <th>Estimated diameter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>kilometers</td>
            <td>Min: {object.diameter.kilometers.min} </td>
            <td>Max: {object.diameter.kilometers.max} </td>
          </tr>
          <tr>
            <td>meters</td>
            <td>Min: {object.diameter.meters.min} </td>
            <td>Max: {object.diameter.meters.max} </td>
          </tr>
          <tr>
            <td>miles</td>
            <td>Min: {object.diameter.miles.min} </td>
            <td>Max: {object.diameter.miles.max} </td>
          </tr>
          <tr>
            <td>feet</td>
            <td>Min: {object.diameter.feet.min} </td>
            <td>Max: {object.diameter.feet.max} </td>
          </tr>
        </tbody>
      </table>
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
      <div>
        {/* details will be fetched upon View Details button click */}
        <Status loading={loading} error={error} />
      </div>
    </S.NeoContainer>
  );
};

export default Neo;
