export default (neo) => {
  const preview = {
    id: neo.id,
    name: neo.name,
    url: neo.nasa_jpl_url,

    magnitude: neo.absolute_magnitude_h,
    hazardous: neo.is_potentially_hazardous_asteroid,
    sentry: neo.is_sentry_object,
    orbiting: neo.close_approach_data.orbiting_body,

    diameter: {
      kilometers: {
        min: neo.estimated_diameter.kilometers.estimated_diameter_min,
        max: neo.estimated_diameter.kilometers.estimated_diameter_max
      },
      meters: {
        min: neo.estimated_diameter.meters.estimated_diameter_min,
        max: neo.estimated_diameter.meters.estimated_diameter_max
      },
      miles: {
        min: neo.estimated_diameter.miles.estimated_diameter_min,
        max: neo.estimated_diameter.miles.estimated_diameter_max
      },
      feet: {
        min: neo.estimated_diameter.feet.estimated_diameter_min,
        max: neo.estimated_diameter.feet.estimated_diameter_max
      }
    }
  };

  const details = {

  };

  return [preview, details];
};
