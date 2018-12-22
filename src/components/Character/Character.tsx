import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GetUnique, GetUniqueVariables } from './__generated__/GetUnique';

const CharacterWrapper = styled.div`
  grid-column: 2 / 3;
`;

class UniqueQuery extends Query<GetUnique, GetUniqueVariables> {}

const Character: React.SFC<{}> = () => (
  <CharacterWrapper>
    <UniqueQuery query={GET_UNIQUE} variables={{ name: 'Shiversting' }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        if (!data || !data.uniqueByName) return <p>No data</p>;

        return <p>{data.uniqueByName.name}</p>;
      }}
    </UniqueQuery>
  </CharacterWrapper>
);

const GET_UNIQUE = gql`
  query GetUnique($name: String!) {
    uniqueByName(name: $name) {
      name
      levelRequirement
    }
  }
`;

export default Character;
