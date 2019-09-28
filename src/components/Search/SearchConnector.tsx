import gql from 'graphql-tag';
import React, { useState, useEffect, useRef } from 'react';

import { Search } from './Search';
import { useSearchLazyQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';

interface SearchItem {
  name: string | null;
  iconUrl: string | null;
  type: string | null;
}

export const SearchConnector: React.SFC = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  // const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const searchResults = useRef<SearchItem[]>([]);
  const [getSearch, { data, loading }] = useSearchLazyQuery();

  useEffect(() => {
    if (!loading && data && data.search && data.search.nodes) {
      searchResults.current = data.search.nodes.filter(isNotNull);
    }
  }, [data]);

  return (
    <Search
      searchResults={isSearchEmpty ? [] : searchResults.current}
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
