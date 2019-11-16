import React, { memo } from 'react';
import styled from 'styled-components';
import { Popover } from '../../Popover/Popover';
import { GemConnector } from '../../GemDetails/GemConnector';

interface GemProps {
  name: string;
  iconUrl: string;
}

const GemComponent: React.SFC<GemProps> = ({ name, iconUrl }) => {
  return (
    <GemWrapper>
      <Popover content={<GemConnector name={name} />}>
        <img src={iconUrl} />
        <GemName>{name}</GemName>
      </Popover>
    </GemWrapper>
  );
};

export const Gem = memo(GemComponent);

const GemWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;

const GemName = styled.span`
  margin: 4px;
`;
