import * as React from 'react';
import styled from 'styled-components';

import { fontSizes, media } from '../../../../utils/styling';
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

const ItemName = styled.p`
  margin: 0 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${media.sm`
    ${fontSizes.sm}
  `}
`;

const ItemType = styled.span`
  ${fontSizes.sm}
  text-align: end;
  margin-left: auto;
  white-space: nowrap;
  opacity: 0.6;

  ${media.sm`
    ${fontSizes.xs}
  `}
`;

interface IItemProps {
  tabIndex: number;
  data: GetSearch_search_nodes;
}

const Item: React.SFC<IItemProps> = props => {
  const { tabIndex, data } = props;
  return (
    <ItemWrapper tabIndex={tabIndex}>
      {data.iconUrl && <ItemIcon src={data.iconUrl} />}
      <ItemName>{data.name || 'Unknown'}</ItemName>
      <ItemType>{data.type && data.type.toUpperCase()}</ItemType>
    </ItemWrapper>
  );
};

export default Item;
