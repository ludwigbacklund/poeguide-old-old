import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import uuidv4 from 'uuid/v4';

import { Popover } from '../../Popover/Popover';
import { UniqueConnector } from '../../UniqueDetails/UniqueConnector';
import { GemConnector } from '../../GemDetails/GemConnector';

interface TimelineItem {
  name: string;
  slot: string;
  type: string;
}

interface LevelProps {
  level: string;
  steps: TimelineItem[];
  onIntersect(inView: boolean): void;
}

const LevelComponent: React.FC<LevelProps> = ({
  level,
  steps,
  onIntersect,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.01,
  });

  useEffect(() => {
    onIntersect(inView);
    return () => onIntersect(false);
  }, [onIntersect, inView]);

  return (
    <LevelWrapper ref={ref}>
      <LevelHeader>Level {level}</LevelHeader>
      {steps.map(({ name, type }) => (
        <Step key={uuidv4()}>
          Equip
          <Popover
            content={
              type === 'unique' ? (
                <UniqueConnector name={name} />
              ) : (
                <GemConnector name={name} />
              )
            }
          >
            <ItemName>{name}</ItemName>
          </Popover>
        </Step>
      ))}
    </LevelWrapper>
  );
};

export const Level = memo(LevelComponent);

const LevelWrapper = styled.div`
  :not(:first-child) {
    margin-top: 8px;
  }

  :last-child {
    margin-bottom: 400px;
  }
`;

const LevelHeader = styled.h3`
  position: sticky;
  top: 0px;
  background-color: white;
  margin: 0;
  padding: 8px 8px 8px 8px;
`;

const Step = styled.span`
  display: block;
  margin: 16px 8px 0 4px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const ItemName = styled.span`
  margin-left: 4px;
  padding-bottom: 2px;
  border-bottom: solid #ea4c2b 2px;
  text-transform: uppercase;
  font-size: small;
`;
