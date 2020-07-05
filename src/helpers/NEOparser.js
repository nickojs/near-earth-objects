export const preview = (neo) => ({
  id: neo.id,
  name: neo.name,
  url: neo.nasa_jpl_url,

  magnitude: neo.absolute_magnitude_h,
  hazardous: neo.is_potentially_hazardous_asteroid,
  sentry: neo.is_sentry_object,
  orbiting: neo.close_approach_data[0].orbiting_body,

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
});

const closeApproachParser = (data) => ({
  date: data.close_approach_date_full,
  epoch: data.epoch_date_close_approach,
  velocity: {
    kmSecond: data.relative_velocity.kilometers_per_second,
    kmHour: data.relative_velocity.kilometers_per_hour,
    milesHour: data.relative_velocity.miles_per_hour
  },
  miss: {
    astronomical: data.miss_distance.astronomical,
    lunar: data.miss_distance.lunar,
    kilometers: data.miss_distance.kilometers,
    miles: data.miss_distance.miles
  },
  orbiting: data.orbiting_body
});

const orbitalDataParser = (data) => ({
  general: {
    orbitId: data.orbit_id,
    firstObservation: data.first_observation_date,
    lastObservation: data.last_observation_date,
    dataArc: data.data_arc_in_days
  },
  info: {
    jupiterTisserand: {
      value: data.jupiter_tisserand_invariant,
      unit: null
    },
    eccentricity: {
      value: data.eccentricity,
      unit: null
    },
    majorAxis: {
      value: data.semi_major_axis,
      unit: 'au'
    },
    inclination: {
      value: data.inclination,
      unit: 'deg'
    },
    ascendingNode: {
      value: data.ascending_node_longitude,
      unit: 'deg'
    },
    perihelionArgument: {
      value: data.perihelion_argument,
      unit: 'deg'
    },
    perihelionTime: {
      value: data.perihelion_time,
      unit: 'TDB'
    },
    meanAnomaly: {
      value: data.mean_anomaly,
      unit: 'deg'
    },
    meanMotion: {
      value: data.mean_motion,
      unit: 'deg/d'
    },
    orbitPeriod: {
      value: data.orbital_period,
      unit: 'd'
    },
    equinox: {
      value: data.equinox,
      unit: null
    }
  },
  class: {
    type: data.orbit_class.orbit_class_type,
    range: data.orbit_class.orbit_class_range,
    description: data.orbit_class.orbit_class_description
  }
});

export const details = (neo) => {
  // eslint-disable-next-line camelcase
  const { close_approach_data: CPA, orbital_data: orbital } = neo;
  const parsedCPA = CPA.map((each) => closeApproachParser(each));
  const parsedOrbital = orbitalDataParser(orbital);

  return {
    closeApproachData: parsedCPA,
    orbitalData: parsedOrbital
  };
};
