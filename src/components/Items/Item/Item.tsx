import React, { memo } from 'react';
import styled from 'styled-components';
import { Popover } from '../../Popover/Popover';
import { UniqueConnector } from '../../Unique/UniqueConnector';

interface ItemProps {
  uniqueName: string;
  slot?: string;
  iconUrl: string;
}

interface IconProps {
  slot?: string;
}

const ItemComponent: React.SFC<ItemProps> = ({ uniqueName, slot, iconUrl }) => {
  return (
    <ItemPopover slot={slot} content={<UniqueConnector name={uniqueName} />}>
      <Icon src={iconUrl} />
    </ItemPopover>
  );
};

export const Item = memo(ItemComponent);

const ItemPopover = styled(Popover)`
  ${({ slot }: IconProps) => slot && `grid-area: ${slot};`}
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 100%;
`;
