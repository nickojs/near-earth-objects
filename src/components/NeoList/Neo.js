import React, { useState } from 'react';
import { Title } from '../../generalStyles';
import * as S from './styles';

const Neo = ({ object }) => {
  const [toggle, setToggle] = useState(false);

  const previewHandler = () => setToggle(!toggle);

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
        onClick={previewHandler}
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
