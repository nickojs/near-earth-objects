import React, { useState, useEffect } from 'react';
import { details as detailsParser } from '../../../helpers/NEOparser';
import * as S from './styles';

const Details = ({ data, toggle }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (data) {
      const parsedData = detailsParser(data);
      setDetails(parsedData);
    }
  }, [data]);

  const closeApproachList = details && (
    <S.CloseApproachList>
      {details.closeApproachData.map((each) => (
        <li key={each.epoch}>
          <S.NeoSmallTitle>{each.date}</S.NeoSmallTitle>
          <p>Velocity: {
            Number(each.velocity.kmSecond).toFixed(4)
            } KM/s ({
            Number(each.velocity.kmHour).toFixed(0)
            } KM/h)
          </p>
          <S.NeoSmallTitle>orbiting body</S.NeoSmallTitle>
          <p>{each.orbiting}</p>
          <S.NeoSmallTitle>miss distance</S.NeoSmallTitle>
          {Object.keys(each.miss).map((m) => (
            <p key={m}>{m}: {Number(each.miss[m]).toFixed(2)}</p>))}
        </li>
      ))}
    </S.CloseApproachList>
  );

  return (
    <S.DetailsContainer toggle={toggle}>
      <S.NeoSmallTitle>close approaches</S.NeoSmallTitle>
      {closeApproachList}
    </S.DetailsContainer>
  );
};

export default Details;
