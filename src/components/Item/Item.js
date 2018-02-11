import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);
`;

const Item = ({
  id, name, levelRequirement, onClick,
}) => (
  <ItemCard onClick={() => onClick(id)}>
    <h3>{name}</h3>
    <p>{`Level: ${levelRequirement}`}</p>
  </ItemCard>
);

Item.defaultProps = {
  name: 'N/A',
  subheader: 'N/A',
};

export default Item;
