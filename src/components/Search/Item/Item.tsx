import * as React from 'react';
import styled from 'styled-components';

import { fontSizes, media } from '../../../../utils/styling';
import ItemPopover from '../../ItemPopover/ItemPopover';
import Popover from '../../Popover/Popover';
import { GetSearch_search_nodes } from '../__generated__/GetSearch';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:focus {
    padding: 8px;
    color: rgb(${props => props.theme.lightShades});
    background-color: rgb(${props => props.theme.lightAccent});
    border-radius: 4px;
    outline: none;
    border: 1px;
  }
`;

const ItemIcon = styled.img`
  object-fit: scale-down;
  width: 40px;
  height: 40px;

  ${media.sm`
    width: 30px;
    height: 30px;
  `}
`;

const Name = styled.p`
  margin: 0 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media.sm`
    ${fontSizes.sm}
  `}
`;

const Type = styled.span`
  ${fontSizes.sm}
  color: rgba(${props => props.theme.darkShades}, 0.6);
  text-align: end;
  margin-left: auto;
  white-space: nowrap;

  ${media.sm`
    ${fontSizes.xs}
  `}
`;

interface ItemProps {
  data: GetSearch_search_nodes;
}

const Item: React.SFC<ItemProps> = props => {
  const { data } = props;

  return (
    <Popover>
      {({ anchorRef, popoverRef, popoverStyles, shouldRenderPopover }) => (
        <>
          {shouldRenderPopover && (
            <div ref={popoverRef} style={popoverStyles}>
              <ItemPopover name={data.name} type={data.type} />
            </div>
          )}
          <ItemWrapper ref={anchorRef} tabIndex={0}>
            {data.iconUrl && (
              <ItemIcon
                src={data.iconUrl}
                alt={data.name ? data.name : undefined}
              />
            )}
            <Name>{data.name || 'Unknown'}</Name>
            <Type>{data.type && data.type.toUpperCase()}</Type>
          </ItemWrapper>
        </>
      )}
    </Popover>
  );
};

export default Item;
