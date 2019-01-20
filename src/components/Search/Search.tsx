import { ApolloClient, ApolloQueryResult } from 'apollo-boost';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';

import { GetSearch, GetSearch_search_nodes } from './__generated__/GetSearch';
import Item from './Item/Item';

// import exampleBuild from '../../../utils/exampleBuild';
// import decode from '../../../utils/pobDecoder';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(${props => props.theme.lightShades});
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

interface ISearchState {
  searchResults: Array<GetSearch_search_nodes | null>;
}

class Search extends Component<{}, ISearchState> {
  state: ISearchState = {
    searchResults: [],
  };

  itemSearch = async (client: ApolloClient<any>, query: string) => {
    if (query === '') {
      this.setState({ searchResults: [] });
      return;
    }

    const { data } = (await client.query({
      query: SEARCH_QUERY,
      variables: { query },
    })) as ApolloQueryResult<GetSearch>;

    this.setState({ searchResults: data.search.nodes });
  };

  render() {
    const { searchResults } = this.state;

    return (
      <ApolloConsumer>
        {client => (
          <SearchWrapper>
            <Input
              placeholder="Search for uniques and gems..."
              onChange={async e => {
                this.itemSearch(client, e.target.value);
              }}
              tabIndex={0}
            />
            {searchResults.length > 0 && (
              <SearchResults>
                {searchResults.map(
                  (itemData, i) =>
                    itemData && (
                      <Item key={itemData.name || i} data={itemData} />
                    ),
                )}
              </SearchResults>
            )}
          </SearchWrapper>
        )}
      </ApolloConsumer>
    );
  }
}

const SEARCH_QUERY = gql`
  query GetSearch($query: String!) {
    search(query: $query, first: 5) {
      nodes {
        name
        iconUrl
        type
      }
    }
  }
`;

export default Search;
