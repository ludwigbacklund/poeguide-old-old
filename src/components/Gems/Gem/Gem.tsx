import React, { memo } from 'react';
import styled from 'styled-components';

interface GemProps {
  name: string;
  iconUrl: string;
}

const GemComponent: React.SFC<GemProps> = ({ name, iconUrl }) => {
  return (
    <GemWrapper>
      <img src={iconUrl} />
      <GemName>{name}</GemName>
    </GemWrapper>
  );
};

export const Gem = memo(GemComponent);

const GemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GemName = styled.span`
  margin: 4px;
`;
