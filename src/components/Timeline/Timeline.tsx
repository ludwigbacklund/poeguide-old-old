import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import groupBy from 'lodash/groupBy';

import { Level } from './Level/Level';
import { useStoreActions } from '../../features';
import { useTimelineQuery } from '../../graphql-types';
import isNotNull from '../../utils/isNotNull';
import { Placeholder } from '../Placeholder/Placeholder';

interface TimelineProps {
  buildId: number;
}

export const Timeline: React.SFC<TimelineProps> = ({ buildId }) => {
  const updateTimelineLevelsInView = useStoreActions(
    actions => actions.build.updateTimelineLevelsInView,
  );
  const { loading, data, error } = useTimelineQuery({
    variables: { buildId },
  });
  if (!data || loading || error)
    return <Placeholder height={530}>No timeline data</Placeholder>;

  const { nodes } = data.buildTimelineItemsByBuildId;
  const timelineItems = nodes.filter(isNotNull);
  const timelineItemsByLevel = groupBy(timelineItems, 'level');

  return (
    <div>
      <TimelineHeader>Timeline</TimelineHeader>
      <TimelineWrapper>
        {Object.entries(timelineItemsByLevel).map(([level, timelineItems]) => (
          <Level
            key={level}
            level={level}
            steps={timelineItems.map(({ name, slot, type }) => ({
              name: name || '',
              slot: slot || '',
              type: type || '',
            }))}
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
  query Timeline($buildId: Int!) {
    buildTimelineItemsByBuildId(givenBuildId: $buildId) {
      nodes {
        level
        name
        slot
        type
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
