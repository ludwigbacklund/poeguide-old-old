import React from 'react';
import styled from 'styled-components';

interface ItemProps {
  slot: string;
  iconUrl: string;
}

export const Item: React.SFC<ItemProps> = ({ slot, iconUrl }) => {
  return <Icon slot={slot} src={iconUrl} />;
};

interface IconProps {
  slot: string;
}
const Icon = styled.img`
  grid-area: ${({ slot }: IconProps) => slot};
  width: 100%;
`;
