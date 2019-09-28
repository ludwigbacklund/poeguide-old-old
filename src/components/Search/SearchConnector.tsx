import gql from 'graphql-tag';
import React, { useState } from 'react';

import { Search } from './Search';
import { useSearchLazyQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';

export const SearchConnector: React.SFC = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [getSearch, { data }] = useSearchLazyQuery();

  const searchResults =
    (data &&
      data.search &&
      data.search.nodes &&
      data.search.nodes.filter(isNotNull)) ||
    [];

  return (
    <Search
      searchResults={isSearchEmpty ? [] : searchResults}
      onSearchChange={query => {
        if (query !== '') {
          getSearch({ variables: { query } });
          setIsSearchEmpty(false);
        } else {
          setIsSearchEmpty(true);
        }
      }}
    />
  );
};

export const SEARCH_QUERY = gql`
  query Search($query: String!) {
    search(query: $query, first: 5) {
      nodes {
        name
        iconUrl
        type
      }
    }
  }
`;
