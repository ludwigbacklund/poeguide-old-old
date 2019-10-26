import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import groupBy from 'lodash/groupBy';

import { Level } from './Level/Level';
import { useStoreActions } from '../../features';
import { useTimelineQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';

export const Timeline: React.SFC = () => {
  const updateTimelineLevelsInView = useStoreActions(
    actions => actions.build.updateTimelineLevelsInView,
  );
  const { loading, data, error } = useTimelineQuery({
    variables: { id: 1 },
  });
  if (!data || !data.buildById) return <p>No data</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { nodes } = data.buildById.buildUniques;
  const buildUniques = nodes.filter(isNotNull);
  const buildUniquesByLevel = groupBy(buildUniques, 'level');

  return (
    <div>
      <TimelineHeader>Timeline</TimelineHeader>
      <TimelineWrapper>
        {Object.entries(buildUniquesByLevel).map(([level, buildUniques]) => (
          <Level
            key={level}
            level={level}
            steps={buildUniques
              .map(buildUnique =>
                buildUnique.unique ? buildUnique.unique.name : null,
              )
              .filter(isNotNull)}
            onIntersect={(inView: boolean) =>
              updateTimelineLevelsInView({ level: parseInt(level, 10), inView })
            }
          />
        ))}
      </TimelineWrapper>
    </div>
  );
};

export const TIMELINE_QUERY = gql`
  query Timeline($id: Int!) {
    buildById(id: $id) {
      buildUniques(orderBy: LEVEL_ASC) {
        nodes {
          level
          unique {
            name
          }
        }
      }
    }
  }
`;

const TimelineWrapper = styled.div`
  height: 480px;
  overflow: scroll;
`;

const TimelineHeader = styled.h2`
  margin: 0;
`;
