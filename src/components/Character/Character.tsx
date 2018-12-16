import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const Character: React.SFC<{}> = () => (
  <Query query={UNIQUE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <p>{data.uniqueByName.levelRequirement}</p>;
    }}
  </Query>
);

const UNIQUE_QUERY = gql`
  query UNIQUE_QUERY {
    uniqueByName(name: "Shiversting") {
      levelRequirement
    }
  }
`;

export default Character;
