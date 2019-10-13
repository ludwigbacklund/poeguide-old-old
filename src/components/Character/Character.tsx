import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import { useBuildQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';
import { Item } from './Item/Item';

const snakeToCamel = (str: string) =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export const Character: React.SFC<{}> = () => {
  const { loading, data, error } = useBuildQuery({
    variables: { id: 1 },
  });
  if (!data || !data.buildById) return <p>No data</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { nodes } = data.buildById.buildUniques;
  const uniques = nodes.filter(isNotNull);

  return (
    <CharacterGrid>
      {uniques.map(({ slot, unique }) => {
        if (!unique) return;
        return (
          <Item
            key={unique.id}
            slot={snakeToCamel(slot)}
            iconUrl={unique.iconUrl}
          />
        );
      })}
    </CharacterGrid>
  );
};

export const BUILD_QUERY = gql`
  query Build($id: Int!) {
    buildById(id: $id) {
      buildUniques {
        nodes {
          slot
          unique {
            id
            iconUrl
          }
        }
      }
    }
  }
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-areas:
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       body   body   amulet  weaponTwo weaponTwo'
    'weaponOne weaponOne ringOne body   body   ringTwo weaponTwo weaponTwo'
    '.         gloves    gloves  body   body   boots   boots     .'
    '.         gloves    gloves  belt   belt   boots   boots     .';
  grid-template-columns: repeat(8, minmax(40px, 80px));
  grid-template-rows: repeat(6, 1fr);
`;
