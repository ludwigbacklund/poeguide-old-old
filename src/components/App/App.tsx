import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import Search from '../Search/Search';

const Wrapper = styled.div`
  font-family: Lato;
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Search />
    </Wrapper>
  );
};

export default App;
