import React from 'react';
import styled from 'styled-components';
import { Level } from './Level/Level';
import { useStoreActions } from '../../features';

// interface TimelineProps {}

const levels = [
  {
    level: 1,
    steps: [{ text: 'Buy gem from Nessa' }, { text: 'Equip Tabula Rasa' }],
  },
  {
    level: 50,
    steps: [{ text: 'Buy gem from Harkan' }, { text: 'Equip Wanderlust' }],
  },
];

export const Timeline: React.SFC = () => {
  const updateLevelsInView = useStoreActions(
    actions => actions.timeline.updateLevelsInView,
  );

  return (
    <div>
      <TimelineHeader>Timeline</TimelineHeader>
      <TimelineWrapper>
        {levels
          .sort((levelA, levelB) => (levelA.level < levelB.level ? -1 : 1))
          .map(({ level, steps }) => (
            <Level
              key={level}
              level={level}
              steps={steps}
              onIntersect={(inView: boolean) =>
                updateLevelsInView({ level, inView })
              }
            />
          ))}
      </TimelineWrapper>
    </div>
  );
};

const TimelineWrapper = styled.div`
  height: 480px;
  overflow: scroll;
`;

const TimelineHeader = styled.h2`
  margin: 0;
`;
