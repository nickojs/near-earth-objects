import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { Title, Anchor } from '../../../generalStyles';
import Status from '../../status/status';
import Details from './details';

import useRequest from '../../../hooks/request';

const Neo = ({ object, mode }) => {
  const [toggle, setToggle] = useState(true);
  const [remove, setRemove] = useState(false);
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  const { collection } = useSelector((state) => state);
  const dispatch = useDispatch();

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

  const addToCollection = () => {
    const findEqual = collection.find((obj) => obj.id === object.id);
    if (!findEqual) {
      dispatch({ type: 'ADD', object });
    }
    setRemove(true);
  };

  const removeFromCollection = () => {
    const filterCollection = collection.filter((obj) => obj.id !== object.id);
    dispatch({ type: 'UPDATE', collection: filterCollection });
    setRemove(false);
  };

  const buttons = mode === 'collection' ? null : (
    <S.NeoBtn
      type="button"
      onClick={remove ? removeFromCollection : addToCollection}
    > {remove ? 'Remove from' : 'Save to'} collection
    </S.NeoBtn>
  );

  return (
    <S.NeoContainer>
      <Title>
        <Anchor href={object.url} target="_blank">
          {object.name} || {object.id}
        </Anchor>
      </Title>
      <S.NeoSubData>

        {Object.keys(object.info).map((info) => (
          <S.NeoSubDataInfo key={info}>
            <p>{info}</p>
            <S.NeoBoolean bool={object.info[info]}>
              {String(object.info[info])}
            </S.NeoBoolean>
          </S.NeoSubDataInfo>
        ))}

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
      > {toggle ? 'Show' : 'Hide' } details
      </S.NeoBtn>

      {buttons}
    </S.NeoContainer>
  );
};

export default Neo;
