import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import isNotNull from '../../utils/isNotNull';
import { Item } from './Item/Item';
import { useStoreState } from '../../features';
import { Placeholder } from '../Placeholder/Placeholder';
import { useItemsQuery, useReplaceItemMutation } from '../../graphql-types';

const snakeToCamel = (str: string) =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

interface ItemsProps {
  buildId: number;
}

export const Items: React.SFC<ItemsProps> = ({ buildId }) => {
  const currentTimelineLevel = useStoreState(
    state => state.build.currentTimelineLevel,
  );
  const [replaceItem] = useReplaceItemMutation();
  const { loading, data, error, refetch } = useItemsQuery({
    variables: { buildId, currentLevel: currentTimelineLevel },
  });

  if (!data || loading || error) {
    return <Placeholder height={550}>No item data...</Placeholder>;
  }

  const { nodes } = data.buildUniquesByBuildIdAndLevel;
  const buildUniques = nodes.filter(isNotNull);

  return (
    <ItemsWrapper>
      <Header>Items</Header>
      <ItemGroups>
        <ItemGrid>
          {buildUniques.map(({ slot, level, unique }) => {
            if (!unique) return;
            const { name, iconUrl } = unique;
            return (
              <Item
                key={slot + name}
                uniqueName={name}
                slot={snakeToCamel(slot)}
                iconUrl={iconUrl}
                onReplace={async (
                  newUniqueName: string,
                  newUniqueLevelReq: number,
                ) => {
                  await replaceItem({
                    variables: {
                      buildId,
                      slot,
                      level,
                      newUniqueName,
                      newUniqueLevelReq,
                    },
                  });
                  refetch();
                }}
              />
            );
          })}
        </ItemGrid>
      </ItemGroups>
    </ItemsWrapper>
  );
};

export const ITEMS_QUERY = gql`
  query Items($buildId: Int!, $currentLevel: Int!) {
    buildUniquesByBuildIdAndLevel(
      givenBuildId: $buildId
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

export const REPLACE_ITEM_MUTATION = gql`
  mutation ReplaceItem(
    $buildId: Int!
    $level: Int!
    $slot: String!
    $newUniqueName: String!
    $newUniqueLevelReq: Int!
  ) {
    updateBuildUniqueByBuildIdAndLevelAndSlot(
      input: {
        patch: { uniqueName: $newUniqueName, level: $newUniqueLevelReq }
        buildId: $buildId
        level: $level
        slot: $slot
      }
    ) {
      buildUnique {
        uniqueName
      }
    }
  }
`;

const ItemsWrapper = styled.div`
  justify-self: center;
`;

const Header = styled.h2`
  margin: 0;
`;

const ItemGroups = styled.div`
  margin-top: 16px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-areas:
    'weaponOne weaponOne .        helmet   helmet     .         weaponTwo weaponTwo'
    'weaponOne weaponOne .        helmet   helmet     .         weaponTwo weaponTwo'
    'weaponOne weaponOne .        body     body       amulet    weaponTwo weaponTwo'
    'weaponOne weaponOne ringOne  body     body       ringTwo   weaponTwo weaponTwo'
    '.         gloves    gloves   body     body       boots     boots     .'
    '.         gloves    gloves   belt     belt       boots     boots     .'
    '.         .         flaskOne flaskTwo flaskThree flaskFour flaskFive .'
    '.         .         flaskOne flaskTwo flaskThree flaskFour flaskFive .';
  grid-template-columns: repeat(8, minmax(40px, 60px));
  grid-template-rows: repeat(8, 1fr);
  justify-content: center;
`;

// const Flasks = styled.div`
//   display: grid;
//   grid-template-areas: 'flaskOne flaskTwo flaskThree flaskFour flaskFive';
//   grid-template-columns: repeat(5, minmax(30px, 50px));
//   grid-template-rows: 1fr;
//   justify-content: center;
// `;
