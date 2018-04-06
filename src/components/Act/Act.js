import React, { Fragment } from 'react';
import styled from 'styled-components';

const ActText = styled.h3`
  color: white;
`;

const Act = ({ number, children }) =>
  (children && children.length > 0 ? (
    <Fragment>
      <ActText>Act {number}</ActText>
      {children}
    </Fragment>
  ) : null);

export default Act;
