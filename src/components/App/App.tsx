import React from 'react';
import styled from 'styled-components';

import { media } from '../../../utils/styling';
import Character from '../Character/Character';
import Header from '../Header/Header';
import Search from '../Search/Search';

const AppWrapper = styled.div`
  font-family: Lato;
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  margin: 16px;

  ${media.sm`
    margin: 8px;
    grid-template-columns: 50px auto;
  `}
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainWrapper>
        <Search />
        <Character />
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
