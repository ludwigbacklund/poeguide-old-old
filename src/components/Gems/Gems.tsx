import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import groupBy from 'lodash/groupBy';

import { useGemsQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';

export const Gems: React.SFC = () => {
  const { data, loading, error } = useGemsQuery({
    variables: { buildId: 1, currentLevel: 1 },
  });
  if (!data || loading || error) return <p>No gems...</p>;

  const buildGemNodes =
    (data.buildGemsByBuildIdAndLevel &&
      data.buildGemsByBuildIdAndLevel.nodes) ||
    [];
  const buildGems = buildGemNodes.filter(isNotNull);
  const buildGemsByGemGroup = groupBy(buildGems, ({ gemGroup }) =>
    gemGroup ? gemGroup.id : null,
  );

  return (
    <GemsWrapper>
      <h2>Gems</h2>
      {Object.entries(buildGemsByGemGroup).map(([, gemGroup]) =>
        gemGroup
          .sort((buildGemA, buildGemB) =>
            buildGemA.slot > buildGemB.slot ? 1 : -1,
          )
          .map(({ gem }) => {
            if (!gem) return;
            return (
              <Gem key={gem.name}>
                <img src={gem.iconUrl} />
                <GemName>{gem.name}</GemName>
              </Gem>
            );
          }),
      )}
    </GemsWrapper>
  );
};

export const GEMS_QUERY = gql`
  query Gems($buildId: Int!, $currentLevel: Int!) {
    buildGemsByBuildIdAndLevel(
      givenBuildId: $buildId
      givenLevel: $currentLevel
    ) {
      nodes {
        level
        slot
        gemGroup {
          id
        }
        gem {
          name
          iconUrl
        }
      }
    }
  }
`;

const GemsWrapper = styled.div`
  grid-column: 1 / 3;
`;

const Gem = styled.div`
  display: flex;
  align-items: center;
`;

const GemName = styled.span`
  margin-left: 4px;
`;
