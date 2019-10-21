import React from 'react';
import gql from 'graphql-tag';

import { usePopoverUniqueQuery } from '../../graphql-types';
import { Unique } from './Unique';
import isNotNull from '../../utils/isNotNull';

interface UniqueProps {
  name: string;
}

export const UniqueConnector: React.SFC<UniqueProps> = ({ name }) => {
  const { data } = usePopoverUniqueQuery({ variables: { name } });

  const popoverUnique = data && data.uniqueByName;
  if (!popoverUnique) return null;

  const {
    baseType,
    iconUrl,
    levelRequirement,
    strRequirement,
    dexRequirement,
    intRequirement,
    flavourText,
    modifiers,
  } = popoverUnique;

  return (
    <Unique
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

export const POPOVER_UNIQUE = gql`
  query PopoverUnique($name: String!) {
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

// export const GET_GEM = gql`
//   query GetGem($name: String!) {
//     gemByName(name: $name) {
//       name
//       description
//       iconUrl
//       statText
//       qualityStatText
//       levelRequirement
//       strRequirement
//       dexRequirement
//       intRequirement
//     }
//   }
// `;
