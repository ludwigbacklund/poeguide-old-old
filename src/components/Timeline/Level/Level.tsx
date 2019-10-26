import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Popover } from '../../Popover/Popover';
import { UniqueConnector } from '../../Unique/UniqueConnector';

interface LevelProps {
  level: string;
  steps: string[];
  onIntersect(inView: boolean): void;
}

export const Level: React.FC<LevelProps> = ({ level, steps, onIntersect }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    onIntersect(inView);
    return () => onIntersect(false);
  }, [inView]);

  return (
    <LevelWrapper ref={ref}>
      <LevelHeader>Level {level}</LevelHeader>
      {steps.map(uniqueName => (
        <Step key={uniqueName}>
          Equip{' '}
          <Popover>
            {({
              anchorRef,
              popoverRef,
              popoverStyles,
              shouldRenderPopover,
            }) => (
              <>
                {shouldRenderPopover && (
                  <div ref={popoverRef} style={popoverStyles}>
                    <UniqueConnector name={uniqueName} />
                  </div>
                )}
                <UniqueName ref={anchorRef}>{uniqueName}</UniqueName>
              </>
            )}
          </Popover>
        </Step>
      ))}
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div`
  :last-child {
    margin-bottom: 400px;
  }
`;

const LevelHeader = styled.h3`
  margin: 16px 0 0 0;
`;

const Step = styled.span`
  display: block;
  margin: 16px 8px 0 4px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const UniqueName = styled.span`
  margin-left: 4px;
  padding-bottom: 2px;
  border-bottom: solid #ea4c2b 2px;
  text-transform: uppercase;
  font-size: small;
`;
