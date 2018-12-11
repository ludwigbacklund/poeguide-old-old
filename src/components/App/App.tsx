import React from 'react';
import styled from 'styled-components';

import Search from '../Search/Search';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

export default App;
