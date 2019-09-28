import React from 'react';

import { usePopoverUniqueQuery } from '../../../../graphql-types';
import { Unique } from './Unique';
import isNotNull from '../../../../utils/isNotNull';

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
      baseType={baseType}
      iconUrl={iconUrl}
      levelRequirement={levelRequirement}
      strRequirement={strRequirement}
      dexRequirement={dexRequirement}
      intRequirement={intRequirement}
      flavourText={flavourText}
      modifiers={modifiers.nodes.filter(isNotNull)}
    >
      Hej
    </Unique>
  );
};
