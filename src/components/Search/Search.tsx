import React from 'react';
import styled from 'styled-components';

import { Item } from './Item/Item';

interface SearchItem {
  name: string | null;
  iconUrl: string | null;
  type: string | null;
}

interface SearchProps {
  searchResults: SearchItem[];
  onSearchChange(query: string): void;
}

export const Search: React.SFC<SearchProps> = ({
  onSearchChange,
  searchResults,
}) => {
  return (
    <SearchWrapper>
      <Input
        placeholder='Search for uniques and gems...'
        onChange={async e => {
          onSearchChange(e.target.value);
        }}
        tabIndex={0}
      />
      {searchResults.length > 0 && (
        <SearchResults data-testid='search-results'>
          {searchResults.map(({ name, iconUrl, type }, i) => (
            <Item key={name || i} name={name} iconUrl={iconUrl} type={type} />
          ))}
        </SearchResults>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(${props => props.theme.lightShades});
  margin: 0 24px;
`;

const Input = styled.input`
  color: rgb(${props => props.theme.lightShades});
  background-color: rgba(${props => props.theme.lightAccent}, 0.8);
  border: none;
  outline: none;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  z-index: 1;

  &:hover,
  :focus {
    background-color: rgba(${props => props.theme.lightAccent}, 1);
  }

  &::placeholder {
    color: rgb(${props => props.theme.lightShades});
  }
`;

const SearchResults = styled.div`
  padding: 32px 16px 16px 16px;
  margin-top: -16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
`;
