import React, { useState, useEffect } from 'react';
import { details as detailsParser } from '../../../helpers/NEOparser';

const Details = ({ data }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (data) {
      const parsedData = detailsParser(data);
      setDetails(parsedData);
    }
  }, [data]);

  return (
    <div>
      details
    </div>
  );
};

export default Details;
