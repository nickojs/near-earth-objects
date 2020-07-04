import React from 'react';
import { Title } from '../../generalStyles';
import * as S from './styles';

const Neo = ({ object }) => {
  const a = 1;

  return (
    <S.NeoContainer>
      <Title href={object.nasa_jpl_url}>
        {object.name} || {object.id}
      </Title>
      <hr />
      <p>magnitude: {object.absolute_magnitude_h}</p>
      <p>Is Hazardous: {object.is_potentially_hazardous_asteroid.toString()}</p>
      <p>Is Sentry: {object.is_sentry_object.toString()}</p>
      <hr />
      <p>Estimated Diameter (in KM):
        Min: {object.estimated_diameter.kilometers.estimated_diameter_min}
        Max: {object.estimated_diameter.kilometers.estimated_diameter_max}
      </p>
      <hr />
      <p>Close approach data: {object.close_approach_data[0].close_approach_date_full} </p>
      <p>Velocity: {object.close_approach_data[0].relative_velocity.kilometers_per_second} KM/s </p>
      <p>Miss distance: {object.close_approach_data[0].miss_distance.kilometers} KMs </p>
      <p>Orbiting body: {object.close_approach_data[0].orbiting_body} </p>
    </S.NeoContainer>
  );
};

export default Neo;
