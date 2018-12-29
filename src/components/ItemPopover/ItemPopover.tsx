import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { GetSearch_search_nodes } from '../Search/__generated__/GetSearch';
import { GetGem, GetGemVariables } from './__generated__/GetGem';
import { GetUnique, GetUniqueVariables } from './__generated__/GetUnique';
import Unique from './Unique/Unique';

type PartialSearchResult = Partial<GetSearch_search_nodes>;

class UniqueQuery extends Query<GetUnique, GetUniqueVariables> {}
class GemQuery extends Query<GetGem, GetGemVariables> {}

const ItemPopover: React.SFC<PartialSearchResult> = ({ name, type }) => {
  if (!name || !type) return null;

  if (type === 'Gem') {
    return (
      <GemQuery query={GET_GEM} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return <p>Failed to fetch gem data</p>;
          if (!data || !data.gemByName) return <p>No gem data found</p>;

          return data.gemByName.name;
        }}
      </GemQuery>
    );
  } else {
    return (
      <UniqueQuery query={GET_UNIQUE} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return <p>Failed to fetch unique data</p>;
          if (!data || !data.uniqueByName) return <p>No unique data found</p>;

          return <Unique data={data.uniqueByName} />;
        }}
      </UniqueQuery>
    );
  }
};

const GET_UNIQUE = gql`
  query GetUnique($name: String!) {
    uniqueByName(name: $name) {
      name
      baseType
      iconUrl
      flavourText
      levelRequirement
      strRequirement
      dexRequirement
      intRequirement
      modifiers {
        nodes {
          type
          text
          optional
        }
      }
    }
  }
`;

const GET_GEM = gql`
  query GetGem($name: String!) {
    gemByName(name: $name) {
      name
      description
      iconUrl
      statText
      qualityStatText
      levelRequirement
      strRequirement
      dexRequirement
      intRequirement
    }
  }
`;

export default ItemPopover;
