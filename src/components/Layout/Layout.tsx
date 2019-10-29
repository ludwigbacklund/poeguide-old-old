import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { SearchConnector } from '../Search/SearchConnector';

export const Layout: React.SFC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <SearchConnector />
      {children}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  font-family: Lato;
  height: 100vh;
  width: 100vw;
  min-width: 320px;
  color: rgb(${props => props.theme.darkShades});
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;
