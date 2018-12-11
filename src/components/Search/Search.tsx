import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  font-family: Quicksand;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  padding: 16px;
`;

const Input = styled.input`
  background-color: hsl(210, 9%, 96%);
  border: none;
  outline: none;
  padding: 8px;
  width: 300px;

  &:hover {
    background-color: hsl(210, 18%, 90%);
  }
`;

const Search = () => {
  return (
    <SearchWrapper>
      <h1>Search</h1>
      <Input placeholder="Search for items, gems, categories..." />
    </SearchWrapper>
  );
};

export default Search;
