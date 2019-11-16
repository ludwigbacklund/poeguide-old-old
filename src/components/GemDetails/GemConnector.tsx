import React from 'react';
import gql from 'graphql-tag';

import { useGemQuery } from '../../graphql-types';
import { GemDetails } from './GemDetails';

interface GemConnectorProps {
  name: string;
}

export const GemConnector: React.SFC<GemConnectorProps> = ({ name }) => {
  const { data } = useGemQuery({ variables: { name } });

  const gem = data && data.gemByName;
  if (!gem) return null;

  const {
    iconUrl,
    levelRequirement,
    strRequirement,
    dexRequirement,
    intRequirement,
    description,
  } = gem;

  return (
    <GemDetails
      name={name}
      iconUrl={iconUrl}
      levelRequirement={levelRequirement}
      strRequirement={strRequirement}
      dexRequirement={dexRequirement}
      intRequirement={intRequirement}
      description={description}
    />
  );
};

export const GEM_QUERY = gql`
  query Gem($name: String!) {
    gemByName(name: $name) {
      name
      iconUrl
      description
      levelRequirement
      strRequirement
      dexRequirement
      intRequirement
    }
  }
`;
