import React from 'react';
import gql from 'graphql-tag';

import { useUniqueQuery } from '../../graphql-types';
import { UniqueDetails } from './UniqueDetails';
import isNotNull from '../../utils/isNotNull';

interface UniqueProps {
  name: string;
}

export const UniqueConnector: React.SFC<UniqueProps> = ({ name }) => {
  const { data } = useUniqueQuery({ variables: { name } });

  const unique = data && data.uniqueByName;
  if (!unique) return null;

  const {
    baseType,
    iconUrl,
    levelRequirement,
    strRequirement,
    dexRequirement,
    intRequirement,
    flavourText,
    modifiers,
  } = unique;

  return (
    <UniqueDetails
      name={name}
      baseType={baseType}
      iconUrl={iconUrl}
      levelRequirement={levelRequirement}
      strRequirement={strRequirement}
      dexRequirement={dexRequirement}
      intRequirement={intRequirement}
      flavourText={flavourText}
      modifiers={modifiers.nodes.filter(isNotNull)}
    />
  );
};

export const UNIQUE_QUERY = gql`
  query Unique($name: String!) {
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
