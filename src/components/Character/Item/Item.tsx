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
    <Popover>
      {({ anchorRef, popoverRef, popoverStyles, shouldRenderPopover }) => (
        <>
          {shouldRenderPopover && (
            <div ref={popoverRef} style={popoverStyles}>
              <UniqueConnector name={uniqueName} />
            </div>
          )}
          <ItemWrapper ref={anchorRef} slot={slot}>
            <Icon src={iconUrl} />
          </ItemWrapper>
        </>
      )}
    </Popover>
  );
};

export const Item = memo(ItemComponent);

const ItemWrapper = styled.div`
  ${({ slot }: IconProps) => slot && `grid-area: ${slot};`}
  align-self: center;
`;

const Icon = styled.img`
  width: 100%;
`;
