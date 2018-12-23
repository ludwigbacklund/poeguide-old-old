import { ApolloClient, ApolloQueryResult } from 'apollo-boost';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import { GetSearch, GetSearch_search_nodes } from './__generated__/GetSearch';

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
              onChange={async e => this.itemSearch(client, e.target.value)}
            />
            <div>
              {searchResults.map(
                (item, i) =>
                  item && (
                    <div style={{ display: 'flex' }}>
                      {item.iconUrl && <img src={item.iconUrl} />}
                      <p key={item.id || i}>{item.name}</p>
                    </div>
                  ),
              )}
            </div>
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
        id
        name
        iconUrl
      }
    }
  }
`;

export default Search;
