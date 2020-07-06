/* eslint-disable camelcase */
import React from 'react';
import Dialog from '../dialog/dialog';
import Loading from '../loading/loading';

const Status = ({ loading, error }) => {
  const loadingComponent = loading && (
    <Dialog>
      <p>loading...</p>
      <Loading />
    </Dialog>
  );

  const errorComponent = error && (
    <Dialog type="danger">
      <p>Oops, something went wrong!</p>
      <br />
      <p>{error?.error_message}</p>
    </Dialog>
  );

  return (
    <>
      {loadingComponent}
      {errorComponent}
    </>
  );
};

export default Status;
