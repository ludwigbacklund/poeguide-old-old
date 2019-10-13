import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/styling';
import { Character } from '../Character/Character';
import { Header } from '../Header/Header';
import { SearchConnector } from '../Search/SearchConnector';

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainWrapper>
        <SearchConnector />
        <Character />
      </MainWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  font-family: Lato;
  height: 100vh;
  width: 100vw;
  min-width: 320px;
  color: rgb(${props => props.theme.darkShades});
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const MainWrapper = styled.main`
  margin: 16px;

  ${media.sm`
    display: flex;
    flex-direction: column;
    margin: 8px;
  `}
`;
