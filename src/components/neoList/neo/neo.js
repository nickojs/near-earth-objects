import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import {
  Title, Anchor, InlineButton, SmallText, SmallTitle
} from '../../../generalStyles';
import Details from './details';
import Status from '../../UI/status/status';
import Notification from '../../UI/notification/notification';

import useRequest from '../../../hooks/request';

const Neo = ({ object, mode }) => {
  const [toggle, setToggle] = useState(true);
  const [remove, setRemove] = useState(false);
  const [notification, setNotification] = useState(null);

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
      setNotification('Added object to collection');
    }
    setRemove(true);
  };

  const removeFromCollection = () => {
    const filterCollection = collection.filter((obj) => obj.id !== object.id);
    dispatch({ type: 'UPDATE', collection: filterCollection });
    setNotification('Removed object from collection');
    setRemove(false);
  };

  useEffect(() => {
    if (mode === 'collection') { setRemove(true); }
  }, [mode]);

  const buttons = (
    <InlineButton
      type="button"
      onClick={remove ? removeFromCollection : addToCollection}
    > {remove ? 'Remove from' : 'Save to'} collection
    </InlineButton>
  );

  return (
    <S.NeoContainer>
      <Notification content={notification} />
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
        <SmallTitle>estimated diameter</SmallTitle>

        {Object.keys(object.diameter).map((each) => (
          <SmallText key={each}>
            {Number(object.diameter[each].min).toFixed(2)}
            {' '}~{' '}
            {Number(object.diameter[each].max).toFixed(2)}
            {' '}{each}
          </SmallText>
        ))}

      </S.DetailsContainer>

      {data && <Details data={data} toggle={toggle} />}
      <Status loading={loading} error={error} />

      <InlineButton
        type="button"
        onClick={showDetails}
      > {toggle ? 'Show' : 'Hide' } details
      </InlineButton>

      {buttons}
    </S.NeoContainer>
  );
};

export default Neo;
