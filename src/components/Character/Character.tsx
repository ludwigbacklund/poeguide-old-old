import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import { useCharacterQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';
import { Item } from './Item/Item';
import { useStoreState } from '../../features';

const snakeToCamel = (str: string) =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export const Character: React.SFC = () => {
  const currentTimelineLevel = useStoreState(
    state => state.build.currentTimelineLevel,
  );
  const { loading, data, error } = useCharacterQuery({
    variables: { id: 1, currentLevel: currentTimelineLevel },
  });
  if (!data || !data.buildUniquesByBuildIdAndLevel) return <p>No data</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { nodes } = data.buildUniquesByBuildIdAndLevel;
  const buildUniques = nodes.filter(isNotNull);

  return (
    <CharacterWrapper>
      <CharacterGrid>
        {buildUniques
          .filter(buildUnique => !buildUnique.slot.startsWith('flask'))
          .map(({ slot, unique }) => {
            if (!unique) return;
            const { name, iconUrl } = unique;
            return (
              <Item
                key={slot + name}
                uniqueName={name}
                slot={snakeToCamel(slot)}
                iconUrl={iconUrl}
              />
            );
          })}
      </CharacterGrid>
      <Flasks>
        {buildUniques
          .filter(buildUnique => buildUnique.slot.startsWith('flask'))
          .map(({ unique }, i) => {
            if (!unique) return;
            const { name, iconUrl } = unique;
            return <Item key={i + name} uniqueName={name} iconUrl={iconUrl} />;
          })}
      </Flasks>
    </CharacterWrapper>
  );
};

export const CHARACTER_QUERY = gql`
  query Character($id: Int!, $currentLevel: Int!) {
    buildUniquesByBuildIdAndLevel(
      buildId: $id
      givenLevel: $currentLevel
      orderBy: SLOT_DESC
    ) {
      nodes {
        level
        slot
        unique {
          name
          iconUrl
        }
      }
    }
  }
`;

const CharacterWrapper = styled.div`
  width: max-content;
  justify-self: center;
`;

const CharacterGrid = styled.div`
  display: grid;
  max-width: 100vw;
  grid-template-areas:
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       body   body   amulet  weaponTwo weaponTwo'
    'weaponOne weaponOne ringOne body   body   ringTwo weaponTwo weaponTwo'
    '.         gloves    gloves  body   body   boots   boots     .'
    '.         gloves    gloves  belt   belt   boots   boots     .';
  grid-template-columns: repeat(8, minmax(40px, 60px));
  grid-template-rows: repeat(6, 1fr);
`;

const Flasks = styled.div`
  display: flex;
  justify-content: center;
`;
