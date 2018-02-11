import React, { Fragment } from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h1`
  text-align: center;
  padding: 15px;
  font-size: 20px;
`;

const SectionHeader = ({ text }) => (
  <Fragment>
    <SectionTitle>{text}</SectionTitle>
  </Fragment>
);

export default SectionHeader;
