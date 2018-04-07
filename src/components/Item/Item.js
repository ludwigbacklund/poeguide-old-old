import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Badge } from 'antd';

const ItemCard = styled.div`
  background-color: #424242;
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);

  &:hover {
    box-shadow: -1px 1px 2px 1px
      rgba(
        ${props =>
    (props.onHoverColor === 'red' ? '244, 67, 54' : '64, 169, 255')},
        0.5
      );
  }

  @media (max-width: 756px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const ItemName = styled.h3`
  color: white;
`;

const BlueBadge = styled(Badge)`
  & .ant-badge-dot {
    background: #40a9ff;
    box-shadow: none;
  }
`;

// const AttributeRequirements = styled.div`
//   flex: 1;
//   display: flex;
//   font-size: 12px;
// `;

class Item extends PureComponent {
  render() {
    const {
      id,
      name,
      levelReq,
      // dexReq,
      // intReq,
      // strReq,
      chosen,
      onHoverColor,
      onClick,
    } = this.props;

    return (
      <ItemCard onHoverColor={onHoverColor} onClick={() => onClick(id)}>
        <BlueBadge offset={[-5, -5]} dot={chosen}>
          <ItemName>{name}</ItemName>
          <Description>{`Level: ${levelReq}`}</Description>
        </BlueBadge>
      </ItemCard>
    );
  }
}

/* <AttributeRequirements>
  {[dexReq, intReq, strReq]
    .filter(req => req !== '' && req !== '0')
    .map((req, i) => <p key={i}>{i !== 0 ? ` / ${req}` : req}</p>)}
</AttributeRequirements> */

Item.defaultProps = {
  name: 'N/A',
  subheader: 'N/A',
};

export default Item;
