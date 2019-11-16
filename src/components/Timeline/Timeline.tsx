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

  const slotItems: { [key: string]: string } = {};
  const timelineItemsWithReplacement = timelineItems.reduce<{
    [key: string]: string;
  }>((acc, item) => {
    const { slot, name } = item;
    if (!slot || !name) return acc;

    const slotItem = slotItems[slot];
    if (slotItem) {
      acc[name] = slotItem;
    }
    slotItems[slot] = name;
    return acc;
  }, {});

  return (
    <div>
      <TimelineHeader>Timeline</TimelineHeader>
      <TimelineWrapper>
        {Object.entries(timelineItemsByLevel).map(([level, timelineItems]) => (
          <Level
            key={level}
            level={level}
            steps={timelineItems.map(({ name, type }) => {
              if (!name || !type) return null;
              return {
                name,
                type,
                replacesItemWithName: timelineItemsWithReplacement[name],
              };
            })}
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
