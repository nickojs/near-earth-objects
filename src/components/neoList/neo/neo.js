import React, { useState } from 'react';

import * as S from './styles';
import { Title } from '../../../generalStyles';
import Status from '../../status/status';
import Details from './details';

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
      <S.NeoSmallTitle>estimated diameter</S.NeoSmallTitle>
      <S.NeoTable>
        <tbody>
          {Object.keys(object.diameter).map((each) => (
            <tr>
              <td>{each}</td>
              <td>{Number(object.diameter[each].min).toFixed(2)}</td>
              <td> ~ </td>
              <td>{Number(object.diameter[each].max).toFixed(2)}</td>
            </tr>

          ))}
        </tbody>
      </S.NeoTable>

      {data && <Details data={data} />}
      <Status loading={loading} error={error} />

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
