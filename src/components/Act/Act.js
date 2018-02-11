import React, { Fragment } from 'react';

const Act = ({ number, children }) =>
  (children && children.length > 0 ? (
    <Fragment>
      <h2>Act {number}</h2>
      {children}
    </Fragment>
  ) : null);

export default Act;
