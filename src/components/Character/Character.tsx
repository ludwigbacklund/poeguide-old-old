import React, { useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import { useBuildQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';
import { Item } from './Item/Item';
import { useStoreActions } from '../../features';
import { useStoreState } from '../../features';

const snakeToCamel = (str: string) =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export const Character: React.SFC = () => {
  const buildUniquesForCurrentLevel = useStoreState(
    state => state.build.buildUniquesForCurrentLevel,
  );
  const updateBuildUniques = useStoreActions(
    actions => actions.build.updateBuildUniques,
  );
  const { loading, data, error } = useBuildQuery({
    variables: { id: 1 },
  });
  if (!data || !data.buildById) return <p>No data</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { nodes } = data.buildById.buildUniques;
  const buildUniques = nodes.filter(isNotNull);

  useEffect(() => {
    const mappedBuildUniques = buildUniques.map(({ level, slot, unique }) => {
      const iconUrl = (unique && unique.iconUrl) || '';
      const name = (unique && unique.name) || '';
      return { level, slot, iconUrl, name };
    });
    updateBuildUniques({ buildUniques: mappedBuildUniques });
  }, []);

  return (
    <CharacterWrapper>
      <CharacterGrid>
        {buildUniquesForCurrentLevel
          .filter(buildUnique => !buildUnique.slot.startsWith('flask'))
          .map(({ slot, name, iconUrl }) => {
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
        {buildUniquesForCurrentLevel
          .filter(buildUnique => buildUnique.slot.startsWith('flask'))
          .map(({ name, iconUrl }, i) => {
            return <Item key={i + name} uniqueName={name} iconUrl={iconUrl} />;
          })}
      </Flasks>
    </CharacterWrapper>
  );
};

export const BUILD_QUERY = gql`
  query Build($id: Int!) {
    buildById(id: $id) {
      buildUniques(orderBy: LEVEL_ASC) {
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
