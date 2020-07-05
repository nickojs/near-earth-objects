import React, { useState } from 'react';

import * as S from './styles';
import { Title } from '../../../generalStyles';
import Status from '../../status/status';
import Details from './details';

import useRequest from '../../../hooks/request';

const Neo = ({ object }) => {
  const [options, setOptions] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  const showDetails = () => {
    if (options) { return setToggle(!toggle); }

    if (!options) {
      setOptions({
        method: 'GET',
        url: `https://api.nasa.gov/neo/rest/v1/neo/${object.id}?api_key=${process.env.REACT_APP_API_KEY}`
      });
      setToggle(!toggle);
    }
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
      <S.DetailsContainer>
        <S.NeoSmallTitle>estimated diameter</S.NeoSmallTitle>
        {Object.keys(object.diameter).map((each) => (
          <S.NeoSmallText key={each}>
            {Number(object.diameter[each].min).toFixed(2)}
            {' '}~{' '}
            {Number(object.diameter[each].max).toFixed(2)}
            {' '}{each}
          </S.NeoSmallText>
        ))}
      </S.DetailsContainer>

      {data && <Details data={data} toggle={toggle} />}
      <Status loading={loading} error={error} />

      <S.NeoBtn
        type="button"
        onClick={showDetails}
      >
        {toggle ? 'Show' : 'Hide' } details
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
