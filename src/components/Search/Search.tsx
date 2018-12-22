import React from 'react';
import styled from 'styled-components';
// import exampleBuild from '../../../utils/exampleBuild';
// import decode from '../../../utils/pobDecoder';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  padding: 16px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
`;

const Input = styled.input`
  background-color: hsl(210, 9%, 96%);
  border: none;
  outline: none;
  padding: 8px;

  &:hover {
    background-color: hsl(210, 18%, 90%);
  }
`;

const Search = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Search for uniques and gems..." />
    </SearchWrapper>
  );
};

export default Search;
