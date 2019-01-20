import { ApolloClient, ApolloQueryResult } from 'apollo-boost';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

import { GetSearch, GetSearch_search_nodes } from './__generated__/GetSearch';
import Search from './Search';

interface ISearchState {
  searchResults: GetSearch_search_nodes[];
}

class SearchConnector extends Component<{}, ISearchState> {
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
          <Search
            searchResults={searchResults}
            onSearchChange={query => this.itemSearch(client, query)}
          />
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

export default SearchConnector;
