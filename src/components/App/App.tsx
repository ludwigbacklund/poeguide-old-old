import React from 'react';
import styled from 'styled-components';

import { desktop } from '../../utils/styling';
import { Character } from '../Character/Character';
import { Header } from '../Header/Header';
import { SearchConnector } from '../Search/SearchConnector';
import { Timeline } from '../Timeline/Timeline';

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <SearchConnector />
      <MainWrapper>
        <Timeline />
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
  display: flex;
  flex-direction: column;
  margin: 8px;

  @media (${desktop}) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin: 24px;
    grid-gap: 24px;
  }
`;
