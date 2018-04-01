import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);

  &:hover {
    box-shadow: -1px 1px 2px 1px
      rgba(${props => (props.chosen ? '244, 67, 54' : '76, 175, 8')}, 0.5);
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.p`
  flex: 5;
`;

const AttributeRequirements = styled.div`
  flex: 1;
  display: flex;
  font-size: 12px;
`;

class Item extends PureComponent {
  render() {
    const {
      id,
      name,
      levelReq,
      dexReq,
      intReq,
      strReq,
      chosen,
      onClick,
    } = this.props;

    return (
      <ItemCard chosen={chosen} onClick={() => onClick(id)}>
        <h3>{name}</h3>
        <Description>
          <ItemName>{`Level: ${levelReq}`}</ItemName>
        </Description>
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
