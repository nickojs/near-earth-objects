import React from 'react';

const Neo = ({ object }) => {
  console.log(object);

  return (
    <div>
      <p>a</p>
      <a href={object.nasa_jpl_url}>
        {object.name} || {object.id}
      </a>
      <hr />
      <p>Magnetude: {object.absolute_magnitude_h}</p>
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
    </div>
  );
};

export default Neo;
