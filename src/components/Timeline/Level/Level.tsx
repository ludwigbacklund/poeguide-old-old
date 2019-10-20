import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

interface Step {
  text: string;
}

interface LevelProps {
  level: number;
  steps: Step[];
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
      {steps.map(({ text }) => (
        <Step key={text}>{text}</Step>
      ))}
    </LevelWrapper>
  );
};

const LevelWrapper = styled.div`
  margin-bottom: 500px;
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
